// Inputs

var firstNumber = () => parseInt(document.getElementById('firstNumber').value);
var secondNumber = () => parseInt(document.getElementById('SecondNumber').value);

// Operaciones

var calcSumar = () => firstNumber() + secondNumber();
var calcRestar = () => firstNumber() - secondNumber();
var calcDividir = () => firstNumber() / secondNumber();
var calcMultiplicar = () => firstNumber() * secondNumber();

// Obtenemos los diferentes resultados

var resultSumar = () => document.getElementById("result").innerText = calcSumar();
var resultRestar = () => document.getElementById("result").innerText = calcRestar();
var resultDividir= () => document.getElementById("result").innerText = calcDividir();
var resultMultiplicar = () => document.getElementById("result").innerText = calcMultiplicar();
var resultBorrar = () => document.getElementById("result").innerText = 'Resultado';


// E V E N T O S

document.getElementById('botonSumar').addEventListener("click", ifcalcSumar);
document.getElementById('botonRestar').addEventListener("click", ifcalcRestar);
document.getElementById('botonDividir').addEventListener("click", ifcalcDividir);
document.getElementById('botonMultiplicar').addEventListener("click", ifcalcMultiplicar);
document.getElementById('botonBorrar').addEventListener("click", ifcalcBorrar);


function ifcalcSumar() {
    if (!firstNumber() || !secondNumber() ) {
        document.getElementById("result").innerText = "Error, debes incluir dos números"                   
    }else {
        resultSumar();              
    }   
}

function ifcalcRestar() {
    if (!firstNumber() || !secondNumber() ) {
        document.getElementById("result").innerText = "Error, debes incluir dos números"        
    }else {
        resultRestar();        
    }
}

function ifcalcDividir() {
    if (!firstNumber() || !secondNumber() ) {
        document.getElementById("result").innerText = "Error, debes incluir dos números"        
    }else {
        resultDividir();           
    }
}

function ifcalcMultiplicar() {
    if (!firstNumber() || !secondNumber() ) {
        document.getElementById("result").innerText = "Error, debes incluir dos números"        
    }else {
        resultMultiplicar();          
    }
}

function ifcalcBorrar() {
    document.getElementById('firstNumber').value = '';
    document.getElementById('SecondNumber').value = '';
    resultBorrar();
}