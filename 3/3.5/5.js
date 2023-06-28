// 5. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un 
// condicional para mostrar si el nombre Juan se encuentra dentro del arreglo

let arreglo=["Maria", "Pedro", "Juan", "Pablo", "Diana"]
arreglo.forEach(i => {
    if ([i].includes("Juan")) {
        console.log("si se encuentra");
    }
});