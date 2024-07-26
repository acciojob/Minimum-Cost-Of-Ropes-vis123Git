const res = document.getElementById("result")
const inputs = document.getElementById("rope-lengths")

function calculateMinCost(args) {
	const values = inputs.value.split(",").map(Number).sort((a,b)=>a-b); 
	for (let [index,key] of values.entries()) {
		const el  = values[0]+values[1];
		console.log("el----", el, "values===", values)
		   values.splice(0,2);
		values.push(el)
		values.sort((a,b)=> a-b)
		

		console.log("key, index===",key, index)
	}

	console.log("args===", inputs.value, values.length)
  res.innerText =  values[0]+values[1];
  
  
  
}  
