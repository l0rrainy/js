
//Exercício 1: tipos primitivos

var Nome = "lolo"           //string
var Sobrenome = "santos,";
var idade = 15;             //number
var altura = 1.62;          //float
var cidade = "londrina"
var dirige = false;         //boolean


console.log("Olá, meu nome é "+ Nome+" " + Sobrenome+ " minha idade é " +idade);

  //Exercício 2 - matematica

var conta1 = 10;
var conta2 = 20;

  //soma
var soma = conta1 + conta2;

console.log( "a soma é: "+ soma);

  //subtração
var subtraçao = conta1 - conta2
console.log( "a subtração é: " + subtraçao);

  //multiplicação
  var multiplicaçao = conta1 * conta2
  console.log( "a multiplicação é: " +multiplicaçao)

  //divisão
  var divisao = conta1 / conta2
  console.log( "a divisão é: "+divisao)


  //window.alert("😋")

  function Clique1(){
    window.alert("Olá, você clicou no botão 1" );
  }

  
  function Clique2(){
    window.alert("Olá, você clicou no botão 2 " );
  }

  function Clique3(){
    window.alert("Olá, você clicou no botão 3 " );
  }

 //booleanos
 var lolo = 15;
 var maioridade = 18;

 console.log("o aluno é maior de idade??")

 if(lolo > maioridade){
    console.log('sim');
 }
 else{
    console.log('não')

 }


 //media de notas

 //Bernarod tirou 10 na nota 1 e tirou 2 na nota2 e tirou 0 na nota 3, faça um var que caucule a média da nota do bernardo e imprima num console.log

 // Notas de Bernardo
var nota1 = 10;
var nota2 = 2;
var nota3 = 0;

// Calculando a média
var media = (nota1 + nota2 + nota3) / 3;

// Imprimindo a média no console
console.log("A média das notas de Bernardo é: " + media);



