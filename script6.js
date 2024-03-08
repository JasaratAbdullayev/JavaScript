// Remember, we're gonna use strict mode in all scripts now!
'use strict';



const array1=[1,3,55,666,706,"jesse", true]
const array2=["abdullayev", 222,2,-22,false]

const findarry=function(valu){

    let array1Max=array1[0]
    
    let array1Min=array1[0]
    
    for(let i=0; i<valu.length;i++){
        if(array1Max<valu[i]){
            array1Max=valu[i]
        }
        if(array1Min>valu[i]){
            array1Min=valu[i]
        }
       

    }
    console.log(array1Max,array1Min)
    return  array1Max-array1Min;
}

const call=findarry(array1)
console.log(call)


const array3=array1.concat(array2)
console.log(array3)
