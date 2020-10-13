"use strict"
  
// function multi (num1:number, num2:number) {
//   return num1*num2
// }
// multi(2, 3)
// console.log(multi)

var a: Array <any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i= 0; i<= a.length; i++){
//         console.log(i*1)
// };


// var b: Array <any> = [1,2,3,4,5,6,7,8,9,10];
// for( let i= 0; i<= b.length; i++) {
//     console.table(i*2)
// };

// var c: Array <any> = [1,2,3,4,5,6,7,8,9,10];
// for( let i= 0; i<= c.length; i++) {
//     console.table(i*3)
// }

// var d: Array <Number> = [1,2,3,4,5,6,7,8,9,10];
// for ( let i= 0; i< d.length; i++){
//     console.table(i*10)
// }


for(let i = 0; i < a.length; i++){
    for( let x = 0 ; x < a.length ; x++){
        console.log(a[i] + " X " + a[x] + " = "+ (a[x]*a[i]))
    }
}

/*
i = 0 true
x = 0 true
1 X 1 = 1

i = 0
x = 1
1 X 2 = 2

i = 0 
x=  2
1X 3  = 3



*/


for ( let c of a){
    for (let y of a){
        console.log(c + " X " + y + " = "+ (c*y));
    }
}