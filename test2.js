rl.question('Unesi adresu: ', (number) => {
    const broj = Number(number);

    if (broj % 2 === 0) {
        console.log(broj + " je paran");
    } else {
        console.log(broj + " je neparan");
    }

    rl.close();
});

const userProfile = {
    id: 12345,
    name: {
      first: "John",
      last: "Doe"
    },
    email: "john.doe@example.com",
    isActive: true,
    interests: ["coding", "hiking", "photography"],
    address: {
      street: "123 Main St",
      city: "Miami",
      state: "FL",
      zip: "33101"
    },
    loginHistory: [
      { date: "2025-04-24", location: "Miami" },
      { date: "2025-04-22", location: "Orlando" }
    ],
    getFullName: function() {
      return `${this.name.first} ${this.name.last}`;
    }
  };


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

