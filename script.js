
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
            alert("You have to increase you earning")
        }
    }
    else {
        alert("Expenses demand a positive number value")
    }
}

function savingCalculation() {
    const income = document.getElementById('income').value;
    const savingPercent = document.getElementById('saveIng-percent').value;
    const balance = document.getElementById('balance').innerText;
    const percent = (savingPercent / 100) * income;

    if (balance > percent) {
        document.getElementById('saving-amount').innerText = percent;

        const remainingBalance = balance - percent;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }
    else {
        alert('you do not have money for save')
    }

}