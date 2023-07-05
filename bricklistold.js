(()=>{
const app = document.getElementById("app")
for (let part_id in BrickData) {
	let part = BrickData[part_id]
	let cont = document.createElement('div')
	cont.classList.add("part-holder")
	
	let span = document.createElement('span')
	let img = document.createElement('img')
	img.loading = "lazy"
	img.src = part.img
	
	span.innerText = part.name
	
	cont.appendChild(span)
	cont.appendChild(img)
	
	app.appendChild(cont)
}

})()