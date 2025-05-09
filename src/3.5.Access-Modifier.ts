//access modifier---public protected private readonly

class BankAccount{
    readonly id:number; //property cant be changed<==readonly
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

    getBalance(){
        return this._balance
    }
}

const goriberAccount=new BankAccount(111, "Gorib", 200)
goriberAccount.addDeposit(200);
console.log(goriberAccount.getBalance())//output:400

class StudentAccount extends BankAccount{
    test(){
        this.name //checking the protected variable name=>available in child instance
    }
}
