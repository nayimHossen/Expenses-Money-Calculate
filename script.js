function expensesTotal() {
    const foodCost = document.getElementById("food-cost").value;
    const rantCost = document.getElementById("rant-cost").value;
    const clothesCost = document.getElementById("clothes-cost").value;
    const income = document.getElementById('income').value;
    const totalCost = parseFloat(foodCost) + parseFloat(rantCost) + parseFloat(clothesCost);

    if (foodCost >= 0 && rantCost >= 0 && clothesCost >= 0) {
        const newTotalCost = totalCost + '';
        document.getElementById("total-expenses").innerText = newTotalCost;
        if (income > 0 && income > totalCost) {
            const remainingBalance = income - totalCost;
            document.getElementById('balance').innerText = remainingBalance;
        }
        else {
            alert("total cost is greater than income")
        }
    }
    else {
        alert("error")
    }

    // 

    // if (income > 0 && totalCost > 0) {

    //     
    // }
    // else {
    //     alert("pleas give a positive number")
    // }

}