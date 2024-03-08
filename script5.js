'use strict';
//help to find problem
// { }

let driverLicense= false;
const passExam=true;

if(passExam) driverLicense=true;
if(driverLicense) console.log("u can drive car.");




// fuctions

function logger(){ 

    console.log("my name is jesse")
}
logger()
logger()



// basic simple function ex
function fruitprosessor(apple, orange){ 
    console.log(apple, orange)
    const juice=`juice with ${ apple} apples and ${ orange} oranges`
    return juice;
}
const applejuice=fruitprosessor(4,0);
console.log(applejuice)




function age(birthyear){

    return (2023-birthyear);
 }

 const age1=age(2004);
 console.log(age1)



//simple blender

const pieces=function(fruit){
    return fruit*5
 }

 function fruitprosessor(apple, orange){ 

   const applepieces=pieces(apple)
   const orangepieces=pieces(orange)
    const juice=`juice with ${ applepieces} pieces of apples and ${ orangepieces} pieces of oranges`
    return juice;
}
const juice1=fruitprosessor(4,5);
console.log(juice1)


// arrays

const friends=["jesse", "ilkin", "fariz"]
console.log(friends)
console.log(friends[1])
console.log(friends.length)
console.log(friends[friends.length-1])

friends[1]="memet"

const account=new Array("name", "nomer", 11,"years")
console.log(account)

const all=["jesse",20,friends, "abdullayev"]
console.log(all)
console.log(all[2])
console.log(all[2][2])


const value=["jesse", "abdullah", 22]
value.push("mixael")
value.unshift(11)
console.log(value)
value.pop("mixael")
value.shift(11)
console.log(value)
console.log(value.includes("asim"))
console.log(value.includes("jesse"))
console.log(value.indexOf("asim"))
console.log(value.indexOf("jesse"))



 const mark={
    Name: "mark",
    FirstName: "john",
    Mass:78,
    height:1.80,

    clacbmi: function()
    {
        this.bmi=this.Mass/this.height **2;
        return this.bmi;
    }
}

mark.clacbmi();
console.log(mark.bmi);


//for loop


for(let num=1; num<11; num+=2){
    console.log("hello world")
}



// looping arrays

const friends=["jesse",1111, true, "ilkin", "fariz"]
const valuee=[]
for(let i=0;i<length.friends;i++){
    console.log(friends[i]);
    if(typeof friends[i] !=="string") continue;
    if(typeof friends[i] ==="Number") break;



//value[i]=typeof friends[i]
value.push(typeof friends[i]);
}
console.log(value)



//looping Backwards
let dice =Math.trunc(Math.random()*10)+1

while(dice!==4){
    console.log(dice)
}