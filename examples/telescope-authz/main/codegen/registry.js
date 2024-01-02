"use strict";
/**
* This file and any referenced files were automatically generated by @cosmology/telescope@1.3.2
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalDecoderRegistry = void 0;
const binary_1 = require("./binary");
const any_1 = require("./google/protobuf/any");
class GlobalDecoderRegistry {
    static registry = {};
    static aminoProtoMapping = {};
    static registerAminoProtoMapping(aminoType, typeUrl) {
        GlobalDecoderRegistry.aminoProtoMapping[aminoType] = typeUrl;
    }
    static register(key, decoder) {
        GlobalDecoderRegistry.registry[key] = decoder;
    }
    static getDecoder(key) {
        return GlobalDecoderRegistry.registry[key];
    }
    static getDecoderByInstance(obj) {
        if (obj === undefined || obj === null) {
            return null;
        }
        const protoType = obj;
        if (protoType.$typeUrl) {
            return GlobalDecoderRegistry.getDecoder(protoType.$typeUrl);
        }
        for (const key in GlobalDecoderRegistry.registry) {
            if (Object.prototype.hasOwnProperty.call(GlobalDecoderRegistry.registry, key)) {
                const element = GlobalDecoderRegistry.registry[key];
                if (element.is(obj)) {
                    return element;
                }
                if (element.isSDK && element.isSDK(obj)) {
                    return element;
                }
                if (element.isAmino && element.isAmino(obj)) {
                    return element;
                }
            }
        }
        return null;
    }
    static getDecoderByAminoType(type) {
        if (type === undefined || type === null) {
            return null;
        }
        const typeUrl = GlobalDecoderRegistry.aminoProtoMapping[type];
        if (!typeUrl) {
            return null;
        }
        return GlobalDecoderRegistry.getDecoder(typeUrl);
    }
    static wrapAny(obj) {
        const decoder = getDecoderByInstance(obj);
        return {
            typeUrl: decoder.typeUrl,
            value: decoder.encode(obj).finish(),
        };
    }
    static unwrapAny(input) {
        let data;
        if (any_1.Any.is(input)) {
            data = input;
        }
        else {
            const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
            data = any_1.Any.decode(reader, reader.uint32());
        }
        const decoder = GlobalDecoderRegistry.getDecoder(data.typeUrl);
        if (!decoder) {
            return data;
        }
        return decoder.decode(data.value);
    }
    static fromJSON(object) {
        const decoder = getDecoderByInstance(object);
        return decoder.fromJSON(object);
    }
    static toJSON(message) {
        const decoder = getDecoderByInstance(message);
        return decoder.toJSON(message);
    }
    static fromPartial(object) {
        const decoder = getDecoderByInstance(object);
        return decoder ? decoder.fromPartial(object) : object;
    }
    static fromSDK(object) {
        const decoder = getDecoderByInstance(object);
        return decoder.fromSDK(object);
    }
    static fromSDKJSON(object) {
        const decoder = getDecoderByInstance(object);
        return decoder.fromSDKJSON(object);
    }
    static toSDK(object) {
        const decoder = getDecoderByInstance(object);
        return decoder.toSDK(object);
    }
    static fromAmino(object) {
        const decoder = getDecoderByInstance(object);
        return decoder.fromAmino(object);
    }
    static fromAminoMsg(object) {
        const decoder = GlobalDecoderRegistry.getDecoderByAminoType(object.type);
        if (!decoder) {
            throw new Error(`There's no decoder for the amino type ${object.type}`);
        }
        return decoder.fromAminoMsg(object);
    }
    static toAmino(object) {
        let data;
        let decoder;
        if (any_1.Any.is(object)) {
            data = GlobalDecoderRegistry.unwrapAny(object);
            decoder = GlobalDecoderRegistry.getDecoder(object.typeUrl);
            if (!decoder) {
                decoder = any_1.Any;
            }
        }
        else {
            data = object;
            decoder = getDecoderByInstance(object);
        }
        return decoder.toAmino(data);
    }
    static toAminoMsg(object) {
        let data;
        let decoder;
        if (any_1.Any.is(object)) {
            data = GlobalDecoderRegistry.unwrapAny(object);
            decoder = GlobalDecoderRegistry.getDecoder(object.typeUrl);
            if (!decoder) {
                decoder = any_1.Any;
            }
        }
        else {
            data = object;
            decoder = getDecoderByInstance(object);
        }
        return decoder.toAminoMsg(data);
    }
}
exports.GlobalDecoderRegistry = GlobalDecoderRegistry;
function getDecoderByInstance(obj) {
    const decoder = GlobalDecoderRegistry.getDecoderByInstance(obj);
    if (!decoder) {
        throw new Error(`There's no decoder for the instance ${JSON.stringify(obj)}`);
    }
    return decoder;
}
