// Dado el arreglo [3, 50, 70, 600, 40]:
// 4. Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar 
// cuales elementos son pares

let a=[3, 50, 70, 600, 40]
a.forEach(i => {
    if (i%2==0) {
        console.log(i);
    }
});