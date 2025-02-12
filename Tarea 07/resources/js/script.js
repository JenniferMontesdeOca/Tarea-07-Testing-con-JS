document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculateButton").addEventListener("click", calculateTurtleAge);
});

function calculateTurtleAge() {
    let turtleAge = parseInt(document.getElementById('turtleAge').value);

    if (isNaN(turtleAge) || turtleAge < 0) {
        document.getElementById('result').innerText = "Por favor, ingresa una edad válida.";
        return;
    }

    let humanAge;
    if (turtleAge <= 5) {
        humanAge = turtleAge * 10;
    } else {
        humanAge = (5 * 10) + ((turtleAge - 5) * 5);
    }

    document.getElementById('result').innerText = `Una tortuga de ${turtleAge} años equivale a ${humanAge} años humanos.`;
}
