// tipcalc.js

document.getElementById('calculateBtn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const resultElement = document.getElementById('tipResult');

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        resultElement.textContent = 'Please enter valid numbers for bill amount and tip percentage.';
        return;
    }

    const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
    resultElement.textContent = Yourtip; is: {tipAmount};
});