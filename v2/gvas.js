// "use strict";
const PropertyTypes = {
	optionalTypes: new Set([
		'SoftObject',
		'Object',
		'Int8', 'Int16', 'Int', 'Int32', 'Int64',
		'UInt8', 'UInt16', 'UInt', 'UInt32', 'UInt64',
		'Str', 'Name',
		'Float', 'Double'
		
	]),
	hasOptionalGuid: function(type) {
		return this.optionalTypes.has(type)
	}
}
class GVASReader {
	#ofs = 0;
	#dec;
	#utfdec;
	#view;
	constructor(data) {
		this.#ofs = 0
		this.#view = new DataView(data);
		this.#dec = new TextDecoder("ISO-8859-2");
		this.#utfdec = new TextDecoder("UTF-16");
	}
	get view() { return this.#view }	
	get pos() { return this.#ofs }	
	set pos(pos) { this.#ofs = pos }
	readBytes(length) {
		var chars = new Uint8Array(length)
		for (let i = 0; i < length; i++) chars[i] = this.readUChar();
		return this.#dec.decode(chars)
	}
	readChar() {
		const r = this.view.getInt8(this.#ofs, true)
		this.#ofs += 1
		return r
	}
	readUChar() {
		const r = this.view.getUint8(this.#ofs, true)
		this.#ofs += 1
		return r
	}
	readBool() {
		return this.readUChar() != 0
	}
	readInt8() { return this.readChar() }
	readUInt8() { return this.readUChar() }
	readInt16() {
		const r = this.view.getInt16(this.#ofs, true)
		this.#ofs += 2
		return r
	}
	readUInt16() {
		const r = this.view.getUint16(this.#ofs, true)
		this.#ofs += 2
		return r
	}
	readInt32() {
		const r = this.view.getInt32(this.#ofs, true)
		this.#ofs += 4
		return r
	}
	readUInt32() {
		const r = this.view.getUint32(this.#ofs, true)
		this.#ofs += 4
		return r
	}
	readInt64() {
		const r = this.view.getBigInt64(this.#ofs, true)
		this.#ofs += 8
		return r
	}
	readUInt64() {
		const r = this.view.getBigUint64(this.#ofs, true)
		this.#ofs += 8
		return r
	}
	readFloat() {
		const r = this.view.getFloat32(this.#ofs, true)
		this.#ofs += 4
		return r
	}
	readDouble() {
		const r = this.view.getFloat64(this.#ofs, true)
		this.#ofs += 8
		return r
	}
	readGUID() {
		return new UUID(this.readUInt64(), this.readUInt64())
	}
	readOptionalGUID() {
		if (this.readBool())
			return new UUID(this.readUInt64(), this.readUInt64())
		
		return undefined
	}
	readString() {
		let length = this.readInt32()
		if (length == 0) return ""
		if (length > 0) {
			var chars = new Uint8Array(length - 1), j;
			for (j=0; j < chars.length; j++) chars[j] = this.readUChar();
			if (this.readUChar() != 0) {
				// error in string
			}
			return this.#dec.decode(chars)
		} else {
			length *= -2
			var chars = new Uint16Array((length / 2) - 1), j;
			for (j=0; j < chars.length; j++) chars[j] = this.readUInt16();
			if (this.readUInt16() != 0) {
				// error in string
			}
			return this.#utfdec.decode(chars)
		}
	}
	readPropertyString() {
		return this.readString().replace('Property', '')
	}
	readGUID() {
		return this.readBytes(16)
	}
	readOptionalGUID() {
		return this.readBool() ? this.readGUID() : null;
	}
	readPropertyCatching(parent = null, key = null) {
		try {
			return this.readProperty(parent, key)
		} catch (ex) {
			if (ex.caught === undefined) {
				ex.message += " at 0x" + this.#ofs.toString(16)
				ex.caught = true;
			}
			throw ex
		}
	}
	readProperty(parent = null, key = null) {
		let prop = {
			name: this.readString()
		}
		
		if (prop.name == "None")
			return null

		prop.type = this.readPropertyString()
		prop.size = this.readUInt64()
		prop.value = {}
		
		if (PropertyTypes.hasOptionalGuid(prop.type)) 
			prop.optionalGUID = this.readOptionalGUID()

		switch(prop.type) {
			case 'Struct':
				this.readStructProperty(prop, parent)
				break;
			case 'Array':
				this.readArrayProperty(prop, parent)
				break;
			case 'Set':
				this.readSetProperty(prop, parent)
				break;
			case 'Map':
				this.readMapProperty(prop, parent)
				break;
			case 'SoftObject':
				prop.value.objectName = this.readString()
				prop.value.tag = this.readUInt32()
				break
			case 'Object':
				prop.value.objectName = this.readString()
				break;
			case 'Name':
			case 'Str':
				prop.value = this.readString()
				break;
			case 'Float':
				prop.value = this.readFloat()
				break;
			case 'Double':
				prop.value = this.readDouble()
				break
			case 'UInt8':
				prop.value = this.readUInt8()
				break;
			case 'UInt16':
				prop.value = this.readUInt16()
				break;
			case 'UInt':
			case 'UInt32':
				prop.value = this.readUInt32()
				break;
			case 'UInt64':
				prop.value = this.readUInt64()
				break;
			case 'Int8':
				prop.value = this.readInt8()
				break;
			case 'Int16':
				prop.value = this.readInt16()
				break;
			case 'Int':
			case 'Int32':
				prop.value = this.readInt32()
				break;
			case 'Int64':
				prop.value = this.readInt64()
				break;
			case 'Bool':
				prop.value = this.readBool()
				prop.optionalGUID = this.readOptionalGUID()
				break;
			case 'Byte':
				let etype = this.readString()
				prop.optionalGUID = this.readOptionalGUID()
				if (etype == "None") {
					prop.value = this.readUChar()
				} else {
					prop.enumType = etype
					prop.value = this.readString() // enum
				}
				break;
			case 'Enum':
				prop.value.type = this.readString()
				prop.value.compact = prop.value.type.includes("::")
				if (prop.value.compact) {
					let _s = prop.value.type.split("::")
					prop.value.type = _s[0]
					prop.value.value = _s[1]
				} else {
					prop.optionalGUID = this.readOptionalGUID()
					prop.value.value = this.readString()
				}
				break;
			default:
				throw new Error("Unimplemented Property Type " + prop.type)
				break;
		}
		
		return prop
	}
	readSetProperty(prop, parent) { // Possibly wrong
		prop.valueType = this.readPropertyString()
		prop.optionalGUID = this.readOptionalGUID()
		
		delete prop.value
		prop.values = new Set()

		prop.flags = this.readUInt32()
		let count = this.readUInt32()

		let structType = prop.optionalGUID ? "Struct" : "Guid" 

		switch (prop.valueType) {
			case 'Struct':
				for (; count > 0; count--) {
					prop.values.add(this.#readStructBody(structType));
				}
				break;
			case 'Enum':
			case 'Name':
			case 'Str':
				for (; count > 0; count--)
					prop.values.add(this.readString());
				break;
			default:
				throw new Error("Unimplemented Set ValueType " + prop.valueType + " at " + this.#ofs.toString(16))
		}

		return prop
	}
	readMapProperty(prop, parent) { // TODO: Improve this
		prop.keyType = this.readPropertyString()
		prop.valueType = this.readPropertyString()
		prop.optionalGUID = this.readOptionalGUID()

		//if (prop.keyType != 'Struct')
		//	throw new Error("Unimplemented Map Type " + prop.keyType + " : " + prop.valueType + " at " + this.#ofs.toString(16))

		delete prop.value
		prop.values = new Map()
		
		prop.flags = this.readUInt32()
		
		let count = this.readUInt32()

		let keyStructType = prop.optionalGUID ? "Struct" : "Guid" // TODO: there's scenarios where this does not apply - somehow

		if (prop.name == "CompletedActivitiesStory")
			keyStructType = "Struct"

		for (let i = 0; i < count; i++) {
			let key;
			switch (prop.keyType) {
				case 'Struct':
					key = this.#readStructBody(keyStructType);
					break;
				case 'Name':
				case 'Str':
					key = this.readString();
					break;
				default:
					throw new Error("Unimplemented Map KeyType " + prop.keyType + " at " + this.#ofs.toString(16))
			}
			
			switch (prop.valueType) {
				case 'Struct':
					prop.values.set(key, this.#readStructBody("Struct"));
					break;
				case 'Enum':
				case 'Name':
				case 'Str':
					prop.values.set(key, this.readString());
					break;
				default:
					throw new Error("Unimplemented Map ValueType " + prop.valueType + " at " + this.#ofs.toString(16))
			}
		}
		
		return prop
	}
	readArrayProperty(prop, parent) {
		prop.valueType = this.readPropertyString()
		prop.optionalGUID = this.readOptionalGUID()
		delete prop.value
		prop.values = []
		
		let count = this.readUInt32()
		switch (prop.valueType) {
			case 'Byte':
				for (;count > 0; count--)
					prop.values.push(this.readUChar())
				break;
			case 'Bool':
				for (;count > 0; count--)
					prop.values.push(this.readBool())
				break;
			case 'Int':
				for (;count > 0; count--)
					prop.values.push(this.readInt32())
				break;
			case 'Int64':
				for (;count > 0; count--)
					prop.values.push(this.readInt64())
				break;
			case 'Float':
				for (;count > 0; count--)
					prop.values.push(this.readFloat())
				break;
			case 'Str':
			case 'Enum':
				for (;count > 0; count--)
					prop.values.push(this.readString())
				break;
			case 'SoftObject':
				for (;count > 0; count--)
					prop.values.push({
						objectName: this.readString(),
						tag: this.readUInt32()
					})
				break;
			case 'Object':
				for (;count > 0; count--)
					prop.values.push({
						objectName: this.readString()
					})
				break;
			case 'Struct':
				this.readString() // name
				this.readString() // StructProperty
				prop.struct = {
					size: this.readUInt64(),
					type: this.readString(),
					guid: this.readGUID(),
					optionalGUID: this.readOptionalGUID(),
				}
				for (;count > 0; count--) {
					prop.values.push(this.#readStructBody(prop.struct.type))
				}
				break
			default:
				throw new Error("Unimplemented Array Type " + prop.valueType)
				break;
		}
		
		return prop
	}
	#readStructBody(valueType) {
		switch (valueType) {
			case 'Guid':
				return {
					guid: this.readGUID()
				}
			case 'DateTime':
				return {
					ticks: this.readUInt64()
				}
			case 'LinearColor':
				return {
					r: this.readFloat(),
					g: this.readFloat(),
					b: this.readFloat(),
					a: this.readFloat()
				}
			case 'Quat':
				return {
					x: this.readFloat(),
					y: this.readFloat(),
					z: this.readFloat(),
					w: this.readFloat()
				}
			case 'Rotator':
				return {
					yaw: this.readFloat(),
					pitch: this.readFloat(),
					roll: this.readFloat()
				}
			case 'Vector':
				return {
					x: this.readFloat(),
					y: this.readFloat(),
					z: this.readFloat()
				}
			case 'Vector2D':
			case 'IntPoint':
				return {
					x: this.readFloat(),
					y: this.readFloat()
				}
			case 'LegoGraphPartInstance':
				return {
					part: this.readUInt32(),
					color: this.readUInt32()
				}
			default:
				let value = { }
				while (true) {
					let p = this.readProperty(valueType);
					if (!p)
						break
				
					value[p.name] = p
				}
				return value;
		}
	}
	readStructProperty(prop, parent) {
		prop.valueType = this.readString()
		prop.guid = this.readGUID()
		prop.optionalGUID = this.readOptionalGUID()
		
		prop.value = this.#readStructBody(prop.valueType)
		
		return prop
	}
};

class Drive2KSave {
	constructor(data) {
		let reader = new GVASReader(data)
	
		if (reader.readBytes(4) != 'GVAS')
			throw new Error("Invalid File Magic")
	
		this.header = {
			saveVersion: reader.readUInt32(),
			packageVersion: reader.readUInt32()
		}
		
		if (this.header.saveVersion >= 3) {
			this.header.buildVersion 	 = this.header.packageVersion;
			this.header.packageVersion   = reader.readUInt32();
		}
		
		this.header.engineVersion = {
			major: reader.readUInt16(),
			minor: reader.readUInt16(),
			patch: reader.readUInt16(),
			build: reader.readUInt32(),
			branch: reader.readString(),
		}

		this.header.customVersionFormat = reader.readUInt32()
		
		this.header.customVersions = []
		for (let i = reader.readUInt32(); i > 0; i--) {
			this.header.customVersions.push({
				guid: reader.readGUID(),
				version: reader.readUInt32()
			})
		}

		this.header.saveClassName = reader.readString()
		
		this.root = {}
		
		while (true) {
			let p = reader.readProperty();
			if (!p)
				break
		
			this.root[p.name] = p
		}
	}
}