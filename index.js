function notes(){
    let acumulador = 0

    for (let index = 0; index < 3; index++) {

        let nota = Number(prompt(`Ingrese la nota ${index + 1}:`))
        
        while(true){

            if (isNaN(nota)){
                console.log("Nota ingresada no válida")
                nota = Number(prompt(`Ingrese la nota ${index + 1} nuevamente:`))
            }else if(nota == ''){
                console.log("Debe de ingresar un numero")
                nota = Number(prompt(`Ingrese la nota ${index + 1} nuevamente:`))
            }else if(nota < 0 || nota > 10){
                console.log("Debe de ingresar una nota entre 0 y 10")
                nota = Number(prompt(`Ingrese la nota ${index + 1} nuevamente:`))
            }else{
                acumulador += nota
                break;
            }

        }
        
    }

    const promedio = acumulador/3
    console.log("El promedio de las notas es: ",promedio)

}

notes()