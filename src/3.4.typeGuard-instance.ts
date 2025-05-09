//instanceof guard

class Animal2{
    name:string;
    species:String;

    constructor(name:string, species:string){
        this.name=name;
        this.species=species
    }

    makeSound(){
        console.log(`I am making sound`)
    }

}

class Dog extends Animal2{
    constructor(name:string , species:string){
        super(name,species);
    }

    makeBark(){
        console.log(`I am Barking`)
    }
}

class Cat extends Animal2{
    constructor(name:string , species:string){
        super(name,species);
    }

    makeMeaw(){
        console.log(`I am meawing`)
    }
}

const dogg= new Dog ("DDogg", "Dog Bro")
const catt= new Cat("catt", "Cat Bro")

const getAnimal=(animal:Animal2)=>{

if(animal instanceof Dog){
    animal.makeBark()
}
else if (animal instanceof Cat){
    animal.makeMeaw()
}
else animal.makeSound()
}

getAnimal(catt)//output:I am meawing
getAnimal(dogg)//output:I am Barking

//smarter way
const isDog=(animal:Animal2):animal is Dog=>{
    return animal instanceof Dog
}

const isCat=(animal:Animal2)=>{
    return animal instanceof Cat
}

const getAnimal2=(animal:Animal2)=>{
    if(isDog(animal)){
        animal.makeBark()
    }
    else if(isCat(animal)){
        animal.makeMeaw()
    }
    else return animal.makeSound()
}
getAnimal2(catt)//output:I am meawing
getAnimal2(dogg)//output:I am Barking