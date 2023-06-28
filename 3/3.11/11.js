// 11. Dado el arreglo [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] use ciclo for 
// para mostrar la tabla del 5 del 10 al 20 , p.e (5x10, 5x11...)

let arreglo= [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let i = 0; i < arreglo.length; i++) {
   let mul= arreglo[i]*5
   console.log("5 x",arreglo[i],"=",mul);
} 



// let arr= [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// arr.forEach(x => {
//     mul= x * 5
//     console.log("5x"+ x +"="+mul);
// });