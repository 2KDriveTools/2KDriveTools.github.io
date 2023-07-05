import json, glob

images = glob.glob("./resources/Bricks/T_*_Icon.png")

data = {}

for img in images:
	_id = img.split('_')[-2]
	data[_id] = {
		"name": f"TBD {_id}",
		"img": img
	}
	
with open('brickdump.js', 'w') as f:
	f.write("const BrickData = ")
	f.write(json.dumps(data))