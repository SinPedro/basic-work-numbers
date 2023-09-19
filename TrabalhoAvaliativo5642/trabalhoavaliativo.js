// INICIO DO TRABALHO AVALIATIVO 2

alert("TRABALHO AVALIATIVO");
alert("TURMA 5641");
alert("VAMOS COMEÇAR");

// COMEÇO DOS PEDIDOS 

let opcao = Number(prompt("Digite o valor da atividade entre 1 e 8:"))

// COMEÇO DOS CÓDIGOS

switch(opcao){
    case 1://SOMA SE FOR POSITIVO
        alert("SOMA SE FOR POSITIVO")
        const PrimeNumPositivos = Number(prompt("Digite o primeiro valor:")) 
        const SegundNumPositivos = Number(prompt("Digite o segundo valor:")) 
        if(PrimeNumPositivos > 0){
        const SomaNumeros = PrimeNumPositivos + SegundNumPositivos
        console.log("O RESULTADO DA SOMA É DE:", SomaNumeros );
        }else{
            console.log("ALGUM DOS NÚMEROS É NEGATIVO OU DEU ERRADO AMIGO.");
        }
        break;
    case 2://MULTIPLICAÇÃO SE UM FOR PAR
        alert("MULTIPLICAÇÃO SE UM FOR PAR")
        const num1vezes = Number(prompt("Digite o primeiro valor:"))
        const num2vezes = Number(prompt("Digite o segundo valor:"))
        const restoDivisao = num1vezes % 2
        if(restoDivisao === 0){
        const multiplicacaoNums = num1vezes * num2vezes
        console.log("A MULTIPLICAÇÃO É DE:", multiplicacaoNums);
        }else{
        console.log("ALGUM NÚMERO NÃO É PAR OU ALGO DEU ERRADO MEU AMIGO.");    
        }
        break;
    case 3://DIVISÃO POR NAO ZERO
        alert("DIVISÃO SE FOR 0")
        const primeiroNum0 = Number(prompt("Digite o primeiro valor:"))
        const segundoNum0 = Number(prompt("Digite o primeiro valor:")) 
        if(segundoNum0 > 0){
        const divisaoPor = primeiroNum0 / segundoNum0
        console.log("O RESULTADO DA DIVISÃO É DE:", divisaoPor);
        }else{
            console.log("ALGUM NÚMERO É 0 OU ALGO DEU ERRADO.");
        }
        break;
    case 4:// array em ordem reversa
        const arrayRev1 = ["pedro","laila","mafra"]
        console.log(arrayRev1);
        arrayRev1.reverse(arrayRev1)
        console.log(arrayRev1);
    case 5:// array sem o primeiro e ultimo elemento
        const array5 = ["cachorro","vaca","leão","girafa","elefante"]
        array5.splice(0,1)
        array5.pop();
        console.log(array5);
        break;
    case 6://VOLTE UMA VOGAL 
        let nomeVogal = prompt("DIGITE UMA FRASE/PALAVRA:")
        console.log(nomeVogal.match(/[aeiou]/g));
        break;
    case 7://CONSOANTES NUMA FRASE
    let nomeConstante = prompt("DIGITE UMA FRASE/PALAVRA:")
    console.log(nomeConstante.match(/[ B C D F G J K L M N P Q R S T V W X Z ]/g));
    break;
    case 8:// ultimo número de um ARRAY
    const arrayUltimo = [0,1,2,3,4,5]
    arrayUltimo [0] = prompt("Digite o primeiro elemento")
    arrayUltimo [1] = prompt("Digite o segundo elemento:")
    arrayUltimo [3] = prompt("Digite o terceiro elemento")
    arrayUltimo [4] = prompt("Digite o quarto elemento:")
    if(arrayUltimo >= [1,2]){
     const ultimoElemento = arrayUltimo.pop()
     console.log(ultimoElemento);
    }else{
        console.log("ALGO DEU ERRADO OU VOCE INSERIU MENOS QUE 2 ELEMENTOS");
    }





}
