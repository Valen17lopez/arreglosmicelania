// 3. Use splice para hacer las eliminaciones correspondientes:

// a) Dado el arreglo [1, 2, false] Elimine el elemento de índice 2
let arr=[1, 2, false]
arr.splice(1,1)
console.log(arr);

// b) Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6
let arreglo=[99, false, 17, 45, 7, "abc", 78]
arreglo.splice(6, 1);
console.log(arreglo);

// c) Dado el arreglo [-1, -55, -89- 30, 1000] Elimine el elemento de índice 1
let a=[-1, -55, -89- 30, 1000]
a.splice(1,1);
console.log(a);

// d) Dado el arreglo ["zxc", 767, 1298, true, false, [3], 1] Elimine los elementos 
// desde el índice 1 hasta el índice 4 en un sólo llamado
let d=["zxc", 767, 1298, true, false, [3], 1]
d.splice(1, 4);
console.log(d);

// e) Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el 
// índice 3 hasta el índice 4 en un sólo llamado
let e=[34, ["q"], 67, 1, 99, 1/2]
e.splice(3, 2)
console.log(e);