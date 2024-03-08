// { }


let js ="amazing";
      if(js==="amazing") ;
     

let firstName = "jesse";

console.log(firstName);

let myfirsjob = "coder";
let mycurrentjob="learner";


/*  never use this syntax  

let 1job="coder" or
let me$jemme= " are brother"

etc
*/

/* some ex
 1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions)
2. Log their values to the console
*/ 


let country="Azerbaijan";
let continent="Eurasia";
let population= "10M";

console.log(country);
console.log(continent);
console.log(population);



//basic datatype


let javascriptIsFun=true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 20);
console.log(typeof "jesse");

javascriptIsFun="yes";
console.log(typeof javascriptIsFun);

let year;
console.log(year)
console.log(typeof year)

console.log(typeof null); 


let age=22;
age=33;
console.log(age);
 

//this is not work because value never change with const operator

const age1=22;
age1=33;


var age2=22;
age=33;
console.log(age2) 


 
// math operators
const yearr=2044;

const jesseAge=yearr-2004;
const jemmeAge=yearr-2000;

console.log(jesseAge-jemmeAge);
console.log(jesseAge*2,jemmeAge+20);

//assignment operators

let x=55;
x+=22;
x++;
x--;
x--;
x**2;
console.log(x);

//comparison operators

console.log(jesseAge>jemmeAge)
console.log(jesseAge<=jemmeAge)
console.log(jesseAge<jemmeAge)



const firstname="jesse"
const job="coder"
const agee=20;
const about="I'm "+ firstname+ " a "+ agee+" years old "+job
console.log(about)

console.log("i am jesse a 20 years old coder.")
const about2=`I'm ${ firstname} `
console.log(about2)

//without ters_slash
console.log(`i'm jesse
 20 years old 
  boy`)




const ag=11;
if(age>=18){ 
      console.log("you can start diriving license 🚗")
}else{
      const yearsleft=18-ag
      console.log(`you can start driving license after ${ yearsleft} years 🚗`)
 }



 const Age="18";
 console.log(Age)
 console.log(Age+"222")
 console.log(Number(Age)+222)
 console.log(Number("jesse"))

 console.log("22"+2)
 console.log(Number("22")+2+"2")
 console.log("jesse "+22)
 


 // take info on web.
 const name= prompt("what is your name");
 console.log(name);
 console.log(typeof name)

 if (name== 22){
      console.log("this name is interesting..")
  }

 

  const day="sunday"

  switch(day){
      case "monday":
            console.log("today is monday")
            break

      case "tuesday":
            console.log("today is tuesday")
            break
      case "wednesday":
            console.log("today is wednesday")
            break
      case "thursday":
            console.log("today is thursday")
            break
      case "firday":
            console.log("today is friday")
            break
      case "saturday":
      case "sunday":
            console.log("these days are weekend rest bro")
            break
      default:
            console.log("there is not valid weekdays")







   }

