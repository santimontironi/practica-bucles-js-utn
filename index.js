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

function passwordCheck(){
    const password  = "123abc"

    while(true){
        const passwordInput = prompt("Ingrese su contraseña:")
        if(passwordInput == ''){
            console.log("Debe de escribir una contraseña.")
        }else if(passwordInput.trim() == password){
            console.log("Clave correcta")
            break
        }else{
            console.log("Contraseña incorrecta, vuelva a intentarlo.")
        }
    }
}

function calculator(){
    while(true){
        const operation = prompt("Ingrese una operacion:")
        if(operation == '' || operation == null){
            console.log("Debe de escribir una operación.")
        }else if(
            operation == '+' || operation.toLocaleLowerCase() == 'sumar' ||
            operation == '-' || operation.toLocaleLowerCase == 'restar' || 
            operation == '/' || operation.toLocaleLowerCase() == 'dividir' || 
            operation == '*' || operation.toLocaleLowerCase == "multiplicar" ){

            console.log("Operacion correcta")

            let num1,num2

            while(true){
                num1 = Number(prompt('Ingrese el primer numero:'))
                if(isNaN(num1) || num1 == ''){
                    console.log("Debe de ingresar un numero.")
                }
                else{
                    break
                }
            }

            while(true){
                num2 = Number(prompt("Ingrese el segundo numero:"))
                if(isNaN(num2) || num2 == ''){
                    console.log("Debe de ingresar un numero.")
                }
                else{
                    break
                }
            }

            if(operation == 'sumar' || operation == '+'){
                const add = num1 + num2
                console.log("El resultado de la suma es:", add)
                break
            }else if(operation == 'restar' || operation == '-'){
                const substract = num1 - num2
                console.log("El resultado de la resta es:", substract)
                break
            }else if(operation == 'dividir' || operation == '/'){
                const division = num1 / num2
                console.log("El resultado de la division es:", division)
                break
            }else if(operation == 'multiplicar' || operation == '*'){
                const multiply = num1 * num2
                console.log("El resultado de la multiplicacion es:", multiply)
                break
            }

        }else{
            console.log("Operacion incorrecta. Vuelva a intentarlo")
        }
    }


}

calculator()