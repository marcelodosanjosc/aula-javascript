/*var nome = "Marcelo Caldas";
var frase = "Japão é o melhor time do mundo";
console.log(nome);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
*/

/*var lista = ["maça","péra","laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));*/

/*var fruta = [{
    nome: "maça",
    cor: "vermelha"
},{
    nome: "uva",
    cor: "roxa"
}]
console.log(fruta);*/

/*var idade = prompt("Qual a sua idade ");
if (idade >=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}*/

/*var count = 0;
while(count < 5){
    console.log(count);
    count++;
}*/

/*var data = new Date();
alert(data.getTime());
alert(data.getDate());*/

/*function soma(n1, n2){
    return n1 +n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("vai Japão", "Japão","Brasil"));*/

/*var validar = 0;
function validaiades(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual a sua idade");
validaiades(idade)
console.log(validar);*/


function clicou(){
    document.getElementById("agradecemento").innerHTML = " <b> Obrigado por clicar</b>";
    console.log(document.getElementById("agradecemento"));
}
function redirecionar(){
    window.open("https://github.com/marcelodosanjosc");   
}
function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passa o Mouse";
   elemento.innerHTML = "Obrigado por passa o Mouse";
}
function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "Passa aqui o mause";
   elemento.innerHTML = "Passa aqui o mause";
}
function load(){
    alert("Página carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}