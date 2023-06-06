function convertData() {
  // User Input & Output
  let userInput = document.getElementById('userInput').value;
  let output = document.getElementById('displayOutput');

  let inputType = document.getElementById('inputType').value;
  let outputType = document.getElementById('outputType').value;

  // Script For Empty Inputs
  if (userInput == '' || inputType == '' || outputType == '') {
    output.classList.add('blink-error');
    output.innerHTML = 'Please fill required all inputs!';
  } else {
    output.classList.remove('blink-error');
  }

  // Calculation
  let kilobyte, megabyte, gigabyte, terabyte;

  // KILOBYTES
  if ((inputType == 'kilobyte') & (outputType == 'kilobyte')) {
    kilobyte = userInput;
    output.innerHTML = `${userInput} Kb = ${kilobyte} Kb`;
  } else if ((inputType == 'kilobyte') & (outputType == 'megabyte')) {
    megabyte = userInput / 1024;
    output.innerHTML = `${userInput} Kb = ${megabyte} Mb`;
  } else if ((inputType == 'kilobyte') & (outputType == 'gigabyte')) {
    gigabyte = userInput / 1024 / 1024;
    output.innerHTML = `${userInput} Kb = ${gigabyte} Gb`;
  } else if ((inputType == 'kilobyte') & (outputType == 'terabyte')) {
    terabyte = userInput / 1024 / 1024 / 1024;
    output.innerHTML = `${userInput} Kb = ${terabyte} Tb`;
  }

  // MEGABYTES
  if ((inputType == 'megabyte') & (outputType == 'kilobyte')) {
    kilobyte = userInput * 1024;
    output.innerHTML = `${userInput} Mb = ${kilobyte} Kb`;
  } else if ((inputType == 'megabyte') & (outputType == 'megabyte')) {
    megabyte = userInput;
    output.innerHTML = `${userInput} Mb = ${megabyte} Mb`;
  } else if ((inputType == 'megabyte') & (outputType == 'gigabyte')) {
    gigabyte = userInput / 1000;
    output.innerHTML = `${userInput} Mb = ${gigabyte} Gb`;
  } else if ((inputType == 'megabyte') & (outputType == 'terabyte')) {
    terabyte = userInput / 1000000;
    output.innerHTML = `${userInput} Mb = ${terabyte} Tb`;
  }

  // GIGABYTES
  if ((inputType == 'gigabyte') & (outputType == 'kilobyte')) {
    kilobyte = userInput * 1000000;
    output.innerHTML = `${userInput} Gb = ${kilobyte} Kb`;
  } else if ((inputType == 'gigabyte') & (outputType == 'megabyte')) {
    megabyte = userInput * 1024;
    output.innerHTML = `${userInput} Gb = ${megabyte} Mb`;
  } else if ((inputType == 'gigabyte') & (outputType == 'gigabyte')) {
    gigabyte = userInput;
    output.innerHTML = `${userInput} Gb = ${gigabyte} Gb`;
  } else if ((inputType == 'gigabyte') & (outputType == 'terabyte')) {
    terabyte = userInput / 1000;
    output.innerHTML = `${userInput} Gb = ${terabyte} Tb`;
  }

  // TERABYTES
  if ((inputType == 'terabyte') & (outputType == 'kilobyte')) {
    kilobyte = userInput * 1000000000;
    output.innerHTML = `${userInput} Tb = ${kilobyte} Kb`;
  } else if ((inputType == 'terabyte') & (outputType == 'megabyte')) {
    megabyte = userInput * 1000000;
    output.innerHTML = `${userInput} Tb = ${megabyte} Mb`;
  } else if ((inputType == 'terabyte') & (outputType == 'gigabyte')) {
    gigabyte = userInput * 1024;
    output.innerHTML = `${userInput} Tb = ${gigabyte} Gb`;
  } else if ((inputType == 'terabyte') & (outputType == 'terabyte')) {
    terabyte = userInput;
    output.innerHTML = `${userInput} Tb = ${terabyte} Tb`;
  }
}

// End JavaScript
