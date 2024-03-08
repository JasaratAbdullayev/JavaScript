'use strict';


function calcAge(birthYear){

    const age=2023-birthYear;
    
    

    function printAge(){
     const output=`${name} you are ${age} , and born in ${birthYear} `
     console.log(output)


       if(birthYear>1999){

        const str=`${name} you are millenal `
        console.log(str)
       }

    }
    printAge()
    return age;
}
const name="jesse"
calcAge(2004)
