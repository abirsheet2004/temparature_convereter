function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;

    if (isNaN(temperature)) {
        result = 'Please enter a valid number.';
    } else {
        if (unit === 'celsius') {
            result = `${temperature}°C is equal to ${(temperature * 9/5) + 32}°F`;
        } else if (unit === 'fahrenheit') {
            result = `${temperature}°F is equal to ${(temperature - 32) * 5/9}°C`;
        }
    }

    document.getElementById('result').innerText = result;
}
