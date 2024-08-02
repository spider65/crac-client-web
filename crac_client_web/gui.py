
from flask import Flask, render_template, request
from crac_protobuf.button_pb2 import (
    ButtonLabel,
    ButtonKey,
)
from gui_constants import GuiLabel
from crac_client_web.loc import _name
import logging
from typing import Tuple
from typing import Dict

app = Flask(__name__)

class Gui:
    #funzioni di test button
    def function_tetto_open(button):
        c=(f"Premuto il tasto {button}")
        print(c)
        return c

    def function_conn_tele(button):
        c=(f"Premuto il tasto {button}")
        print(c)
        return c

    def function_alim_tele(button):
        c=(f"Premuto il tasto {button}")
        print(c)
        return c

    @app.route('/', methods=['GET', 'POST'])
    def index():
        '''
        with open('data.bin', 'rb') as f:
            serialized_data = f.read()

        # Deserialize the data
        data = button_pb2.ButtonsResponse()
        data.ParseFromString(serialized_data)
        print(data)

        buttons = [
            {
                'status': button.status,
                'type': button.type,
                'label': button.button_gui.label,
                'is_disabled': button.button_gui.is_disabled,
                'button_color': {
                    'text_color': button.button_gui.button_color.text_color,
                    'background_color': button.button_gui.button_color.background_color
                },
                'key': button.button_gui.key,
            }
            for button in data.buttons
        ]
        '''
        result=''
        if request.method == 'POST':
            button_id = request.form['button_id']
            if button_id == "btn_tetto":
                result = function_conn_tele({button_id})
            elif button_id == 'conn_telescopio':
                result = function_alim_tele({button_id})
            elif button_id == 'btn_power_telescope':
                result = function_alim_tele({button_id})
                
        data = {
            'items':[
                {'id':'lbl_altezza_tenda_est', 'name':'altezza_tenda est','value':35},
                {'id':'lbl_altezza_tenda_ovest', 'name':'altezza_tenda_ovest','value':45},
                {'id':'lbl_status_altezza_telescopio', 'name':'altezza_telescopio','value':35},
                {'id':'lbl_status_azimuth_telescopio', 'name':'azimuth_telescopio','value':270},
                {'id':"lbl_status_tenda_ovest", 'name':'lbl_status_tenda_ovest','value':'Chiusa'},
                {'id':'lbl_status_tenda_est', 'name':'lbl_status_tenda_est','value':"Aperta"},
                {'id':'airmass', 'name':'airmass','value':1.33335},
                {'id':'transit_time', 'name':'transit_time','value':9.222},
                {'id':'time_to_transit', 'name':'time_to_transit','value':1.335},
                {'id':"lbl_status_connect", 'name':'status_telescope', 'value':'Connesso'},
                {'id':"lbl_status_tracking", 'name':'status_tracking', 'value':'Nessun dato'},
                {'id':"lbl_status_slewing", 'name':'status_slewing', 'value':'Nessun dato'},             
                {'id':"percent_batt_dome", 'name': "percent_batt_dome", 'value':84.5},
                {'id':"volt_rete_dome", 'name': "volt_rete_dome", 'value':229.5}, 
                {'id':"percent_batt_room", 'name': "percent_batt_room", 'value':55.3},
                {'id':"volt_rete_room", 'name': "volt_rete_room", 'value':205.7},                                      
                {'id': 'temperature-gauge', 'name': 'Temperatura', 'value': 38.5},
                {'id': 'humidity-gauge', 'name': 'Umidità', 'value': 58},
                {'id': 'wind-gauge', 'name': 'Vento', 'value': 3},
                {'id': 'guest-wind-gauge', 'name': 'Raffiche', 'value': 4},
                {'id': 'barometer-gauge', 'name': 'Pressione', 'value': 1020},
                {'id': 'rain-gauge', 'name': 'Pioggia', 'value': 0}
            ]
        
        }
        return render_template('index.html', items=data['items'], result=result) #, buttons=buttons)

    @app.template_filter('get_value')
    def get_value(items, id):
        for item in items:
            if item['id'] == id:
                return item['value']
        return None

    if __name__ == '__main__':
        app.run(debug=True)   