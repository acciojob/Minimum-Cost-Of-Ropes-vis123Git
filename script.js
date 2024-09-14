function calculateMinCost() {
    const inputs = document.getElementById("rope-lengths");
    const res = document.getElementById("result");

    // Retrieve and parse input values
    let values = inputs.value.split(",").map(str => parseInt(str.trim(), 10));

    // Validate input
    if (values.some(isNaN) || values.length === 0) {
        res.innerText = 'Invalid input';
        return;
    }

    let totalCost = 0;

    // Calculate minimum cost using a greedy approach
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

    // Update result
    res.innerText = totalCost;
}

// Attach the event listener to the button
document.getElementById("calculate-btn").addEventListener("click", calculateMinCost);
