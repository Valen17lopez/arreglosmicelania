// 2. Dado el arreglo [1,2,3,4,5,6,7,8,9,10]:
let arreglo=[1,2,3,4,5,6,7,8,9,10]
// a) Agregue el elemento 345 usando push y verifique el cambio en el arreglo b) 
arreglo.push(345);

// b) Agregue el elemento true usando push y verifique el cambio en el arreglo
arreglo.push("true");

// c) Agregue el elemento "ADSO" usando push y verifique el cambio en el arreglo 
arreglo.push("ADSO");

// d) Agregue los elementos 455, 78, false usando push en un solo llamado y verifique 
// el cambio en el arreglo
arreglo.push(455, 78, "false");
// e) Agregue los elementos "ABcd", true, 21 usando push en un solo llamado y verifique 
// el cambio en el arreglo
arreglo.push("ABcd", "true", 21);
console.log(arreglo);