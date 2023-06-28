// 10. Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use 
// ciclo for para inspeccionar los elementos del arreglo y mostrar si con tales elementos 
// sería posible formar la palabra adso.

let arreglo=["z", "p", "s", "z", "o", "b", "a", "w", "d"]
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i]=="a" || arreglo[i]=="d" || arreglo[i]=="s" ||arreglo[i]=="o" ) {
        console.log("si");
    }
}
