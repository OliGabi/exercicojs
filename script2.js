function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unit').value;
    const temperature = parseFloat(temperatureInput);

    if (isNaN(temperature)) {
        alert('Por favor, digite uma temperatura válida.');
        return;
    }

    let result;
    if (unit === 'C') {
        result = (temperature * 1.8) + 32;
        document.getElementById('result').innerHTML = (+temperature+ ' °C é igual a ' +result.toFixed(2)+'°F');
    } else {
        result = (temperature - 32) / 1.8;
        document.getElementById('result').innerHTML = (+temperature+'°F é igual a ' +result.toFixed(2)+'°C');
    }
}