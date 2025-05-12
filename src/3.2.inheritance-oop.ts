//inheritance==>> child uses properties and methods of parent..deriving child function taking properties and methods from parent

class Person {
    name:string;
    age:number;
    address:string;

    constructor(name:string, age:number, address:string){
        this.name=name;
        this.age=age;
        this.address=address;
    }
    getSleep(numOfHours:number){
        console.log(` ${this.name} sleeps ${numOfHours} hours`)
    }

}

class Student extends Person{   

    /// arguments are received by constructor
    constructor(name:string, age:number, address:string){
        super(name,age,address)
    }
}

const student1=new Student('Mr. Student', 20, "Sreemangal")

class Teacher extends Person{
  
    designation:string;

    constructor(name:string, age:number, address:string,designation:string){
        super(name,age,address);
        this.designation=designation;
    }
 
    takeClass(numOfClass: number){
        console.log(`${this.name} takes ${numOfClass} daily`)
    }

}

const teacher= new Teacher("Mr Y", 40, "Sylhet", "professor")
