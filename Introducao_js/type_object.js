// Example 1: Simple JSON object
const person = {
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "email": "john@example.com"
};

// Example 2: Nested JSON object
const student = {
    "id": 101,
    "personalInfo": {
        "name": "Maria Silva",
        "age": 20,
        "address": {
            "street": "Rua Principal",
            "city": "São Paulo",
            "country": "Brasil"
        }
    },
    "courses": ["Math", "Physics", "Computer Science"]
};

// Example 3: Array of JSON objects
const employees = [
    {
        "id": 1,
        "name": "Alice",
        "role": "Developer"
    },
    {
        "id": 2,
        "name": "Bob",
        "role": "Designer"
    }
];

// How to access JSON data
console.log(person.name); // John Doe
console.log(student.personalInfo.address.city); // São Paulo
console.log(employees[0].role); // Developer