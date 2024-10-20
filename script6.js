function calculateResultantForce() {
    const mass = parseFloat(document.getElementById('mass1').value);
    const acceleration1 = parseFloat(document.getElementById('acceleration1').value);
    const acceleration2 = parseFloat(document.getElementById('acceleration2').value);

    if (isNaN(mass) || isNaN(acceleration1) || isNaN(acceleration2)) {
        alert('Por favor, digite valores válidos.');
        return;
    }

    const resultantAcceleration = Math.abs(acceleration1 - acceleration2);
    const resultantForce = mass * resultantAcceleration;

    document.getElementById('result1').innerHTML = `
        <p>Força Resultante: ${resultantForce.toFixed(2)} N</p>
    `;
}

function calculateActionReactionForce() {
    const mass1 = parseFloat(document.getElementById('mass2').value);
    const acceleration1 = parseFloat(document.getElementById('acceleration3').value);
    const mass2 = parseFloat(document.getElementById('mass3').value);
    const acceleration2 = parseFloat(document.getElementById('acceleration4').value);

    if (isNaN(mass1) || isNaN(acceleration1) || isNaN(mass2) || isNaN(acceleration2)) {
        alert('Por favor, digite valores válidos.');
        return;
    }

    const force1 = mass1 * acceleration1;
    const force2 = mass2 * acceleration2;

    document.getElementById('result2').innerHTML = `
        <p>Força de Ação: ${force1.toFixed(2)} N</p>
        <p>Força de Reação: ${force2.toFixed(2)} N (em direções opostas)</p>
    `;
}