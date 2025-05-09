//abstraction===>gives idea but never discloses in detail / implementation
//2 ways= interface , abstract 


//idea
interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void
}

//real implimentation
class Car implements Vehicle1 {
    startEngine(): void {
        console.log(`I am starting the engine`)
    }
    stopEngine(): void {
        console.log(`I am stopping the engine`)
    }

    move(): void {
        console.log(`i am moving the car`)
    }
    test() {
        console.log(`i am just moving`)
    }
}

const toyotaCar = new Car()
toyotaCar.startEngine() // output:I am starting the engine


//abstract class
//idea
abstract class Car2 {

    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
        console.log(`i am just moving`)
    }

}

class ToyotaCar implements Car2 {
    startEngine(): void {
        console.log(`I am starting the car`)
    }
    stopEngine(): void {
        console.log(`I am stopping the engine`)
    }

    move(): void {
        console.log(`i am moving the car`)
    }
    test() {
        console.log(`i am just moving`)
    }
}

//abstract class theke instance banano jay na
const hondaCar = new ToyotaCar()
hondaCar.move() // output:i am moving the car