"use strict";
if (typeof exports === "undefined") {
	Object.defineProperty(window, "exports", {
		value: {},
		enumerable: true
	})
}
((exports)=>{
document.getElementsByClassName('dataform-input')[0].style.opacity = "1";
const global = {};
const z = document.getElementById.bind(document);

const SETTINGS = {
	SHOW_SCALE: false,
}

const FILECHECK = { "name": "ArtemisVehicle.sav", "scripts": [ "/Script/Artemis.ArtemisVehicleSaveGame", "/Script/Artemis.ArtemisExtraVehicleSaveGame" ] }

const saveData = {}

const modal = z("app-modal")
const modalContent = z("modal-part")

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

function FString(str) {
	return str == "None" ? undefined : str
}

function loadFile(f = null) {
	var fr;
	if (z('fileinput').files[0]) f = z('fileinput').files[0];
	if (f != null) {
		global.fname = f.name;
		fr = new FileReader();
		fr.readAsBinaryString(f);
		var dr = new FileReader();

		dr.readAsArrayBuffer(f);
		
		dr.onload = function(f) { 
			global.save = new Drive2KSave(f.target.result)
			console.log(global.save)
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

function closeModal() {
	// save part data
	modal.style.display = "none";
	modalContent.innerHTML = ""
}

((modal, f) => {
	const span = document.getElementsByClassName("close")[0];
	span.onclick = f
	window.onclick = function(event) {
		if (event.target == modal)
			f()
	}
})(modal, closeModal);
})(exports);