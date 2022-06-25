"use strict";
//ConcretePrototype : let's take student as an example
class Student {
    constructor() {
        this.name = "student";
        this.gender = "boy";
        this.grade = 1;
    }
    clone() {
        return Object.create(this);
    }
    toString() {
        return "Student: " + this.name + ", gender: " + this.gender + ", grade: " + this.grade;
    }
}
//Client : StudentClient has a method that create 10 students from class Student by clone.
class StudentClient {
    operation() {
        let s = new Student();
        for (let i = 0; i < 10; i++) {
            let s_ = s.clone();
            console.log(s_.toString());
        }
    }
}
