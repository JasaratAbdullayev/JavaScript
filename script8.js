'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterv,mainv){
return [this.starterMenu[starterv], this.mainMenu[mainv]]
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};



const arr=[2,3,4]
const  [x,y,z]=arr
console.log(x,y,z);


// second element skipt
let [first, ,second]=restaurant.categories
console.log(first,second);


//switching types easier
[first,second]=[second,first]
console.log(first,second);


console.log(restaurant.order(2,2));


const [starter, main]=restaurant.order(2,1)
console.log(starter,main);




const ary=[2,3,[21,12]]

const [i, , j]=ary
console.log(i,j);

// and if i take 3th 2 element 

const [b, , [k, h]]=ary
console.log(b,k,h);
 



let A=22;
let B=32;

const obj={a:11, b:44, c:66};

({A,B}=obj);
console.log(A,B)



const aryy=[2,3,11,10,22,34,54,34]
const ary1=["jesse",100,2300]
const [ab,bb, ...others]=[...aryy,...ary1]
console.log(ab,bb,...others)

console.log(aryy)
console.log(ary1)
console.log("abdullayev", ...aryy)
console.log(...aryy)



const str="jesse"

const letters=[...str]
console.log(letters)


//ilk dogru ifadeyi cap edir
console.log("jesse"|| "abdullayev")
console.log(11|| null)
console.log(null || 12)
console.log(22||"jesse"|| undefined)
console.log(undefined||null)
console.log(undefined||null||33)

// dogrudursa sonuncunu yanlisdirsa ilk sef ifadeni cap edir
console.log("jesse"&& "abdullayev")
console.log(11&& null)
console.log(null && 12)
console.log(22&&"jesse"&& undefined)
console.log(undefined&&null)
console.log(null&&undefined&&null&&33)


const rest1={
  name: "bilgahbeach",
  guestNum: 22
}

const rest2={
  name: "courtyard",
  owner: "axmadovlar"
}

rest1.guestNum=rest1.guestNum || 10;
rest2.guestNum=rest2.guestNum || 11
//these are the same things
rest1.guestNum||= 10;
rest2.guestNum||= 11;
//this for when value is 0 define the vale
rest1.guestNum??= 10;
rest2.guestNum??= 11;


// and
rest1.guestNum=rest1.guestNum && 10;
rest2.guestNum=rest2.guestNum && 12;
//these are the same things
rest1.guestNum&&= 10;
rest2.guestNum&&= 16;


console.log(rest1)
console.log(rest2)





const [player1, player2]=game.players
console.log(game.players)
console.log(player1,player2)

//2
const [gk, ...fieldplayers]=player1
//3
const allplayers=[...player1, ...player2]

//4
const player1All=[...player1,"tiago","couthino","perisics"]

//5
 const {odds:{team1,x:draw,team2}}=game 

 //6
 const printGoals=function(...playerss){
console.log(playerss.length)

 }

printGoals("davis","Muller","lewandowski","kimich")
printGoals("davis","Muller")
printGoals(game.scored)

//7
team1<team2 &&console.log("team1 is more likely to win")
team1>team2 &&console.log("team2 is more likely to win")




const allMenue=[...restaurant.starterMenu,...restaurant.mainMenu]
for(const x of allMenue) console.log(x)



for(const x of allMenue.entries()){
  console.log(`${x[0]+1}: ${x[1]}`)

}

for(const [i,el] of allMenue.entries()){
  console.log(`${i+1}: ${el}`)

}






const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};



//1
for(const [num, value] of game.scored.entries()){
  
  console.log(`${num+1}: ${value} `)
}

//2

let average=0
for(const odd  of Object.values(game.odds) ){
  average+=odd;
  
  average/=Object.values(game.odds).length 
}
console.log(average)





const a=[
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
]

for(const o of a){
  console.log(o)
} 





for(const [team, odd]  of Object.entries(game.odds) ){
  const teamstr=team==="x" ? "draw": `victory ${game[team]}`
  console.log(`odd of victory ${teamstr}: ${odd}`)
  
  
}






const orders=new Set(["pizza","salads","pizza","meat","pizza","salads"])
console.log(orders)

console.log(orders.has("bread"))
console.log(orders.has("salads"))

orders.add("manadrin")
orders.add("manadrin")
orders.delete("fish")
orders.delete("manadrin")
//clear all elements 
//orders.clear()

console.log(orders)

for(const x of orders){
  console.log(x)
}



const staff=["chef","waiter","waiter","chef","manager","chef"]

const uniqestaff=[...new Set(staff)]
console.log(uniqestaff)

 







const rest=new Map();
rest.set("name","Qadim Qabala");
rest.set("location"," Azerbaijan , Qabala");
rest.set("open","08:00 am");
rest.set("close","12:00 pm");
rest.set("true","we are open");
rest.set("false","we are closed");

console.log(rest.get("true"))
console.log(rest.get("name"))
console.log(rest)
console.log(rest.size)



const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);
console.log("aaaaaaaa");
console.log(...question);
console.log("bbbbbbbb");

console.log([...question]);
console.log("entries");
console.log(question.entries());
console.log("keys");
console.log(question.keys());
console.log("values");
console.log(question.values());



for( const [key, values] of question ){
 // console.log(key,values)
if(typeof key==="number"){
  console.log(`${key}: ${values}`)
}

}
question.delete(true)

console.log(question);
const ac=[1, 'C']
console.log(ac);
a.splice("c")
console.log(ac);





const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


let aa=[]
for(const [key, event] of gameEvents){
  a.push(event)
}
console.log(new Set(aa))

// like this simple solution

const events=gameEvents.values()
console.log(new Set(events))






const airline="Haydar Aliyev Airport"

console.log(airline.slice(3))
console.log(airline.slice(3,5))
console.log(airline.slice(-3))
console.log(airline.slice(-3,-1))
console.log(airline.slice(3, airline.indexOf(" ")))


function giveticket(seats){

if(seats.slice(-1)==="B"){ 
  console.log("u got the middle seat")
}
else{
   console.log("u got lucky")
  }
}
giveticket("11B")
giveticket("11A")



const airlinee="Haydar Aliyev Airport"
console.log(airlinee.toLocaleLowerCase())
console.log(airlinee.toLocaleUpperCase())
// lowercase and uppercasse
const NamePassenger="jEssE"
const lowerName=NamePassenger.toLocaleLowerCase()
const correctName=lowerName[0].toLocaleUpperCase()+lowerName.slice(1)

console.log(correctName)

const email="  JeSSE@gmail.com  "
//trim method
const correctemail=email.toLocaleLowerCase().trim()
console.log(correctemail)

const moneyGb="222345£"
//replace elements
const moneyUs=moneyGb.replace("£","$")
console.log(moneyUs)

const plane="Boing 726 234bW3"

// end and start elements  also includes
console.log(plane.startsWith("air"))
console.log(plane.startsWith("Bo"))
console.log(plane.endsWith("air"))
console.log(plane.endsWith("W3"))
console.log(plane.includes(" "))

console.log(plane.split(" "))

//console.log(plane.join(" "))



console.log("jesse".padEnd(20,"2"))
console.log("jesse".padStart(20,"2"))
console.log("jesse".repeat(3))



document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));




document.querySelector("button").addEventListener("click",function(){

  const text=document.querySelector("textarea").value
console.log(text)
})



































