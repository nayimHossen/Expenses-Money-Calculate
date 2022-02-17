//show alert massage function
function alertMassage(message) {
    document.getElementById("custom-alert").style.display = 'block';
    const para = document.createElement("p");
    para.innerHTML = message;
    document.getElementById("error-message").appendChild(para);
}

//expenses total calculation area
function expensesTotal() {
    const income = document.getElementById('income').value;
    const foodCost = document.getElementById('food-cost').value;
    const rantCost = document.getElementById('rant-cost').value;
    const clothesCost = document.getElementById('clothes-cost').value;
    const totalCost = parseFloat(foodCost) + parseFloat(rantCost) + parseFloat(clothesCost);

    //if input value is a negative number
    if (foodCost >= 0 && rantCost >= 0 && clothesCost >= 0 && income >= 0) {

        //if total expenses is greater than income
        if (income > totalCost) {
            document.getElementById("total-expenses").innerText = totalCost;
            const remainingBalance = income - totalCost;
            document.getElementById('balance').innerText = remainingBalance;
        } else {
            alertMassage("Expenses are more than your income.");
        }
    }
    else {
        alertMassage("Your input field deserve a positive number.");
    }

}

//saving calculation function area
function savingCalculation() {
    const income = document.getElementById('income').value;
    const balance = document.getElementById('balance').innerText;
    const savingPercent = document.getElementById('saveIng-percent').value;

    const percent = (savingPercent / 100) * income;
    const savedAmount = document.getElementById('saving-amount').innerText = percent;

    //if saved amount is greater than balance
    if (balance > savedAmount) {
        document.getElementById('saving-amount').innerText = percent;
        const remainBalance = balance - percent;
        document.getElementById('remaining-balance').innerText = remainBalance;
    } else {
        alertMassage("Your saving money is greater than your balance.");
    }
}