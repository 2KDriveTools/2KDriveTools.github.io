if (typeof exports === "undefined") {
	Object.defineProperty(window, "exports", {
		value: {},
		enumerable: true
	})
}
((exports)=>{
document.getElementsByClassName('dataform-input')[0].style.opacity = "1";
const global = {};
z = document.getElementById.bind(document);

const SETTINGS = {
	SHOW_SCALE: false,
}

const FILECHECK = { "name": "ArtemisVehicle.sav", "scripts": [ "/Script/Artemis.ArtemisVehicleSaveGame", "/Script/Artemis.ArtemisExtraVehicleSaveGame" ] }

const saveData = {}

const app = z("app")
const car_table = z("car-table")
const tbody = car_table.querySelector('tbody');
const tabs = z("app-tabs")
const tools = z("app-tools")
app.style = "opacity: 0"

const modal = z("app-modal")
const modalContent = z("modal-part")

const rightClicks = {}

const tableStyle = document.createElement('style')

const context = {
	clear: function() {
		let s = arguments.callee.name;
		for (k in this) 
			if (k != s)
				delete this[k]
	}
}

const angle_diff = 47
const initial_angle = 56

const fdi = z('fdinfo')
function validateFile(data) {
	let ofs = data.find("/Script/Artemis", 16)
	if (ofs < 0)
		return false

	let len = global.data.getInt32(ofs - 4, true)
	let name
	[ len, name ] = global.data.readString(ofs, len);

	if (FILECHECK.scripts.includes(name)) {
		saveData.script = name;
		return true
	}
	
	return false;
}
(()=>{
	let c = document.querySelector('#filedropper > code')
	c.innerText = FILECHECK.name
})()
function errorShake(err) {
	fdi.classList.remove('error')
	setTimeout(function() {
		fd.classList.add('error')
		fdi.classList.add('error')
		fdi.firstElementChild.innerText = err;
		// fd.style.border = '';
		setTimeout(function() {
			fd.classList.remove('error')
			fdi.classList.remove('error')
		}, 4500);
	}, 5);
}


function comparePart(a, b) {
	if (a != b)
		return false;
	if (a.color != b.color)
		return false;
	if (a.id != b.id)
		return false;
	
	return true
}

function checkChanges() {
	if (context.activeCar === null)
		return
	
	let elems = Array.from(tbody.children)
	let car = context.activeCar
	
	let nparts = []
	let modified = false;
	
	for (let i in elems) {
		let op = car.parts[i]
		let p = elems[i].data_part
		nparts.push(p)

		if (p.modified) {
			modified = true
			p.modified = false
		} else if (!comparePart(op, p)) {
			modified = true
		}
	}
	
	if (modified === true) {
		car.modified = true
		car.parts = nparts
	}
}

function writeSave() {
	checkChanges()
	for (let car of saveData.cars) {
		if (car.modified !== true)
			continue
		
		let ofs = car.offset		
		for (let part of car.parts) {
			global.data.setUint32(ofs, part.id, true)
			ofs += 4
			global.data.setUint32(ofs, part.color, true)
			ofs += 4
		}
		ofs += 37
		ofs += 0x46
		ofs += 0x26
		
		for (let part of car.parts) {
			ofs += 0x43
			global.data.setFloat(ofs, part.rotation.x)
			global.data.setFloat(ofs + 4, part.rotation.y)
			global.data.setFloat(ofs + 8, part.rotation.z)
			global.data.setFloat(ofs + 12, part.rotation.w)
			ofs += 0x57
			global.data.setFloat(ofs, part.vector.x)
			global.data.setFloat(ofs + 4, part.vector.y)
			global.data.setFloat(ofs + 8, part.vector.z)
			ofs += 0x4F
			global.data.setFloat(ofs, part.scale.x)
			global.data.setFloat(ofs + 4, part.scale.y)
			global.data.setFloat(ofs + 8, part.scale.z)
			ofs += 0x14
		}
		
	}
}

function customInput(base, label, step = 0) {
	let _in = document.createElement("input")
	let span = document.createElement("label")
	span.classList.add("custom-input")
	span.textContent = label
	base.appendChild(span)
	span.appendChild(_in)
	
	if (step != 0) {
		let up = document.createElement("button")
		up.classList.add("up"); up.classList.add("spinner")
		up.innerHTML = "&rsaquo;"
		let down = document.createElement("button")
		down.classList.add("down"); down.classList.add("spinner")
		down.innerHTML = "&lsaquo;"

		span.appendChild(up)
		span.appendChild(down)
		
		const event = new Event('change');

		up.addEventListener("click", () => {
			_in.value -= -step
			_in.dispatchEvent(event);
		});
		
		down.addEventListener("click", () => {
			_in.value -= step
			_in.dispatchEvent(event);
		});
	}

	_in.type = "number"	

	return _in
}

function openPart(part, fromPaste = false) {
	modal.style.display = "block";
	modalContent.innerHTML = ""
	
	let head = document.createElement("div")
	let bd = BrickData[""+part.id]
	modalContent.appendChild(head)
	head.classList.add("modal-head")
	if (bd) {
		head.textContent = bd.name
		let img = document.createElement("img")
		img.src = './resources/Bricks/' + bd.img + '.png'
		head.appendChild(img)
	} else {
		head.textContent = "Unknown (" + part.id + ")"
	}
	
	let quat = document.createElement("div")
	quat.classList.add("quat")
	let span = document.createElement("p")
	span.textContent = "Rotation"
	quat.appendChild(span)
	for (let k in part.rotation) {
		let _in = customInput(quat, k.toUpperCase(), 0.1)
		_in.value = part.rotation[k]
		
		_in.addEventListener("change", function(e) {
			part.rotation[k] = parseFloat(this.value)
			part.modified = true
		});
	}
	
	let vec = document.createElement("div")
	vec.classList.add("vec")
	span = document.createElement("p")
	span.textContent = "Position"
	vec.appendChild(span)
	for (let k in part.vector) {
		let _in = customInput(vec, k.toUpperCase(), k == 'z' ? 10.0 : 12.5)
		_in.value = part.vector[k]
		
		_in.addEventListener("change", function(e) {
			part.vector[k] = parseFloat(this.value)
			part.modified = true
		});
	}
	
	modalContent.appendChild(quat)
	modalContent.appendChild(vec)

	if (SETTINGS.SHOW_SCALE) {
		let scal = document.createElement("div")
		scal.classList.add("vec")
		span = document.createElement("p")
		span.textContent = "Scale"
		scal.appendChild(span)
		for (let k in part.scale) {
			let _in = customInput(scal, k.toUpperCase(), 0.05)
			_in.value = part.scale[k]
			
			_in.addEventListener("change", function(e) {
				part.scale[k] = parseFloat(this.value)
				part.modified = true
			});
		}

		modalContent.appendChild(scal)
	}
	
	let footer = document.createElement("div")
	footer.classList.add("modal-footer")
	modalContent.appendChild(footer)

	let cpy = document.createElement("button")
	cpy.textContent = "Copy Data"
	cpy.addEventListener("click", function() {
		context.copiedPart = {
			rotation: { ...part.rotation },
			vector: { ...part.vector }
		}
		
		this.classList.add("clicked")
		this.textContent = "Copied"
		this.disabled = true;
	});

	footer.appendChild(cpy)
	
	if (context.copiedPart) {
		let pst = document.createElement("button")
		if (fromPaste === true) {
			pst.textContent = "Pasted"
			pst.classList.add("clicked")
			pst.disabled = true;
		} else {
			pst.textContent = "Paste Data"
			pst.addEventListener("click", function() {
				part.rotation = { ...context.copiedPart.rotation }
				part.vector = { ...context.copiedPart.vector }
				part.modified = true

				openPart(part, true) // TODO: maybe do this smoother
			});
		}
		footer.appendChild(pst)
	}
}

var lastAngle = 0
function randomColor() { /* Actually rotating, to prevent neighbouring matches */
	lastAngle += angle_diff
	lastAngle %= 360
	return "hsl(" + (lastAngle) + 'deg 100% 45% / 25%)'
}
function updateStyle(car) {
	lastAngle = initial_angle
	tableStyle.innerHTML = ""
	for (let i in car.assemblies.list) {
		let assembly = car.assemblies.list[i]
		let col = randomColor()

		tableStyle.innerHTML += `#car-table > tbody > tr:nth-child(n+${assembly.partOffset + 1}):nth-child(-n+${assembly.partOffset + assembly.numParts}):after {
	background: ${col};
	content: '';
}
#app-tools > div:nth-child(${parseInt(i) + 1}) {
	background: ${col};
}
`
	}
}
function openCar(car) {
	// console.log("opening ", car)
	checkChanges()
	tools.innerHTML = ""
	for (let a of car.assemblies.list) {
		let _d = document.createElement("div")
		_d.classList.add("assembly-info")
		
		let _s = document.createElement("span")
		
		let a_name = undefined
		if (a.type)
			a_name = a.type
		if (a.name) {
			if (a_name)
				a_name += " "
			a_name += a.name
		}
		_s.textContent = a_name || "0x" + a.ofs.toString(16)
		
		let _n = document.createElement("code")
		_n.textContent = a.numParts
		
		let elem = document.createElement("button")
		elem.textContent = "to 1"
		elem._assembly_size = 1
		elem.onclick = function() {
			global.data.setUint16(a.ofs, this._assembly_size, true)
			_n.textContent = a.numParts = this._assembly_size
			updateStyle(car)
		}
		_d.addEventListener('mousedown', function(evt) {
			if (evt.target.nodeName == 'BUTTON')
				return
			let elem = this.querySelector('button')
			elem._assembly_size += 1
			elem._assembly_size -= evt.button
			if (elem._assembly_size < 1)
				elem._assembly_size = 1
			elem.textContent = "to " + elem._assembly_size
			/*
			let elem = target.querySelector('button')
			console.log("RIGHTCLICKS", elem, target)
			elem._assembly_size += 1
			elem.textContent = "to " + elem._assembly_size
			*/
		})
		
		_d.appendChild(_s)
		_d.appendChild(_n)
		_d.appendChild(elem)
		
		tools.appendChild(_d)
	}
	
	tbody.innerHTML = ""
	context.clear()
	context.activeCar = car
	for (let i in car.parts) {
		let part = car.parts[i]
		let tr = document.createElement("tr")
		tbody.appendChild(tr)
		
		tr.data_part = part
		
		let bd = BrickData[""+part.id]
		
		let td = document.createElement("td")
		tr.appendChild(td)
		td.textContent = i
		
		td = document.createElement("td")
		tr.appendChild(td)
		if (bd) {
			td.textContent = bd.name
		} else {
			td.textContent = "Unknown (" + part.id + ")"
		}
		let nameTd = td
		
		td = document.createElement("td")
		tr.appendChild(td)
		
		let _in = document.createElement("input")
		td.appendChild(_in)
		_in.value = part.id
		_in.type = "number"
		
		_in.addEventListener("change", function(e) {
			part.id = parseInt(this.value)
			let bd = BrickData[""+part.id]
			if (bd) {
				nameTd.textContent = bd.name
			} else {
				nameTd.textContent = "Unknown (" + part.id + ")"
			}
			part.modified = true
		});
		
		td = document.createElement("td")
		_in = document.createElement("input")
		td.appendChild(_in)
		_in.value = part.color
		_in.type = "number"
		
		_in.addEventListener("change", function(e) {
			part.color = parseInt(this.value)
			part.modified = true
		});
		
		tr.appendChild(td)
	}
	updateStyle(car)
}

function downloadSave() {
	writeSave()

	var blob = new Blob([global.data]),
		url = window.URL.createObjectURL(blob),
		a = document.createElement("a");
	a.style = "display: none";
	document.body.appendChild(a);
	a.href = url;
	a.download = global.fname;
	a.click();
	a.parentNode.removeChild(a);
	window.URL.revokeObjectURL(url);
}

function FString(str) {
	return str == "None" ? undefined : str
}

function readSave() {
	let ofs = 0x480;
	let cap = 50;
	
	saveData.cars = []

	while (ofs > 0 && cap > 0) {
		cap -= 1
		ofs = global.data.find('VehicleName', ofs)
		if (ofs > 0) {
			ofs += 37
			let len = global.data.getInt32(ofs, true)
			ofs += 4
			if (len != 0) {
				let name
				[ len, name ] = global.data.readString(ofs, len);
				ofs += len

				ofs = global.data.find("Parts\0\x0F\0\0\0StructProperty\0", ofs)
				ofs += 25

				let size = global.data.getUint32(ofs, true)
				
				ofs += 51

				let wheel_infos = []

				let ass_ofs = global.data.find("Assemblies\0\x0E\0\0\0ArrayProperty\0", ofs)
				let ass_size = global.data.getUint32(ass_ofs + 0x1D, true) + 0x1D
				let ass_list = []
				let last_ofs = l_ofs = ass_ofs
				while (l_ofs > 0) {
					l_ofs = global.data.find("AssemblyType\0\x0D\0\0\0NameProperty\0", l_ofs) 
					if (l_ofs > (ass_ofs + ass_size))
						break
					if (l_ofs <= last_ofs)
						break
					
					l_ofs += 0x27 
					let ass_type
					[ len, ass_type ] = global.data.readString(l_ofs + 4, global.data.getInt32(l_ofs, true));
					l_ofs += 4 + len

					l_ofs += 0x2B // AssemblyName\0\x0D\0\0\0NameProperty\0

					let ass_name
					[ len, ass_name ] = global.data.readString(l_ofs + 4, global.data.getInt32(l_ofs, true));
					l_ofs += 4 + len
					
					l_ofs += 0x2B
					let pofs = global.data.getUint16(l_ofs, true)
					l_ofs += 2
					
					l_ofs += 0x29
					// l_ofs = global.data.find("NumParts\0\x0F\0\0\0UInt16Property\0", l_ofs) + 0x25
					
					let pval = global.data.getUint16(l_ofs, true)
					
					ass_list.push( { "ofs": l_ofs, "numParts": pval, "partOffset": pofs, "type": FString(ass_type), "name": FString(ass_name) } )
					
					if (ass_type == "Wheel" || ass_type == "WheelExtra") {
						for (let i = 0; i < pval; i++) {
							wheel_infos.push(pofs + i)
						}
					}
					
				}

				let carData = {
					"name": name,
					"offset": ofs,
					"assemblies": { 
						"offset": ass_ofs,
						"list": ass_list
					},
					"parts": [],
					"wheels": [],
					"modified": false
				}

				let pcount = size / 8;
				// console.log(pcount)
				
				for (let i = 0; i < pcount; i++) {
					let partid = global.data.getUint32(ofs, true)
					ofs += 4
					let partcolor = global.data.getUint32(ofs, true)
					ofs += 4
					
					let part = {
						"id": partid,
						"color": partcolor,
						"vector": null,
						"rotation": null
					}
					
					carData.parts.push(part)
					
					if (wheel_infos.includes(i)) {
						carData.wheels.push(part)
					}
				}

				ofs += 37
				// size = global.data.getUint32(ofs, true)
				ofs += 0x46
				
				// size = global.data.getUint32(ofs, true)
				ofs += 0x26

				for (let i = 0; i < pcount; i++) {
					let part = carData.parts[i]
					// part.offset = ofs.toString(16)
					ofs += 0x43
					let x = global.data.getFloat(ofs)
					let y = global.data.getFloat(ofs + 4)
					let z = global.data.getFloat(ofs + 8)
					let w = global.data.getFloat(ofs + 12)
					part.rotation = { 'x': x, 'y': y, 'z': z, 'w': w }
					ofs += 0x57
					x = global.data.getFloat(ofs)
					y = global.data.getFloat(ofs + 4)
					z = global.data.getFloat(ofs + 8)
					part.vector = { 'x': x, 'y': y, 'z': z }
					ofs += 0x4F
					x = global.data.getFloat(ofs)
					y = global.data.getFloat(ofs + 4)
					z = global.data.getFloat(ofs + 8)
					part.scale = { 'x': x, 'y': y, 'z': z }
					ofs += 0x14
				}

				saveData.cars.push(carData)
			}
		}
	}

	
	for (let carnum in saveData.cars) {
		let car = saveData.cars[carnum]
		let elem = document.createElement("button")
		elem.classList.add("car-tab")
		elem.carData = car
		elem.onclick = function() {
			for (let _ of tabs.children)
				_.classList.remove("active")
			this.classList.add("active")
			openCar(this.carData)
		}
		let nam = document.createElement("span")
		nam.classList.add("car-name")
		elem.appendChild(nam)
		
		nam.textContent = car.name

		tabs.appendChild(elem)
	}
	if (saveData.cars.length > 0) {
		openCar(saveData.cars[0])
		tabs.children[0].classList.add("active")

		let _div = document.createElement("div")
		_div.classList.add("download-button")
		
		let _btn = document.createElement("button")
		_btn.textContent = "Download Save"
		_btn.addEventListener("click", downloadSave);
		
		_div.appendChild(_btn)

		app.appendChild(_div)
		
		return true;
	}
	return false;
}

function loadFile(f = null) {
	var fr;
	if (z('fileinput').files[0]) f = z('fileinput').files[0];
	if (f != null) {
		global.fname = f.name;
		fr = new FileReader();
		fr.readAsBinaryString(f);
		var dr = new FileReader();
		
		global.dec = new TextDecoder("ISO-8859-2");
		global.utfdec = new TextDecoder("UTF-16");
		
		dr.readAsArrayBuffer(f);
		dr.onload = function(f) { 
			global.data = new DataView(f.target.result);
			
			global.data.readString = function (offset, length) {
				let blen = length
				
				if (length > 0) {
					var chars = new Uint8Array(length - 1), i, j;
					for (i = offset, j=0; j < length; i++) chars[j++] = this.getInt8(i, true);
					return [ blen, global.dec.decode(chars) ]
				} else {
					blen *= -2
					let enc_len = blen - 2
					var chars = new Uint16Array(enc_len / 2), i, j;
					for (i = offset, j=0; j < enc_len; i += 2) chars[j++] = this.getUint16(i, true);
					return [ blen, global.utfdec.decode(chars) ]
				}
			}
			
			global.data.writeString = function (offset, string, size=string.length) {
				var chars = new Uint8Array(size), i, j;
				for (j = 0; j < string.length; j++) chars[j] = string.charCodeAt(j);
				for (i = offset, j=0; j < size; i++) this.setInt8(i, chars[j++], true);
			}
			
			global.data.setFloat = function (offset, value, littleEndian = true) {
				return this.setFloat32(offset, value, littleEndian)
			}
			
			global.data.getFloat = function (offset, littleEndian = true) {
				let v = this.getFloat32(offset, littleEndian)
				
				return v // Math.round(v * 1000) / 1000;
			}
			
			global.data.find = function (pattern, start = 0) {
				return this.str.indexOf(pattern, start)
			}
			
			var u8arr = new Uint8Array(global.data.buffer);
			global.data.str = global.dec.decode(u8arr)
			
			if (validateFile(global.data)) {
				if (readSave()) {
					var md = document.getElementsByClassName('dataform-input')[0];
					md.style.opacity = "0";
					app.style.opacity = "1"
					setTimeout(function() {
						md.parentNode.removeChild(md);
					}, 300);
				} else {
					errorShake("No Cars found")	
				}
			} else {
				errorShake("Invalid File")
			}
		}
	}
}

function handleFileSelect(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	loadFile(evt.dataTransfer.files[0]);
}
function handleDragOver(evt) {
	fd.style.border = '2px solid #bbb';
	evt.stopPropagation();
	evt.preventDefault();
	evt.dataTransfer.dropEffect = 'copy';
}
function handleDragOut(evt) {
	fd.style.border = '';
}
const fd = z('filedropper');
fd.addEventListener('dragover', handleDragOver, false);
fd.addEventListener('dragleave', handleDragOut, false);
fd.addEventListener('drop', handleFileSelect, false);
fd.addEventListener('click', function() { z('fileinput').click()}, false);
z('fileinput').addEventListener('change', loadFile, false);		

var currRow = null,
    dragElem = null,
    mouseDownX = 0,
    mouseDownY = 0,         
    mouseX = 0,
    mouseY = 0,
	dragScoll = 0,
    mouseDrag = false; 

function init() {
	bindMouse();
	window.onscroll = function (e) {  
		if (dragElem) {
			mouseDownY = mouseDownY + dragScoll - window.pageYOffset
			dragScoll = window.pageYOffset
		}
	} 
}

function bindMouse() {
  document.addEventListener('mousedown', (event) => {
    if(event.button != 0) return true;
    
    let target = getTargetRow(event.target);
    if(target) {
      currRow = target;
      addDraggableRow(target);
      currRow.classList.add('is-dragging');


      let coords = getMouseCoords(event);
      mouseDownX = coords.x;
      mouseDownY = coords.y;      

      mouseDrag = true;   
    }
  });
  
  document.addEventListener('mousemove', (event) => {
    if(!mouseDrag) return;
    
    let coords = getMouseCoords(event);
	dragScoll = window.pageYOffset
	
    mouseX = coords.x - mouseDownX;
    mouseY = coords.y - mouseDownY;  
    
    moveRow(mouseX, mouseY);
  });
  
  document.addEventListener('mouseup', (event) => {
    if(!mouseDrag) return;
    
    currRow.classList.remove('is-dragging');
    car_table.removeChild(dragElem);
    
    dragElem = null;
    mouseDrag = false;
  });    
}


function swapRow(row, index) {
   let currIndex = Array.from(tbody.children).indexOf(currRow),
       row1 = currIndex > index ? currRow : row,
       row2 = currIndex > index ? row : currRow;
       
	// console.log("Swapping ", row1.data_part, " with ", row2.data_part)

   tbody.insertBefore(row1, row2);

	let ary = Array.from(tbody.children)
	row1.firstChild.textContent = ary.indexOf(row1)
	row2.firstChild.textContent = ary.indexOf(row2)
}
  
function moveRow(x, y) {
  dragElem.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
  
  let	dPos = dragElem.getBoundingClientRect(),
      currStartY = dPos.y, currEndY = currStartY + dPos.height,
      rows = getRows();

  for(var i = 0; i < rows.length; i++) {
    let rowElem = rows[i],
        rowSize = rowElem.getBoundingClientRect(),
        rowStartY = rowSize.y, rowEndY = rowStartY + rowSize.height;

    if(currRow !== rowElem && isIntersecting(currStartY, currEndY, rowStartY, rowEndY)) {
      if(Math.abs(currStartY - rowStartY) < rowSize.height / 2)
        swapRow(rowElem, i);
    }
  }    
}

function addDraggableRow(target) {    
    dragElem = target.cloneNode(true);
    dragElem.classList.add('draggable-table__drag');
    dragElem.style.height = getStyle(target, 'height');
    dragElem.style.background = getStyle(target, 'backgroundColor');     
    for(var i = 0; i < target.children.length; i++) {
      let oldTD = target.children[i],
          newTD = dragElem.children[i];
      newTD.style.width = getStyle(oldTD, 'width');
      newTD.style.height = getStyle(oldTD, 'height');
      newTD.style.padding = getStyle(oldTD, 'padding');
      newTD.style.margin = getStyle(oldTD, 'margin');
    }      
    
    car_table.appendChild(dragElem);

  
    let tPos = target.getBoundingClientRect(),
        dPos = dragElem.getBoundingClientRect();
    dragElem.style.bottom = ((dPos.y - tPos.y) - tPos.height) + "px";
    dragElem.style.left = "-1px";    
  
    document.dispatchEvent(new MouseEvent('mousemove',
      { view: window, cancelable: true, bubbles: true }
    ));    
}  

function getRows() {
  return car_table.querySelectorAll('tbody tr');
}    

function getTargetRow(target) {
    let elemName = target.tagName.toLowerCase();

    if(elemName == 'tr') return target;
    if(elemName == 'td') return target.closest('tr');     
}

function getMouseCoords(event) {
  return {
      x: event.clientX,
      y: event.clientY
  };    
}  

function getStyle(target, styleName) {
  let compStyle = getComputedStyle(target),
      style = compStyle[styleName];

  return style ? style : null;
}  

function isIntersecting(min0, max0, min1, max1) {
    return Math.max(min0, max0) >= Math.min(min1, max1) &&
           Math.min(min0, max0) <= Math.max(min1, max1);
}  
init();

function closeModal() {
	// save part data
	modal.style.display = "none";
	modalContent.innerHTML = ""
}

((modal, f)=>{
	const span = document.getElementsByClassName("close")[0];
	span.onclick = f
	window.onclick = function(event) {
		if (event.target == modal)
			f()
	}
})(modal, closeModal);

document.addEventListener('contextmenu', function(e) {
	let target = e.target
	let f = rightClicks[target]
	if (f != undefined) {
		f(target)
	} else {
		if (target.nodeName == 'TD')
			target = target.parentElement
		if (target.data_part) {
			openPart(target.data_part)
		}
	}
	e.preventDefault();
}, false);

document.body.appendChild(tableStyle)

var lastY = 0;
document.addEventListener('scroll', () => {
	if (lastY == window.scrollY)
		return
	lastY = window.scrollY;
	if (window.scrollY > 53) {
		tools.classList.add('fixed')
	} else {
		tools.classList.remove('fixed')
	}
}, { passive: true });

})(exports);