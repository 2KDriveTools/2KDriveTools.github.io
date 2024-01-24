(()=>{
const app = document.getElementById("app")
function selectPath() {
	this.focus()
	
    if (window.getSelection && document.createRange) {
		var sel = window.getSelection();
		var range = document.createRange();
		range.selectNodeContents(this);
		sel.removeAllRanges();
		sel.addRange(range);
    } else if (document.selection && document.body.createTextRange) {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(this);
        textRange.select();
    }
}
for (let sticker of StickerData) {
	let cont = document.createElement('div')
	cont.classList.add("part-holder")
	cont.classList.add("gradient-holder")
	
	let span = document.createElement('span')
	let num = document.createElement('span')
	let img = document.createElement('img')
	let code = document.createElement('code')
	
	img.loading = "lazy"
	img.src = '../../resources/Stickers/' + sticker.texture
	
	span.innerText = sticker.name
	num.innerText = sticker.path.length
	num.classList.add("len-span")
	
	code.innerText = sticker.path
	code.onclick = selectPath
	
	cont.appendChild(span)
	cont.appendChild(num)
	cont.appendChild(code)
	cont.appendChild(img)
	
	app.appendChild(cont)
}

})()