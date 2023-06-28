// 9. Cree una función que reciba una letra del alfabeto 
// y muestre si tal letra corresponde a algún elemento del 
// siguiente arreglo ["a", "b", "c", "d", "e", "f", "g"] Use 
// ciclo for (con .length) en la solución de este problema

function letra(a) {
    let arreglo=["a", "b", "c", "d", "e", "f", "g"]
    for (let index = 0; index < a.length; index++) {
      for (let i = 0; i < arreglo.length; i++) {
          if (arreglo[i].includes(a[index])) {
              return "si"
          } 
      }
    }
    return "no"
}
valorfunction= letra("m")
console.log(valorfunction);