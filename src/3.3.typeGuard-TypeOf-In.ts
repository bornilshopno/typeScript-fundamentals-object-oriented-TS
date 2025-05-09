//type guard can be used in function and objects

//typeof as Guard

type Alphaneumaric= string | number;
const add=(param1:Alphaneumaric,param2:Alphaneumaric):Alphaneumaric=>{

    if(typeof param1 === 'number' && typeof param2==='number'){
        return param1+param2
    }
    else return param1.toString() + param2.toString()

}

const result1= add(2,3)
const result2=add('2','3')

// console.log(result1,result2)// output: (5, 23)


//key in Guard

type NormalUser={
    name:string;
}
type AdminUser={
    name:string;
    role:"admin"
}
const getUser=(user: NormalUser | AdminUser)=>{
    if ("role" in user){
        console.log(`My Name is  ${user.name} and my role is ${user.role}`)
    }
    else {
console.log(`My name is ${user.name}`)
    }
}

const user:NormalUser={ name: "Mr X"}
const admin:AdminUser={ name: "Mr X", role: "admin"}

getUser(user); //output:My name is Mr X
getUser(admin);//output:My Name is  Mr X and my role is admin