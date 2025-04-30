const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "admin",
      profile: {
        age: 32,
        joined: new Date("2022-04-12"),
        skills: ["React", "Node.js", "GraphQL"]
      },
      isActive: true,
      login() {
        console.log(`${this.name} has logged in.`);
      }
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      role: "user",
      profile: {
        age: 25,
        joined: new Date("2023-02-01"),
        skills: ["HTML", "CSS", "JavaScript"]
      },
      isActive: false,
      login() {
        console.log(`${this.name} has logged in.`);
      }
    },
    {
      id: 3,
      name: "Clara Davis",
      email: "clara@example.com",
      role: "user",
      profile: {
        age: 28,
        joined: new Date("2024-01-15"),
        skills: ["Vue", "TypeScript", "TailwindCSS"]
      },
      isActive: true,
      login() {
        console.log(`${this.name} has logged in.`);
      }
    }
  ];

  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
  }


  for (let user of users) {
    console.log(user.name + " " + user.email + " " + user.role + " " + user.profile.age + " " + user.profile.joined );
  }
