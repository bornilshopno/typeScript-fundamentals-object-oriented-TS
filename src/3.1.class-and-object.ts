class Animal {
    name:string;
    species: string;
    sound:string;

    constructor (name:string, species:string, sound:string){
        this.name=name;
        this.species=species;
        this.sound=sound

    }
    makeSound(){
        console.log(`The ${this.name} makes ${this.sound} sound`)
    }
}

const dog= new Animal("Deshi Kutta" ,"dog", "Ghew Ghew")
const cat= new Animal("Bilai", "cat","meaw meaw")
cat.makeSound() //output: The Bilai makes meaw meaw sound
console.log(cat, dog)
//Animal { name: 'Bilai', species: 'cat', sound: 'meaw meaw' } Animal { name: 'Deshi Kutta', species: 'dog', sound: 'Ghew Ghew' }

class AnimalPub{
    constructor(public name:string, public species:string,public sound:string)// using public here helps avoiding rewriting types
    {
    }
    makeSound(){
        console.log (` The ${this.name} makes ${this.sound} sound` )
    }
}

const dog1= new AnimalPub("Deshi Kutta" ,"dog", "Ghew Ghew")
const cat1= new AnimalPub("Bilai", "cat","meaw meaw")
dog1.makeSound() //output:The Deshi Kutta makes Ghew Ghew sound

console.log(cat1, dog1)
//Output: AnimalPub { name: 'Bilai', species: 'cat', sound: 'meaw meaw' } AnimalPub { name: 'Deshi Kutta', species: 'dog', sound: 'Ghew Ghew' }