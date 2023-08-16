class FullTimeEmployee {
    constructor(name, position, basicSalary, experience, educational_Level) {
      this.name = name;
      this.position = position;
      this.basicSalary = basicSalary;
      this.experience = experience;
      this.educational_Level = educational_Level;
    }
  
    calculateSalary() {
      let salary = this.basicSalary + this.basicSalary * 0.05 * this.experience;
  
      if (this.educational_Level === "Bachelor Degree") {
        salary += 500;
      } else if (this.educational_Level === "Diploma") {
        salary += 250;
      }
  
      return salary;
    }
  
    calculateBonus() {
      return this.basicSalary * 0.03;
    }
  }
  
  class PartTimeEmployee {
    constructor(name, position, basicSalary, experience, educational_Level) {
      this.name = name;
      this.position = position;
      this.basicSalary = basicSalary;
      this.experience = experience;
      this.educational_Level = educational_Level;
    }
  
    calculateSalary() {
      let salary = this.basicSalary + this.basicSalary * 0.05 * this.experience;
  
      if (this.educational_Level === "Bachelor Degree") {
        salary += 500;
      } else if (this.educational_Level === "Diploma") {
        salary += 250;
      }
  
      return salary;
    }
  
    calculateBonus() {
      return this.basicSalary * 0.015;
    }
  }
  
  // Example Usage
  const fullTimeEmployee = new FullTimeEmployee(
    "John Doe",
    "Manager",
    5000,
    3,
    "Bachelor Degree"
  );
  
  console.log("Full-Time Employee Salary:", fullTimeEmployee.calculateSalary());
  console.log("Full-Time Employee Bonus:", fullTimeEmployee.calculateBonus());
  
  const partTimeEmployee = new PartTimeEmployee(
    "Jane Smith",
    "Assistant",
    3000,
    2,
    "Diploma"
  );
  
  console.log("Part-Time Employee Salary:", partTimeEmployee.calculateSalary());
  console.log("Part-Time Employee Bonus:", partTimeEmployee.calculateBonus());