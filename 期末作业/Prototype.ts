//Prototype: Specify the interface that needs to be implemented by the prototype object
interface Prototype{
    clone():Prototype
}

//ConcretePrototype : let's take class student as an example
class Student implements Prototype{
    private name: string;
    private gender: string;
    private grade: number;
    constructor(){
        this.name = "student";
        this.gender = "boy";
        this.grade = 1;
    }
    public clone(): Student {
        let result = new Student;
        result.name = this.name;
        result.gender = this.gender;
        result.grade = this.grade;
        return result;
    }
    public toString(): string {
        return "Student: " + this.name + ", gender: " + this.gender + ", grade: " + this.grade;
    }
    public gradePlus(): void{
        this.grade++;
    }
}

//Client : StudentClient has a method that create 10 students from class Student by clone.
class StudentClient {
    public operation(): void{
        let students = new Array;
        let s = new Student();
        for(let i = 0; i < 10; i++){
            let s_ = s.clone();
            students.push(s_);
            s.gradePlus();
        } 
        for(let i = 0; i < 10; i++)
            console.log(students[i].toString());
    }
}

//user operation
let sc = new StudentClient();
sc.operation();