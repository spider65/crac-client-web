import * as $protobuf from "./protobuf.minimal.js";
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const crac_protobuf = $root.crac_protobuf = (() => {

    /**
     * Namespace crac_protobuf.
     * @exports crac_protobuf
     * @namespace
     */
    const crac_protobuf = {};

    /**
     * ButtonAction enum.
     * @name crac_protobuf.ButtonAction
     * @enum {number}
     * @property {number} BUTTON_DEFAULT_ACTION=0 BUTTON_DEFAULT_ACTION value
     * @property {number} TURN_ON=1 TURN_ON value
     * @property {number} TURN_OFF=2 TURN_OFF value
     * @property {number} CHECK_BUTTON=3 CHECK_BUTTON value
     */
    crac_protobuf.ButtonAction = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BUTTON_DEFAULT_ACTION"] = 0;
        values[valuesById[1] = "TURN_ON"] = 1;
        values[valuesById[2] = "TURN_OFF"] = 2;
        values[valuesById[3] = "CHECK_BUTTON"] = 3;
        return values;
    })();

    /**
     * ButtonType enum.
     * @name crac_protobuf.ButtonType
     * @enum {number}
     * @property {number} BUTTON_DEFAULT_TYPE=0 BUTTON_DEFAULT_TYPE value
     * @property {number} CCD_SWITCH=1 CCD_SWITCH value
     * @property {number} TELE_SWITCH=2 TELE_SWITCH value
     * @property {number} FLAT_LIGHT=3 FLAT_LIGHT value
     * @property {number} DOME_LIGHT=4 DOME_LIGHT value
     */
    crac_protobuf.ButtonType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BUTTON_DEFAULT_TYPE"] = 0;
        values[valuesById[1] = "CCD_SWITCH"] = 1;
        values[valuesById[2] = "TELE_SWITCH"] = 2;
        values[valuesById[3] = "FLAT_LIGHT"] = 3;
        values[valuesById[4] = "DOME_LIGHT"] = 4;
        return values;
    })();

    crac_protobuf.ButtonsRequest = (function() {

        /**
         * Properties of a ButtonsRequest.
         * @memberof crac_protobuf
         * @interface IButtonsRequest
         */

        /**
         * Constructs a new ButtonsRequest.
         * @memberof crac_protobuf
         * @classdesc Represents a ButtonsRequest.
         * @implements IButtonsRequest
         * @constructor
         * @param {crac_protobuf.IButtonsRequest=} [properties] Properties to set
         */
        function ButtonsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ButtonsRequest instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.ButtonsRequest
         * @static
         * @param {crac_protobuf.IButtonsRequest=} [properties] Properties to set
         * @returns {crac_protobuf.ButtonsRequest} ButtonsRequest instance
         */
        ButtonsRequest.create = function create(properties) {
            return new ButtonsRequest(properties);
        };

        /**
         * Encodes the specified ButtonsRequest message. Does not implicitly {@link crac_protobuf.ButtonsRequest.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.ButtonsRequest
         * @static
         * @param {crac_protobuf.IButtonsRequest} message ButtonsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ButtonsRequest message, length delimited. Does not implicitly {@link crac_protobuf.ButtonsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.ButtonsRequest
         * @static
         * @param {crac_protobuf.IButtonsRequest} message ButtonsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ButtonsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.ButtonsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.ButtonsRequest} ButtonsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonsRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.ButtonsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ButtonsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.ButtonsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.ButtonsRequest} ButtonsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ButtonsRequest message.
         * @function verify
         * @memberof crac_protobuf.ButtonsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ButtonsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ButtonsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.ButtonsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.ButtonsRequest} ButtonsRequest
         */
        ButtonsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.ButtonsRequest)
                return object;
            return new $root.crac_protobuf.ButtonsRequest();
        };

        /**
         * Creates a plain object from a ButtonsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.ButtonsRequest
         * @static
         * @param {crac_protobuf.ButtonsRequest} message ButtonsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ButtonsRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ButtonsRequest to JSON.
         * @function toJSON
         * @memberof crac_protobuf.ButtonsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ButtonsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ButtonsRequest
         * @function getTypeUrl
         * @memberof crac_protobuf.ButtonsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ButtonsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.ButtonsRequest";
        };

        return ButtonsRequest;
    })();

    crac_protobuf.ButtonRequest = (function() {

        /**
         * Properties of a ButtonRequest.
         * @memberof crac_protobuf
         * @interface IButtonRequest
         * @property {crac_protobuf.ButtonAction|null} [action] ButtonRequest action
         * @property {crac_protobuf.ButtonType|null} [type] ButtonRequest type
         */

        /**
         * Constructs a new ButtonRequest.
         * @memberof crac_protobuf
         * @classdesc Represents a ButtonRequest.
         * @implements IButtonRequest
         * @constructor
         * @param {crac_protobuf.IButtonRequest=} [properties] Properties to set
         */
        function ButtonRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ButtonRequest action.
         * @member {crac_protobuf.ButtonAction} action
         * @memberof crac_protobuf.ButtonRequest
         * @instance
         */
        ButtonRequest.prototype.action = 0;

        /**
         * ButtonRequest type.
         * @member {crac_protobuf.ButtonType} type
         * @memberof crac_protobuf.ButtonRequest
         * @instance
         */
        ButtonRequest.prototype.type = 0;

        /**
         * Creates a new ButtonRequest instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.ButtonRequest
         * @static
         * @param {crac_protobuf.IButtonRequest=} [properties] Properties to set
         * @returns {crac_protobuf.ButtonRequest} ButtonRequest instance
         */
        ButtonRequest.create = function create(properties) {
            return new ButtonRequest(properties);
        };

        /**
         * Encodes the specified ButtonRequest message. Does not implicitly {@link crac_protobuf.ButtonRequest.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.ButtonRequest
         * @static
         * @param {crac_protobuf.IButtonRequest} message ButtonRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified ButtonRequest message, length delimited. Does not implicitly {@link crac_protobuf.ButtonRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.ButtonRequest
         * @static
         * @param {crac_protobuf.IButtonRequest} message ButtonRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ButtonRequest message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.ButtonRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.ButtonRequest} ButtonRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.ButtonRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.action = reader.int32();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ButtonRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.ButtonRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.ButtonRequest} ButtonRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ButtonRequest message.
         * @function verify
         * @memberof crac_protobuf.ButtonRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ButtonRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action"))
                switch (message.action) {
                default:
                    return "action: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a ButtonRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.ButtonRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.ButtonRequest} ButtonRequest
         */
        ButtonRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.ButtonRequest)
                return object;
            let message = new $root.crac_protobuf.ButtonRequest();
            switch (object.action) {
            default:
                if (typeof object.action === "number") {
                    message.action = object.action;
                    break;
                }
                break;
            case "BUTTON_DEFAULT_ACTION":
            case 0:
                message.action = 0;
                break;
            case "TURN_ON":
            case 1:
                message.action = 1;
                break;
            case "TURN_OFF":
            case 2:
                message.action = 2;
                break;
            case "CHECK_BUTTON":
            case 3:
                message.action = 3;
                break;
            }
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "BUTTON_DEFAULT_TYPE":
            case 0:
                message.type = 0;
                break;
            case "CCD_SWITCH":
            case 1:
                message.type = 1;
                break;
            case "TELE_SWITCH":
            case 2:
                message.type = 2;
                break;
            case "FLAT_LIGHT":
            case 3:
                message.type = 3;
                break;
            case "DOME_LIGHT":
            case 4:
                message.type = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ButtonRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.ButtonRequest
         * @static
         * @param {crac_protobuf.ButtonRequest} message ButtonRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ButtonRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.action = options.enums === String ? "BUTTON_DEFAULT_ACTION" : 0;
                object.type = options.enums === String ? "BUTTON_DEFAULT_TYPE" : 0;
            }
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = options.enums === String ? $root.crac_protobuf.ButtonAction[message.action] === undefined ? message.action : $root.crac_protobuf.ButtonAction[message.action] : message.action;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.crac_protobuf.ButtonType[message.type] === undefined ? message.type : $root.crac_protobuf.ButtonType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this ButtonRequest to JSON.
         * @function toJSON
         * @memberof crac_protobuf.ButtonRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ButtonRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ButtonRequest
         * @function getTypeUrl
         * @memberof crac_protobuf.ButtonRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ButtonRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.ButtonRequest";
        };

        return ButtonRequest;
    })();

    /**
     * ButtonStatus enum.
     * @name crac_protobuf.ButtonStatus
     * @enum {number}
     * @property {number} BUTTON_DEFAULT_STATUS=0 BUTTON_DEFAULT_STATUS value
     * @property {number} ON=1 ON value
     * @property {number} OFF=2 OFF value
     */
    crac_protobuf.ButtonStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BUTTON_DEFAULT_STATUS"] = 0;
        values[valuesById[1] = "ON"] = 1;
        values[valuesById[2] = "OFF"] = 2;
        return values;
    })();

    crac_protobuf.ButtonsResponse = (function() {

        /**
         * Properties of a ButtonsResponse.
         * @memberof crac_protobuf
         * @interface IButtonsResponse
         * @property {Array.<crac_protobuf.IButtonResponse>|null} [buttons] ButtonsResponse buttons
         */

        /**
         * Constructs a new ButtonsResponse.
         * @memberof crac_protobuf
         * @classdesc Represents a ButtonsResponse.
         * @implements IButtonsResponse
         * @constructor
         * @param {crac_protobuf.IButtonsResponse=} [properties] Properties to set
         */
        function ButtonsResponse(properties) {
            this.buttons = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ButtonsResponse buttons.
         * @member {Array.<crac_protobuf.IButtonResponse>} buttons
         * @memberof crac_protobuf.ButtonsResponse
         * @instance
         */
        ButtonsResponse.prototype.buttons = $util.emptyArray;

        /**
         * Creates a new ButtonsResponse instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.ButtonsResponse
         * @static
         * @param {crac_protobuf.IButtonsResponse=} [properties] Properties to set
         * @returns {crac_protobuf.ButtonsResponse} ButtonsResponse instance
         */
        ButtonsResponse.create = function create(properties) {
            return new ButtonsResponse(properties);
        };

        /**
         * Encodes the specified ButtonsResponse message. Does not implicitly {@link crac_protobuf.ButtonsResponse.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.ButtonsResponse
         * @static
         * @param {crac_protobuf.IButtonsResponse} message ButtonsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.buttons != null && message.buttons.length)
                for (let i = 0; i < message.buttons.length; ++i)
                    $root.crac_protobuf.ButtonResponse.encode(message.buttons[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ButtonsResponse message, length delimited. Does not implicitly {@link crac_protobuf.ButtonsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.ButtonsResponse
         * @static
         * @param {crac_protobuf.IButtonsResponse} message ButtonsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ButtonsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.ButtonsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.ButtonsResponse} ButtonsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonsResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.ButtonsResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.buttons && message.buttons.length))
                            message.buttons = [];
                        message.buttons.push($root.crac_protobuf.ButtonResponse.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ButtonsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.ButtonsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.ButtonsResponse} ButtonsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ButtonsResponse message.
         * @function verify
         * @memberof crac_protobuf.ButtonsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ButtonsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.buttons != null && message.hasOwnProperty("buttons")) {
                if (!Array.isArray(message.buttons))
                    return "buttons: array expected";
                for (let i = 0; i < message.buttons.length; ++i) {
                    let error = $root.crac_protobuf.ButtonResponse.verify(message.buttons[i]);
                    if (error)
                        return "buttons." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ButtonsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.ButtonsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.ButtonsResponse} ButtonsResponse
         */
        ButtonsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.ButtonsResponse)
                return object;
            let message = new $root.crac_protobuf.ButtonsResponse();
            if (object.buttons) {
                if (!Array.isArray(object.buttons))
                    throw TypeError(".crac_protobuf.ButtonsResponse.buttons: array expected");
                message.buttons = [];
                for (let i = 0; i < object.buttons.length; ++i) {
                    if (typeof object.buttons[i] !== "object")
                        throw TypeError(".crac_protobuf.ButtonsResponse.buttons: object expected");
                    message.buttons[i] = $root.crac_protobuf.ButtonResponse.fromObject(object.buttons[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ButtonsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.ButtonsResponse
         * @static
         * @param {crac_protobuf.ButtonsResponse} message ButtonsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ButtonsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.buttons = [];
            if (message.buttons && message.buttons.length) {
                object.buttons = [];
                for (let j = 0; j < message.buttons.length; ++j)
                    object.buttons[j] = $root.crac_protobuf.ButtonResponse.toObject(message.buttons[j], options);
            }
            return object;
        };

        /**
         * Converts this ButtonsResponse to JSON.
         * @function toJSON
         * @memberof crac_protobuf.ButtonsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ButtonsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ButtonsResponse
         * @function getTypeUrl
         * @memberof crac_protobuf.ButtonsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ButtonsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.ButtonsResponse";
        };

        return ButtonsResponse;
    })();

    crac_protobuf.ButtonResponse = (function() {

        /**
         * Properties of a ButtonResponse.
         * @memberof crac_protobuf
         * @interface IButtonResponse
         * @property {crac_protobuf.ButtonStatus|null} [status] ButtonResponse status
         * @property {crac_protobuf.ButtonType|null} [type] ButtonResponse type
         * @property {crac_protobuf.IButtonGui|null} [buttonGui] ButtonResponse buttonGui
         */

        /**
         * Constructs a new ButtonResponse.
         * @memberof crac_protobuf
         * @classdesc Represents a ButtonResponse.
         * @implements IButtonResponse
         * @constructor
         * @param {crac_protobuf.IButtonResponse=} [properties] Properties to set
         */
        function ButtonResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ButtonResponse status.
         * @member {crac_protobuf.ButtonStatus} status
         * @memberof crac_protobuf.ButtonResponse
         * @instance
         */
        ButtonResponse.prototype.status = 0;

        /**
         * ButtonResponse type.
         * @member {crac_protobuf.ButtonType} type
         * @memberof crac_protobuf.ButtonResponse
         * @instance
         */
        ButtonResponse.prototype.type = 0;

        /**
         * ButtonResponse buttonGui.
         * @member {crac_protobuf.IButtonGui|null|undefined} buttonGui
         * @memberof crac_protobuf.ButtonResponse
         * @instance
         */
        ButtonResponse.prototype.buttonGui = null;

        /**
         * Creates a new ButtonResponse instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.ButtonResponse
         * @static
         * @param {crac_protobuf.IButtonResponse=} [properties] Properties to set
         * @returns {crac_protobuf.ButtonResponse} ButtonResponse instance
         */
        ButtonResponse.create = function create(properties) {
            return new ButtonResponse(properties);
        };

        /**
         * Encodes the specified ButtonResponse message. Does not implicitly {@link crac_protobuf.ButtonResponse.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.ButtonResponse
         * @static
         * @param {crac_protobuf.IButtonResponse} message ButtonResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.buttonGui != null && Object.hasOwnProperty.call(message, "buttonGui"))
                $root.crac_protobuf.ButtonGui.encode(message.buttonGui, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ButtonResponse message, length delimited. Does not implicitly {@link crac_protobuf.ButtonResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.ButtonResponse
         * @static
         * @param {crac_protobuf.IButtonResponse} message ButtonResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ButtonResponse message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.ButtonResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.ButtonResponse} ButtonResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.ButtonResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                case 3: {
                        message.buttonGui = $root.crac_protobuf.ButtonGui.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ButtonResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.ButtonResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.ButtonResponse} ButtonResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ButtonResponse message.
         * @function verify
         * @memberof crac_protobuf.ButtonResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ButtonResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.buttonGui != null && message.hasOwnProperty("buttonGui")) {
                let error = $root.crac_protobuf.ButtonGui.verify(message.buttonGui);
                if (error)
                    return "buttonGui." + error;
            }
            return null;
        };

        /**
         * Creates a ButtonResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.ButtonResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.ButtonResponse} ButtonResponse
         */
        ButtonResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.ButtonResponse)
                return object;
            let message = new $root.crac_protobuf.ButtonResponse();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "BUTTON_DEFAULT_STATUS":
            case 0:
                message.status = 0;
                break;
            case "ON":
            case 1:
                message.status = 1;
                break;
            case "OFF":
            case 2:
                message.status = 2;
                break;
            }
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "BUTTON_DEFAULT_TYPE":
            case 0:
                message.type = 0;
                break;
            case "CCD_SWITCH":
            case 1:
                message.type = 1;
                break;
            case "TELE_SWITCH":
            case 2:
                message.type = 2;
                break;
            case "FLAT_LIGHT":
            case 3:
                message.type = 3;
                break;
            case "DOME_LIGHT":
            case 4:
                message.type = 4;
                break;
            }
            if (object.buttonGui != null) {
                if (typeof object.buttonGui !== "object")
                    throw TypeError(".crac_protobuf.ButtonResponse.buttonGui: object expected");
                message.buttonGui = $root.crac_protobuf.ButtonGui.fromObject(object.buttonGui);
            }
            return message;
        };

        /**
         * Creates a plain object from a ButtonResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.ButtonResponse
         * @static
         * @param {crac_protobuf.ButtonResponse} message ButtonResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ButtonResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "BUTTON_DEFAULT_STATUS" : 0;
                object.type = options.enums === String ? "BUTTON_DEFAULT_TYPE" : 0;
                object.buttonGui = null;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.crac_protobuf.ButtonStatus[message.status] === undefined ? message.status : $root.crac_protobuf.ButtonStatus[message.status] : message.status;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.crac_protobuf.ButtonType[message.type] === undefined ? message.type : $root.crac_protobuf.ButtonType[message.type] : message.type;
            if (message.buttonGui != null && message.hasOwnProperty("buttonGui"))
                object.buttonGui = $root.crac_protobuf.ButtonGui.toObject(message.buttonGui, options);
            return object;
        };

        /**
         * Converts this ButtonResponse to JSON.
         * @function toJSON
         * @memberof crac_protobuf.ButtonResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ButtonResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ButtonResponse
         * @function getTypeUrl
         * @memberof crac_protobuf.ButtonResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ButtonResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.ButtonResponse";
        };

        return ButtonResponse;
    })();

    crac_protobuf.Button = (function() {

        /**
         * Constructs a new Button service.
         * @memberof crac_protobuf
         * @classdesc Represents a Button
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Button(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Button.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Button;

        /**
         * Creates new Button service using the specified rpc implementation.
         * @function create
         * @memberof crac_protobuf.Button
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Button} RPC service. Useful where requests and/or responses are streamed.
         */
        Button.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link crac_protobuf.Button#setAction}.
         * @memberof crac_protobuf.Button
         * @typedef SetActionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {crac_protobuf.ButtonResponse} [response] ButtonResponse
         */

        /**
         * Calls SetAction.
         * @function setAction
         * @memberof crac_protobuf.Button
         * @instance
         * @param {crac_protobuf.IButtonRequest} request ButtonRequest message or plain object
         * @param {crac_protobuf.Button.SetActionCallback} callback Node-style callback called with the error, if any, and ButtonResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Button.prototype.setAction = function setAction(request, callback) {
            return this.rpcCall(setAction, $root.crac_protobuf.ButtonRequest, $root.crac_protobuf.ButtonResponse, request, callback);
        }, "name", { value: "SetAction" });

        /**
         * Calls SetAction.
         * @function setAction
         * @memberof crac_protobuf.Button
         * @instance
         * @param {crac_protobuf.IButtonRequest} request ButtonRequest message or plain object
         * @returns {Promise<crac_protobuf.ButtonResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link crac_protobuf.Button#getStatus}.
         * @memberof crac_protobuf.Button
         * @typedef GetStatusCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {crac_protobuf.ButtonsResponse} [response] ButtonsResponse
         */

        /**
         * Calls GetStatus.
         * @function getStatus
         * @memberof crac_protobuf.Button
         * @instance
         * @param {crac_protobuf.IButtonsRequest} request ButtonsRequest message or plain object
         * @param {crac_protobuf.Button.GetStatusCallback} callback Node-style callback called with the error, if any, and ButtonsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Button.prototype.getStatus = function getStatus(request, callback) {
            return this.rpcCall(getStatus, $root.crac_protobuf.ButtonsRequest, $root.crac_protobuf.ButtonsResponse, request, callback);
        }, "name", { value: "GetStatus" });

        /**
         * Calls GetStatus.
         * @function getStatus
         * @memberof crac_protobuf.Button
         * @instance
         * @param {crac_protobuf.IButtonsRequest} request ButtonsRequest message or plain object
         * @returns {Promise<crac_protobuf.ButtonsResponse>} Promise
         * @variation 2
         */

        return Button;
    })();

    crac_protobuf.ButtonGui = (function() {

        /**
         * Properties of a ButtonGui.
         * @memberof crac_protobuf
         * @interface IButtonGui
         * @property {number|null} [metadata] ButtonGui metadata
         * @property {crac_protobuf.ButtonLabel|null} [label] ButtonGui label
         * @property {boolean|null} [isDisabled] ButtonGui isDisabled
         * @property {crac_protobuf.IButtonColor|null} [buttonColor] ButtonGui buttonColor
         * @property {boolean|null} [isVisible] ButtonGui isVisible
         * @property {crac_protobuf.IButtonColor|null} [disabledButtonColor] ButtonGui disabledButtonColor
         * @property {crac_protobuf.IButtonImage|null} [buttonImage] ButtonGui buttonImage
         * @property {crac_protobuf.ButtonKey|null} [key] ButtonGui key
         */

        /**
         * Constructs a new ButtonGui.
         * @memberof crac_protobuf
         * @classdesc Represents a ButtonGui.
         * @implements IButtonGui
         * @constructor
         * @param {crac_protobuf.IButtonGui=} [properties] Properties to set
         */
        function ButtonGui(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ButtonGui metadata.
         * @member {number} metadata
         * @memberof crac_protobuf.ButtonGui
         * @instance
         */
        ButtonGui.prototype.metadata = 0;

        /**
         * ButtonGui label.
         * @member {crac_protobuf.ButtonLabel} label
         * @memberof crac_protobuf.ButtonGui
         * @instance
         */
        ButtonGui.prototype.label = 0;

        /**
         * ButtonGui isDisabled.
         * @member {boolean} isDisabled
         * @memberof crac_protobuf.ButtonGui
         * @instance
         */
        ButtonGui.prototype.isDisabled = false;

        /**
         * ButtonGui buttonColor.
         * @member {crac_protobuf.IButtonColor|null|undefined} buttonColor
         * @memberof crac_protobuf.ButtonGui
         * @instance
         */
        ButtonGui.prototype.buttonColor = null;

        /**
         * ButtonGui isVisible.
         * @member {boolean} isVisible
         * @memberof crac_protobuf.ButtonGui
         * @instance
         */
        ButtonGui.prototype.isVisible = false;

        /**
         * ButtonGui disabledButtonColor.
         * @member {crac_protobuf.IButtonColor|null|undefined} disabledButtonColor
         * @memberof crac_protobuf.ButtonGui
         * @instance
         */
        ButtonGui.prototype.disabledButtonColor = null;

        /**
         * ButtonGui buttonImage.
         * @member {crac_protobuf.IButtonImage|null|undefined} buttonImage
         * @memberof crac_protobuf.ButtonGui
         * @instance
         */
        ButtonGui.prototype.buttonImage = null;

        /**
         * ButtonGui key.
         * @member {crac_protobuf.ButtonKey} key
         * @memberof crac_protobuf.ButtonGui
         * @instance
         */
        ButtonGui.prototype.key = 0;

        /**
         * Creates a new ButtonGui instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.ButtonGui
         * @static
         * @param {crac_protobuf.IButtonGui=} [properties] Properties to set
         * @returns {crac_protobuf.ButtonGui} ButtonGui instance
         */
        ButtonGui.create = function create(properties) {
            return new ButtonGui(properties);
        };

        /**
         * Encodes the specified ButtonGui message. Does not implicitly {@link crac_protobuf.ButtonGui.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.ButtonGui
         * @static
         * @param {crac_protobuf.IButtonGui} message ButtonGui message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonGui.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.metadata);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.label);
            if (message.isDisabled != null && Object.hasOwnProperty.call(message, "isDisabled"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isDisabled);
            if (message.buttonColor != null && Object.hasOwnProperty.call(message, "buttonColor"))
                $root.crac_protobuf.ButtonColor.encode(message.buttonColor, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.isVisible != null && Object.hasOwnProperty.call(message, "isVisible"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isVisible);
            if (message.disabledButtonColor != null && Object.hasOwnProperty.call(message, "disabledButtonColor"))
                $root.crac_protobuf.ButtonColor.encode(message.disabledButtonColor, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.buttonImage != null && Object.hasOwnProperty.call(message, "buttonImage"))
                $root.crac_protobuf.ButtonImage.encode(message.buttonImage, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.key);
            return writer;
        };

        /**
         * Encodes the specified ButtonGui message, length delimited. Does not implicitly {@link crac_protobuf.ButtonGui.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.ButtonGui
         * @static
         * @param {crac_protobuf.IButtonGui} message ButtonGui message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonGui.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ButtonGui message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.ButtonGui
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.ButtonGui} ButtonGui
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonGui.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.ButtonGui();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.metadata = reader.int32();
                        break;
                    }
                case 2: {
                        message.label = reader.int32();
                        break;
                    }
                case 3: {
                        message.isDisabled = reader.bool();
                        break;
                    }
                case 4: {
                        message.buttonColor = $root.crac_protobuf.ButtonColor.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.isVisible = reader.bool();
                        break;
                    }
                case 6: {
                        message.disabledButtonColor = $root.crac_protobuf.ButtonColor.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.buttonImage = $root.crac_protobuf.ButtonImage.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.key = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ButtonGui message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.ButtonGui
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.ButtonGui} ButtonGui
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonGui.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ButtonGui message.
         * @function verify
         * @memberof crac_protobuf.ButtonGui
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ButtonGui.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.metadata != null && message.hasOwnProperty("metadata"))
                if (!$util.isInteger(message.metadata))
                    return "metadata: integer expected";
            if (message.label != null && message.hasOwnProperty("label"))
                switch (message.label) {
                default:
                    return "label: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 21:
                    break;
                }
            if (message.isDisabled != null && message.hasOwnProperty("isDisabled"))
                if (typeof message.isDisabled !== "boolean")
                    return "isDisabled: boolean expected";
            if (message.buttonColor != null && message.hasOwnProperty("buttonColor")) {
                let error = $root.crac_protobuf.ButtonColor.verify(message.buttonColor);
                if (error)
                    return "buttonColor." + error;
            }
            if (message.isVisible != null && message.hasOwnProperty("isVisible"))
                if (typeof message.isVisible !== "boolean")
                    return "isVisible: boolean expected";
            if (message.disabledButtonColor != null && message.hasOwnProperty("disabledButtonColor")) {
                let error = $root.crac_protobuf.ButtonColor.verify(message.disabledButtonColor);
                if (error)
                    return "disabledButtonColor." + error;
            }
            if (message.buttonImage != null && message.hasOwnProperty("buttonImage")) {
                let error = $root.crac_protobuf.ButtonImage.verify(message.buttonImage);
                if (error)
                    return "buttonImage." + error;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                switch (message.key) {
                default:
                    return "key: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                    break;
                }
            return null;
        };

        /**
         * Creates a ButtonGui message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.ButtonGui
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.ButtonGui} ButtonGui
         */
        ButtonGui.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.ButtonGui)
                return object;
            let message = new $root.crac_protobuf.ButtonGui();
            if (object.metadata != null)
                message.metadata = object.metadata | 0;
            switch (object.label) {
            default:
                if (typeof object.label === "number") {
                    message.label = object.label;
                    break;
                }
                break;
            case "DEFAULT_LABEL":
            case 0:
                message.label = 0;
                break;
            case "LABEL_ON":
            case 1:
                message.label = 1;
                break;
            case "LABEL_OFF":
            case 2:
                message.label = 2;
                break;
            case "LABEL_ENABLE":
            case 3:
                message.label = 3;
                break;
            case "LABEL_DISABLE":
            case 4:
                message.label = 4;
                break;
            case "LABEL_SYNC":
            case 5:
                message.label = 5;
                break;
            case "LABEL_PARK":
            case 6:
                message.label = 6;
                break;
            case "LABEL_FLAT":
            case 7:
                message.label = 7;
                break;
            case "LABEL_OPEN":
            case 8:
                message.label = 8;
                break;
            case "LABEL_CLOSE":
            case 9:
                message.label = 9;
                break;
            case "LABEL_OPENING":
            case 10:
                message.label = 10;
                break;
            case "LABEL_CLOSING":
            case 11:
                message.label = 11;
                break;
            case "LABEL_CALIBRATE":
            case 12:
                message.label = 12;
                break;
            case "LABEL_TELESCOPE_CONNECTED":
            case 13:
                message.label = 13;
                break;
            case "LABEL_TELESCOPE_DISCONNECTED":
            case 14:
                message.label = 14;
                break;
            case "LABEL_ERROR":
            case 21:
                message.label = 21;
                break;
            }
            if (object.isDisabled != null)
                message.isDisabled = Boolean(object.isDisabled);
            if (object.buttonColor != null) {
                if (typeof object.buttonColor !== "object")
                    throw TypeError(".crac_protobuf.ButtonGui.buttonColor: object expected");
                message.buttonColor = $root.crac_protobuf.ButtonColor.fromObject(object.buttonColor);
            }
            if (object.isVisible != null)
                message.isVisible = Boolean(object.isVisible);
            if (object.disabledButtonColor != null) {
                if (typeof object.disabledButtonColor !== "object")
                    throw TypeError(".crac_protobuf.ButtonGui.disabledButtonColor: object expected");
                message.disabledButtonColor = $root.crac_protobuf.ButtonColor.fromObject(object.disabledButtonColor);
            }
            if (object.buttonImage != null) {
                if (typeof object.buttonImage !== "object")
                    throw TypeError(".crac_protobuf.ButtonGui.buttonImage: object expected");
                message.buttonImage = $root.crac_protobuf.ButtonImage.fromObject(object.buttonImage);
            }
            switch (object.key) {
            default:
                if (typeof object.key === "number") {
                    message.key = object.key;
                    break;
                }
                break;
            case "DEFAULT_KEY":
            case 0:
                message.key = 0;
                break;
            case "KEY_SYNC":
            case 1:
                message.key = 1;
                break;
            case "KEY_PARK":
            case 2:
                message.key = 2;
                break;
            case "KEY_FLAT":
            case 3:
                message.key = 3;
                break;
            case "KEY_CURTAINS":
            case 4:
                message.key = 4;
                break;
            case "KEY_CALIBRATE":
            case 5:
                message.key = 5;
                break;
            case "KEY_ROOF":
            case 6:
                message.key = 6;
                break;
            case "KEY_TELE_SWITCH":
            case 7:
                message.key = 7;
                break;
            case "KEY_CCD_SWITCH":
            case 8:
                message.key = 8;
                break;
            case "KEY_FLAT_LIGHT":
            case 9:
                message.key = 9;
                break;
            case "KEY_DOME_LIGHT":
            case 10:
                message.key = 10;
                break;
            case "KEY_TELESCOPE_CONNECTION_TOGGLE":
            case 11:
                message.key = 11;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ButtonGui message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.ButtonGui
         * @static
         * @param {crac_protobuf.ButtonGui} message ButtonGui
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ButtonGui.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.metadata = 0;
                object.label = options.enums === String ? "DEFAULT_LABEL" : 0;
                object.isDisabled = false;
                object.buttonColor = null;
                object.isVisible = false;
                object.disabledButtonColor = null;
                object.buttonImage = null;
                object.key = options.enums === String ? "DEFAULT_KEY" : 0;
            }
            if (message.metadata != null && message.hasOwnProperty("metadata"))
                object.metadata = message.metadata;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = options.enums === String ? $root.crac_protobuf.ButtonLabel[message.label] === undefined ? message.label : $root.crac_protobuf.ButtonLabel[message.label] : message.label;
            if (message.isDisabled != null && message.hasOwnProperty("isDisabled"))
                object.isDisabled = message.isDisabled;
            if (message.buttonColor != null && message.hasOwnProperty("buttonColor"))
                object.buttonColor = $root.crac_protobuf.ButtonColor.toObject(message.buttonColor, options);
            if (message.isVisible != null && message.hasOwnProperty("isVisible"))
                object.isVisible = message.isVisible;
            if (message.disabledButtonColor != null && message.hasOwnProperty("disabledButtonColor"))
                object.disabledButtonColor = $root.crac_protobuf.ButtonColor.toObject(message.disabledButtonColor, options);
            if (message.buttonImage != null && message.hasOwnProperty("buttonImage"))
                object.buttonImage = $root.crac_protobuf.ButtonImage.toObject(message.buttonImage, options);
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = options.enums === String ? $root.crac_protobuf.ButtonKey[message.key] === undefined ? message.key : $root.crac_protobuf.ButtonKey[message.key] : message.key;
            return object;
        };

        /**
         * Converts this ButtonGui to JSON.
         * @function toJSON
         * @memberof crac_protobuf.ButtonGui
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ButtonGui.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ButtonGui
         * @function getTypeUrl
         * @memberof crac_protobuf.ButtonGui
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ButtonGui.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.ButtonGui";
        };

        return ButtonGui;
    })();

    crac_protobuf.ButtonColor = (function() {

        /**
         * Properties of a ButtonColor.
         * @memberof crac_protobuf
         * @interface IButtonColor
         * @property {string|null} [textColor] ButtonColor textColor
         * @property {string|null} [backgroundColor] ButtonColor backgroundColor
         */

        /**
         * Constructs a new ButtonColor.
         * @memberof crac_protobuf
         * @classdesc Represents a ButtonColor.
         * @implements IButtonColor
         * @constructor
         * @param {crac_protobuf.IButtonColor=} [properties] Properties to set
         */
        function ButtonColor(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ButtonColor textColor.
         * @member {string} textColor
         * @memberof crac_protobuf.ButtonColor
         * @instance
         */
        ButtonColor.prototype.textColor = "";

        /**
         * ButtonColor backgroundColor.
         * @member {string} backgroundColor
         * @memberof crac_protobuf.ButtonColor
         * @instance
         */
        ButtonColor.prototype.backgroundColor = "";

        /**
         * Creates a new ButtonColor instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.ButtonColor
         * @static
         * @param {crac_protobuf.IButtonColor=} [properties] Properties to set
         * @returns {crac_protobuf.ButtonColor} ButtonColor instance
         */
        ButtonColor.create = function create(properties) {
            return new ButtonColor(properties);
        };

        /**
         * Encodes the specified ButtonColor message. Does not implicitly {@link crac_protobuf.ButtonColor.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.ButtonColor
         * @static
         * @param {crac_protobuf.IButtonColor} message ButtonColor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonColor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.textColor != null && Object.hasOwnProperty.call(message, "textColor"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.textColor);
            if (message.backgroundColor != null && Object.hasOwnProperty.call(message, "backgroundColor"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.backgroundColor);
            return writer;
        };

        /**
         * Encodes the specified ButtonColor message, length delimited. Does not implicitly {@link crac_protobuf.ButtonColor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.ButtonColor
         * @static
         * @param {crac_protobuf.IButtonColor} message ButtonColor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonColor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ButtonColor message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.ButtonColor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.ButtonColor} ButtonColor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonColor.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.ButtonColor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.textColor = reader.string();
                        break;
                    }
                case 2: {
                        message.backgroundColor = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ButtonColor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.ButtonColor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.ButtonColor} ButtonColor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonColor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ButtonColor message.
         * @function verify
         * @memberof crac_protobuf.ButtonColor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ButtonColor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.textColor != null && message.hasOwnProperty("textColor"))
                if (!$util.isString(message.textColor))
                    return "textColor: string expected";
            if (message.backgroundColor != null && message.hasOwnProperty("backgroundColor"))
                if (!$util.isString(message.backgroundColor))
                    return "backgroundColor: string expected";
            return null;
        };

        /**
         * Creates a ButtonColor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.ButtonColor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.ButtonColor} ButtonColor
         */
        ButtonColor.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.ButtonColor)
                return object;
            let message = new $root.crac_protobuf.ButtonColor();
            if (object.textColor != null)
                message.textColor = String(object.textColor);
            if (object.backgroundColor != null)
                message.backgroundColor = String(object.backgroundColor);
            return message;
        };

        /**
         * Creates a plain object from a ButtonColor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.ButtonColor
         * @static
         * @param {crac_protobuf.ButtonColor} message ButtonColor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ButtonColor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.textColor = "";
                object.backgroundColor = "";
            }
            if (message.textColor != null && message.hasOwnProperty("textColor"))
                object.textColor = message.textColor;
            if (message.backgroundColor != null && message.hasOwnProperty("backgroundColor"))
                object.backgroundColor = message.backgroundColor;
            return object;
        };

        /**
         * Converts this ButtonColor to JSON.
         * @function toJSON
         * @memberof crac_protobuf.ButtonColor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ButtonColor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ButtonColor
         * @function getTypeUrl
         * @memberof crac_protobuf.ButtonColor
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ButtonColor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.ButtonColor";
        };

        return ButtonColor;
    })();

    crac_protobuf.ButtonImage = (function() {

        /**
         * Properties of a ButtonImage.
         * @memberof crac_protobuf
         * @interface IButtonImage
         * @property {string|null} [imageData] ButtonImage imageData
         * @property {number|null} [imageSubsample] ButtonImage imageSubsample
         * @property {crac_protobuf.IButtonImageSize|null} [size] ButtonImage size
         */

        /**
         * Constructs a new ButtonImage.
         * @memberof crac_protobuf
         * @classdesc Represents a ButtonImage.
         * @implements IButtonImage
         * @constructor
         * @param {crac_protobuf.IButtonImage=} [properties] Properties to set
         */
        function ButtonImage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ButtonImage imageData.
         * @member {string} imageData
         * @memberof crac_protobuf.ButtonImage
         * @instance
         */
        ButtonImage.prototype.imageData = "";

        /**
         * ButtonImage imageSubsample.
         * @member {number} imageSubsample
         * @memberof crac_protobuf.ButtonImage
         * @instance
         */
        ButtonImage.prototype.imageSubsample = 0;

        /**
         * ButtonImage size.
         * @member {crac_protobuf.IButtonImageSize|null|undefined} size
         * @memberof crac_protobuf.ButtonImage
         * @instance
         */
        ButtonImage.prototype.size = null;

        /**
         * Creates a new ButtonImage instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.ButtonImage
         * @static
         * @param {crac_protobuf.IButtonImage=} [properties] Properties to set
         * @returns {crac_protobuf.ButtonImage} ButtonImage instance
         */
        ButtonImage.create = function create(properties) {
            return new ButtonImage(properties);
        };

        /**
         * Encodes the specified ButtonImage message. Does not implicitly {@link crac_protobuf.ButtonImage.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.ButtonImage
         * @static
         * @param {crac_protobuf.IButtonImage} message ButtonImage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonImage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.imageData != null && Object.hasOwnProperty.call(message, "imageData"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.imageData);
            if (message.imageSubsample != null && Object.hasOwnProperty.call(message, "imageSubsample"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.imageSubsample);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                $root.crac_protobuf.ButtonImageSize.encode(message.size, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ButtonImage message, length delimited. Does not implicitly {@link crac_protobuf.ButtonImage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.ButtonImage
         * @static
         * @param {crac_protobuf.IButtonImage} message ButtonImage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonImage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ButtonImage message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.ButtonImage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.ButtonImage} ButtonImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonImage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.ButtonImage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.imageData = reader.string();
                        break;
                    }
                case 2: {
                        message.imageSubsample = reader.int32();
                        break;
                    }
                case 3: {
                        message.size = $root.crac_protobuf.ButtonImageSize.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ButtonImage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.ButtonImage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.ButtonImage} ButtonImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonImage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ButtonImage message.
         * @function verify
         * @memberof crac_protobuf.ButtonImage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ButtonImage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.imageData != null && message.hasOwnProperty("imageData"))
                if (!$util.isString(message.imageData))
                    return "imageData: string expected";
            if (message.imageSubsample != null && message.hasOwnProperty("imageSubsample"))
                if (!$util.isInteger(message.imageSubsample))
                    return "imageSubsample: integer expected";
            if (message.size != null && message.hasOwnProperty("size")) {
                let error = $root.crac_protobuf.ButtonImageSize.verify(message.size);
                if (error)
                    return "size." + error;
            }
            return null;
        };

        /**
         * Creates a ButtonImage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.ButtonImage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.ButtonImage} ButtonImage
         */
        ButtonImage.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.ButtonImage)
                return object;
            let message = new $root.crac_protobuf.ButtonImage();
            if (object.imageData != null)
                message.imageData = String(object.imageData);
            if (object.imageSubsample != null)
                message.imageSubsample = object.imageSubsample | 0;
            if (object.size != null) {
                if (typeof object.size !== "object")
                    throw TypeError(".crac_protobuf.ButtonImage.size: object expected");
                message.size = $root.crac_protobuf.ButtonImageSize.fromObject(object.size);
            }
            return message;
        };

        /**
         * Creates a plain object from a ButtonImage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.ButtonImage
         * @static
         * @param {crac_protobuf.ButtonImage} message ButtonImage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ButtonImage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.imageData = "";
                object.imageSubsample = 0;
                object.size = null;
            }
            if (message.imageData != null && message.hasOwnProperty("imageData"))
                object.imageData = message.imageData;
            if (message.imageSubsample != null && message.hasOwnProperty("imageSubsample"))
                object.imageSubsample = message.imageSubsample;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = $root.crac_protobuf.ButtonImageSize.toObject(message.size, options);
            return object;
        };

        /**
         * Converts this ButtonImage to JSON.
         * @function toJSON
         * @memberof crac_protobuf.ButtonImage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ButtonImage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ButtonImage
         * @function getTypeUrl
         * @memberof crac_protobuf.ButtonImage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ButtonImage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.ButtonImage";
        };

        return ButtonImage;
    })();

    crac_protobuf.ButtonImageSize = (function() {

        /**
         * Properties of a ButtonImageSize.
         * @memberof crac_protobuf
         * @interface IButtonImageSize
         * @property {number|null} [width] ButtonImageSize width
         * @property {number|null} [height] ButtonImageSize height
         */

        /**
         * Constructs a new ButtonImageSize.
         * @memberof crac_protobuf
         * @classdesc Represents a ButtonImageSize.
         * @implements IButtonImageSize
         * @constructor
         * @param {crac_protobuf.IButtonImageSize=} [properties] Properties to set
         */
        function ButtonImageSize(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ButtonImageSize width.
         * @member {number} width
         * @memberof crac_protobuf.ButtonImageSize
         * @instance
         */
        ButtonImageSize.prototype.width = 0;

        /**
         * ButtonImageSize height.
         * @member {number} height
         * @memberof crac_protobuf.ButtonImageSize
         * @instance
         */
        ButtonImageSize.prototype.height = 0;

        /**
         * Creates a new ButtonImageSize instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.ButtonImageSize
         * @static
         * @param {crac_protobuf.IButtonImageSize=} [properties] Properties to set
         * @returns {crac_protobuf.ButtonImageSize} ButtonImageSize instance
         */
        ButtonImageSize.create = function create(properties) {
            return new ButtonImageSize(properties);
        };

        /**
         * Encodes the specified ButtonImageSize message. Does not implicitly {@link crac_protobuf.ButtonImageSize.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.ButtonImageSize
         * @static
         * @param {crac_protobuf.IButtonImageSize} message ButtonImageSize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonImageSize.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.height);
            return writer;
        };

        /**
         * Encodes the specified ButtonImageSize message, length delimited. Does not implicitly {@link crac_protobuf.ButtonImageSize.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.ButtonImageSize
         * @static
         * @param {crac_protobuf.IButtonImageSize} message ButtonImageSize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonImageSize.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ButtonImageSize message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.ButtonImageSize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.ButtonImageSize} ButtonImageSize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonImageSize.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.ButtonImageSize();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.width = reader.int32();
                        break;
                    }
                case 2: {
                        message.height = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ButtonImageSize message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.ButtonImageSize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.ButtonImageSize} ButtonImageSize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonImageSize.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ButtonImageSize message.
         * @function verify
         * @memberof crac_protobuf.ButtonImageSize
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ButtonImageSize.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            return null;
        };

        /**
         * Creates a ButtonImageSize message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.ButtonImageSize
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.ButtonImageSize} ButtonImageSize
         */
        ButtonImageSize.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.ButtonImageSize)
                return object;
            let message = new $root.crac_protobuf.ButtonImageSize();
            if (object.width != null)
                message.width = object.width | 0;
            if (object.height != null)
                message.height = object.height | 0;
            return message;
        };

        /**
         * Creates a plain object from a ButtonImageSize message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.ButtonImageSize
         * @static
         * @param {crac_protobuf.ButtonImageSize} message ButtonImageSize
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ButtonImageSize.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.width = 0;
                object.height = 0;
            }
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            return object;
        };

        /**
         * Converts this ButtonImageSize to JSON.
         * @function toJSON
         * @memberof crac_protobuf.ButtonImageSize
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ButtonImageSize.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ButtonImageSize
         * @function getTypeUrl
         * @memberof crac_protobuf.ButtonImageSize
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ButtonImageSize.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.ButtonImageSize";
        };

        return ButtonImageSize;
    })();

    /**
     * ButtonLabel enum.
     * @name crac_protobuf.ButtonLabel
     * @enum {number}
     * @property {number} DEFAULT_LABEL=0 DEFAULT_LABEL value
     * @property {number} LABEL_ON=1 LABEL_ON value
     * @property {number} LABEL_OFF=2 LABEL_OFF value
     * @property {number} LABEL_ENABLE=3 LABEL_ENABLE value
     * @property {number} LABEL_DISABLE=4 LABEL_DISABLE value
     * @property {number} LABEL_SYNC=5 LABEL_SYNC value
     * @property {number} LABEL_PARK=6 LABEL_PARK value
     * @property {number} LABEL_FLAT=7 LABEL_FLAT value
     * @property {number} LABEL_OPEN=8 LABEL_OPEN value
     * @property {number} LABEL_CLOSE=9 LABEL_CLOSE value
     * @property {number} LABEL_OPENING=10 LABEL_OPENING value
     * @property {number} LABEL_CLOSING=11 LABEL_CLOSING value
     * @property {number} LABEL_CALIBRATE=12 LABEL_CALIBRATE value
     * @property {number} LABEL_TELESCOPE_CONNECTED=13 LABEL_TELESCOPE_CONNECTED value
     * @property {number} LABEL_TELESCOPE_DISCONNECTED=14 LABEL_TELESCOPE_DISCONNECTED value
     * @property {number} LABEL_ERROR=21 LABEL_ERROR value
     */
    crac_protobuf.ButtonLabel = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DEFAULT_LABEL"] = 0;
        values[valuesById[1] = "LABEL_ON"] = 1;
        values[valuesById[2] = "LABEL_OFF"] = 2;
        values[valuesById[3] = "LABEL_ENABLE"] = 3;
        values[valuesById[4] = "LABEL_DISABLE"] = 4;
        values[valuesById[5] = "LABEL_SYNC"] = 5;
        values[valuesById[6] = "LABEL_PARK"] = 6;
        values[valuesById[7] = "LABEL_FLAT"] = 7;
        values[valuesById[8] = "LABEL_OPEN"] = 8;
        values[valuesById[9] = "LABEL_CLOSE"] = 9;
        values[valuesById[10] = "LABEL_OPENING"] = 10;
        values[valuesById[11] = "LABEL_CLOSING"] = 11;
        values[valuesById[12] = "LABEL_CALIBRATE"] = 12;
        values[valuesById[13] = "LABEL_TELESCOPE_CONNECTED"] = 13;
        values[valuesById[14] = "LABEL_TELESCOPE_DISCONNECTED"] = 14;
        values[valuesById[21] = "LABEL_ERROR"] = 21;
        return values;
    })();

    /**
     * ButtonKey enum.
     * @name crac_protobuf.ButtonKey
     * @enum {number}
     * @property {number} DEFAULT_KEY=0 DEFAULT_KEY value
     * @property {number} KEY_SYNC=1 KEY_SYNC value
     * @property {number} KEY_PARK=2 KEY_PARK value
     * @property {number} KEY_FLAT=3 KEY_FLAT value
     * @property {number} KEY_CURTAINS=4 KEY_CURTAINS value
     * @property {number} KEY_CALIBRATE=5 KEY_CALIBRATE value
     * @property {number} KEY_ROOF=6 KEY_ROOF value
     * @property {number} KEY_TELE_SWITCH=7 KEY_TELE_SWITCH value
     * @property {number} KEY_CCD_SWITCH=8 KEY_CCD_SWITCH value
     * @property {number} KEY_FLAT_LIGHT=9 KEY_FLAT_LIGHT value
     * @property {number} KEY_DOME_LIGHT=10 KEY_DOME_LIGHT value
     * @property {number} KEY_TELESCOPE_CONNECTION_TOGGLE=11 KEY_TELESCOPE_CONNECTION_TOGGLE value
     */
    crac_protobuf.ButtonKey = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DEFAULT_KEY"] = 0;
        values[valuesById[1] = "KEY_SYNC"] = 1;
        values[valuesById[2] = "KEY_PARK"] = 2;
        values[valuesById[3] = "KEY_FLAT"] = 3;
        values[valuesById[4] = "KEY_CURTAINS"] = 4;
        values[valuesById[5] = "KEY_CALIBRATE"] = 5;
        values[valuesById[6] = "KEY_ROOF"] = 6;
        values[valuesById[7] = "KEY_TELE_SWITCH"] = 7;
        values[valuesById[8] = "KEY_CCD_SWITCH"] = 8;
        values[valuesById[9] = "KEY_FLAT_LIGHT"] = 9;
        values[valuesById[10] = "KEY_DOME_LIGHT"] = 10;
        values[valuesById[11] = "KEY_TELESCOPE_CONNECTION_TOGGLE"] = 11;
        return values;
    })();

    /**
     * RoofAction enum.
     * @name crac_protobuf.RoofAction
     * @enum {number}
     * @property {number} ROOF_DEFAULT_ACTION=0 ROOF_DEFAULT_ACTION value
     * @property {number} OPEN=1 OPEN value
     * @property {number} CLOSE=2 CLOSE value
     * @property {number} CHECK_ROOF=3 CHECK_ROOF value
     */
    crac_protobuf.RoofAction = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ROOF_DEFAULT_ACTION"] = 0;
        values[valuesById[1] = "OPEN"] = 1;
        values[valuesById[2] = "CLOSE"] = 2;
        values[valuesById[3] = "CHECK_ROOF"] = 3;
        return values;
    })();

    crac_protobuf.RoofRequest = (function() {

        /**
         * Properties of a RoofRequest.
         * @memberof crac_protobuf
         * @interface IRoofRequest
         * @property {crac_protobuf.RoofAction|null} [action] RoofRequest action
         */

        /**
         * Constructs a new RoofRequest.
         * @memberof crac_protobuf
         * @classdesc Represents a RoofRequest.
         * @implements IRoofRequest
         * @constructor
         * @param {crac_protobuf.IRoofRequest=} [properties] Properties to set
         */
        function RoofRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoofRequest action.
         * @member {crac_protobuf.RoofAction} action
         * @memberof crac_protobuf.RoofRequest
         * @instance
         */
        RoofRequest.prototype.action = 0;

        /**
         * Creates a new RoofRequest instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.RoofRequest
         * @static
         * @param {crac_protobuf.IRoofRequest=} [properties] Properties to set
         * @returns {crac_protobuf.RoofRequest} RoofRequest instance
         */
        RoofRequest.create = function create(properties) {
            return new RoofRequest(properties);
        };

        /**
         * Encodes the specified RoofRequest message. Does not implicitly {@link crac_protobuf.RoofRequest.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.RoofRequest
         * @static
         * @param {crac_protobuf.IRoofRequest} message RoofRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoofRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
            return writer;
        };

        /**
         * Encodes the specified RoofRequest message, length delimited. Does not implicitly {@link crac_protobuf.RoofRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.RoofRequest
         * @static
         * @param {crac_protobuf.IRoofRequest} message RoofRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoofRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoofRequest message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.RoofRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.RoofRequest} RoofRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoofRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.RoofRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.action = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoofRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.RoofRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.RoofRequest} RoofRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoofRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoofRequest message.
         * @function verify
         * @memberof crac_protobuf.RoofRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoofRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action"))
                switch (message.action) {
                default:
                    return "action: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a RoofRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.RoofRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.RoofRequest} RoofRequest
         */
        RoofRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.RoofRequest)
                return object;
            let message = new $root.crac_protobuf.RoofRequest();
            switch (object.action) {
            default:
                if (typeof object.action === "number") {
                    message.action = object.action;
                    break;
                }
                break;
            case "ROOF_DEFAULT_ACTION":
            case 0:
                message.action = 0;
                break;
            case "OPEN":
            case 1:
                message.action = 1;
                break;
            case "CLOSE":
            case 2:
                message.action = 2;
                break;
            case "CHECK_ROOF":
            case 3:
                message.action = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a RoofRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.RoofRequest
         * @static
         * @param {crac_protobuf.RoofRequest} message RoofRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoofRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.action = options.enums === String ? "ROOF_DEFAULT_ACTION" : 0;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = options.enums === String ? $root.crac_protobuf.RoofAction[message.action] === undefined ? message.action : $root.crac_protobuf.RoofAction[message.action] : message.action;
            return object;
        };

        /**
         * Converts this RoofRequest to JSON.
         * @function toJSON
         * @memberof crac_protobuf.RoofRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoofRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoofRequest
         * @function getTypeUrl
         * @memberof crac_protobuf.RoofRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoofRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.RoofRequest";
        };

        return RoofRequest;
    })();

    /**
     * RoofStatus enum.
     * @name crac_protobuf.RoofStatus
     * @enum {number}
     * @property {number} ROOF_DEFAULT_STATUS=0 ROOF_DEFAULT_STATUS value
     * @property {number} ROOF_CLOSED=1 ROOF_CLOSED value
     * @property {number} ROOF_STOPPED=2 ROOF_STOPPED value
     * @property {number} ROOF_OPENED=3 ROOF_OPENED value
     * @property {number} ROOF_CLOSING=4 ROOF_CLOSING value
     * @property {number} ROOF_OPENING=5 ROOF_OPENING value
     * @property {number} ROOF_DANGER=6 ROOF_DANGER value
     * @property {number} ROOF_ERROR=7 ROOF_ERROR value
     */
    crac_protobuf.RoofStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ROOF_DEFAULT_STATUS"] = 0;
        values[valuesById[1] = "ROOF_CLOSED"] = 1;
        values[valuesById[2] = "ROOF_STOPPED"] = 2;
        values[valuesById[3] = "ROOF_OPENED"] = 3;
        values[valuesById[4] = "ROOF_CLOSING"] = 4;
        values[valuesById[5] = "ROOF_OPENING"] = 5;
        values[valuesById[6] = "ROOF_DANGER"] = 6;
        values[valuesById[7] = "ROOF_ERROR"] = 7;
        return values;
    })();

    crac_protobuf.RoofResponse = (function() {

        /**
         * Properties of a RoofResponse.
         * @memberof crac_protobuf
         * @interface IRoofResponse
         * @property {crac_protobuf.RoofStatus|null} [status] RoofResponse status
         * @property {crac_protobuf.IButtonGui|null} [buttonGui] RoofResponse buttonGui
         */

        /**
         * Constructs a new RoofResponse.
         * @memberof crac_protobuf
         * @classdesc Represents a RoofResponse.
         * @implements IRoofResponse
         * @constructor
         * @param {crac_protobuf.IRoofResponse=} [properties] Properties to set
         */
        function RoofResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoofResponse status.
         * @member {crac_protobuf.RoofStatus} status
         * @memberof crac_protobuf.RoofResponse
         * @instance
         */
        RoofResponse.prototype.status = 0;

        /**
         * RoofResponse buttonGui.
         * @member {crac_protobuf.IButtonGui|null|undefined} buttonGui
         * @memberof crac_protobuf.RoofResponse
         * @instance
         */
        RoofResponse.prototype.buttonGui = null;

        /**
         * Creates a new RoofResponse instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.RoofResponse
         * @static
         * @param {crac_protobuf.IRoofResponse=} [properties] Properties to set
         * @returns {crac_protobuf.RoofResponse} RoofResponse instance
         */
        RoofResponse.create = function create(properties) {
            return new RoofResponse(properties);
        };

        /**
         * Encodes the specified RoofResponse message. Does not implicitly {@link crac_protobuf.RoofResponse.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.RoofResponse
         * @static
         * @param {crac_protobuf.IRoofResponse} message RoofResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoofResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.buttonGui != null && Object.hasOwnProperty.call(message, "buttonGui"))
                $root.crac_protobuf.ButtonGui.encode(message.buttonGui, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoofResponse message, length delimited. Does not implicitly {@link crac_protobuf.RoofResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.RoofResponse
         * @static
         * @param {crac_protobuf.IRoofResponse} message RoofResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoofResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoofResponse message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.RoofResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.RoofResponse} RoofResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoofResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.RoofResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                case 2: {
                        message.buttonGui = $root.crac_protobuf.ButtonGui.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoofResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.RoofResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.RoofResponse} RoofResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoofResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoofResponse message.
         * @function verify
         * @memberof crac_protobuf.RoofResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoofResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.buttonGui != null && message.hasOwnProperty("buttonGui")) {
                let error = $root.crac_protobuf.ButtonGui.verify(message.buttonGui);
                if (error)
                    return "buttonGui." + error;
            }
            return null;
        };

        /**
         * Creates a RoofResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.RoofResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.RoofResponse} RoofResponse
         */
        RoofResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.RoofResponse)
                return object;
            let message = new $root.crac_protobuf.RoofResponse();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "ROOF_DEFAULT_STATUS":
            case 0:
                message.status = 0;
                break;
            case "ROOF_CLOSED":
            case 1:
                message.status = 1;
                break;
            case "ROOF_STOPPED":
            case 2:
                message.status = 2;
                break;
            case "ROOF_OPENED":
            case 3:
                message.status = 3;
                break;
            case "ROOF_CLOSING":
            case 4:
                message.status = 4;
                break;
            case "ROOF_OPENING":
            case 5:
                message.status = 5;
                break;
            case "ROOF_DANGER":
            case 6:
                message.status = 6;
                break;
            case "ROOF_ERROR":
            case 7:
                message.status = 7;
                break;
            }
            if (object.buttonGui != null) {
                if (typeof object.buttonGui !== "object")
                    throw TypeError(".crac_protobuf.RoofResponse.buttonGui: object expected");
                message.buttonGui = $root.crac_protobuf.ButtonGui.fromObject(object.buttonGui);
            }
            return message;
        };

        /**
         * Creates a plain object from a RoofResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.RoofResponse
         * @static
         * @param {crac_protobuf.RoofResponse} message RoofResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoofResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "ROOF_DEFAULT_STATUS" : 0;
                object.buttonGui = null;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.crac_protobuf.RoofStatus[message.status] === undefined ? message.status : $root.crac_protobuf.RoofStatus[message.status] : message.status;
            if (message.buttonGui != null && message.hasOwnProperty("buttonGui"))
                object.buttonGui = $root.crac_protobuf.ButtonGui.toObject(message.buttonGui, options);
            return object;
        };

        /**
         * Converts this RoofResponse to JSON.
         * @function toJSON
         * @memberof crac_protobuf.RoofResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoofResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoofResponse
         * @function getTypeUrl
         * @memberof crac_protobuf.RoofResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoofResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.RoofResponse";
        };

        return RoofResponse;
    })();

    crac_protobuf.Roof = (function() {

        /**
         * Constructs a new Roof service.
         * @memberof crac_protobuf
         * @classdesc Represents a Roof
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Roof(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Roof.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Roof;

        /**
         * Creates new Roof service using the specified rpc implementation.
         * @function create
         * @memberof crac_protobuf.Roof
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Roof} RPC service. Useful where requests and/or responses are streamed.
         */
        Roof.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link crac_protobuf.Roof#setAction}.
         * @memberof crac_protobuf.Roof
         * @typedef SetActionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {crac_protobuf.RoofResponse} [response] RoofResponse
         */

        /**
         * Calls SetAction.
         * @function setAction
         * @memberof crac_protobuf.Roof
         * @instance
         * @param {crac_protobuf.IRoofRequest} request RoofRequest message or plain object
         * @param {crac_protobuf.Roof.SetActionCallback} callback Node-style callback called with the error, if any, and RoofResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Roof.prototype.setAction = function setAction(request, callback) {
            return this.rpcCall(setAction, $root.crac_protobuf.RoofRequest, $root.crac_protobuf.RoofResponse, request, callback);
        }, "name", { value: "SetAction" });

        /**
         * Calls SetAction.
         * @function setAction
         * @memberof crac_protobuf.Roof
         * @instance
         * @param {crac_protobuf.IRoofRequest} request RoofRequest message or plain object
         * @returns {Promise<crac_protobuf.RoofResponse>} Promise
         * @variation 2
         */

        return Roof;
    })();

    /**
     * CurtainsAction enum.
     * @name crac_protobuf.CurtainsAction
     * @enum {number}
     * @property {number} CURTAIN_DEFAULT_ACTION=0 CURTAIN_DEFAULT_ACTION value
     * @property {number} ENABLE=1 ENABLE value
     * @property {number} DISABLE=2 DISABLE value
     * @property {number} CALIBRATE_CURTAINS=3 CALIBRATE_CURTAINS value
     * @property {number} CHECK_CURTAIN=4 CHECK_CURTAIN value
     */
    crac_protobuf.CurtainsAction = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CURTAIN_DEFAULT_ACTION"] = 0;
        values[valuesById[1] = "ENABLE"] = 1;
        values[valuesById[2] = "DISABLE"] = 2;
        values[valuesById[3] = "CALIBRATE_CURTAINS"] = 3;
        values[valuesById[4] = "CHECK_CURTAIN"] = 4;
        return values;
    })();

    /**
     * CurtainOrientation enum.
     * @name crac_protobuf.CurtainOrientation
     * @enum {number}
     * @property {number} CURTAIN_DEFAULT_ORIENTATION=0 CURTAIN_DEFAULT_ORIENTATION value
     * @property {number} CURTAIN_EAST=1 CURTAIN_EAST value
     * @property {number} CURTAIN_WEST=2 CURTAIN_WEST value
     */
    crac_protobuf.CurtainOrientation = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CURTAIN_DEFAULT_ORIENTATION"] = 0;
        values[valuesById[1] = "CURTAIN_EAST"] = 1;
        values[valuesById[2] = "CURTAIN_WEST"] = 2;
        return values;
    })();

    crac_protobuf.CurtainMovementEntryRequest = (function() {

        /**
         * Properties of a CurtainMovementEntryRequest.
         * @memberof crac_protobuf
         * @interface ICurtainMovementEntryRequest
         * @property {crac_protobuf.CurtainOrientation|null} [orientation] CurtainMovementEntryRequest orientation
         * @property {number|null} [steps] CurtainMovementEntryRequest steps
         */

        /**
         * Constructs a new CurtainMovementEntryRequest.
         * @memberof crac_protobuf
         * @classdesc Represents a CurtainMovementEntryRequest.
         * @implements ICurtainMovementEntryRequest
         * @constructor
         * @param {crac_protobuf.ICurtainMovementEntryRequest=} [properties] Properties to set
         */
        function CurtainMovementEntryRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CurtainMovementEntryRequest orientation.
         * @member {crac_protobuf.CurtainOrientation} orientation
         * @memberof crac_protobuf.CurtainMovementEntryRequest
         * @instance
         */
        CurtainMovementEntryRequest.prototype.orientation = 0;

        /**
         * CurtainMovementEntryRequest steps.
         * @member {number} steps
         * @memberof crac_protobuf.CurtainMovementEntryRequest
         * @instance
         */
        CurtainMovementEntryRequest.prototype.steps = 0;

        /**
         * Creates a new CurtainMovementEntryRequest instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.CurtainMovementEntryRequest
         * @static
         * @param {crac_protobuf.ICurtainMovementEntryRequest=} [properties] Properties to set
         * @returns {crac_protobuf.CurtainMovementEntryRequest} CurtainMovementEntryRequest instance
         */
        CurtainMovementEntryRequest.create = function create(properties) {
            return new CurtainMovementEntryRequest(properties);
        };

        /**
         * Encodes the specified CurtainMovementEntryRequest message. Does not implicitly {@link crac_protobuf.CurtainMovementEntryRequest.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.CurtainMovementEntryRequest
         * @static
         * @param {crac_protobuf.ICurtainMovementEntryRequest} message CurtainMovementEntryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurtainMovementEntryRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orientation != null && Object.hasOwnProperty.call(message, "orientation"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.orientation);
            if (message.steps != null && Object.hasOwnProperty.call(message, "steps"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.steps);
            return writer;
        };

        /**
         * Encodes the specified CurtainMovementEntryRequest message, length delimited. Does not implicitly {@link crac_protobuf.CurtainMovementEntryRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.CurtainMovementEntryRequest
         * @static
         * @param {crac_protobuf.ICurtainMovementEntryRequest} message CurtainMovementEntryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurtainMovementEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CurtainMovementEntryRequest message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.CurtainMovementEntryRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.CurtainMovementEntryRequest} CurtainMovementEntryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurtainMovementEntryRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.CurtainMovementEntryRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.orientation = reader.int32();
                        break;
                    }
                case 2: {
                        message.steps = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CurtainMovementEntryRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.CurtainMovementEntryRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.CurtainMovementEntryRequest} CurtainMovementEntryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurtainMovementEntryRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CurtainMovementEntryRequest message.
         * @function verify
         * @memberof crac_protobuf.CurtainMovementEntryRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CurtainMovementEntryRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                switch (message.orientation) {
                default:
                    return "orientation: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.steps != null && message.hasOwnProperty("steps"))
                if (!$util.isInteger(message.steps))
                    return "steps: integer expected";
            return null;
        };

        /**
         * Creates a CurtainMovementEntryRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.CurtainMovementEntryRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.CurtainMovementEntryRequest} CurtainMovementEntryRequest
         */
        CurtainMovementEntryRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.CurtainMovementEntryRequest)
                return object;
            let message = new $root.crac_protobuf.CurtainMovementEntryRequest();
            switch (object.orientation) {
            default:
                if (typeof object.orientation === "number") {
                    message.orientation = object.orientation;
                    break;
                }
                break;
            case "CURTAIN_DEFAULT_ORIENTATION":
            case 0:
                message.orientation = 0;
                break;
            case "CURTAIN_EAST":
            case 1:
                message.orientation = 1;
                break;
            case "CURTAIN_WEST":
            case 2:
                message.orientation = 2;
                break;
            }
            if (object.steps != null)
                message.steps = object.steps | 0;
            return message;
        };

        /**
         * Creates a plain object from a CurtainMovementEntryRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.CurtainMovementEntryRequest
         * @static
         * @param {crac_protobuf.CurtainMovementEntryRequest} message CurtainMovementEntryRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CurtainMovementEntryRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.orientation = options.enums === String ? "CURTAIN_DEFAULT_ORIENTATION" : 0;
                object.steps = 0;
            }
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                object.orientation = options.enums === String ? $root.crac_protobuf.CurtainOrientation[message.orientation] === undefined ? message.orientation : $root.crac_protobuf.CurtainOrientation[message.orientation] : message.orientation;
            if (message.steps != null && message.hasOwnProperty("steps"))
                object.steps = message.steps;
            return object;
        };

        /**
         * Converts this CurtainMovementEntryRequest to JSON.
         * @function toJSON
         * @memberof crac_protobuf.CurtainMovementEntryRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CurtainMovementEntryRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CurtainMovementEntryRequest
         * @function getTypeUrl
         * @memberof crac_protobuf.CurtainMovementEntryRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CurtainMovementEntryRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.CurtainMovementEntryRequest";
        };

        return CurtainMovementEntryRequest;
    })();

    crac_protobuf.CurtainsRequest = (function() {

        /**
         * Properties of a CurtainsRequest.
         * @memberof crac_protobuf
         * @interface ICurtainsRequest
         * @property {crac_protobuf.CurtainsAction|null} [action] CurtainsRequest action
         */

        /**
         * Constructs a new CurtainsRequest.
         * @memberof crac_protobuf
         * @classdesc Represents a CurtainsRequest.
         * @implements ICurtainsRequest
         * @constructor
         * @param {crac_protobuf.ICurtainsRequest=} [properties] Properties to set
         */
        function CurtainsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CurtainsRequest action.
         * @member {crac_protobuf.CurtainsAction} action
         * @memberof crac_protobuf.CurtainsRequest
         * @instance
         */
        CurtainsRequest.prototype.action = 0;

        /**
         * Creates a new CurtainsRequest instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.CurtainsRequest
         * @static
         * @param {crac_protobuf.ICurtainsRequest=} [properties] Properties to set
         * @returns {crac_protobuf.CurtainsRequest} CurtainsRequest instance
         */
        CurtainsRequest.create = function create(properties) {
            return new CurtainsRequest(properties);
        };

        /**
         * Encodes the specified CurtainsRequest message. Does not implicitly {@link crac_protobuf.CurtainsRequest.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.CurtainsRequest
         * @static
         * @param {crac_protobuf.ICurtainsRequest} message CurtainsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurtainsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
            return writer;
        };

        /**
         * Encodes the specified CurtainsRequest message, length delimited. Does not implicitly {@link crac_protobuf.CurtainsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.CurtainsRequest
         * @static
         * @param {crac_protobuf.ICurtainsRequest} message CurtainsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurtainsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CurtainsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.CurtainsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.CurtainsRequest} CurtainsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurtainsRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.CurtainsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.action = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CurtainsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.CurtainsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.CurtainsRequest} CurtainsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurtainsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CurtainsRequest message.
         * @function verify
         * @memberof crac_protobuf.CurtainsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CurtainsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action"))
                switch (message.action) {
                default:
                    return "action: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a CurtainsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.CurtainsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.CurtainsRequest} CurtainsRequest
         */
        CurtainsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.CurtainsRequest)
                return object;
            let message = new $root.crac_protobuf.CurtainsRequest();
            switch (object.action) {
            default:
                if (typeof object.action === "number") {
                    message.action = object.action;
                    break;
                }
                break;
            case "CURTAIN_DEFAULT_ACTION":
            case 0:
                message.action = 0;
                break;
            case "ENABLE":
            case 1:
                message.action = 1;
                break;
            case "DISABLE":
            case 2:
                message.action = 2;
                break;
            case "CALIBRATE_CURTAINS":
            case 3:
                message.action = 3;
                break;
            case "CHECK_CURTAIN":
            case 4:
                message.action = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CurtainsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.CurtainsRequest
         * @static
         * @param {crac_protobuf.CurtainsRequest} message CurtainsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CurtainsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.action = options.enums === String ? "CURTAIN_DEFAULT_ACTION" : 0;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = options.enums === String ? $root.crac_protobuf.CurtainsAction[message.action] === undefined ? message.action : $root.crac_protobuf.CurtainsAction[message.action] : message.action;
            return object;
        };

        /**
         * Converts this CurtainsRequest to JSON.
         * @function toJSON
         * @memberof crac_protobuf.CurtainsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CurtainsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CurtainsRequest
         * @function getTypeUrl
         * @memberof crac_protobuf.CurtainsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CurtainsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.CurtainsRequest";
        };

        return CurtainsRequest;
    })();

    crac_protobuf.CurtainsMovementRequest = (function() {

        /**
         * Properties of a CurtainsMovementRequest.
         * @memberof crac_protobuf
         * @interface ICurtainsMovementRequest
         * @property {Array.<crac_protobuf.ICurtainMovementEntryRequest>|null} [curtains] CurtainsMovementRequest curtains
         */

        /**
         * Constructs a new CurtainsMovementRequest.
         * @memberof crac_protobuf
         * @classdesc Represents a CurtainsMovementRequest.
         * @implements ICurtainsMovementRequest
         * @constructor
         * @param {crac_protobuf.ICurtainsMovementRequest=} [properties] Properties to set
         */
        function CurtainsMovementRequest(properties) {
            this.curtains = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CurtainsMovementRequest curtains.
         * @member {Array.<crac_protobuf.ICurtainMovementEntryRequest>} curtains
         * @memberof crac_protobuf.CurtainsMovementRequest
         * @instance
         */
        CurtainsMovementRequest.prototype.curtains = $util.emptyArray;

        /**
         * Creates a new CurtainsMovementRequest instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.CurtainsMovementRequest
         * @static
         * @param {crac_protobuf.ICurtainsMovementRequest=} [properties] Properties to set
         * @returns {crac_protobuf.CurtainsMovementRequest} CurtainsMovementRequest instance
         */
        CurtainsMovementRequest.create = function create(properties) {
            return new CurtainsMovementRequest(properties);
        };

        /**
         * Encodes the specified CurtainsMovementRequest message. Does not implicitly {@link crac_protobuf.CurtainsMovementRequest.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.CurtainsMovementRequest
         * @static
         * @param {crac_protobuf.ICurtainsMovementRequest} message CurtainsMovementRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurtainsMovementRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.curtains != null && message.curtains.length)
                for (let i = 0; i < message.curtains.length; ++i)
                    $root.crac_protobuf.CurtainMovementEntryRequest.encode(message.curtains[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CurtainsMovementRequest message, length delimited. Does not implicitly {@link crac_protobuf.CurtainsMovementRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.CurtainsMovementRequest
         * @static
         * @param {crac_protobuf.ICurtainsMovementRequest} message CurtainsMovementRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurtainsMovementRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CurtainsMovementRequest message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.CurtainsMovementRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.CurtainsMovementRequest} CurtainsMovementRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurtainsMovementRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.CurtainsMovementRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.curtains && message.curtains.length))
                            message.curtains = [];
                        message.curtains.push($root.crac_protobuf.CurtainMovementEntryRequest.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CurtainsMovementRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.CurtainsMovementRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.CurtainsMovementRequest} CurtainsMovementRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurtainsMovementRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CurtainsMovementRequest message.
         * @function verify
         * @memberof crac_protobuf.CurtainsMovementRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CurtainsMovementRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.curtains != null && message.hasOwnProperty("curtains")) {
                if (!Array.isArray(message.curtains))
                    return "curtains: array expected";
                for (let i = 0; i < message.curtains.length; ++i) {
                    let error = $root.crac_protobuf.CurtainMovementEntryRequest.verify(message.curtains[i]);
                    if (error)
                        return "curtains." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CurtainsMovementRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.CurtainsMovementRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.CurtainsMovementRequest} CurtainsMovementRequest
         */
        CurtainsMovementRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.CurtainsMovementRequest)
                return object;
            let message = new $root.crac_protobuf.CurtainsMovementRequest();
            if (object.curtains) {
                if (!Array.isArray(object.curtains))
                    throw TypeError(".crac_protobuf.CurtainsMovementRequest.curtains: array expected");
                message.curtains = [];
                for (let i = 0; i < object.curtains.length; ++i) {
                    if (typeof object.curtains[i] !== "object")
                        throw TypeError(".crac_protobuf.CurtainsMovementRequest.curtains: object expected");
                    message.curtains[i] = $root.crac_protobuf.CurtainMovementEntryRequest.fromObject(object.curtains[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CurtainsMovementRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.CurtainsMovementRequest
         * @static
         * @param {crac_protobuf.CurtainsMovementRequest} message CurtainsMovementRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CurtainsMovementRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.curtains = [];
            if (message.curtains && message.curtains.length) {
                object.curtains = [];
                for (let j = 0; j < message.curtains.length; ++j)
                    object.curtains[j] = $root.crac_protobuf.CurtainMovementEntryRequest.toObject(message.curtains[j], options);
            }
            return object;
        };

        /**
         * Converts this CurtainsMovementRequest to JSON.
         * @function toJSON
         * @memberof crac_protobuf.CurtainsMovementRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CurtainsMovementRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CurtainsMovementRequest
         * @function getTypeUrl
         * @memberof crac_protobuf.CurtainsMovementRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CurtainsMovementRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.CurtainsMovementRequest";
        };

        return CurtainsMovementRequest;
    })();

    /**
     * CurtainStatus enum.
     * @name crac_protobuf.CurtainStatus
     * @enum {number}
     * @property {number} CURTAIN_DEFAULT_STATUS=0 CURTAIN_DEFAULT_STATUS value
     * @property {number} CURTAIN_DISABLED=1 CURTAIN_DISABLED value
     * @property {number} CURTAIN_CLOSED=2 CURTAIN_CLOSED value
     * @property {number} CURTAIN_STOPPED=3 CURTAIN_STOPPED value
     * @property {number} CURTAIN_OPENED=4 CURTAIN_OPENED value
     * @property {number} CURTAIN_CLOSING=5 CURTAIN_CLOSING value
     * @property {number} CURTAIN_OPENING=6 CURTAIN_OPENING value
     * @property {number} CURTAIN_DISABLING=7 CURTAIN_DISABLING value
     * @property {number} CURTAIN_DANGER=8 CURTAIN_DANGER value
     * @property {number} CURTAIN_ERROR=9 CURTAIN_ERROR value
     */
    crac_protobuf.CurtainStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CURTAIN_DEFAULT_STATUS"] = 0;
        values[valuesById[1] = "CURTAIN_DISABLED"] = 1;
        values[valuesById[2] = "CURTAIN_CLOSED"] = 2;
        values[valuesById[3] = "CURTAIN_STOPPED"] = 3;
        values[valuesById[4] = "CURTAIN_OPENED"] = 4;
        values[valuesById[5] = "CURTAIN_CLOSING"] = 5;
        values[valuesById[6] = "CURTAIN_OPENING"] = 6;
        values[valuesById[7] = "CURTAIN_DISABLING"] = 7;
        values[valuesById[8] = "CURTAIN_DANGER"] = 8;
        values[valuesById[9] = "CURTAIN_ERROR"] = 9;
        return values;
    })();

    crac_protobuf.CurtainEntryResponse = (function() {

        /**
         * Properties of a CurtainEntryResponse.
         * @memberof crac_protobuf
         * @interface ICurtainEntryResponse
         * @property {crac_protobuf.CurtainOrientation|null} [orientation] CurtainEntryResponse orientation
         * @property {number|null} [steps] CurtainEntryResponse steps
         * @property {crac_protobuf.CurtainStatus|null} [status] CurtainEntryResponse status
         */

        /**
         * Constructs a new CurtainEntryResponse.
         * @memberof crac_protobuf
         * @classdesc Represents a CurtainEntryResponse.
         * @implements ICurtainEntryResponse
         * @constructor
         * @param {crac_protobuf.ICurtainEntryResponse=} [properties] Properties to set
         */
        function CurtainEntryResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CurtainEntryResponse orientation.
         * @member {crac_protobuf.CurtainOrientation} orientation
         * @memberof crac_protobuf.CurtainEntryResponse
         * @instance
         */
        CurtainEntryResponse.prototype.orientation = 0;

        /**
         * CurtainEntryResponse steps.
         * @member {number} steps
         * @memberof crac_protobuf.CurtainEntryResponse
         * @instance
         */
        CurtainEntryResponse.prototype.steps = 0;

        /**
         * CurtainEntryResponse status.
         * @member {crac_protobuf.CurtainStatus} status
         * @memberof crac_protobuf.CurtainEntryResponse
         * @instance
         */
        CurtainEntryResponse.prototype.status = 0;

        /**
         * Creates a new CurtainEntryResponse instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.CurtainEntryResponse
         * @static
         * @param {crac_protobuf.ICurtainEntryResponse=} [properties] Properties to set
         * @returns {crac_protobuf.CurtainEntryResponse} CurtainEntryResponse instance
         */
        CurtainEntryResponse.create = function create(properties) {
            return new CurtainEntryResponse(properties);
        };

        /**
         * Encodes the specified CurtainEntryResponse message. Does not implicitly {@link crac_protobuf.CurtainEntryResponse.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.CurtainEntryResponse
         * @static
         * @param {crac_protobuf.ICurtainEntryResponse} message CurtainEntryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurtainEntryResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orientation != null && Object.hasOwnProperty.call(message, "orientation"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.orientation);
            if (message.steps != null && Object.hasOwnProperty.call(message, "steps"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.steps);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified CurtainEntryResponse message, length delimited. Does not implicitly {@link crac_protobuf.CurtainEntryResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.CurtainEntryResponse
         * @static
         * @param {crac_protobuf.ICurtainEntryResponse} message CurtainEntryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurtainEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CurtainEntryResponse message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.CurtainEntryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.CurtainEntryResponse} CurtainEntryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurtainEntryResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.CurtainEntryResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.orientation = reader.int32();
                        break;
                    }
                case 2: {
                        message.steps = reader.int32();
                        break;
                    }
                case 3: {
                        message.status = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CurtainEntryResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.CurtainEntryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.CurtainEntryResponse} CurtainEntryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurtainEntryResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CurtainEntryResponse message.
         * @function verify
         * @memberof crac_protobuf.CurtainEntryResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CurtainEntryResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                switch (message.orientation) {
                default:
                    return "orientation: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.steps != null && message.hasOwnProperty("steps"))
                if (!$util.isInteger(message.steps))
                    return "steps: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            return null;
        };

        /**
         * Creates a CurtainEntryResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.CurtainEntryResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.CurtainEntryResponse} CurtainEntryResponse
         */
        CurtainEntryResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.CurtainEntryResponse)
                return object;
            let message = new $root.crac_protobuf.CurtainEntryResponse();
            switch (object.orientation) {
            default:
                if (typeof object.orientation === "number") {
                    message.orientation = object.orientation;
                    break;
                }
                break;
            case "CURTAIN_DEFAULT_ORIENTATION":
            case 0:
                message.orientation = 0;
                break;
            case "CURTAIN_EAST":
            case 1:
                message.orientation = 1;
                break;
            case "CURTAIN_WEST":
            case 2:
                message.orientation = 2;
                break;
            }
            if (object.steps != null)
                message.steps = object.steps | 0;
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "CURTAIN_DEFAULT_STATUS":
            case 0:
                message.status = 0;
                break;
            case "CURTAIN_DISABLED":
            case 1:
                message.status = 1;
                break;
            case "CURTAIN_CLOSED":
            case 2:
                message.status = 2;
                break;
            case "CURTAIN_STOPPED":
            case 3:
                message.status = 3;
                break;
            case "CURTAIN_OPENED":
            case 4:
                message.status = 4;
                break;
            case "CURTAIN_CLOSING":
            case 5:
                message.status = 5;
                break;
            case "CURTAIN_OPENING":
            case 6:
                message.status = 6;
                break;
            case "CURTAIN_DISABLING":
            case 7:
                message.status = 7;
                break;
            case "CURTAIN_DANGER":
            case 8:
                message.status = 8;
                break;
            case "CURTAIN_ERROR":
            case 9:
                message.status = 9;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CurtainEntryResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.CurtainEntryResponse
         * @static
         * @param {crac_protobuf.CurtainEntryResponse} message CurtainEntryResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CurtainEntryResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.orientation = options.enums === String ? "CURTAIN_DEFAULT_ORIENTATION" : 0;
                object.steps = 0;
                object.status = options.enums === String ? "CURTAIN_DEFAULT_STATUS" : 0;
            }
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                object.orientation = options.enums === String ? $root.crac_protobuf.CurtainOrientation[message.orientation] === undefined ? message.orientation : $root.crac_protobuf.CurtainOrientation[message.orientation] : message.orientation;
            if (message.steps != null && message.hasOwnProperty("steps"))
                object.steps = message.steps;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.crac_protobuf.CurtainStatus[message.status] === undefined ? message.status : $root.crac_protobuf.CurtainStatus[message.status] : message.status;
            return object;
        };

        /**
         * Converts this CurtainEntryResponse to JSON.
         * @function toJSON
         * @memberof crac_protobuf.CurtainEntryResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CurtainEntryResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CurtainEntryResponse
         * @function getTypeUrl
         * @memberof crac_protobuf.CurtainEntryResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CurtainEntryResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.CurtainEntryResponse";
        };

        return CurtainEntryResponse;
    })();

    crac_protobuf.CurtainsResponse = (function() {

        /**
         * Properties of a CurtainsResponse.
         * @memberof crac_protobuf
         * @interface ICurtainsResponse
         * @property {Array.<crac_protobuf.ICurtainEntryResponse>|null} [curtains] CurtainsResponse curtains
         * @property {Array.<crac_protobuf.IButtonGui>|null} [buttonsGui] CurtainsResponse buttonsGui
         */

        /**
         * Constructs a new CurtainsResponse.
         * @memberof crac_protobuf
         * @classdesc Represents a CurtainsResponse.
         * @implements ICurtainsResponse
         * @constructor
         * @param {crac_protobuf.ICurtainsResponse=} [properties] Properties to set
         */
        function CurtainsResponse(properties) {
            this.curtains = [];
            this.buttonsGui = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CurtainsResponse curtains.
         * @member {Array.<crac_protobuf.ICurtainEntryResponse>} curtains
         * @memberof crac_protobuf.CurtainsResponse
         * @instance
         */
        CurtainsResponse.prototype.curtains = $util.emptyArray;

        /**
         * CurtainsResponse buttonsGui.
         * @member {Array.<crac_protobuf.IButtonGui>} buttonsGui
         * @memberof crac_protobuf.CurtainsResponse
         * @instance
         */
        CurtainsResponse.prototype.buttonsGui = $util.emptyArray;

        /**
         * Creates a new CurtainsResponse instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.CurtainsResponse
         * @static
         * @param {crac_protobuf.ICurtainsResponse=} [properties] Properties to set
         * @returns {crac_protobuf.CurtainsResponse} CurtainsResponse instance
         */
        CurtainsResponse.create = function create(properties) {
            return new CurtainsResponse(properties);
        };

        /**
         * Encodes the specified CurtainsResponse message. Does not implicitly {@link crac_protobuf.CurtainsResponse.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.CurtainsResponse
         * @static
         * @param {crac_protobuf.ICurtainsResponse} message CurtainsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurtainsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.curtains != null && message.curtains.length)
                for (let i = 0; i < message.curtains.length; ++i)
                    $root.crac_protobuf.CurtainEntryResponse.encode(message.curtains[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.buttonsGui != null && message.buttonsGui.length)
                for (let i = 0; i < message.buttonsGui.length; ++i)
                    $root.crac_protobuf.ButtonGui.encode(message.buttonsGui[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CurtainsResponse message, length delimited. Does not implicitly {@link crac_protobuf.CurtainsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.CurtainsResponse
         * @static
         * @param {crac_protobuf.ICurtainsResponse} message CurtainsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurtainsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CurtainsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.CurtainsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.CurtainsResponse} CurtainsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurtainsResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.CurtainsResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.curtains && message.curtains.length))
                            message.curtains = [];
                        message.curtains.push($root.crac_protobuf.CurtainEntryResponse.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.buttonsGui && message.buttonsGui.length))
                            message.buttonsGui = [];
                        message.buttonsGui.push($root.crac_protobuf.ButtonGui.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CurtainsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.CurtainsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.CurtainsResponse} CurtainsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurtainsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CurtainsResponse message.
         * @function verify
         * @memberof crac_protobuf.CurtainsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CurtainsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.curtains != null && message.hasOwnProperty("curtains")) {
                if (!Array.isArray(message.curtains))
                    return "curtains: array expected";
                for (let i = 0; i < message.curtains.length; ++i) {
                    let error = $root.crac_protobuf.CurtainEntryResponse.verify(message.curtains[i]);
                    if (error)
                        return "curtains." + error;
                }
            }
            if (message.buttonsGui != null && message.hasOwnProperty("buttonsGui")) {
                if (!Array.isArray(message.buttonsGui))
                    return "buttonsGui: array expected";
                for (let i = 0; i < message.buttonsGui.length; ++i) {
                    let error = $root.crac_protobuf.ButtonGui.verify(message.buttonsGui[i]);
                    if (error)
                        return "buttonsGui." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CurtainsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.CurtainsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.CurtainsResponse} CurtainsResponse
         */
        CurtainsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.CurtainsResponse)
                return object;
            let message = new $root.crac_protobuf.CurtainsResponse();
            if (object.curtains) {
                if (!Array.isArray(object.curtains))
                    throw TypeError(".crac_protobuf.CurtainsResponse.curtains: array expected");
                message.curtains = [];
                for (let i = 0; i < object.curtains.length; ++i) {
                    if (typeof object.curtains[i] !== "object")
                        throw TypeError(".crac_protobuf.CurtainsResponse.curtains: object expected");
                    message.curtains[i] = $root.crac_protobuf.CurtainEntryResponse.fromObject(object.curtains[i]);
                }
            }
            if (object.buttonsGui) {
                if (!Array.isArray(object.buttonsGui))
                    throw TypeError(".crac_protobuf.CurtainsResponse.buttonsGui: array expected");
                message.buttonsGui = [];
                for (let i = 0; i < object.buttonsGui.length; ++i) {
                    if (typeof object.buttonsGui[i] !== "object")
                        throw TypeError(".crac_protobuf.CurtainsResponse.buttonsGui: object expected");
                    message.buttonsGui[i] = $root.crac_protobuf.ButtonGui.fromObject(object.buttonsGui[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CurtainsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.CurtainsResponse
         * @static
         * @param {crac_protobuf.CurtainsResponse} message CurtainsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CurtainsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.curtains = [];
                object.buttonsGui = [];
            }
            if (message.curtains && message.curtains.length) {
                object.curtains = [];
                for (let j = 0; j < message.curtains.length; ++j)
                    object.curtains[j] = $root.crac_protobuf.CurtainEntryResponse.toObject(message.curtains[j], options);
            }
            if (message.buttonsGui && message.buttonsGui.length) {
                object.buttonsGui = [];
                for (let j = 0; j < message.buttonsGui.length; ++j)
                    object.buttonsGui[j] = $root.crac_protobuf.ButtonGui.toObject(message.buttonsGui[j], options);
            }
            return object;
        };

        /**
         * Converts this CurtainsResponse to JSON.
         * @function toJSON
         * @memberof crac_protobuf.CurtainsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CurtainsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CurtainsResponse
         * @function getTypeUrl
         * @memberof crac_protobuf.CurtainsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CurtainsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.CurtainsResponse";
        };

        return CurtainsResponse;
    })();

    crac_protobuf.Curtain = (function() {

        /**
         * Constructs a new Curtain service.
         * @memberof crac_protobuf
         * @classdesc Represents a Curtain
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Curtain(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Curtain.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Curtain;

        /**
         * Creates new Curtain service using the specified rpc implementation.
         * @function create
         * @memberof crac_protobuf.Curtain
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Curtain} RPC service. Useful where requests and/or responses are streamed.
         */
        Curtain.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link crac_protobuf.Curtain#setAction}.
         * @memberof crac_protobuf.Curtain
         * @typedef SetActionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {crac_protobuf.CurtainsResponse} [response] CurtainsResponse
         */

        /**
         * Calls SetAction.
         * @function setAction
         * @memberof crac_protobuf.Curtain
         * @instance
         * @param {crac_protobuf.ICurtainsRequest} request CurtainsRequest message or plain object
         * @param {crac_protobuf.Curtain.SetActionCallback} callback Node-style callback called with the error, if any, and CurtainsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Curtain.prototype.setAction = function setAction(request, callback) {
            return this.rpcCall(setAction, $root.crac_protobuf.CurtainsRequest, $root.crac_protobuf.CurtainsResponse, request, callback);
        }, "name", { value: "SetAction" });

        /**
         * Calls SetAction.
         * @function setAction
         * @memberof crac_protobuf.Curtain
         * @instance
         * @param {crac_protobuf.ICurtainsRequest} request CurtainsRequest message or plain object
         * @returns {Promise<crac_protobuf.CurtainsResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link crac_protobuf.Curtain#move}.
         * @memberof crac_protobuf.Curtain
         * @typedef MoveCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {crac_protobuf.CurtainsResponse} [response] CurtainsResponse
         */

        /**
         * Calls Move.
         * @function move
         * @memberof crac_protobuf.Curtain
         * @instance
         * @param {crac_protobuf.ICurtainsMovementRequest} request CurtainsMovementRequest message or plain object
         * @param {crac_protobuf.Curtain.MoveCallback} callback Node-style callback called with the error, if any, and CurtainsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Curtain.prototype.move = function move(request, callback) {
            return this.rpcCall(move, $root.crac_protobuf.CurtainsMovementRequest, $root.crac_protobuf.CurtainsResponse, request, callback);
        }, "name", { value: "Move" });

        /**
         * Calls Move.
         * @function move
         * @memberof crac_protobuf.Curtain
         * @instance
         * @param {crac_protobuf.ICurtainsMovementRequest} request CurtainsMovementRequest message or plain object
         * @returns {Promise<crac_protobuf.CurtainsResponse>} Promise
         * @variation 2
         */

        return Curtain;
    })();

    crac_protobuf.Chart = (function() {

        /**
         * Properties of a Chart.
         * @memberof crac_protobuf
         * @interface IChart
         * @property {number|null} [value] Chart value
         * @property {string|null} [title] Chart title
         * @property {number|null} [min] Chart min
         * @property {number|null} [max] Chart max
         * @property {string|null} [urn] Chart urn
         * @property {Array.<crac_protobuf.IThreshold>|null} [thresholds] Chart thresholds
         * @property {string|null} [unitOfMeasurement] Chart unitOfMeasurement
         * @property {crac_protobuf.ChartStatus|null} [status] Chart status
         */

        /**
         * Constructs a new Chart.
         * @memberof crac_protobuf
         * @classdesc Represents a Chart.
         * @implements IChart
         * @constructor
         * @param {crac_protobuf.IChart=} [properties] Properties to set
         */
        function Chart(properties) {
            this.thresholds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chart value.
         * @member {number} value
         * @memberof crac_protobuf.Chart
         * @instance
         */
        Chart.prototype.value = 0;

        /**
         * Chart title.
         * @member {string} title
         * @memberof crac_protobuf.Chart
         * @instance
         */
        Chart.prototype.title = "";

        /**
         * Chart min.
         * @member {number} min
         * @memberof crac_protobuf.Chart
         * @instance
         */
        Chart.prototype.min = 0;

        /**
         * Chart max.
         * @member {number} max
         * @memberof crac_protobuf.Chart
         * @instance
         */
        Chart.prototype.max = 0;

        /**
         * Chart urn.
         * @member {string} urn
         * @memberof crac_protobuf.Chart
         * @instance
         */
        Chart.prototype.urn = "";

        /**
         * Chart thresholds.
         * @member {Array.<crac_protobuf.IThreshold>} thresholds
         * @memberof crac_protobuf.Chart
         * @instance
         */
        Chart.prototype.thresholds = $util.emptyArray;

        /**
         * Chart unitOfMeasurement.
         * @member {string} unitOfMeasurement
         * @memberof crac_protobuf.Chart
         * @instance
         */
        Chart.prototype.unitOfMeasurement = "";

        /**
         * Chart status.
         * @member {crac_protobuf.ChartStatus} status
         * @memberof crac_protobuf.Chart
         * @instance
         */
        Chart.prototype.status = 0;

        /**
         * Creates a new Chart instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.Chart
         * @static
         * @param {crac_protobuf.IChart=} [properties] Properties to set
         * @returns {crac_protobuf.Chart} Chart instance
         */
        Chart.create = function create(properties) {
            return new Chart(properties);
        };

        /**
         * Encodes the specified Chart message. Does not implicitly {@link crac_protobuf.Chart.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.Chart
         * @static
         * @param {crac_protobuf.IChart} message Chart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.min != null && Object.hasOwnProperty.call(message, "min"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.min);
            if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.max);
            if (message.urn != null && Object.hasOwnProperty.call(message, "urn"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.urn);
            if (message.thresholds != null && message.thresholds.length)
                for (let i = 0; i < message.thresholds.length; ++i)
                    $root.crac_protobuf.Threshold.encode(message.thresholds[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.unitOfMeasurement != null && Object.hasOwnProperty.call(message, "unitOfMeasurement"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.unitOfMeasurement);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified Chart message, length delimited. Does not implicitly {@link crac_protobuf.Chart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.Chart
         * @static
         * @param {crac_protobuf.IChart} message Chart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Chart message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.Chart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.Chart} Chart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chart.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.Chart();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.float();
                        break;
                    }
                case 2: {
                        message.title = reader.string();
                        break;
                    }
                case 3: {
                        message.min = reader.float();
                        break;
                    }
                case 4: {
                        message.max = reader.float();
                        break;
                    }
                case 5: {
                        message.urn = reader.string();
                        break;
                    }
                case 6: {
                        if (!(message.thresholds && message.thresholds.length))
                            message.thresholds = [];
                        message.thresholds.push($root.crac_protobuf.Threshold.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        message.unitOfMeasurement = reader.string();
                        break;
                    }
                case 8: {
                        message.status = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Chart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.Chart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.Chart} Chart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Chart message.
         * @function verify
         * @memberof crac_protobuf.Chart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Chart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "number")
                    return "value: number expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.min != null && message.hasOwnProperty("min"))
                if (typeof message.min !== "number")
                    return "min: number expected";
            if (message.max != null && message.hasOwnProperty("max"))
                if (typeof message.max !== "number")
                    return "max: number expected";
            if (message.urn != null && message.hasOwnProperty("urn"))
                if (!$util.isString(message.urn))
                    return "urn: string expected";
            if (message.thresholds != null && message.hasOwnProperty("thresholds")) {
                if (!Array.isArray(message.thresholds))
                    return "thresholds: array expected";
                for (let i = 0; i < message.thresholds.length; ++i) {
                    let error = $root.crac_protobuf.Threshold.verify(message.thresholds[i]);
                    if (error)
                        return "thresholds." + error;
                }
            }
            if (message.unitOfMeasurement != null && message.hasOwnProperty("unitOfMeasurement"))
                if (!$util.isString(message.unitOfMeasurement))
                    return "unitOfMeasurement: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a Chart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.Chart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.Chart} Chart
         */
        Chart.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.Chart)
                return object;
            let message = new $root.crac_protobuf.Chart();
            if (object.value != null)
                message.value = Number(object.value);
            if (object.title != null)
                message.title = String(object.title);
            if (object.min != null)
                message.min = Number(object.min);
            if (object.max != null)
                message.max = Number(object.max);
            if (object.urn != null)
                message.urn = String(object.urn);
            if (object.thresholds) {
                if (!Array.isArray(object.thresholds))
                    throw TypeError(".crac_protobuf.Chart.thresholds: array expected");
                message.thresholds = [];
                for (let i = 0; i < object.thresholds.length; ++i) {
                    if (typeof object.thresholds[i] !== "object")
                        throw TypeError(".crac_protobuf.Chart.thresholds: object expected");
                    message.thresholds[i] = $root.crac_protobuf.Threshold.fromObject(object.thresholds[i]);
                }
            }
            if (object.unitOfMeasurement != null)
                message.unitOfMeasurement = String(object.unitOfMeasurement);
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "CHART_STATUS_UNSPECIFIED":
            case 0:
                message.status = 0;
                break;
            case "CHART_STATUS_NORMAL":
            case 1:
                message.status = 1;
                break;
            case "CHART_STATUS_WARNING":
            case 2:
                message.status = 2;
                break;
            case "CHART_STATUS_DANGER":
            case 3:
                message.status = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Chart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.Chart
         * @static
         * @param {crac_protobuf.Chart} message Chart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Chart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.thresholds = [];
            if (options.defaults) {
                object.value = 0;
                object.title = "";
                object.min = 0;
                object.max = 0;
                object.urn = "";
                object.unitOfMeasurement = "";
                object.status = options.enums === String ? "CHART_STATUS_UNSPECIFIED" : 0;
            }
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.min != null && message.hasOwnProperty("min"))
                object.min = options.json && !isFinite(message.min) ? String(message.min) : message.min;
            if (message.max != null && message.hasOwnProperty("max"))
                object.max = options.json && !isFinite(message.max) ? String(message.max) : message.max;
            if (message.urn != null && message.hasOwnProperty("urn"))
                object.urn = message.urn;
            if (message.thresholds && message.thresholds.length) {
                object.thresholds = [];
                for (let j = 0; j < message.thresholds.length; ++j)
                    object.thresholds[j] = $root.crac_protobuf.Threshold.toObject(message.thresholds[j], options);
            }
            if (message.unitOfMeasurement != null && message.hasOwnProperty("unitOfMeasurement"))
                object.unitOfMeasurement = message.unitOfMeasurement;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.crac_protobuf.ChartStatus[message.status] === undefined ? message.status : $root.crac_protobuf.ChartStatus[message.status] : message.status;
            return object;
        };

        /**
         * Converts this Chart to JSON.
         * @function toJSON
         * @memberof crac_protobuf.Chart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Chart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Chart
         * @function getTypeUrl
         * @memberof crac_protobuf.Chart
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Chart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.Chart";
        };

        return Chart;
    })();

    crac_protobuf.Threshold = (function() {

        /**
         * Properties of a Threshold.
         * @memberof crac_protobuf
         * @interface IThreshold
         * @property {crac_protobuf.ThresholdType|null} [thresholdType] Threshold thresholdType
         * @property {number|null} [upperBound] Threshold upperBound
         * @property {number|null} [lowerBound] Threshold lowerBound
         */

        /**
         * Constructs a new Threshold.
         * @memberof crac_protobuf
         * @classdesc Represents a Threshold.
         * @implements IThreshold
         * @constructor
         * @param {crac_protobuf.IThreshold=} [properties] Properties to set
         */
        function Threshold(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Threshold thresholdType.
         * @member {crac_protobuf.ThresholdType} thresholdType
         * @memberof crac_protobuf.Threshold
         * @instance
         */
        Threshold.prototype.thresholdType = 0;

        /**
         * Threshold upperBound.
         * @member {number} upperBound
         * @memberof crac_protobuf.Threshold
         * @instance
         */
        Threshold.prototype.upperBound = 0;

        /**
         * Threshold lowerBound.
         * @member {number} lowerBound
         * @memberof crac_protobuf.Threshold
         * @instance
         */
        Threshold.prototype.lowerBound = 0;

        /**
         * Creates a new Threshold instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.Threshold
         * @static
         * @param {crac_protobuf.IThreshold=} [properties] Properties to set
         * @returns {crac_protobuf.Threshold} Threshold instance
         */
        Threshold.create = function create(properties) {
            return new Threshold(properties);
        };

        /**
         * Encodes the specified Threshold message. Does not implicitly {@link crac_protobuf.Threshold.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.Threshold
         * @static
         * @param {crac_protobuf.IThreshold} message Threshold message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Threshold.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.thresholdType != null && Object.hasOwnProperty.call(message, "thresholdType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.thresholdType);
            if (message.upperBound != null && Object.hasOwnProperty.call(message, "upperBound"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.upperBound);
            if (message.lowerBound != null && Object.hasOwnProperty.call(message, "lowerBound"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.lowerBound);
            return writer;
        };

        /**
         * Encodes the specified Threshold message, length delimited. Does not implicitly {@link crac_protobuf.Threshold.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.Threshold
         * @static
         * @param {crac_protobuf.IThreshold} message Threshold message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Threshold.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Threshold message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.Threshold
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.Threshold} Threshold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Threshold.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.Threshold();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.thresholdType = reader.int32();
                        break;
                    }
                case 2: {
                        message.upperBound = reader.float();
                        break;
                    }
                case 3: {
                        message.lowerBound = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Threshold message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.Threshold
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.Threshold} Threshold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Threshold.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Threshold message.
         * @function verify
         * @memberof crac_protobuf.Threshold
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Threshold.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.thresholdType != null && message.hasOwnProperty("thresholdType"))
                switch (message.thresholdType) {
                default:
                    return "thresholdType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.upperBound != null && message.hasOwnProperty("upperBound"))
                if (typeof message.upperBound !== "number")
                    return "upperBound: number expected";
            if (message.lowerBound != null && message.hasOwnProperty("lowerBound"))
                if (typeof message.lowerBound !== "number")
                    return "lowerBound: number expected";
            return null;
        };

        /**
         * Creates a Threshold message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.Threshold
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.Threshold} Threshold
         */
        Threshold.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.Threshold)
                return object;
            let message = new $root.crac_protobuf.Threshold();
            switch (object.thresholdType) {
            default:
                if (typeof object.thresholdType === "number") {
                    message.thresholdType = object.thresholdType;
                    break;
                }
                break;
            case "THRESHOLD_TYPE_UNSPECIFIED":
            case 0:
                message.thresholdType = 0;
                break;
            case "THRESHOLD_TYPE_NORMAL":
            case 1:
                message.thresholdType = 1;
                break;
            case "THRESHOLD_TYPE_WARNING":
            case 2:
                message.thresholdType = 2;
                break;
            case "THRESHOLD_TYPE_DANGER":
            case 3:
                message.thresholdType = 3;
                break;
            }
            if (object.upperBound != null)
                message.upperBound = Number(object.upperBound);
            if (object.lowerBound != null)
                message.lowerBound = Number(object.lowerBound);
            return message;
        };

        /**
         * Creates a plain object from a Threshold message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.Threshold
         * @static
         * @param {crac_protobuf.Threshold} message Threshold
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Threshold.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.thresholdType = options.enums === String ? "THRESHOLD_TYPE_UNSPECIFIED" : 0;
                object.upperBound = 0;
                object.lowerBound = 0;
            }
            if (message.thresholdType != null && message.hasOwnProperty("thresholdType"))
                object.thresholdType = options.enums === String ? $root.crac_protobuf.ThresholdType[message.thresholdType] === undefined ? message.thresholdType : $root.crac_protobuf.ThresholdType[message.thresholdType] : message.thresholdType;
            if (message.upperBound != null && message.hasOwnProperty("upperBound"))
                object.upperBound = options.json && !isFinite(message.upperBound) ? String(message.upperBound) : message.upperBound;
            if (message.lowerBound != null && message.hasOwnProperty("lowerBound"))
                object.lowerBound = options.json && !isFinite(message.lowerBound) ? String(message.lowerBound) : message.lowerBound;
            return object;
        };

        /**
         * Converts this Threshold to JSON.
         * @function toJSON
         * @memberof crac_protobuf.Threshold
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Threshold.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Threshold
         * @function getTypeUrl
         * @memberof crac_protobuf.Threshold
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Threshold.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.Threshold";
        };

        return Threshold;
    })();

    /**
     * ChartStatus enum.
     * @name crac_protobuf.ChartStatus
     * @enum {number}
     * @property {number} CHART_STATUS_UNSPECIFIED=0 CHART_STATUS_UNSPECIFIED value
     * @property {number} CHART_STATUS_NORMAL=1 CHART_STATUS_NORMAL value
     * @property {number} CHART_STATUS_WARNING=2 CHART_STATUS_WARNING value
     * @property {number} CHART_STATUS_DANGER=3 CHART_STATUS_DANGER value
     */
    crac_protobuf.ChartStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CHART_STATUS_UNSPECIFIED"] = 0;
        values[valuesById[1] = "CHART_STATUS_NORMAL"] = 1;
        values[valuesById[2] = "CHART_STATUS_WARNING"] = 2;
        values[valuesById[3] = "CHART_STATUS_DANGER"] = 3;
        return values;
    })();

    /**
     * ThresholdType enum.
     * @name crac_protobuf.ThresholdType
     * @enum {number}
     * @property {number} THRESHOLD_TYPE_UNSPECIFIED=0 THRESHOLD_TYPE_UNSPECIFIED value
     * @property {number} THRESHOLD_TYPE_NORMAL=1 THRESHOLD_TYPE_NORMAL value
     * @property {number} THRESHOLD_TYPE_WARNING=2 THRESHOLD_TYPE_WARNING value
     * @property {number} THRESHOLD_TYPE_DANGER=3 THRESHOLD_TYPE_DANGER value
     */
    crac_protobuf.ThresholdType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "THRESHOLD_TYPE_UNSPECIFIED"] = 0;
        values[valuesById[1] = "THRESHOLD_TYPE_NORMAL"] = 1;
        values[valuesById[2] = "THRESHOLD_TYPE_WARNING"] = 2;
        values[valuesById[3] = "THRESHOLD_TYPE_DANGER"] = 3;
        return values;
    })();

    /**
     * WeatherStatus enum.
     * @name crac_protobuf.WeatherStatus
     * @enum {number}
     * @property {number} WEATHER_STATUS_UNSPECIFIED=0 WEATHER_STATUS_UNSPECIFIED value
     * @property {number} WEATHER_STATUS_NORMAL=1 WEATHER_STATUS_NORMAL value
     * @property {number} WEATHER_STATUS_WARNING=2 WEATHER_STATUS_WARNING value
     * @property {number} WEATHER_STATUS_DANGER=3 WEATHER_STATUS_DANGER value
     */
    crac_protobuf.WeatherStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WEATHER_STATUS_UNSPECIFIED"] = 0;
        values[valuesById[1] = "WEATHER_STATUS_NORMAL"] = 1;
        values[valuesById[2] = "WEATHER_STATUS_WARNING"] = 2;
        values[valuesById[3] = "WEATHER_STATUS_DANGER"] = 3;
        return values;
    })();

    crac_protobuf.WeatherRequest = (function() {

        /**
         * Properties of a WeatherRequest.
         * @memberof crac_protobuf
         * @interface IWeatherRequest
         */

        /**
         * Constructs a new WeatherRequest.
         * @memberof crac_protobuf
         * @classdesc Represents a WeatherRequest.
         * @implements IWeatherRequest
         * @constructor
         * @param {crac_protobuf.IWeatherRequest=} [properties] Properties to set
         */
        function WeatherRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new WeatherRequest instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.WeatherRequest
         * @static
         * @param {crac_protobuf.IWeatherRequest=} [properties] Properties to set
         * @returns {crac_protobuf.WeatherRequest} WeatherRequest instance
         */
        WeatherRequest.create = function create(properties) {
            return new WeatherRequest(properties);
        };

        /**
         * Encodes the specified WeatherRequest message. Does not implicitly {@link crac_protobuf.WeatherRequest.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.WeatherRequest
         * @static
         * @param {crac_protobuf.IWeatherRequest} message WeatherRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeatherRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified WeatherRequest message, length delimited. Does not implicitly {@link crac_protobuf.WeatherRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.WeatherRequest
         * @static
         * @param {crac_protobuf.IWeatherRequest} message WeatherRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeatherRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeatherRequest message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.WeatherRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.WeatherRequest} WeatherRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeatherRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.WeatherRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WeatherRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.WeatherRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.WeatherRequest} WeatherRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeatherRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeatherRequest message.
         * @function verify
         * @memberof crac_protobuf.WeatherRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeatherRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a WeatherRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.WeatherRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.WeatherRequest} WeatherRequest
         */
        WeatherRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.WeatherRequest)
                return object;
            return new $root.crac_protobuf.WeatherRequest();
        };

        /**
         * Creates a plain object from a WeatherRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.WeatherRequest
         * @static
         * @param {crac_protobuf.WeatherRequest} message WeatherRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeatherRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this WeatherRequest to JSON.
         * @function toJSON
         * @memberof crac_protobuf.WeatherRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeatherRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WeatherRequest
         * @function getTypeUrl
         * @memberof crac_protobuf.WeatherRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WeatherRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.WeatherRequest";
        };

        return WeatherRequest;
    })();

    crac_protobuf.WeatherResponse = (function() {

        /**
         * Properties of a WeatherResponse.
         * @memberof crac_protobuf
         * @interface IWeatherResponse
         * @property {number|null} [updatedAt] WeatherResponse updatedAt
         * @property {Array.<crac_protobuf.IChart>|null} [charts] WeatherResponse charts
         * @property {crac_protobuf.WeatherStatus|null} [status] WeatherResponse status
         * @property {number|null} [interval] WeatherResponse interval
         */

        /**
         * Constructs a new WeatherResponse.
         * @memberof crac_protobuf
         * @classdesc Represents a WeatherResponse.
         * @implements IWeatherResponse
         * @constructor
         * @param {crac_protobuf.IWeatherResponse=} [properties] Properties to set
         */
        function WeatherResponse(properties) {
            this.charts = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WeatherResponse updatedAt.
         * @member {number} updatedAt
         * @memberof crac_protobuf.WeatherResponse
         * @instance
         */
        WeatherResponse.prototype.updatedAt = 0;

        /**
         * WeatherResponse charts.
         * @member {Array.<crac_protobuf.IChart>} charts
         * @memberof crac_protobuf.WeatherResponse
         * @instance
         */
        WeatherResponse.prototype.charts = $util.emptyArray;

        /**
         * WeatherResponse status.
         * @member {crac_protobuf.WeatherStatus} status
         * @memberof crac_protobuf.WeatherResponse
         * @instance
         */
        WeatherResponse.prototype.status = 0;

        /**
         * WeatherResponse interval.
         * @member {number} interval
         * @memberof crac_protobuf.WeatherResponse
         * @instance
         */
        WeatherResponse.prototype.interval = 0;

        /**
         * Creates a new WeatherResponse instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.WeatherResponse
         * @static
         * @param {crac_protobuf.IWeatherResponse=} [properties] Properties to set
         * @returns {crac_protobuf.WeatherResponse} WeatherResponse instance
         */
        WeatherResponse.create = function create(properties) {
            return new WeatherResponse(properties);
        };

        /**
         * Encodes the specified WeatherResponse message. Does not implicitly {@link crac_protobuf.WeatherResponse.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.WeatherResponse
         * @static
         * @param {crac_protobuf.IWeatherResponse} message WeatherResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeatherResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.updatedAt);
            if (message.charts != null && message.charts.length)
                for (let i = 0; i < message.charts.length; ++i)
                    $root.crac_protobuf.Chart.encode(message.charts[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.status);
            if (message.interval != null && Object.hasOwnProperty.call(message, "interval"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.interval);
            return writer;
        };

        /**
         * Encodes the specified WeatherResponse message, length delimited. Does not implicitly {@link crac_protobuf.WeatherResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.WeatherResponse
         * @static
         * @param {crac_protobuf.IWeatherResponse} message WeatherResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeatherResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeatherResponse message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.WeatherResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.WeatherResponse} WeatherResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeatherResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.WeatherResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 7: {
                        message.updatedAt = reader.int32();
                        break;
                    }
                case 8: {
                        if (!(message.charts && message.charts.length))
                            message.charts = [];
                        message.charts.push($root.crac_protobuf.Chart.decode(reader, reader.uint32()));
                        break;
                    }
                case 9: {
                        message.status = reader.int32();
                        break;
                    }
                case 10: {
                        message.interval = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WeatherResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.WeatherResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.WeatherResponse} WeatherResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeatherResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeatherResponse message.
         * @function verify
         * @memberof crac_protobuf.WeatherResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeatherResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isInteger(message.updatedAt))
                    return "updatedAt: integer expected";
            if (message.charts != null && message.hasOwnProperty("charts")) {
                if (!Array.isArray(message.charts))
                    return "charts: array expected";
                for (let i = 0; i < message.charts.length; ++i) {
                    let error = $root.crac_protobuf.Chart.verify(message.charts[i]);
                    if (error)
                        return "charts." + error;
                }
            }
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.interval != null && message.hasOwnProperty("interval"))
                if (!$util.isInteger(message.interval))
                    return "interval: integer expected";
            return null;
        };

        /**
         * Creates a WeatherResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.WeatherResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.WeatherResponse} WeatherResponse
         */
        WeatherResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.WeatherResponse)
                return object;
            let message = new $root.crac_protobuf.WeatherResponse();
            if (object.updatedAt != null)
                message.updatedAt = object.updatedAt | 0;
            if (object.charts) {
                if (!Array.isArray(object.charts))
                    throw TypeError(".crac_protobuf.WeatherResponse.charts: array expected");
                message.charts = [];
                for (let i = 0; i < object.charts.length; ++i) {
                    if (typeof object.charts[i] !== "object")
                        throw TypeError(".crac_protobuf.WeatherResponse.charts: object expected");
                    message.charts[i] = $root.crac_protobuf.Chart.fromObject(object.charts[i]);
                }
            }
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "WEATHER_STATUS_UNSPECIFIED":
            case 0:
                message.status = 0;
                break;
            case "WEATHER_STATUS_NORMAL":
            case 1:
                message.status = 1;
                break;
            case "WEATHER_STATUS_WARNING":
            case 2:
                message.status = 2;
                break;
            case "WEATHER_STATUS_DANGER":
            case 3:
                message.status = 3;
                break;
            }
            if (object.interval != null)
                message.interval = object.interval | 0;
            return message;
        };

        /**
         * Creates a plain object from a WeatherResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.WeatherResponse
         * @static
         * @param {crac_protobuf.WeatherResponse} message WeatherResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeatherResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.charts = [];
            if (options.defaults) {
                object.updatedAt = 0;
                object.status = options.enums === String ? "WEATHER_STATUS_UNSPECIFIED" : 0;
                object.interval = 0;
            }
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.charts && message.charts.length) {
                object.charts = [];
                for (let j = 0; j < message.charts.length; ++j)
                    object.charts[j] = $root.crac_protobuf.Chart.toObject(message.charts[j], options);
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.crac_protobuf.WeatherStatus[message.status] === undefined ? message.status : $root.crac_protobuf.WeatherStatus[message.status] : message.status;
            if (message.interval != null && message.hasOwnProperty("interval"))
                object.interval = message.interval;
            return object;
        };

        /**
         * Converts this WeatherResponse to JSON.
         * @function toJSON
         * @memberof crac_protobuf.WeatherResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeatherResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WeatherResponse
         * @function getTypeUrl
         * @memberof crac_protobuf.WeatherResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WeatherResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.WeatherResponse";
        };

        return WeatherResponse;
    })();

    crac_protobuf.Weather = (function() {

        /**
         * Constructs a new Weather service.
         * @memberof crac_protobuf
         * @classdesc Represents a Weather
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Weather(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Weather.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Weather;

        /**
         * Creates new Weather service using the specified rpc implementation.
         * @function create
         * @memberof crac_protobuf.Weather
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Weather} RPC service. Useful where requests and/or responses are streamed.
         */
        Weather.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link crac_protobuf.Weather#getStatus}.
         * @memberof crac_protobuf.Weather
         * @typedef GetStatusCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {crac_protobuf.WeatherResponse} [response] WeatherResponse
         */

        /**
         * Calls GetStatus.
         * @function getStatus
         * @memberof crac_protobuf.Weather
         * @instance
         * @param {crac_protobuf.IWeatherRequest} request WeatherRequest message or plain object
         * @param {crac_protobuf.Weather.GetStatusCallback} callback Node-style callback called with the error, if any, and WeatherResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Weather.prototype.getStatus = function getStatus(request, callback) {
            return this.rpcCall(getStatus, $root.crac_protobuf.WeatherRequest, $root.crac_protobuf.WeatherResponse, request, callback);
        }, "name", { value: "GetStatus" });

        /**
         * Calls GetStatus.
         * @function getStatus
         * @memberof crac_protobuf.Weather
         * @instance
         * @param {crac_protobuf.IWeatherRequest} request WeatherRequest message or plain object
         * @returns {Promise<crac_protobuf.WeatherResponse>} Promise
         * @variation 2
         */

        return Weather;
    })();

    /**
     * TelescopeAction enum.
     * @name crac_protobuf.TelescopeAction
     * @enum {number}
     * @property {number} TELESCOPE_DEFAULT_ACTION=0 TELESCOPE_DEFAULT_ACTION value
     * @property {number} SYNC=1 SYNC value
     * @property {number} PARK_POSITION=2 PARK_POSITION value
     * @property {number} FLAT_POSITION=3 FLAT_POSITION value
     * @property {number} CHECK_TELESCOPE=4 CHECK_TELESCOPE value
     * @property {number} TELESCOPE_CONNECT=5 TELESCOPE_CONNECT value
     * @property {number} TELESCOPE_DISCONNECT=6 TELESCOPE_DISCONNECT value
     */
    crac_protobuf.TelescopeAction = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TELESCOPE_DEFAULT_ACTION"] = 0;
        values[valuesById[1] = "SYNC"] = 1;
        values[valuesById[2] = "PARK_POSITION"] = 2;
        values[valuesById[3] = "FLAT_POSITION"] = 3;
        values[valuesById[4] = "CHECK_TELESCOPE"] = 4;
        values[valuesById[5] = "TELESCOPE_CONNECT"] = 5;
        values[valuesById[6] = "TELESCOPE_DISCONNECT"] = 6;
        return values;
    })();

    crac_protobuf.TelescopeRequest = (function() {

        /**
         * Properties of a TelescopeRequest.
         * @memberof crac_protobuf
         * @interface ITelescopeRequest
         * @property {crac_protobuf.TelescopeAction|null} [action] TelescopeRequest action
         * @property {boolean|null} [autolight] TelescopeRequest autolight
         */

        /**
         * Constructs a new TelescopeRequest.
         * @memberof crac_protobuf
         * @classdesc Represents a TelescopeRequest.
         * @implements ITelescopeRequest
         * @constructor
         * @param {crac_protobuf.ITelescopeRequest=} [properties] Properties to set
         */
        function TelescopeRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TelescopeRequest action.
         * @member {crac_protobuf.TelescopeAction} action
         * @memberof crac_protobuf.TelescopeRequest
         * @instance
         */
        TelescopeRequest.prototype.action = 0;

        /**
         * TelescopeRequest autolight.
         * @member {boolean} autolight
         * @memberof crac_protobuf.TelescopeRequest
         * @instance
         */
        TelescopeRequest.prototype.autolight = false;

        /**
         * Creates a new TelescopeRequest instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.TelescopeRequest
         * @static
         * @param {crac_protobuf.ITelescopeRequest=} [properties] Properties to set
         * @returns {crac_protobuf.TelescopeRequest} TelescopeRequest instance
         */
        TelescopeRequest.create = function create(properties) {
            return new TelescopeRequest(properties);
        };

        /**
         * Encodes the specified TelescopeRequest message. Does not implicitly {@link crac_protobuf.TelescopeRequest.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.TelescopeRequest
         * @static
         * @param {crac_protobuf.ITelescopeRequest} message TelescopeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TelescopeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
            if (message.autolight != null && Object.hasOwnProperty.call(message, "autolight"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.autolight);
            return writer;
        };

        /**
         * Encodes the specified TelescopeRequest message, length delimited. Does not implicitly {@link crac_protobuf.TelescopeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.TelescopeRequest
         * @static
         * @param {crac_protobuf.ITelescopeRequest} message TelescopeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TelescopeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TelescopeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.TelescopeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.TelescopeRequest} TelescopeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TelescopeRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.TelescopeRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.action = reader.int32();
                        break;
                    }
                case 2: {
                        message.autolight = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TelescopeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.TelescopeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.TelescopeRequest} TelescopeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TelescopeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TelescopeRequest message.
         * @function verify
         * @memberof crac_protobuf.TelescopeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TelescopeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action"))
                switch (message.action) {
                default:
                    return "action: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.autolight != null && message.hasOwnProperty("autolight"))
                if (typeof message.autolight !== "boolean")
                    return "autolight: boolean expected";
            return null;
        };

        /**
         * Creates a TelescopeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.TelescopeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.TelescopeRequest} TelescopeRequest
         */
        TelescopeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.TelescopeRequest)
                return object;
            let message = new $root.crac_protobuf.TelescopeRequest();
            switch (object.action) {
            default:
                if (typeof object.action === "number") {
                    message.action = object.action;
                    break;
                }
                break;
            case "TELESCOPE_DEFAULT_ACTION":
            case 0:
                message.action = 0;
                break;
            case "SYNC":
            case 1:
                message.action = 1;
                break;
            case "PARK_POSITION":
            case 2:
                message.action = 2;
                break;
            case "FLAT_POSITION":
            case 3:
                message.action = 3;
                break;
            case "CHECK_TELESCOPE":
            case 4:
                message.action = 4;
                break;
            case "TELESCOPE_CONNECT":
            case 5:
                message.action = 5;
                break;
            case "TELESCOPE_DISCONNECT":
            case 6:
                message.action = 6;
                break;
            }
            if (object.autolight != null)
                message.autolight = Boolean(object.autolight);
            return message;
        };

        /**
         * Creates a plain object from a TelescopeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.TelescopeRequest
         * @static
         * @param {crac_protobuf.TelescopeRequest} message TelescopeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TelescopeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.action = options.enums === String ? "TELESCOPE_DEFAULT_ACTION" : 0;
                object.autolight = false;
            }
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = options.enums === String ? $root.crac_protobuf.TelescopeAction[message.action] === undefined ? message.action : $root.crac_protobuf.TelescopeAction[message.action] : message.action;
            if (message.autolight != null && message.hasOwnProperty("autolight"))
                object.autolight = message.autolight;
            return object;
        };

        /**
         * Converts this TelescopeRequest to JSON.
         * @function toJSON
         * @memberof crac_protobuf.TelescopeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TelescopeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TelescopeRequest
         * @function getTypeUrl
         * @memberof crac_protobuf.TelescopeRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TelescopeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.TelescopeRequest";
        };

        return TelescopeRequest;
    })();

    crac_protobuf.TelescopeEquatorialMovementRequest = (function() {

        /**
         * Properties of a TelescopeEquatorialMovementRequest.
         * @memberof crac_protobuf
         * @interface ITelescopeEquatorialMovementRequest
         * @property {crac_protobuf.IEquatorialCoords|null} [eqCoords] TelescopeEquatorialMovementRequest eqCoords
         */

        /**
         * Constructs a new TelescopeEquatorialMovementRequest.
         * @memberof crac_protobuf
         * @classdesc Represents a TelescopeEquatorialMovementRequest.
         * @implements ITelescopeEquatorialMovementRequest
         * @constructor
         * @param {crac_protobuf.ITelescopeEquatorialMovementRequest=} [properties] Properties to set
         */
        function TelescopeEquatorialMovementRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TelescopeEquatorialMovementRequest eqCoords.
         * @member {crac_protobuf.IEquatorialCoords|null|undefined} eqCoords
         * @memberof crac_protobuf.TelescopeEquatorialMovementRequest
         * @instance
         */
        TelescopeEquatorialMovementRequest.prototype.eqCoords = null;

        /**
         * Creates a new TelescopeEquatorialMovementRequest instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.TelescopeEquatorialMovementRequest
         * @static
         * @param {crac_protobuf.ITelescopeEquatorialMovementRequest=} [properties] Properties to set
         * @returns {crac_protobuf.TelescopeEquatorialMovementRequest} TelescopeEquatorialMovementRequest instance
         */
        TelescopeEquatorialMovementRequest.create = function create(properties) {
            return new TelescopeEquatorialMovementRequest(properties);
        };

        /**
         * Encodes the specified TelescopeEquatorialMovementRequest message. Does not implicitly {@link crac_protobuf.TelescopeEquatorialMovementRequest.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.TelescopeEquatorialMovementRequest
         * @static
         * @param {crac_protobuf.ITelescopeEquatorialMovementRequest} message TelescopeEquatorialMovementRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TelescopeEquatorialMovementRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eqCoords != null && Object.hasOwnProperty.call(message, "eqCoords"))
                $root.crac_protobuf.EquatorialCoords.encode(message.eqCoords, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TelescopeEquatorialMovementRequest message, length delimited. Does not implicitly {@link crac_protobuf.TelescopeEquatorialMovementRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.TelescopeEquatorialMovementRequest
         * @static
         * @param {crac_protobuf.ITelescopeEquatorialMovementRequest} message TelescopeEquatorialMovementRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TelescopeEquatorialMovementRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TelescopeEquatorialMovementRequest message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.TelescopeEquatorialMovementRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.TelescopeEquatorialMovementRequest} TelescopeEquatorialMovementRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TelescopeEquatorialMovementRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.TelescopeEquatorialMovementRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.eqCoords = $root.crac_protobuf.EquatorialCoords.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TelescopeEquatorialMovementRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.TelescopeEquatorialMovementRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.TelescopeEquatorialMovementRequest} TelescopeEquatorialMovementRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TelescopeEquatorialMovementRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TelescopeEquatorialMovementRequest message.
         * @function verify
         * @memberof crac_protobuf.TelescopeEquatorialMovementRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TelescopeEquatorialMovementRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eqCoords != null && message.hasOwnProperty("eqCoords")) {
                let error = $root.crac_protobuf.EquatorialCoords.verify(message.eqCoords);
                if (error)
                    return "eqCoords." + error;
            }
            return null;
        };

        /**
         * Creates a TelescopeEquatorialMovementRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.TelescopeEquatorialMovementRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.TelescopeEquatorialMovementRequest} TelescopeEquatorialMovementRequest
         */
        TelescopeEquatorialMovementRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.TelescopeEquatorialMovementRequest)
                return object;
            let message = new $root.crac_protobuf.TelescopeEquatorialMovementRequest();
            if (object.eqCoords != null) {
                if (typeof object.eqCoords !== "object")
                    throw TypeError(".crac_protobuf.TelescopeEquatorialMovementRequest.eqCoords: object expected");
                message.eqCoords = $root.crac_protobuf.EquatorialCoords.fromObject(object.eqCoords);
            }
            return message;
        };

        /**
         * Creates a plain object from a TelescopeEquatorialMovementRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.TelescopeEquatorialMovementRequest
         * @static
         * @param {crac_protobuf.TelescopeEquatorialMovementRequest} message TelescopeEquatorialMovementRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TelescopeEquatorialMovementRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.eqCoords = null;
            if (message.eqCoords != null && message.hasOwnProperty("eqCoords"))
                object.eqCoords = $root.crac_protobuf.EquatorialCoords.toObject(message.eqCoords, options);
            return object;
        };

        /**
         * Converts this TelescopeEquatorialMovementRequest to JSON.
         * @function toJSON
         * @memberof crac_protobuf.TelescopeEquatorialMovementRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TelescopeEquatorialMovementRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TelescopeEquatorialMovementRequest
         * @function getTypeUrl
         * @memberof crac_protobuf.TelescopeEquatorialMovementRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TelescopeEquatorialMovementRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.TelescopeEquatorialMovementRequest";
        };

        return TelescopeEquatorialMovementRequest;
    })();

    crac_protobuf.TelescopeAltazimutalMovementRequest = (function() {

        /**
         * Properties of a TelescopeAltazimutalMovementRequest.
         * @memberof crac_protobuf
         * @interface ITelescopeAltazimutalMovementRequest
         * @property {crac_protobuf.IAltazimutalCoords|null} [azCoords] TelescopeAltazimutalMovementRequest azCoords
         */

        /**
         * Constructs a new TelescopeAltazimutalMovementRequest.
         * @memberof crac_protobuf
         * @classdesc Represents a TelescopeAltazimutalMovementRequest.
         * @implements ITelescopeAltazimutalMovementRequest
         * @constructor
         * @param {crac_protobuf.ITelescopeAltazimutalMovementRequest=} [properties] Properties to set
         */
        function TelescopeAltazimutalMovementRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TelescopeAltazimutalMovementRequest azCoords.
         * @member {crac_protobuf.IAltazimutalCoords|null|undefined} azCoords
         * @memberof crac_protobuf.TelescopeAltazimutalMovementRequest
         * @instance
         */
        TelescopeAltazimutalMovementRequest.prototype.azCoords = null;

        /**
         * Creates a new TelescopeAltazimutalMovementRequest instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.TelescopeAltazimutalMovementRequest
         * @static
         * @param {crac_protobuf.ITelescopeAltazimutalMovementRequest=} [properties] Properties to set
         * @returns {crac_protobuf.TelescopeAltazimutalMovementRequest} TelescopeAltazimutalMovementRequest instance
         */
        TelescopeAltazimutalMovementRequest.create = function create(properties) {
            return new TelescopeAltazimutalMovementRequest(properties);
        };

        /**
         * Encodes the specified TelescopeAltazimutalMovementRequest message. Does not implicitly {@link crac_protobuf.TelescopeAltazimutalMovementRequest.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.TelescopeAltazimutalMovementRequest
         * @static
         * @param {crac_protobuf.ITelescopeAltazimutalMovementRequest} message TelescopeAltazimutalMovementRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TelescopeAltazimutalMovementRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.azCoords != null && Object.hasOwnProperty.call(message, "azCoords"))
                $root.crac_protobuf.AltazimutalCoords.encode(message.azCoords, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TelescopeAltazimutalMovementRequest message, length delimited. Does not implicitly {@link crac_protobuf.TelescopeAltazimutalMovementRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.TelescopeAltazimutalMovementRequest
         * @static
         * @param {crac_protobuf.ITelescopeAltazimutalMovementRequest} message TelescopeAltazimutalMovementRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TelescopeAltazimutalMovementRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TelescopeAltazimutalMovementRequest message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.TelescopeAltazimutalMovementRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.TelescopeAltazimutalMovementRequest} TelescopeAltazimutalMovementRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TelescopeAltazimutalMovementRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.TelescopeAltazimutalMovementRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.azCoords = $root.crac_protobuf.AltazimutalCoords.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TelescopeAltazimutalMovementRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.TelescopeAltazimutalMovementRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.TelescopeAltazimutalMovementRequest} TelescopeAltazimutalMovementRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TelescopeAltazimutalMovementRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TelescopeAltazimutalMovementRequest message.
         * @function verify
         * @memberof crac_protobuf.TelescopeAltazimutalMovementRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TelescopeAltazimutalMovementRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.azCoords != null && message.hasOwnProperty("azCoords")) {
                let error = $root.crac_protobuf.AltazimutalCoords.verify(message.azCoords);
                if (error)
                    return "azCoords." + error;
            }
            return null;
        };

        /**
         * Creates a TelescopeAltazimutalMovementRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.TelescopeAltazimutalMovementRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.TelescopeAltazimutalMovementRequest} TelescopeAltazimutalMovementRequest
         */
        TelescopeAltazimutalMovementRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.TelescopeAltazimutalMovementRequest)
                return object;
            let message = new $root.crac_protobuf.TelescopeAltazimutalMovementRequest();
            if (object.azCoords != null) {
                if (typeof object.azCoords !== "object")
                    throw TypeError(".crac_protobuf.TelescopeAltazimutalMovementRequest.azCoords: object expected");
                message.azCoords = $root.crac_protobuf.AltazimutalCoords.fromObject(object.azCoords);
            }
            return message;
        };

        /**
         * Creates a plain object from a TelescopeAltazimutalMovementRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.TelescopeAltazimutalMovementRequest
         * @static
         * @param {crac_protobuf.TelescopeAltazimutalMovementRequest} message TelescopeAltazimutalMovementRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TelescopeAltazimutalMovementRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.azCoords = null;
            if (message.azCoords != null && message.hasOwnProperty("azCoords"))
                object.azCoords = $root.crac_protobuf.AltazimutalCoords.toObject(message.azCoords, options);
            return object;
        };

        /**
         * Converts this TelescopeAltazimutalMovementRequest to JSON.
         * @function toJSON
         * @memberof crac_protobuf.TelescopeAltazimutalMovementRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TelescopeAltazimutalMovementRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TelescopeAltazimutalMovementRequest
         * @function getTypeUrl
         * @memberof crac_protobuf.TelescopeAltazimutalMovementRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TelescopeAltazimutalMovementRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.TelescopeAltazimutalMovementRequest";
        };

        return TelescopeAltazimutalMovementRequest;
    })();

    /**
     * TelescopeStatus enum.
     * @name crac_protobuf.TelescopeStatus
     * @enum {number}
     * @property {number} TELESCOPE_DEFAULT_STATUS=0 TELESCOPE_DEFAULT_STATUS value
     * @property {number} PARKED=1 PARKED value
     * @property {number} FLATTER=2 FLATTER value
     * @property {number} SECURE=3 SECURE value
     * @property {number} NORTHEAST=4 NORTHEAST value
     * @property {number} EAST=5 EAST value
     * @property {number} SOUTHEAST=6 SOUTHEAST value
     * @property {number} SOUTHWEST=7 SOUTHWEST value
     * @property {number} WEST=8 WEST value
     * @property {number} NORTHWEST=9 NORTHWEST value
     * @property {number} LOST=10 LOST value
     * @property {number} ERROR=11 ERROR value
     * @property {number} DISCONNECTED=12 DISCONNECTED value
     */
    crac_protobuf.TelescopeStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TELESCOPE_DEFAULT_STATUS"] = 0;
        values[valuesById[1] = "PARKED"] = 1;
        values[valuesById[2] = "FLATTER"] = 2;
        values[valuesById[3] = "SECURE"] = 3;
        values[valuesById[4] = "NORTHEAST"] = 4;
        values[valuesById[5] = "EAST"] = 5;
        values[valuesById[6] = "SOUTHEAST"] = 6;
        values[valuesById[7] = "SOUTHWEST"] = 7;
        values[valuesById[8] = "WEST"] = 8;
        values[valuesById[9] = "NORTHWEST"] = 9;
        values[valuesById[10] = "LOST"] = 10;
        values[valuesById[11] = "ERROR"] = 11;
        values[valuesById[12] = "DISCONNECTED"] = 12;
        return values;
    })();

    /**
     * PierSide enum.
     * @name crac_protobuf.PierSide
     * @enum {number}
     * @property {number} DEFAULT_PIERSIDE=0 DEFAULT_PIERSIDE value
     * @property {number} EAST_SIDE=1 EAST_SIDE value
     * @property {number} WEST_SIDE=2 WEST_SIDE value
     */
    crac_protobuf.PierSide = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DEFAULT_PIERSIDE"] = 0;
        values[valuesById[1] = "EAST_SIDE"] = 1;
        values[valuesById[2] = "WEST_SIDE"] = 2;
        return values;
    })();

    /**
     * TelescopeSpeed enum.
     * @name crac_protobuf.TelescopeSpeed
     * @enum {number}
     * @property {number} SPEED_NOT_TRACKING=0 SPEED_NOT_TRACKING value
     * @property {number} SPEED_TRACKING=1 SPEED_TRACKING value
     * @property {number} SPEED_CENTERING=2 SPEED_CENTERING value
     * @property {number} SPEED_SLEWING=3 SPEED_SLEWING value
     * @property {number} SPEED_ERROR=4 SPEED_ERROR value
     */
    crac_protobuf.TelescopeSpeed = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SPEED_NOT_TRACKING"] = 0;
        values[valuesById[1] = "SPEED_TRACKING"] = 1;
        values[valuesById[2] = "SPEED_CENTERING"] = 2;
        values[valuesById[3] = "SPEED_SLEWING"] = 3;
        values[valuesById[4] = "SPEED_ERROR"] = 4;
        return values;
    })();

    crac_protobuf.EquatorialCoords = (function() {

        /**
         * Properties of an EquatorialCoords.
         * @memberof crac_protobuf
         * @interface IEquatorialCoords
         * @property {number|null} [ra] EquatorialCoords ra
         * @property {number|null} [dec] EquatorialCoords dec
         */

        /**
         * Constructs a new EquatorialCoords.
         * @memberof crac_protobuf
         * @classdesc Represents an EquatorialCoords.
         * @implements IEquatorialCoords
         * @constructor
         * @param {crac_protobuf.IEquatorialCoords=} [properties] Properties to set
         */
        function EquatorialCoords(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EquatorialCoords ra.
         * @member {number} ra
         * @memberof crac_protobuf.EquatorialCoords
         * @instance
         */
        EquatorialCoords.prototype.ra = 0;

        /**
         * EquatorialCoords dec.
         * @member {number} dec
         * @memberof crac_protobuf.EquatorialCoords
         * @instance
         */
        EquatorialCoords.prototype.dec = 0;

        /**
         * Creates a new EquatorialCoords instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.EquatorialCoords
         * @static
         * @param {crac_protobuf.IEquatorialCoords=} [properties] Properties to set
         * @returns {crac_protobuf.EquatorialCoords} EquatorialCoords instance
         */
        EquatorialCoords.create = function create(properties) {
            return new EquatorialCoords(properties);
        };

        /**
         * Encodes the specified EquatorialCoords message. Does not implicitly {@link crac_protobuf.EquatorialCoords.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.EquatorialCoords
         * @static
         * @param {crac_protobuf.IEquatorialCoords} message EquatorialCoords message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EquatorialCoords.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ra != null && Object.hasOwnProperty.call(message, "ra"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.ra);
            if (message.dec != null && Object.hasOwnProperty.call(message, "dec"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.dec);
            return writer;
        };

        /**
         * Encodes the specified EquatorialCoords message, length delimited. Does not implicitly {@link crac_protobuf.EquatorialCoords.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.EquatorialCoords
         * @static
         * @param {crac_protobuf.IEquatorialCoords} message EquatorialCoords message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EquatorialCoords.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EquatorialCoords message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.EquatorialCoords
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.EquatorialCoords} EquatorialCoords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EquatorialCoords.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.EquatorialCoords();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.ra = reader.double();
                        break;
                    }
                case 2: {
                        message.dec = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EquatorialCoords message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.EquatorialCoords
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.EquatorialCoords} EquatorialCoords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EquatorialCoords.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EquatorialCoords message.
         * @function verify
         * @memberof crac_protobuf.EquatorialCoords
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EquatorialCoords.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ra != null && message.hasOwnProperty("ra"))
                if (typeof message.ra !== "number")
                    return "ra: number expected";
            if (message.dec != null && message.hasOwnProperty("dec"))
                if (typeof message.dec !== "number")
                    return "dec: number expected";
            return null;
        };

        /**
         * Creates an EquatorialCoords message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.EquatorialCoords
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.EquatorialCoords} EquatorialCoords
         */
        EquatorialCoords.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.EquatorialCoords)
                return object;
            let message = new $root.crac_protobuf.EquatorialCoords();
            if (object.ra != null)
                message.ra = Number(object.ra);
            if (object.dec != null)
                message.dec = Number(object.dec);
            return message;
        };

        /**
         * Creates a plain object from an EquatorialCoords message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.EquatorialCoords
         * @static
         * @param {crac_protobuf.EquatorialCoords} message EquatorialCoords
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EquatorialCoords.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ra = 0;
                object.dec = 0;
            }
            if (message.ra != null && message.hasOwnProperty("ra"))
                object.ra = options.json && !isFinite(message.ra) ? String(message.ra) : message.ra;
            if (message.dec != null && message.hasOwnProperty("dec"))
                object.dec = options.json && !isFinite(message.dec) ? String(message.dec) : message.dec;
            return object;
        };

        /**
         * Converts this EquatorialCoords to JSON.
         * @function toJSON
         * @memberof crac_protobuf.EquatorialCoords
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EquatorialCoords.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EquatorialCoords
         * @function getTypeUrl
         * @memberof crac_protobuf.EquatorialCoords
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EquatorialCoords.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.EquatorialCoords";
        };

        return EquatorialCoords;
    })();

    crac_protobuf.AltazimutalCoords = (function() {

        /**
         * Properties of an AltazimutalCoords.
         * @memberof crac_protobuf
         * @interface IAltazimutalCoords
         * @property {number|null} [alt] AltazimutalCoords alt
         * @property {number|null} [az] AltazimutalCoords az
         */

        /**
         * Constructs a new AltazimutalCoords.
         * @memberof crac_protobuf
         * @classdesc Represents an AltazimutalCoords.
         * @implements IAltazimutalCoords
         * @constructor
         * @param {crac_protobuf.IAltazimutalCoords=} [properties] Properties to set
         */
        function AltazimutalCoords(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AltazimutalCoords alt.
         * @member {number} alt
         * @memberof crac_protobuf.AltazimutalCoords
         * @instance
         */
        AltazimutalCoords.prototype.alt = 0;

        /**
         * AltazimutalCoords az.
         * @member {number} az
         * @memberof crac_protobuf.AltazimutalCoords
         * @instance
         */
        AltazimutalCoords.prototype.az = 0;

        /**
         * Creates a new AltazimutalCoords instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.AltazimutalCoords
         * @static
         * @param {crac_protobuf.IAltazimutalCoords=} [properties] Properties to set
         * @returns {crac_protobuf.AltazimutalCoords} AltazimutalCoords instance
         */
        AltazimutalCoords.create = function create(properties) {
            return new AltazimutalCoords(properties);
        };

        /**
         * Encodes the specified AltazimutalCoords message. Does not implicitly {@link crac_protobuf.AltazimutalCoords.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.AltazimutalCoords
         * @static
         * @param {crac_protobuf.IAltazimutalCoords} message AltazimutalCoords message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AltazimutalCoords.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.alt != null && Object.hasOwnProperty.call(message, "alt"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.alt);
            if (message.az != null && Object.hasOwnProperty.call(message, "az"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.az);
            return writer;
        };

        /**
         * Encodes the specified AltazimutalCoords message, length delimited. Does not implicitly {@link crac_protobuf.AltazimutalCoords.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.AltazimutalCoords
         * @static
         * @param {crac_protobuf.IAltazimutalCoords} message AltazimutalCoords message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AltazimutalCoords.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AltazimutalCoords message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.AltazimutalCoords
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.AltazimutalCoords} AltazimutalCoords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AltazimutalCoords.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.AltazimutalCoords();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.alt = reader.double();
                        break;
                    }
                case 2: {
                        message.az = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AltazimutalCoords message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.AltazimutalCoords
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.AltazimutalCoords} AltazimutalCoords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AltazimutalCoords.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AltazimutalCoords message.
         * @function verify
         * @memberof crac_protobuf.AltazimutalCoords
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AltazimutalCoords.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.alt != null && message.hasOwnProperty("alt"))
                if (typeof message.alt !== "number")
                    return "alt: number expected";
            if (message.az != null && message.hasOwnProperty("az"))
                if (typeof message.az !== "number")
                    return "az: number expected";
            return null;
        };

        /**
         * Creates an AltazimutalCoords message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.AltazimutalCoords
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.AltazimutalCoords} AltazimutalCoords
         */
        AltazimutalCoords.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.AltazimutalCoords)
                return object;
            let message = new $root.crac_protobuf.AltazimutalCoords();
            if (object.alt != null)
                message.alt = Number(object.alt);
            if (object.az != null)
                message.az = Number(object.az);
            return message;
        };

        /**
         * Creates a plain object from an AltazimutalCoords message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.AltazimutalCoords
         * @static
         * @param {crac_protobuf.AltazimutalCoords} message AltazimutalCoords
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AltazimutalCoords.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.alt = 0;
                object.az = 0;
            }
            if (message.alt != null && message.hasOwnProperty("alt"))
                object.alt = options.json && !isFinite(message.alt) ? String(message.alt) : message.alt;
            if (message.az != null && message.hasOwnProperty("az"))
                object.az = options.json && !isFinite(message.az) ? String(message.az) : message.az;
            return object;
        };

        /**
         * Converts this AltazimutalCoords to JSON.
         * @function toJSON
         * @memberof crac_protobuf.AltazimutalCoords
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AltazimutalCoords.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AltazimutalCoords
         * @function getTypeUrl
         * @memberof crac_protobuf.AltazimutalCoords
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AltazimutalCoords.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.AltazimutalCoords";
        };

        return AltazimutalCoords;
    })();

    crac_protobuf.Airmass = (function() {

        /**
         * Properties of an Airmass.
         * @memberof crac_protobuf
         * @interface IAirmass
         * @property {number|null} [airmass] Airmass airmass
         */

        /**
         * Constructs a new Airmass.
         * @memberof crac_protobuf
         * @classdesc Represents an Airmass.
         * @implements IAirmass
         * @constructor
         * @param {crac_protobuf.IAirmass=} [properties] Properties to set
         */
        function Airmass(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Airmass airmass.
         * @member {number} airmass
         * @memberof crac_protobuf.Airmass
         * @instance
         */
        Airmass.prototype.airmass = 0;

        /**
         * Creates a new Airmass instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.Airmass
         * @static
         * @param {crac_protobuf.IAirmass=} [properties] Properties to set
         * @returns {crac_protobuf.Airmass} Airmass instance
         */
        Airmass.create = function create(properties) {
            return new Airmass(properties);
        };

        /**
         * Encodes the specified Airmass message. Does not implicitly {@link crac_protobuf.Airmass.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.Airmass
         * @static
         * @param {crac_protobuf.IAirmass} message Airmass message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Airmass.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.airmass != null && Object.hasOwnProperty.call(message, "airmass"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.airmass);
            return writer;
        };

        /**
         * Encodes the specified Airmass message, length delimited. Does not implicitly {@link crac_protobuf.Airmass.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.Airmass
         * @static
         * @param {crac_protobuf.IAirmass} message Airmass message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Airmass.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Airmass message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.Airmass
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.Airmass} Airmass
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Airmass.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.Airmass();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.airmass = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Airmass message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.Airmass
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.Airmass} Airmass
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Airmass.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Airmass message.
         * @function verify
         * @memberof crac_protobuf.Airmass
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Airmass.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.airmass != null && message.hasOwnProperty("airmass"))
                if (typeof message.airmass !== "number")
                    return "airmass: number expected";
            return null;
        };

        /**
         * Creates an Airmass message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.Airmass
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.Airmass} Airmass
         */
        Airmass.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.Airmass)
                return object;
            let message = new $root.crac_protobuf.Airmass();
            if (object.airmass != null)
                message.airmass = Number(object.airmass);
            return message;
        };

        /**
         * Creates a plain object from an Airmass message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.Airmass
         * @static
         * @param {crac_protobuf.Airmass} message Airmass
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Airmass.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.airmass = 0;
            if (message.airmass != null && message.hasOwnProperty("airmass"))
                object.airmass = options.json && !isFinite(message.airmass) ? String(message.airmass) : message.airmass;
            return object;
        };

        /**
         * Converts this Airmass to JSON.
         * @function toJSON
         * @memberof crac_protobuf.Airmass
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Airmass.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Airmass
         * @function getTypeUrl
         * @memberof crac_protobuf.Airmass
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Airmass.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.Airmass";
        };

        return Airmass;
    })();

    crac_protobuf.Transit = (function() {

        /**
         * Properties of a Transit.
         * @memberof crac_protobuf
         * @interface ITransit
         * @property {string|null} [transit] Transit transit
         */

        /**
         * Constructs a new Transit.
         * @memberof crac_protobuf
         * @classdesc Represents a Transit.
         * @implements ITransit
         * @constructor
         * @param {crac_protobuf.ITransit=} [properties] Properties to set
         */
        function Transit(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Transit transit.
         * @member {string} transit
         * @memberof crac_protobuf.Transit
         * @instance
         */
        Transit.prototype.transit = "";

        /**
         * Creates a new Transit instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.Transit
         * @static
         * @param {crac_protobuf.ITransit=} [properties] Properties to set
         * @returns {crac_protobuf.Transit} Transit instance
         */
        Transit.create = function create(properties) {
            return new Transit(properties);
        };

        /**
         * Encodes the specified Transit message. Does not implicitly {@link crac_protobuf.Transit.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.Transit
         * @static
         * @param {crac_protobuf.ITransit} message Transit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.transit != null && Object.hasOwnProperty.call(message, "transit"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.transit);
            return writer;
        };

        /**
         * Encodes the specified Transit message, length delimited. Does not implicitly {@link crac_protobuf.Transit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.Transit
         * @static
         * @param {crac_protobuf.ITransit} message Transit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Transit message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.Transit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.Transit} Transit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transit.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.Transit();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.transit = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Transit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.Transit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.Transit} Transit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Transit message.
         * @function verify
         * @memberof crac_protobuf.Transit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Transit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.transit != null && message.hasOwnProperty("transit"))
                if (!$util.isString(message.transit))
                    return "transit: string expected";
            return null;
        };

        /**
         * Creates a Transit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.Transit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.Transit} Transit
         */
        Transit.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.Transit)
                return object;
            let message = new $root.crac_protobuf.Transit();
            if (object.transit != null)
                message.transit = String(object.transit);
            return message;
        };

        /**
         * Creates a plain object from a Transit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.Transit
         * @static
         * @param {crac_protobuf.Transit} message Transit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Transit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.transit = "";
            if (message.transit != null && message.hasOwnProperty("transit"))
                object.transit = message.transit;
            return object;
        };

        /**
         * Converts this Transit to JSON.
         * @function toJSON
         * @memberof crac_protobuf.Transit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Transit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Transit
         * @function getTypeUrl
         * @memberof crac_protobuf.Transit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Transit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.Transit";
        };

        return Transit;
    })();

    crac_protobuf.TimeToTransit = (function() {

        /**
         * Properties of a TimeToTransit.
         * @memberof crac_protobuf
         * @interface ITimeToTransit
         * @property {number|null} [timeToTransit] TimeToTransit timeToTransit
         */

        /**
         * Constructs a new TimeToTransit.
         * @memberof crac_protobuf
         * @classdesc Represents a TimeToTransit.
         * @implements ITimeToTransit
         * @constructor
         * @param {crac_protobuf.ITimeToTransit=} [properties] Properties to set
         */
        function TimeToTransit(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TimeToTransit timeToTransit.
         * @member {number} timeToTransit
         * @memberof crac_protobuf.TimeToTransit
         * @instance
         */
        TimeToTransit.prototype.timeToTransit = 0;

        /**
         * Creates a new TimeToTransit instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.TimeToTransit
         * @static
         * @param {crac_protobuf.ITimeToTransit=} [properties] Properties to set
         * @returns {crac_protobuf.TimeToTransit} TimeToTransit instance
         */
        TimeToTransit.create = function create(properties) {
            return new TimeToTransit(properties);
        };

        /**
         * Encodes the specified TimeToTransit message. Does not implicitly {@link crac_protobuf.TimeToTransit.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.TimeToTransit
         * @static
         * @param {crac_protobuf.ITimeToTransit} message TimeToTransit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeToTransit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timeToTransit != null && Object.hasOwnProperty.call(message, "timeToTransit"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.timeToTransit);
            return writer;
        };

        /**
         * Encodes the specified TimeToTransit message, length delimited. Does not implicitly {@link crac_protobuf.TimeToTransit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.TimeToTransit
         * @static
         * @param {crac_protobuf.ITimeToTransit} message TimeToTransit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeToTransit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimeToTransit message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.TimeToTransit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.TimeToTransit} TimeToTransit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeToTransit.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.TimeToTransit();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.timeToTransit = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TimeToTransit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.TimeToTransit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.TimeToTransit} TimeToTransit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeToTransit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TimeToTransit message.
         * @function verify
         * @memberof crac_protobuf.TimeToTransit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TimeToTransit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timeToTransit != null && message.hasOwnProperty("timeToTransit"))
                if (typeof message.timeToTransit !== "number")
                    return "timeToTransit: number expected";
            return null;
        };

        /**
         * Creates a TimeToTransit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.TimeToTransit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.TimeToTransit} TimeToTransit
         */
        TimeToTransit.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.TimeToTransit)
                return object;
            let message = new $root.crac_protobuf.TimeToTransit();
            if (object.timeToTransit != null)
                message.timeToTransit = Number(object.timeToTransit);
            return message;
        };

        /**
         * Creates a plain object from a TimeToTransit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.TimeToTransit
         * @static
         * @param {crac_protobuf.TimeToTransit} message TimeToTransit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TimeToTransit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.timeToTransit = 0;
            if (message.timeToTransit != null && message.hasOwnProperty("timeToTransit"))
                object.timeToTransit = options.json && !isFinite(message.timeToTransit) ? String(message.timeToTransit) : message.timeToTransit;
            return object;
        };

        /**
         * Converts this TimeToTransit to JSON.
         * @function toJSON
         * @memberof crac_protobuf.TimeToTransit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimeToTransit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TimeToTransit
         * @function getTypeUrl
         * @memberof crac_protobuf.TimeToTransit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TimeToTransit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.TimeToTransit";
        };

        return TimeToTransit;
    })();

    crac_protobuf.TelescopeResponse = (function() {

        /**
         * Properties of a TelescopeResponse.
         * @memberof crac_protobuf
         * @interface ITelescopeResponse
         * @property {crac_protobuf.TelescopeStatus|null} [status] TelescopeResponse status
         * @property {crac_protobuf.IEquatorialCoords|null} [eqCoords] TelescopeResponse eqCoords
         * @property {crac_protobuf.IAltazimutalCoords|null} [aaCoords] TelescopeResponse aaCoords
         * @property {crac_protobuf.TelescopeSpeed|null} [speed] TelescopeResponse speed
         * @property {crac_protobuf.PierSide|null} [pierSide] TelescopeResponse pierSide
         * @property {Array.<crac_protobuf.IButtonGui>|null} [buttonsGui] TelescopeResponse buttonsGui
         * @property {crac_protobuf.IAirmass|null} [airmass] TelescopeResponse airmass
         */

        /**
         * Constructs a new TelescopeResponse.
         * @memberof crac_protobuf
         * @classdesc Represents a TelescopeResponse.
         * @implements ITelescopeResponse
         * @constructor
         * @param {crac_protobuf.ITelescopeResponse=} [properties] Properties to set
         */
        function TelescopeResponse(properties) {
            this.buttonsGui = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TelescopeResponse status.
         * @member {crac_protobuf.TelescopeStatus} status
         * @memberof crac_protobuf.TelescopeResponse
         * @instance
         */
        TelescopeResponse.prototype.status = 0;

        /**
         * TelescopeResponse eqCoords.
         * @member {crac_protobuf.IEquatorialCoords|null|undefined} eqCoords
         * @memberof crac_protobuf.TelescopeResponse
         * @instance
         */
        TelescopeResponse.prototype.eqCoords = null;

        /**
         * TelescopeResponse aaCoords.
         * @member {crac_protobuf.IAltazimutalCoords|null|undefined} aaCoords
         * @memberof crac_protobuf.TelescopeResponse
         * @instance
         */
        TelescopeResponse.prototype.aaCoords = null;

        /**
         * TelescopeResponse speed.
         * @member {crac_protobuf.TelescopeSpeed} speed
         * @memberof crac_protobuf.TelescopeResponse
         * @instance
         */
        TelescopeResponse.prototype.speed = 0;

        /**
         * TelescopeResponse pierSide.
         * @member {crac_protobuf.PierSide} pierSide
         * @memberof crac_protobuf.TelescopeResponse
         * @instance
         */
        TelescopeResponse.prototype.pierSide = 0;

        /**
         * TelescopeResponse buttonsGui.
         * @member {Array.<crac_protobuf.IButtonGui>} buttonsGui
         * @memberof crac_protobuf.TelescopeResponse
         * @instance
         */
        TelescopeResponse.prototype.buttonsGui = $util.emptyArray;

        /**
         * TelescopeResponse airmass.
         * @member {crac_protobuf.IAirmass|null|undefined} airmass
         * @memberof crac_protobuf.TelescopeResponse
         * @instance
         */
        TelescopeResponse.prototype.airmass = null;

        /**
         * Creates a new TelescopeResponse instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.TelescopeResponse
         * @static
         * @param {crac_protobuf.ITelescopeResponse=} [properties] Properties to set
         * @returns {crac_protobuf.TelescopeResponse} TelescopeResponse instance
         */
        TelescopeResponse.create = function create(properties) {
            return new TelescopeResponse(properties);
        };

        /**
         * Encodes the specified TelescopeResponse message. Does not implicitly {@link crac_protobuf.TelescopeResponse.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.TelescopeResponse
         * @static
         * @param {crac_protobuf.ITelescopeResponse} message TelescopeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TelescopeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.eqCoords != null && Object.hasOwnProperty.call(message, "eqCoords"))
                $root.crac_protobuf.EquatorialCoords.encode(message.eqCoords, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.aaCoords != null && Object.hasOwnProperty.call(message, "aaCoords"))
                $root.crac_protobuf.AltazimutalCoords.encode(message.aaCoords, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.speed);
            if (message.pierSide != null && Object.hasOwnProperty.call(message, "pierSide"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.pierSide);
            if (message.buttonsGui != null && message.buttonsGui.length)
                for (let i = 0; i < message.buttonsGui.length; ++i)
                    $root.crac_protobuf.ButtonGui.encode(message.buttonsGui[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.airmass != null && Object.hasOwnProperty.call(message, "airmass"))
                $root.crac_protobuf.Airmass.encode(message.airmass, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TelescopeResponse message, length delimited. Does not implicitly {@link crac_protobuf.TelescopeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.TelescopeResponse
         * @static
         * @param {crac_protobuf.ITelescopeResponse} message TelescopeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TelescopeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TelescopeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.TelescopeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.TelescopeResponse} TelescopeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TelescopeResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.TelescopeResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                case 2: {
                        message.eqCoords = $root.crac_protobuf.EquatorialCoords.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.aaCoords = $root.crac_protobuf.AltazimutalCoords.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.speed = reader.int32();
                        break;
                    }
                case 6: {
                        message.pierSide = reader.int32();
                        break;
                    }
                case 7: {
                        if (!(message.buttonsGui && message.buttonsGui.length))
                            message.buttonsGui = [];
                        message.buttonsGui.push($root.crac_protobuf.ButtonGui.decode(reader, reader.uint32()));
                        break;
                    }
                case 8: {
                        message.airmass = $root.crac_protobuf.Airmass.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TelescopeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.TelescopeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.TelescopeResponse} TelescopeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TelescopeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TelescopeResponse message.
         * @function verify
         * @memberof crac_protobuf.TelescopeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TelescopeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    break;
                }
            if (message.eqCoords != null && message.hasOwnProperty("eqCoords")) {
                let error = $root.crac_protobuf.EquatorialCoords.verify(message.eqCoords);
                if (error)
                    return "eqCoords." + error;
            }
            if (message.aaCoords != null && message.hasOwnProperty("aaCoords")) {
                let error = $root.crac_protobuf.AltazimutalCoords.verify(message.aaCoords);
                if (error)
                    return "aaCoords." + error;
            }
            if (message.speed != null && message.hasOwnProperty("speed"))
                switch (message.speed) {
                default:
                    return "speed: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.pierSide != null && message.hasOwnProperty("pierSide"))
                switch (message.pierSide) {
                default:
                    return "pierSide: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.buttonsGui != null && message.hasOwnProperty("buttonsGui")) {
                if (!Array.isArray(message.buttonsGui))
                    return "buttonsGui: array expected";
                for (let i = 0; i < message.buttonsGui.length; ++i) {
                    let error = $root.crac_protobuf.ButtonGui.verify(message.buttonsGui[i]);
                    if (error)
                        return "buttonsGui." + error;
                }
            }
            if (message.airmass != null && message.hasOwnProperty("airmass")) {
                let error = $root.crac_protobuf.Airmass.verify(message.airmass);
                if (error)
                    return "airmass." + error;
            }
            return null;
        };

        /**
         * Creates a TelescopeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.TelescopeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.TelescopeResponse} TelescopeResponse
         */
        TelescopeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.TelescopeResponse)
                return object;
            let message = new $root.crac_protobuf.TelescopeResponse();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "TELESCOPE_DEFAULT_STATUS":
            case 0:
                message.status = 0;
                break;
            case "PARKED":
            case 1:
                message.status = 1;
                break;
            case "FLATTER":
            case 2:
                message.status = 2;
                break;
            case "SECURE":
            case 3:
                message.status = 3;
                break;
            case "NORTHEAST":
            case 4:
                message.status = 4;
                break;
            case "EAST":
            case 5:
                message.status = 5;
                break;
            case "SOUTHEAST":
            case 6:
                message.status = 6;
                break;
            case "SOUTHWEST":
            case 7:
                message.status = 7;
                break;
            case "WEST":
            case 8:
                message.status = 8;
                break;
            case "NORTHWEST":
            case 9:
                message.status = 9;
                break;
            case "LOST":
            case 10:
                message.status = 10;
                break;
            case "ERROR":
            case 11:
                message.status = 11;
                break;
            case "DISCONNECTED":
            case 12:
                message.status = 12;
                break;
            }
            if (object.eqCoords != null) {
                if (typeof object.eqCoords !== "object")
                    throw TypeError(".crac_protobuf.TelescopeResponse.eqCoords: object expected");
                message.eqCoords = $root.crac_protobuf.EquatorialCoords.fromObject(object.eqCoords);
            }
            if (object.aaCoords != null) {
                if (typeof object.aaCoords !== "object")
                    throw TypeError(".crac_protobuf.TelescopeResponse.aaCoords: object expected");
                message.aaCoords = $root.crac_protobuf.AltazimutalCoords.fromObject(object.aaCoords);
            }
            switch (object.speed) {
            default:
                if (typeof object.speed === "number") {
                    message.speed = object.speed;
                    break;
                }
                break;
            case "SPEED_NOT_TRACKING":
            case 0:
                message.speed = 0;
                break;
            case "SPEED_TRACKING":
            case 1:
                message.speed = 1;
                break;
            case "SPEED_CENTERING":
            case 2:
                message.speed = 2;
                break;
            case "SPEED_SLEWING":
            case 3:
                message.speed = 3;
                break;
            case "SPEED_ERROR":
            case 4:
                message.speed = 4;
                break;
            }
            switch (object.pierSide) {
            default:
                if (typeof object.pierSide === "number") {
                    message.pierSide = object.pierSide;
                    break;
                }
                break;
            case "DEFAULT_PIERSIDE":
            case 0:
                message.pierSide = 0;
                break;
            case "EAST_SIDE":
            case 1:
                message.pierSide = 1;
                break;
            case "WEST_SIDE":
            case 2:
                message.pierSide = 2;
                break;
            }
            if (object.buttonsGui) {
                if (!Array.isArray(object.buttonsGui))
                    throw TypeError(".crac_protobuf.TelescopeResponse.buttonsGui: array expected");
                message.buttonsGui = [];
                for (let i = 0; i < object.buttonsGui.length; ++i) {
                    if (typeof object.buttonsGui[i] !== "object")
                        throw TypeError(".crac_protobuf.TelescopeResponse.buttonsGui: object expected");
                    message.buttonsGui[i] = $root.crac_protobuf.ButtonGui.fromObject(object.buttonsGui[i]);
                }
            }
            if (object.airmass != null) {
                if (typeof object.airmass !== "object")
                    throw TypeError(".crac_protobuf.TelescopeResponse.airmass: object expected");
                message.airmass = $root.crac_protobuf.Airmass.fromObject(object.airmass);
            }
            return message;
        };

        /**
         * Creates a plain object from a TelescopeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.TelescopeResponse
         * @static
         * @param {crac_protobuf.TelescopeResponse} message TelescopeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TelescopeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.buttonsGui = [];
            if (options.defaults) {
                object.status = options.enums === String ? "TELESCOPE_DEFAULT_STATUS" : 0;
                object.eqCoords = null;
                object.aaCoords = null;
                object.speed = options.enums === String ? "SPEED_NOT_TRACKING" : 0;
                object.pierSide = options.enums === String ? "DEFAULT_PIERSIDE" : 0;
                object.airmass = null;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.crac_protobuf.TelescopeStatus[message.status] === undefined ? message.status : $root.crac_protobuf.TelescopeStatus[message.status] : message.status;
            if (message.eqCoords != null && message.hasOwnProperty("eqCoords"))
                object.eqCoords = $root.crac_protobuf.EquatorialCoords.toObject(message.eqCoords, options);
            if (message.aaCoords != null && message.hasOwnProperty("aaCoords"))
                object.aaCoords = $root.crac_protobuf.AltazimutalCoords.toObject(message.aaCoords, options);
            if (message.speed != null && message.hasOwnProperty("speed"))
                object.speed = options.enums === String ? $root.crac_protobuf.TelescopeSpeed[message.speed] === undefined ? message.speed : $root.crac_protobuf.TelescopeSpeed[message.speed] : message.speed;
            if (message.pierSide != null && message.hasOwnProperty("pierSide"))
                object.pierSide = options.enums === String ? $root.crac_protobuf.PierSide[message.pierSide] === undefined ? message.pierSide : $root.crac_protobuf.PierSide[message.pierSide] : message.pierSide;
            if (message.buttonsGui && message.buttonsGui.length) {
                object.buttonsGui = [];
                for (let j = 0; j < message.buttonsGui.length; ++j)
                    object.buttonsGui[j] = $root.crac_protobuf.ButtonGui.toObject(message.buttonsGui[j], options);
            }
            if (message.airmass != null && message.hasOwnProperty("airmass"))
                object.airmass = $root.crac_protobuf.Airmass.toObject(message.airmass, options);
            return object;
        };

        /**
         * Converts this TelescopeResponse to JSON.
         * @function toJSON
         * @memberof crac_protobuf.TelescopeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TelescopeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TelescopeResponse
         * @function getTypeUrl
         * @memberof crac_protobuf.TelescopeResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TelescopeResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.TelescopeResponse";
        };

        return TelescopeResponse;
    })();

    crac_protobuf.Telescope = (function() {

        /**
         * Constructs a new Telescope service.
         * @memberof crac_protobuf
         * @classdesc Represents a Telescope
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Telescope(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Telescope.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Telescope;

        /**
         * Creates new Telescope service using the specified rpc implementation.
         * @function create
         * @memberof crac_protobuf.Telescope
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Telescope} RPC service. Useful where requests and/or responses are streamed.
         */
        Telescope.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link crac_protobuf.Telescope#setAction}.
         * @memberof crac_protobuf.Telescope
         * @typedef SetActionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {crac_protobuf.TelescopeResponse} [response] TelescopeResponse
         */

        /**
         * Calls SetAction.
         * @function setAction
         * @memberof crac_protobuf.Telescope
         * @instance
         * @param {crac_protobuf.ITelescopeRequest} request TelescopeRequest message or plain object
         * @param {crac_protobuf.Telescope.SetActionCallback} callback Node-style callback called with the error, if any, and TelescopeResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Telescope.prototype.setAction = function setAction(request, callback) {
            return this.rpcCall(setAction, $root.crac_protobuf.TelescopeRequest, $root.crac_protobuf.TelescopeResponse, request, callback);
        }, "name", { value: "SetAction" });

        /**
         * Calls SetAction.
         * @function setAction
         * @memberof crac_protobuf.Telescope
         * @instance
         * @param {crac_protobuf.ITelescopeRequest} request TelescopeRequest message or plain object
         * @returns {Promise<crac_protobuf.TelescopeResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link crac_protobuf.Telescope#eqMove}.
         * @memberof crac_protobuf.Telescope
         * @typedef EqMoveCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {crac_protobuf.TelescopeResponse} [response] TelescopeResponse
         */

        /**
         * Calls EqMove.
         * @function eqMove
         * @memberof crac_protobuf.Telescope
         * @instance
         * @param {crac_protobuf.ITelescopeEquatorialMovementRequest} request TelescopeEquatorialMovementRequest message or plain object
         * @param {crac_protobuf.Telescope.EqMoveCallback} callback Node-style callback called with the error, if any, and TelescopeResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Telescope.prototype.eqMove = function eqMove(request, callback) {
            return this.rpcCall(eqMove, $root.crac_protobuf.TelescopeEquatorialMovementRequest, $root.crac_protobuf.TelescopeResponse, request, callback);
        }, "name", { value: "EqMove" });

        /**
         * Calls EqMove.
         * @function eqMove
         * @memberof crac_protobuf.Telescope
         * @instance
         * @param {crac_protobuf.ITelescopeEquatorialMovementRequest} request TelescopeEquatorialMovementRequest message or plain object
         * @returns {Promise<crac_protobuf.TelescopeResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link crac_protobuf.Telescope#aAMove}.
         * @memberof crac_protobuf.Telescope
         * @typedef AAMoveCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {crac_protobuf.TelescopeResponse} [response] TelescopeResponse
         */

        /**
         * Calls AAMove.
         * @function aAMove
         * @memberof crac_protobuf.Telescope
         * @instance
         * @param {crac_protobuf.ITelescopeAltazimutalMovementRequest} request TelescopeAltazimutalMovementRequest message or plain object
         * @param {crac_protobuf.Telescope.AAMoveCallback} callback Node-style callback called with the error, if any, and TelescopeResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Telescope.prototype.aAMove = function aAMove(request, callback) {
            return this.rpcCall(aAMove, $root.crac_protobuf.TelescopeAltazimutalMovementRequest, $root.crac_protobuf.TelescopeResponse, request, callback);
        }, "name", { value: "AAMove" });

        /**
         * Calls AAMove.
         * @function aAMove
         * @memberof crac_protobuf.Telescope
         * @instance
         * @param {crac_protobuf.ITelescopeAltazimutalMovementRequest} request TelescopeAltazimutalMovementRequest message or plain object
         * @returns {Promise<crac_protobuf.TelescopeResponse>} Promise
         * @variation 2
         */

        return Telescope;
    })();

    /**
     * MessageType enum.
     * @name crac_protobuf.MessageType
     * @enum {number}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} ROOF=1 ROOF value
     * @property {number} BUTTONS=2 BUTTONS value
     * @property {number} TELESCOPE=3 TELESCOPE value
     * @property {number} CHART=4 CHART value
     * @property {number} CURTAINS=5 CURTAINS value
     */
    crac_protobuf.MessageType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "ROOF"] = 1;
        values[valuesById[2] = "BUTTONS"] = 2;
        values[valuesById[3] = "TELESCOPE"] = 3;
        values[valuesById[4] = "CHART"] = 4;
        values[valuesById[5] = "CURTAINS"] = 5;
        return values;
    })();

    crac_protobuf.Envelope = (function() {

        /**
         * Properties of an Envelope.
         * @memberof crac_protobuf
         * @interface IEnvelope
         * @property {crac_protobuf.MessageType|null} [type] Envelope type
         * @property {Uint8Array|null} [payload] Envelope payload
         */

        /**
         * Constructs a new Envelope.
         * @memberof crac_protobuf
         * @classdesc Represents an Envelope.
         * @implements IEnvelope
         * @constructor
         * @param {crac_protobuf.IEnvelope=} [properties] Properties to set
         */
        function Envelope(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Envelope type.
         * @member {crac_protobuf.MessageType} type
         * @memberof crac_protobuf.Envelope
         * @instance
         */
        Envelope.prototype.type = 0;

        /**
         * Envelope payload.
         * @member {Uint8Array} payload
         * @memberof crac_protobuf.Envelope
         * @instance
         */
        Envelope.prototype.payload = $util.newBuffer([]);

        /**
         * Creates a new Envelope instance using the specified properties.
         * @function create
         * @memberof crac_protobuf.Envelope
         * @static
         * @param {crac_protobuf.IEnvelope=} [properties] Properties to set
         * @returns {crac_protobuf.Envelope} Envelope instance
         */
        Envelope.create = function create(properties) {
            return new Envelope(properties);
        };

        /**
         * Encodes the specified Envelope message. Does not implicitly {@link crac_protobuf.Envelope.verify|verify} messages.
         * @function encode
         * @memberof crac_protobuf.Envelope
         * @static
         * @param {crac_protobuf.IEnvelope} message Envelope message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Envelope.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
            return writer;
        };

        /**
         * Encodes the specified Envelope message, length delimited. Does not implicitly {@link crac_protobuf.Envelope.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crac_protobuf.Envelope
         * @static
         * @param {crac_protobuf.IEnvelope} message Envelope message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Envelope.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Envelope message from the specified reader or buffer.
         * @function decode
         * @memberof crac_protobuf.Envelope
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crac_protobuf.Envelope} Envelope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Envelope.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crac_protobuf.Envelope();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.payload = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Envelope message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crac_protobuf.Envelope
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crac_protobuf.Envelope} Envelope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Envelope.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Envelope message.
         * @function verify
         * @memberof crac_protobuf.Envelope
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Envelope.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };

        /**
         * Creates an Envelope message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crac_protobuf.Envelope
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crac_protobuf.Envelope} Envelope
         */
        Envelope.fromObject = function fromObject(object) {
            if (object instanceof $root.crac_protobuf.Envelope)
                return object;
            let message = new $root.crac_protobuf.Envelope();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "ROOF":
            case 1:
                message.type = 1;
                break;
            case "BUTTONS":
            case 2:
                message.type = 2;
                break;
            case "TELESCOPE":
            case 3:
                message.type = 3;
                break;
            case "CHART":
            case 4:
                message.type = 4;
                break;
            case "CURTAINS":
            case 5:
                message.type = 5;
                break;
            }
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length >= 0)
                    message.payload = object.payload;
            return message;
        };

        /**
         * Creates a plain object from an Envelope message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crac_protobuf.Envelope
         * @static
         * @param {crac_protobuf.Envelope} message Envelope
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Envelope.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "UNKNOWN" : 0;
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.crac_protobuf.MessageType[message.type] === undefined ? message.type : $root.crac_protobuf.MessageType[message.type] : message.type;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };

        /**
         * Converts this Envelope to JSON.
         * @function toJSON
         * @memberof crac_protobuf.Envelope
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Envelope.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Envelope
         * @function getTypeUrl
         * @memberof crac_protobuf.Envelope
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Envelope.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/crac_protobuf.Envelope";
        };

        return Envelope;
    })();

    return crac_protobuf;
})();

export { $root as default };
