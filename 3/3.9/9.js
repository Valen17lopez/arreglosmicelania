// 9. Dado el arreglo [true, true, false, true, false, false] use ciclo while y una 
// variable contadora(diferente al contador del ciclo) para mostrar cuántas veces 
// aparece false en el arreglo. Como sugerencia, se puede basar en el ejercicio 6 
// anterior de arreglos para ver como se implementa la variable contadora.

let arreglo=[true, true, false, true, false, false]
i=0
while (i<= arreglo.length) {
    if (arreglo[i]=="false") {
        i++   
    }
    console.log("false aparece",i,"veces");
 }  

