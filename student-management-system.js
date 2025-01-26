// Base class (Abstraction & Encapsulation)
class Person {
  constructor(name, id) {
    this.name = name; // encapsulated data
    this.id = id;
  }

  // Getter for person details
  getDetails() {
    return `Name: ${this.name}, ID: ${this.id}`;
  }
}

// Derived class (Inheritance)
class Student extends Person {
  constructor(name, id) {
    super(name, id); // Call parent class constructor
    this.grades = [];
  }

  // Add grade to the student
  addGrade(grade) {
    if (grade < 0 || grade > 100) {
      console.log("Invalid grade. Please enter a value between 0 and 100.");
      return;
    }
    this.grades.push(grade);
  }

  // Calculate average grade (Abstraction)
  calculateAverageGrade() {
    if (this.grades.length === 0) {
      return "No grades available.";
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return (sum / this.grades.length).toFixed(2);
  }

  // Polymorphism: Overriding getDetails method
  getDetails() {
    return `${super.getDetails()}, Grades: ${this.grades.length > 0 ? this.grades.join(", ") : "No grades"}, Average Grade: ${this.calculateAverageGrade()}`;
  }
}

// Student Management System
class StudentManagementSystem {
  constructor() {
    this.students = [];
  }

  // Add new student
  addStudent(name, id) {
    const student = new Student(name, id);
    this.students.push(student);
    console.log(`Student added: ${name} (ID: ${id})`);
  }

  // Find student by ID
  findStudent(id) {
    return this.students.find(student => student.id === id);
  }

  // Display student details
  viewStudent(id) {
    const student = this.findStudent(id);
    if (!student) {
      console.log(`Student with ID: ${id} not found.`);
      return;
    }
    console.log(student.getDetails());
  }
}

// Example Usage
const sms = new StudentManagementSystem();

// Adding students
sms.addStudent("Alice", 101);
sms.addStudent("Bob", 102);

// Adding grades
const alice = sms.findStudent(101);
alice.addGrade(85);
alice.addGrade(90);

const bob = sms.findStudent(102);
bob.addGrade(78);

// Viewing student details
sms.viewStudent(101);
sms.viewStudent(102);
sms.viewStudent(103); // Non-existent student
