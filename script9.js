let numbers = [];

function addNumber() {
    const numberInput = document.getElementById('numberInput');
    const number = parseFloat(numberInput.value);
    if (!isNaN(number)) {
        numbers.push(number);
        numberInput.value = '';
        alert('Número  number '+number+' adicionado.');
    } else {
        alert('Por favor, digite um número válido.');
    }
}

function showAllValues() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "Todos os valores:"+ numbers.join(', ');
}

function showMaxValue() {
    const maxValue = Math.max(...numbers);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "Maior valor:"+ maxValue;
}

function showMinValue() {
    const minValue = Math.min(...numbers);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "Menor valor:" +minValue;
}