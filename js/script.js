//check console log
console.log('ok js');

// recupero elementi dal DOM
const topElement = document.getElementById('top-element');

const responseElement = document.getElementById('response');

const firstinputelement = document.getElementById('user-answer-1');

const secondinputelement = document.getElementById('user-answer-2');

const thirdinputelement = document.getElementById('user-answer-3');

const fourthinputelement = document.getElementById('user-answer-4');

const fifthinputelement = document.getElementById('user-answer-5');

const buttonelement = document.getElementById('button');

const middleElement = document.getElementById('middle-element');

const countdownElement = document.getElementById('countdown');

const firstNumber = document.getElementById('first-number');

const secondNumber = document.getElementById('second-number');

const thirdNumber = document.getElementById('third-number');

const fourthNumber = document.getElementById('fourth-number');

const fifthNumber = document.getElementById('fifth-number');

const   responseElementNumber = document.getElementById('response-number');

const infoElement = document.getElementById('info');

const indexElement = document.getElementById('index');

//creo un funzione che generi un array con numeri random da 1 a 99
function getRandomArray(numberofArray , maxNumber){
    let Numbers = [];
    while(Numbers.length < numberofArray){
        let randomNumber;
        do{
            randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        }while(Numbers.includes(randomNumber))
        Numbers.push(randomNumber);
    }
    return Numbers;
}

//richiamo la funzione e controllo
const testnumbers = getRandomArray(5, 99);
console.table(testnumbers);

//stampo il contenuto dell'array in pagina
firstNumber.innerText = testnumbers[0];
secondNumber.innerText = testnumbers[1];
thirdNumber.innerText = testnumbers[2];
fourthNumber.innerText = testnumbers[3];
fifthNumber.innerText = testnumbers[4];

//creo un countdown e lo stampo in pagina
let countdown = 30;
countdownElement.innerText = countdown

//aggiungo la classe d-none
topElement.classList.add('d-none');
infoElement.classList.add('d-none');

//imposto l'intervallo
const countdownShift = setInterval( function () {
    //se il countdown arriva a 0 
    if(countdown === 0){
        //interrompo il countdown
        clearInterval(countdownShift);
        //rimuovo la classe d-none
        topElement.classList.remove('d-none');
        responseElement.classList.add('d-none');
        infoElement.classList.remove('d-none');
        //applico la classe d-none
        middleElement.classList.add('d-none');
        firstNumber.classList.add('d-none');
        secondNumber.classList.add('d-none');
        thirdNumber.classList.add('d-none');
        fourthNumber.classList.add('d-none');
        fifthNumber.classList.add('d-none');
    }else{
        //il countdown continua
        countdownElement.innerText = --countdown;
    }
} ,1000);

//creo un array vuoto
const UserNumbers = [];

//metto in ascolto il bottone
buttonelement.addEventListener('click' , function() {
   
    // rimuovo la classe d-none
    responseElement.classList.remove('d-none');

    // recupero i valori degli elementi
    const firstvalue = parseInt(firstinputelement.value);
    const secondvalue = parseInt(secondinputelement.value);
    const thirdvalue = parseInt(thirdinputelement.value);
    const fourthvalue = parseInt(fourthinputelement.value);
    const fifthvalue = parseInt(fifthinputelement.value);
    
    //li inserisco in un secondo array
    UserNumbers.push(firstvalue, secondvalue, thirdvalue, fourthvalue, fifthvalue);
    console.table(UserNumbers);

    let index = 0;
    
    //controllo entrambi gli array
    for(let i = 0; i < testnumbers.length && i < UserNumbers.length; i++){
        if(testnumbers[i] === UserNumbers[i]){
            responseElementNumber.innerText += ' ' + ' ' + testnumbers[i] + ' ' + ' ';
            indexElement.innerText = ++index;
        }else{
            indexElement.innerText = '0';
        }
    }
    
});

