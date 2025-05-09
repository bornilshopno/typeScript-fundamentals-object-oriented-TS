//getter used in line 25 & 35
//setter used in line 17 &30

class BankAccount1{
    readonly id:number; //property can't be changed<==readonly
    protected name:string;//property can be accessed also in the child/instance
    private _balance:number; //property can only be changed within this class-BankAccount<==private

    constructor(id:number, name:string, balance:number){
        this.id=id;
        this.name=name;
        this._balance=balance
    }
    addDeposit(amount:number){
        this._balance=this._balance+amount
    }
    //setter
    set deposit(amount:number){
        this._balance=this._balance+amount
    }

    getBalance(){
        return this._balance
    }
    //getter 
    get balance(){
        return this._balance
    }
}

const goriberAccount1=new BankAccount1(111, "Gorib", 200)
goriberAccount1.addDeposit(200);
goriberAccount1.deposit=300;//Setter Option
console.log(goriberAccount1.getBalance())//output:700
console.log(goriberAccount1.balance) //GETTER output:700

class StudentAccount1 extends BankAccount1{
    test(){
        this.name //checking the protected variable name=>available in child instance
    }
}
