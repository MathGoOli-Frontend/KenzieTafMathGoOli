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

//configuração só pra dizer que usei "corretamente sobre o uso de var/let/const"
// não precisei usar var/let porque var não se usa e let não precisei por que não preciso mudar essas informações durante a execução do script
// Homem
const alturaHomem = 1.7
const absHomem = 41
const barRepHomem = 6
const barSecondsHomen = 15
const swimDistanceHomem = 100
const swimTimeHomem = 60
const diveTimeHomem = 30
const runDistanceHomen1 = 3000
const runTimeHomen1 = 12*60
const runDistanceHomen2 = 5000
const runTimeHomen2 = 20*60
// Mulher
// eu sei que algumas constantes são iguais tipo swimTimeHomem e swimTimeMulher mas preferi deixar separado porque na explicação do taf estao separadas
const alturaMulher = 1.6
const absMulher = 41
const barRepMulher = 5
const barSecondsmulher = 12
const swimDistanceMulher = 100
const swimTimeMulher = 60
const diveTimeMulher = 30
const runDistanceMulher1 = 4000
const runTimeMulher1 = 15*60
const runDistanceMulher2 = 6000
const runTimeMulher2 = 22*60

if (gender === "male"){ 
    //pra deixar mais rápido eu vou deixar uma else if porque se for reprovado em um já acusa passed == false
    if(height < alturaHomem){ // Altura
        passed = false
    }else if (abs < absHomem){ // abnominais
        passed = false
    }else {
        passed = true
    }
    //  repeticoes da barra
    if (passed == true){
        if(barReps < barRepHomem){
            if (barSeconds >= barSecondsHomen){
                passed = true
            }
        }else{
            passed = true
        }

    }
    
    // natacao
    if (passed == true){
        if(swimDistance >= swimDistanceHomem && swimTime <= swimTimeHomem){
            passed = true
        }else if(diveTime <= diveTimeHomem){
            passed = true
        }else{
            passed = false
        }
    }
    

    // corrida
    if (passed == true){
        if(runDistance >= runDistanceHomen1){ // 3km já convertido pro script não precisar fazer a conta # * 1000
            if (runTime <= runTimeHomen1){
                passed = true
            }else{
                passed = false
            }
        }else if(runDistance >= runDistanceHomen2){
            if (runTime <= runTimeHomen2){
                passed = true
            }else{
                passed = false
            }
        }else{
            passed = false
        }
    }
    
    
    

}else if (gender === "female"){
    if(height < alturaMulher){
        passed = false
    }else if (abs < absMulher){
        passed = false
    }else {
        passed = true
    }
    // bar reps
    if (passed == true){
        if(barReps < barRepMulher){
            if (barSeconds >= barSecondsmulher){
                passed = true
            }
        }else{
            passed = true
        }

    }
    
    // natacao
    if (passed == true){
        if(swimDistance >= swimDistanceMulher && swimTime <= swimTimeMulher){
            passed = true
        }else if(diveTime <= diveTimeMulher){
            passed = true
        }else{
            passed = false
        }
    }
    

    // corrida
    if (passed == true){
        if(runDistance >= runDistanceMulher1){
            if (runTime <= runTimeMulher1){
                passed = true
            }else{
                passed = false
            }
        }else if(runDistance >= runDistanceMulher2){
            if (runTime <= runTimeMulher2){
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
