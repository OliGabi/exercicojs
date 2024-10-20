function calculateIonicBond() {
    const metalElectrons = parseInt(document.getElementById('metalElectrons').value);
    const nonMetalElectrons = parseInt(document.getElementById('nonMetalElectrons').value);

    if (isNaN(metalElectrons) || isNaN(nonMetalElectrons)) {
        alert('Por favor, digite valores válidos.');
        return;
    }

    const ratio = gcd(metalElectrons, nonMetalElectrons);
    const metalRatio = metalElectrons / ratio;
    const nonMetalRatio = nonMetalElectrons / ratio;

    document.getElementById('ionicResult').innerHTML = `
        <p>Fórmula iônica: ${metalRatio}:${nonMetalRatio}</p>
    `;
}

function calculateCovalentBond() {
    const atom1Bonds = parseInt(document.getElementById('atom1Bonds').value);
    const atom2Bonds = parseInt(document.getElementById('atom2Bonds').value);

    if (isNaN(atom1Bonds) || isNaN(atom2Bonds)) {
        alert('Por favor, digite valores válidos.');
        return;
    }

    const sharedPairs = Math.min(atom1Bonds, atom2Bonds);

    document.getElementById('covalentResult').innerHTML = `
        <p>Número de pares de elétrons compartilhados: ${sharedPairs}</p>
    `;
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}