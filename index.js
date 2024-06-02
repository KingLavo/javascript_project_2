//String Manipulation Functions:
console.log('String Manipulation Functions:')
//A function to reverse a string
const RevertString = (revertWorld)=>{
    var result = "";
    if(typeof(revertWorld) === 'string'){
        for( var i = revertWorld.length - 1; i >= 0; i--){
            result += revertWorld[i]
        }
    }else{
        console.log(`\tThe value ${revertWorld} is not a String`)
    }

    return '\t ', result
}
 var outPut = RevertString('school')
 console.log("\tThe reverse String is: ", outPut)

// FUNCTION TO COUNT THE NUMBER OF CHARACTER IN A STRING
function countCharacter(char){
    if(typeof char === 'string'){
        return `\tThe Numbers of Character in the World "${char}" is : ${char.length}`
    }
}
const NumOfCharacter = countCharacter('software engineering')
console.log(NumOfCharacter)

//CAPITALIZE A WORLD
const capitalizeAWorld = (word)=>{

    let capitalize = word.split(" ");
    
    if(typeof word === 'string'){
        for(let i = 0; i < capitalize.length; i++){
            capitalize[i] = capitalize[i][0].toUpperCase() + capitalize[i].substring(1)
        }
        // console.log(`\tTransform to upper case ${world} : ${world.charAt([0]).toUpperCase().join()}`)
    }

    return `\tThe word "${word}" capitalize to : ${capitalize.join(" ")}`;
}
console.log(capitalizeAWorld("i am a software enginerr"))

        //ARRAY FUNCTIONS:
console.log('Array Functions:')    
const numbers = [23, 49, 0, 47, 90, 34, 65, 9 ]
 //Max, min value in Array
const maxMinValue = ()=>{
    return `\tThe maximum value = : ${Math.max(...numbers)} and The minimum value = ${Math.min(...numbers)}`
}
const resultOfMaxMinValue = maxMinValue()
console.log(resultOfMaxMinValue)

//SUM OF ALL THE NUMBERS IN THE ARRAY
function sumOfArray(){
    let totalValue = 0;
    for(let i of numbers){
        if(isNaN(i) === true){
            continue
        }else{
        totalValue +=i
    }
    }
    console.log('\tSum of The Array is = ',totalValue)   
}
 sumOfArray()


 function filterArray(){
    console.log('\tfilter Out numbers grater than 40')
    numbers.filter(number=>{
        if(number > 40){
            console.log('\t', number)
        }
    })
 }
filterArray()

//Mathematical Functions:
        console.log('Mathematical Functions:')
//FUNCTION TO CALCULATE THE FACTORIAL OF A GIVEN NUMBER
function factorial(n){
    var result = 1;
    for(let i = 1; i <= n; i++){
        result *= i
    };
    return `\t ${n}! = ${result}`;
}
console.log(factorial(2))


//FUNCTION TO CHECK IF A NUMBER IS A PRIME NUMBER
function primeNumbers(initialValue){
    if(initialValue % 2 === 0){
        console.log(`\t ${initialValue} : is a prime number`)
    }else{
        console.log(`\t ${initialValue} : is odd number`)
    }
}
primeNumbers(2)


//FIBONACCI SEQUENCE
 function fibonacciSequence(n){
    var fibona = [ 1, 1]
    if( n <= 1){ console.log(fibona[0])}

    if(n == 2){ console.log(...fibona)}

    if(n > 2){

        for(let k = 1; k <= (n - 2); k++){

            fibona.push( fibona[fibona.length - 1] + fibona[fibona.length - 2])
        }
        console.log(`\t Fibonacci Sequence of ${n} = `,...fibona)
    }
}

 fibonacciSequence(6)



 

