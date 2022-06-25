class Stud{
    private name: string;
    private gender: string;
    private grade: number;
    constructor(){
        this.name = "student";
        this.gender = "girl";
        this.grade = 1;
    }
    public getName(): string{
        return this.name;
    }
    public setName(n: string): void{
        this.name = n;
    }
    public getGender(): string{
        return this.gender;
    }
    public setGender(g: string): void{
        this.gender = g;
    }
    public getGrade(): number{
        return this.grade;
    }
    public setGrade(g: number): void{
        this.grade = g;
    }
    public gradePlus(): void{
        this.grade++;
    }
    public toString(): string {
        return "Student: " + this.name + ", gender: " + this.gender + ", grade: " + this.grade;
    }
}
//ProtoType is a function that returns a Student
type ProtoType = (stu: Stud) => Stud;
//cloneStudent is an implement of ProtoType
function cloneStudent(s : Stud):Stud{
    let result = new Stud;
    result.setName(s.getName());
    result.setGender(s.getGender());
    result.setGrade(s.getGrade());
    return result;
}
//User defined operation: a method that create 10 Students
function create10Students(clonefunc: ProtoType){
    let s0 = new Stud;
    let students = new Array;
    for(let i = 0; i < 10; i++){
        let s = clonefunc(s0);
        students.push(s);
        s0.gradePlus();
    }
    for(let i = 0; i < 10; i++)
        console.log(students[i].toString());
}

create10Students(cloneStudent);