function calculateMinCost() {
    const inputs = document.getElementById("rope-lengths");
    const res = document.getElementById("result");
    
    let values = inputs.value.split(",").map(Number);
    let totalCost = 0;

    while (values.length > 1) {
        // Sort the array
        values.sort((a, b) => a - b);

        // Take the two smallest ropes
        let first = values.shift();
        let second = values.shift();

        // Calculate the cost of connecting these ropes
        let cost = first + second;

        // Add to the total cost
        totalCost += cost;

        // Put the new rope back into the array
        values.push(cost);
    }

    res.innerHTML = totalCost;
}
    document.getElementById("calculate-btn").addEventListener("click", calculateMinCost);
