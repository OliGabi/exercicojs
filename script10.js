function calculateExponential() {
    const xValue = parseFloat(document.getElementById('xValue').value);

    if (isNaN(xValue)) {
        alert('Por favor, digite um valor válido para x.');
        return;
    }

    const result = Math.exp(xValue);

    document.getElementById('result').innerHTML = `
        <p>f(${xValue}) = e^${xValue} = ${result.toFixed(4)}</p>
    `;
}