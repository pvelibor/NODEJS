const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkOddEven(number) {
  return number % 2 === 0 ? 'even' : 'odd';
}

readline.question('Enter a number to check if it\'s odd or even: ', input => {
  const number = parseFloat(input);
  
  if (isNaN(number)) {
    console.log('Please enter a valid number!');
  } else {
    const result = checkOddEven(number);
    console.log(`The number ${number} is ${result}.`);
  }
  
  readline.close();
});