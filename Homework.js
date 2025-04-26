const company = {
    name: "Blue Tree",
    founded: 2018,
    isActive: true,
    departments: [
      {
        name: "Marketing",
        head: {
          name: "Velibor Popović",
          experience: 10,
        },
        campaigns: [
          {
            title: "Product promotion",
            budget: 50000,
            platforms: ["Instagram", "Facebook", "TikTok"] 
          },
          {
            title: "Gathering customers",
            budget: 50000,
            platforms: ["Instagram", "Facebook", "TikTok"] 
          }
        ]
      }
    ],
    name: "Green Tree",
    founded: 2019,
    isActive: true,
    departments: [
      {
        name: "HR",
        head: {
          name: "Marko Marković",
          experience: 10,
        },
        employees: [
          {
            name: "Ana Anić",
            role: "HR Manager",
            email: "ana.anic@gmail.com"
          },
          {
            name: "Marko Marković",
            role: "HR Manager",
            email: "marko.markovic@gmail.com"
          },
          {
            name: "Dušan Petrović",
            role: "HR Asistant Manager",
            email: "dušan.petrović@gmail.com"
          }
        ]
      }
    ]
  
  }
  console.log(company.departments[0].head.name);
  console.log(company.departments[0].employees[0].name);