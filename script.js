let numbers = [];

function addNumber() {
    const numberInput = document.getElementById('numberInput');
    const number = parseInt(numberInput.value);
    if (!isNaN(number)) {
        numbers.push(number);
        numberInput.value = '';
        alert('Número ${number} adicionado.');
    } else {
        alert('Por favor, digite um número válido.');
    }
}

function calculate() {
    if (numbers.length === 0) {
        alert('Por favor, adicione pelo menos um número.');
        return;
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const evenCount = numbers.filter(num => num % 2 === 0).length;
    const oddCount = numbers.length - evenCount;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Soma: ${sum}</p>
        <p>Média Aritmética: ${average}</p>
        <p>Números Pares: ${evenCount}</p>
        <p>Números Ímpares: ${oddCount}</p>
    `;
}