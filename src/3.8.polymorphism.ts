//Polymorphism===>>> if any method of class is defined differently accross parent and childrens, then it behaves differently

class Personn {
    getSleep() {
        console.log(`I am sleeping 8 hours per day`)
    }
}

class Studentt extends Personn {
    getSleep() {
        console.log(`I am sleeping 7 hours per day`)
    }
}

class Developer extends Personn {
    getSleep() {
        console.log(`I am sleeping 6 hours per day`)
    }
}

const getSleepingHours = (param: Personn) => {
    param.getSleep()
}

const manus1 = new Personn()
const manus2 = new Studentt()
const manus3 = new Developer()


getSleepingHours(manus1)
getSleepingHours(manus2)
getSleepingHours(manus3)

///second example

class Shape {
    getArea() {
        return 0
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super()
        this.radius = radius
    }
    getArea() {
        return Math.PI * this.radius * this.radius
    }
}
class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(height: number, width: number) {
        super()
        this.height = height
        this.width = width
    }
    getArea() {
        return this.width * this.height
    }
}

const shape1= new Shape()
const shape2= new Circle(10)
const shape3= new Rectangle(10,20)

console.log(shape1.getArea(),shape2.getArea(),shape3.getArea()) //output: 0 314.1592653589793 200
