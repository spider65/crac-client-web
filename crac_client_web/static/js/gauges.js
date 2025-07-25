import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { testUpdateGauges } from "./chart";

// Dizionario: label e unità di misura per ogni gauge
const gaugeMeta = {
  temperature: { label: "Temperatura", unit: "°C" },
  humidity: { label: "Umidità", unit: "%" },
  wind_speed: { label: "Vento", unit: "km/h" },
  wind_guest_speed: { label: "Raffiche", unit: "km/h" },
  rain_rate: { label: "Pioggia", unit: "mm/h" },
  barometer: { label: "Pressione", unit: "hPa" },
  barometer_trend: { label: "Tendenza Pressione", unit: "hPa/h" }
};

// Chiama l'API e crea i gauge
fetch("/api/gauge-config")
  .then(res => res.json())
  .then(configs => {
    if (!window.gauges) window.gauges = {};

    for (const key in configs) {
      const config = configs[key];
      const meta = gaugeMeta[key] || { label: key, unit: "" };
      const gauge = createGauge(key, config, meta);
      if (gauge) {
        window.gauges[`gauge-${key}`] = gauge;
      }
    }
    testUpdateGauges();
  })
  .catch(err => console.error("❌ Errore caricamento gauge config:", err));

// Crea un gauge e restituisce un oggetto { value, update() }
function createGauge(id, config, meta) {
  const {lower_bound, upper_bound, warning, error } = config;

  const width = 200, height = 250, radius = 80;
  const min = lower_bound, max = upper_bound;
  let value = min;

  const container = d3.select(`#gauge-${id}`);
  if (container.empty()) return null;

  const svg = container
    .attr("viewBox", `0 0 ${width} ${height}`)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2 - 20})`);

  svg.append("circle")
    .attr("r", radius + 7)
    .attr("fill", "#272727")
    .attr("stroke", "#1b160e")
    .attr("stroke-width", 8);

  const startAngle = (-3 * Math.PI / 4) ; // angolo di partenza (90 gradi in senso antiorario)
  const endAngle = 3 * Math.PI / 4;
  const angleRange = endAngle - startAngle;

  const scaleToAngle = val => startAngle + ((val - min) / (max - min)) * angleRange; // mappatura del valore all'angolo
  // Funzione per convertire il valore in rotazione della lancetta
  // (90 gradi in più per allineare la lancetta correttamente)
  const valueToRotation = val => (scaleToAngle(val) * 180 / Math.PI) + 90; //impostazione della lancetta

  // Settori
  const sectors = [
    { from: min, to: warning, color: "white" },
    { from: warning, to: error, color: "#c19d50" },
    { from: error, to: max, color: "#ca2c2c" }
  ];

  sectors.forEach(s => {
    const arc = d3.arc()
      .innerRadius(radius - 24)
      .outerRadius(radius)
      .startAngle(scaleToAngle(s.from))
      .endAngle(scaleToAngle(s.to));

    svg.append("path")
      .attr("d", arc())
      .attr("fill", s.color);
  });

  // Tacche
  const stepMain = Math.round((max - min) / 5);
  const stepMinor = stepMain / 2;

  for (let val = min; val <= max; val += stepMinor) {
    const angle = scaleToAngle(val);
    const isMain = (val - min) % stepMain === 0;
    const length = isMain ? 8 : 2;

    const x1 = Math.cos(angle) * radius;
    const y1 = Math.sin(angle) * radius;
    const x2 = Math.cos(angle) * (radius - length);
    const y2 = Math.sin(angle) * (radius - length);

    svg.append("line")
      .attr("x1", x1).attr("y1", y1)
      .attr("x2", x2).attr("y2", y2)
      .attr("stroke", "#333").attr("stroke-width", 2);

    if (isMain) {
      const labelRadius = radius - 18;
      svg.append("text")
        .attr("x", Math.cos(angle) * labelRadius)
        .attr("y", Math.sin(angle) * labelRadius)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("font-size", "9px")
        .attr("fill", "black")
        .text(val.toFixed(0));
    }
  }

  // Lancetta
  const needleAngle = valueToRotation(value);
  const needleGroup = svg.append("g").attr("transform", `rotate(${needleAngle})`);

  const needlePath = d3.path();
  needlePath.moveTo(0, -radius + 20);
  needlePath.lineTo(-6, 10);
  needlePath.lineTo(6, 10);
  needlePath.closePath();

  needleGroup.append("path")
    .attr("d", needlePath.toString())
    .attr("fill", "white")
    .attr("stroke", "#822525").attr("stroke-width", 1);

  svg.append("circle")
    .attr("r", 9)
    .attr("fill", "#1b160e")
    .attr("stroke", "#822525").attr("stroke-width", 1);

  // Testo centrale
  svg.append("text")
    .attr("text-anchor", "middle")
    .attr("y", 33)
    .attr("font-size", "12px")
    .attr("fill", "white")
    .text(meta.label);

  // Valore numerico
  svg.append("rect")
    .attr("x", -32).attr("y", radius - 40)
    .attr("width", 65).attr("height", 20)
    .attr("fill", "#d3dcd2").attr("stroke", "#333").attr("stroke-width", 3);

   // testo nella label (valore registrato con unità di misura)
  const valueText = svg.append("text")
    .attr("id", `value-${id}`)
    .attr("x", 0)
    .attr("y", radius - 42 + 17)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "bold")
    .text(`${value} ${meta.unit}`);

  // Funzione di aggiornamento
  const update = () => {
    const rotation = valueToRotation(value);
    needleGroup.transition().duration(500).attr("transform", `rotate(${rotation})`);
    valueText.text(`${value.toFixed(1)} ${meta.unit}`);
  };

  return { get value() { return value; },
  set value(v) { value = v; },
  update
  };

function testUpdateGauges() {
  console.log("Sto aggiornando i gauge con valori fissi...");
    updateGauge("gauge-temperature", 22);
    updateGauge("gauge-humidity", 75);
    updateGauge("gauge-wind_speed", 8);
    updateGauge("gauge-wind_gust_speed", 12);
    updateGauge("gauge-barometer", 1015);
    updateGauge("gauge-rain_rate", 1.2);
}

function updateGauge(gaugeId, value) {
    const gauge = window.gauges?.[gaugeId];
    if (gauge) {
        gauge.value = value;
        gauge.update();
    }
}

}