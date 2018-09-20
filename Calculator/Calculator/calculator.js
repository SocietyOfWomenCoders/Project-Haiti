document.getElementById("click").onclick = add2;

function add2 (x,y){

  var userInput = parseInt(document.getElementById("x").value);
  var userInput2 = parseInt(document.getElementById("y").value);
  if (isNaN(userInput) || isNaN(userInput2))
  {
    document.getElementById("result").innerHTML ="VEUILLEZ SAISIR UNE VALEUR NUMERIQUE"
  }
  else
  {
    console.log(userInput+userInput2);
    document.getElementById("result").innerHTML = userInput+userInput2;
  }


}

document.getElementById("subtract").onclick = subtract;

function subtract (x,y){

  var userInput = parseInt(document.getElementById("x").value);
  var userInput2 = parseInt(document.getElementById("y").value);
  if (isNaN(userInput) || isNaN(userInput2))
  {
    document.getElementById("result").innerHTML ="VEUILLEZ SAISIR UNE VALEUR NUMERIQUE"
  }
  else
  {
  console.log(userInput-userInput2);
  document.getElementById("result").innerHTML = userInput-userInput2;
  }

}

document.getElementById("multiply").onclick = multiply;

function multiply (x,y){

  var userInput = parseInt(document.getElementById("x").value);
  var userInput2 = parseInt(document.getElementById("y").value);
  if (isNaN(userInput) || isNaN(userInput2))
  {
    document.getElementById("result").innerHTML ="VEUILLEZ SAISIR UNE VALEUR NUMERIQUE"
  }
  else
  {
  console.log(userInput*userInput2);
  document.getElementById("result").innerHTML = userInput*userInput2;
  }

}

document.getElementById("divide").onclick = divide;

function divide (x,y){

  var userInput = parseInt(document.getElementById("x").value);
  var userInput2 = parseInt(document.getElementById("y").value);
  if (isNaN(userInput) || isNaN(userInput2))
  {
    document.getElementById("result").innerHTML ="VEUILLEZ SAISIR UNE VALEUR NUMERIQUE"
  }
  else if ( userInput2== 0)
  {
  document.getElementById("result").innerHTML = "DIVISER PAR ZERO N'EST PAS VALID";
  }
  else {
    console.log(userInput/userInput2);
    document.getElementById("result").innerHTML = userInput/userInput2;
  }


}
