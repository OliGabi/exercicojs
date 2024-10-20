function determinePredominance() {
    const metalPercentage = parseFloat(document.getElementById('metalPercentage').value);
    const nonMetalPercentage = parseFloat(document.getElementById('nonMetalPercentage').value);

    if (isNaN(metalPercentage) || isNaN(nonMetalPercentage)) {
        alert('Por favor, digite valores válidos.');
        return;
    }

    const totalPercentage = metalPercentage + nonMetalPercentage;

    if (totalPercentage !== 100) {
        alert('A soma dos percentuais deve ser igual a 100%.');
        return;
    }

    const result = metalPercentage > nonMetalPercentage ? 
        'A liga é predominantemente metálica.' : 
        'A liga é predominantemente ametálica.';

    document.getElementById('result').innerHTML = result;
}