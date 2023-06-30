(()=>{
document.getElementsByClassName('dataform-input')[0].style.opacity = "1";
const global = {};
z = document.getElementById.bind(document);

const saveData = {}

const app = z("app")
const modal = z("app-modal")
const modalContent = z("modal-part")

function downloadSave() {

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

function readSave() {
	let ofs = 0x480;

	ofs = global.data.find('DXPList\0\x0E\0\0\0\0ArrayProperty\0')
	ofs += 0x37

	global.data.setUint32(ofs, 150000, true)
	
	let _div = document.createElement("div")
	_div.classList.add("modal-download-button")
	
	let _btn = document.createElement("button")
	_btn.textContent = "Download Save"
	_btn.addEventListener("click", downloadSave);
	
	_div.appendChild(_btn)

	modalContent.parentNode.appendChild(_div)
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
			
			readSave()
		}

		var md = document.getElementsByClassName('dataform-input')[0];
		md.style.opacity = "0";
		modal.style.display = "block"
		setTimeout(function() {
			md.parentNode.removeChild(md);
		}, 300);
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
var fd = z('filedropper');
fd.addEventListener('dragover', handleDragOver, false);
fd.addEventListener('dragleave', handleDragOut, false);
fd.addEventListener('drop', handleFileSelect, false);
fd.addEventListener('click', function() { z('fileinput').click()}, false);
z('fileinput').addEventListener('change', loadFile, false);		

document.addEventListener('contextmenu', function(e) {
	e.preventDefault();
}, false);
})();