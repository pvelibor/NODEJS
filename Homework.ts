type Campaign = {
    title: string;
    budget: number;
    platforms: string[];
  };
  
  type Employee = {
    name: string;
    role: string;
    email: string;
  };
  
  type Head = {
    name: string;
    experience: number;
  };
  
  type Department = {
    name: string;
    head: Head;
    campaigns?: Campaign[];
    employees?: Employee[];
  };
  
  type Company = {
    name: string;
    founded: number;
    isActive: boolean;
    departments: Department[];
  };
  
  const company: Company = {
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
            email: "ana.anic@gmail.com",
          },
          {
            name: "Marko Marković",
            role: "HR Manager",
            email: "marko.markovic@gmail.com",
          },
          {
            name: "Dušan Petrović",
            role: "HR Assistant Manager",
            email: "dušan.petrović@gmail.com",
          },
        ],
      },
    ],
  };
  
  console.log(company.departments[0].head.name);
  console.log(company.departments[0].employees?.[0].name);
  