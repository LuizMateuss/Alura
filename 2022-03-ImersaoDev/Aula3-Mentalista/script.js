var numeroSecreto
var mostraResultado=document.getElementById("resultado")
var chances=document.getElementsByClassName("chance")
var conta
var correto

function Chutar(){
    var pegaChute=document.getElementById("valor").value;
    if(pegaChute == "")
        alert("insira um número")
    else if(pegaChute == numeroSecreto && conta<=3){
        mostraResultado.innerHTML="Voce Acertou!!!<br>O número correto é o "+numeroSecreto
        correto=true
    }
    else if(!correto && conta<3){
        mostraResultado.innerHTML="ops... "+(conta+1)+"º erro"
        chances[conta].style.backgroundColor="gray";
    }
    else if(!correto && conta==3){
        mostraResultado.innerHTML="Voce errou...<br>O número correto era o "+numeroSecreto
        mudaCor("red")
    }
    conta++
}

function reinicia(){
    numeroSecreto=parseInt(Math.random()*11);console.log(numeroSecreto)
    mudaCor("green")
    conta=0
    mostraResultado.innerHTML=""
    document.getElementById("valor").value="";
    correto=false
}

function mudaCor(cor){
    for(var i=0; i<3; i++){
        chances[i].style.backgroundColor=cor
    }
}