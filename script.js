const res = document.getElementById("result")
const inputs = document.getElementById("rope-lengths")

function calculateMinCost(args) {
	const values = inputs.value.split(",").map(Number).sort((a,b)=>a-b); 
	for (let [index,key] of values.entries()) {
		console.log("key, index===",key, index)
	}

	console.log("args===", inputs.value, values.length)
  res.innerText = 25
  
  
  
}  
