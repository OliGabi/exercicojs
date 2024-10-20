function calculateFuelCost() {
    const distance = parseFloat(document.getElementById('distanceInput').value);
    const fuelPrice = parseFloat(document.getElementById('fuelPriceInput').value);

    if (isNaN(distance) || isNaN(fuelPrice)) {
        alert('Por favor, digite valores válidos.');
        return;
    }

    const fuelConsumption = distance / 8; // Consumo de combustível em litros
    const cost = fuelConsumption * fuelPrice; // Custo total do combustível

    document.getElementById('result').innerHTML = `
        <p>Quilometragem percorrida: ${distance} km</p>
        <p>Consumo de combustível: ${fuelConsumption.toFixed(2)} litros</p>
        <p>Custo total: R$ ${cost.toFixed(2)}</p>
    `;
}