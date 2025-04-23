const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Unesi broj: ', (number) => {
    const broj = Number(number);
    if (broj % 2 === 0) {
        console.log(broj + " je paran");
    } else {
        console.log(broj + " je neparan");
    }

    rl.close();
});
