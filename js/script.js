const tempInp = document.getElementById('temperature-c');
const submitBtn = document.getElementById('submit-temperature');
const fahrenheitOutput = document.querySelector('.output-temperature--fahrenheit__num');
const kelvinOutput = document.querySelector('.output-temperature--kelvin__num');
const error = document.querySelector('.error');

submitBtn.addEventListener('click', () => {
    // Formulas para pasar de una unidad a otra
    let celcius = parseFloat(tempInp.value);
    let fahrenheit = ((celcius) * (9/5) + 32).toFixed(2);
    let kelvin = (celcius + 273.15).toFixed(2);

    // Chequea si el input está vacío, y en caso de ser así, muestra el mensaje de error
    if (tempInp.value == '') {
        error.classList.remove('hidden');
    } else {
        error.classList.add('hidden');
        fahrenheitOutput.innerText = ` ${fahrenheit}°F`;
        kelvinOutput.innerText = ` ${kelvin}°K`;
    }
});