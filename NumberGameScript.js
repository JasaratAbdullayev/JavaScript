'use strict';
/*console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent="Correct Numbers";
document.querySelector(".number").textContent=12;
document.querySelector(".score").textContent=10;

document.querySelector(".guess").value=2;*/
/*
let secretNumber=Math.trunc(Math.random()*20)+1;

let score=10;
let highscore=0;

document.querySelector(".check").addEventListener("click" ,function(){
    const guess=Number(document.querySelector(".guess").value)
    console.log(guess)

    if(!guess){
        document.querySelector(".message").textContent="this is not number"
    }else if(guess=== secretNumber){
        document.querySelector(".message").textContent="conguratsss😍"
        document.querySelector("body").style.backgroundColor="#60b347"
        document.querySelector(".number").textContent=secretNumber;
        if(score>highscore){
            highscore=score;
            document.querySelector(".highscore").textContent=highscore;
        }
    }
    else if(guess< secretNumber){
        if(score>1){
        document.querySelector(".message").textContent="Too Low"
        score--;
        document.querySelector(".score").textContent=score; }
        else{
            document.querySelector(".message").textContent="You lost the game"
            document.querySelector("body").style.backgroundColor=" #ec0909"
            
            
            document.querySelector(".score").textContent=0; }
    

    }
    else if(guess> secretNumber){
        if(score>1){
            document.querySelector(".message").textContent="Too High"
            score--;
            document.querySelector(".score").textContent=score; }
            else{
                document.querySelector(".message").textContent="You lost the game"
                document.querySelector("body").style.backgroundColor=" #ec0909"
                document.querySelector(".score").textContent=0; }
    }
})

document.querySelector(".again").addEventListener("click", 
function(){
    score=10;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector(".number").textContent="?";
    document.querySelector(".score").textContent=score;
    document.querySelector(".message").textContent="Start guessing..."
    document.querySelector(".guess").textContent="";
    document.querySelector("body").style.backgroundColor="#4a93f4"



}
) */


let secretNumber=Math.trunc(Math.random()*20)+1;

let score=10;
let highscore=0;

document.querySelector(".check").addEventListener("click" ,function(){
    const guess=Number(document.querySelector(".guess").value)
    console.log(guess)

    if(!guess){
        document.querySelector(".message").textContent="this is not number"
    }else if(guess=== secretNumber){
        document.querySelector(".message").textContent="conguratsss😍"
        document.querySelector("body").style.backgroundColor="#60b347"
        document.querySelector(".number").textContent=secretNumber;
        if(score>highscore){
            highscore=score;
            document.querySelector(".highscore").textContent=highscore;
        }
    }
    else if(guess!== secretNumber){
        if(score>1){
        document.querySelector(".message").textContent= guess< secretNumber ? "Too Low": guess>secretNumber ? "Too High":
        score--;
        document.querySelector(".score").textContent=score; }
        else{
            document.querySelector(".message").textContent="You lost the game"
            document.querySelector("body").style.backgroundColor=" #ec0909"
            
            
            document.querySelector(".score").textContent=0; }
    

    }
   
})

document.querySelector(".again").addEventListener("click", 
function(){
    score=10;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector(".number").textContent="?";
    document.querySelector(".score").textContent=score;
    document.querySelector(".message").textContent="Start guessing..."
    document.querySelector(".guess").textContent="";
    document.querySelector("body").style.backgroundColor="#4a93f4"



}
)