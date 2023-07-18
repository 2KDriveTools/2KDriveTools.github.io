(()=>{
const app = document.getElementById("app")
for (let part_id in BrickData) {
	let part = BrickData[part_id]
	let cont = document.createElement('div')
	cont.classList.add("part-holder")
	
	let span = document.createElement('span')
	let img = document.createElement('img')
	img.loading = "lazy"
	img.src = './resources/Bricks/' + part.img + '.png'
	
	span.innerText = part.name + ' (' + part.id + ')'
	
	cont.appendChild(span)
	cont.appendChild(img)
	
	app.appendChild(cont)
}

})()