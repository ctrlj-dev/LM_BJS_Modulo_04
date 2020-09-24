document.getElementById("full-name").innerText = 'Aquí aparecerá tú nombre';

/* Primer trozo de código, es funcionar pero tapamos para refactorizar
function submitName() {
    var fullName;    
    var name = document.getElementById("input-name").value;
    fullName = name;   
    var surname1 = document.getElementById("input-surname1").value;
    fullName = fullName + " " + surname1;   
    var surname2 = document.getElementById("input-surname2").value;
    fullName = fullName + " " + surname2;    
    document.getElementById("full-name").innerText = fullName;
}

*/

// Refactorizamos código en funciones mas pequeñas
/*
function getName() {
    return document.getElementById("input-name").value;
}

function getSurname1() {
    return document.getElementById("input-surname1").value;
}

function getSurname2() {
    return document.getElementById("input-surname2").value;
}

function getFullName() {
    return getName() + " " + getSurname1() + " " + getSurname2();
}

function submitName() {
    document.getElementById("full-name").innerText = getFullName();
}
*/

//document.getElementById("button-submit").addEventListener("click", submitName);

// Formato Arrow

var getName = () => document.getElementById("input-name").value;


var getSurname1 = () => document.getElementById("input-surname1").value;


var getSurname2 = () => document.getElementById("input-surname2").value;


var getFullName = () => getName() + " " + getSurname1() + " " + getSurname2();


var submitName = () => document.getElementById("full-name").innerText = getFullName();

// document.getElementById("button-submit").addEventListener("click", submitName);

// keydown para el envío automático

document.getElementById('input-name').addEventListener("keyup", submitName);
document.getElementById('input-surname1').addEventListener("keyup", submitName);
document.getElementById('input-surname2').addEventListener("keyup", submitName);
