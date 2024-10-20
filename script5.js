function calculateResultantForce() {
    const force1 = parseFloat(document.getElementById('force1').value);
    const force2 = parseFloat(document.getElementById('force2').value);

    if (isNaN(force1) || isNaN(force2)) {
        alert('Por favor, digite valores válidos para as forças.');
        return;
    }

    const resultantForce = Math.abs(force1 - force2);
    const direction = force1 > force2 ? 'na direção da primeira força' : 'na direção da segunda força';

    document.getElementById('result').innerHTML = `
        <p>Força Resultante: ${resultantForce} N ${direction}</p>
    `;
}