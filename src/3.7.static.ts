//Static- is used in both JavaScript and TypeScript to define class-level properties or methods.
//static belongs to the class, not to an instance.
//accessible with Counter.count, not through new Counter()

class CounterStatic{
    static count:number=0; // static
    increment(){
        return (CounterStatic.count=CounterStatic.count+1)/// need to call with class name instead of this.
    }

    static decrement(){ //static method
        return(CounterStatic.count=CounterStatic.count-1)/// need to call with class name instead of this.
    }
}

const staticInstance1= new CounterStatic()
console.log('static',staticInstance1.increment())//output:1
console.log('static',staticInstance1.increment())//output:2
console.log('static',staticInstance1.increment())//output:3

const staticInstance2= new CounterStatic()
console.log('static', staticInstance2.increment())//output:4
console.log('static', staticInstance2.increment())//output:5

//must be called with class.method() when method is static
console.log('static decrement', CounterStatic.decrement())//output:4
console.log('static decrement', CounterStatic.decrement())//output:3 


class Counter{
    count:number=0;
    increment(){
        return (this.count=this.count+1)
    }

    decrement(){
        return(this.count=this.count-1)
    }
}
const instance1=new Counter()
console.log(instance1.increment())//output :1
console.log(instance1.increment())//output :2
console.log(instance1.increment())//output :4
const instance2=new Counter()
console.log(instance2.increment())//output :1
console.log(instance2.increment())//output :2


