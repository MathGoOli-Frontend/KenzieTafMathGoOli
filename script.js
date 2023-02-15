// Variáveis para aplicar os resultados do teste. Não as altere.

gender = process.argv[2]; // Sexo 
height = process.argv[3]; // Altura
barReps = process.argv[4]; // Repetições com barra
barSeconds = process.argv[5]; // Tempo das repetições com barra 
abs = process.argv[6]; // Abdominais
runDistance = process.argv[7]; // Distância da corrida
runTime = process.argv[8]; // Tempo da corrida
swimDistance = process.argv[9]; // Distância da natação
swimTime = process.argv[10]; // Tempo da natação
diveTime = process.argv[11]; // Tempo de mergulho

passed = false;

// Importante:
// Se o sexo (gender) for masculino, utilize a palavra "male"
// Se o sexo (gender) for feminino, utilize a palavra "female"

// Sugestão para começar:
// if (gender === "male")  
// **sua lógica a partir daqui**

if (gender === "male"){ //pra deixar mais rápido eu vou deixar uma else if porque se for reprovado em um já acusa passed false
    if(height < 1.70){
        passed = false
    }else if (abs < 41){
        passed = false
    }else {
        passed = true
    }
    // bar reps
    if (passed == true){
        if(barReps < 6){
            if (barSeconds >= 15){
                passed = true
            }
        }else{
            passed = true
        }

    }
    
    // natacao
    if (passed == true){
        if(swimDistance >= 100 && swimTime <= 60){
            passed = true
        }else if(diveTime <= 30){
            passed = true
        }else{
            passed = false
        }
    }
    

    // corrida
    if (passed == true){
        if(runDistance >= 3000){
            if (runTime <= 720){
                passed = true
            }else{
                passed = false
            }
        }else if(runDistance >= 5000){
            if (runTime <= 1200){
                passed = true
            }else{
                passed = false
            }
        }else{
            passed = false
        }
    }
    
    
    

}else if (gender === "female"){
    if(height < 1.60){
        passed = false
    }else if (abs < 41){
        passed = false
    }else {
        passed = true
    }
    // bar reps
    if (passed == true){
        if(barReps < 5){
            if (barSeconds >= 12){
                passed = true
            }
        }else{
            passed = true
        }

    }
    
    // natacao
    if (passed == true){
        if(swimDistance >= 100 && swimTime <= 60){
            passed = true
        }else if(diveTime <= 30){
            passed = true
        }else{
            passed = false
        }
    }
    

    // corrida
    if (passed == true){
        if(runDistance >= 4000){
            if (runTime <= 900){
                passed = true
            }else{
                passed = false
            }
        }else if(runDistance >= 6000){
            if (runTime <= 1320){
                passed = true
            }else{
                passed = false
            }
        }else{
            passed = false
        }
    }

}




// Deve conter apenas esse console.log no seu código.
// Senão os testes não irão funcionar.
console.log(passed);
