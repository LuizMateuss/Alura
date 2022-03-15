var simbolo="$";
function valor(){
    var sl=document.getElementsByTagName("select")[0].value;
    var cotacao=document.getElementById("cotacao")
    switch (sl){
        case "Dolar": cotacao.value=5.04; cifrao="$"; break;
        case "Euro": cotacao.value=7.35; cifrao="€"; break;
        case "Libra": cotacao.value=8.39; cifrao="£"; break;
        default: alert("Ocorreu algum problema"); break;
    }
    return simbolo=cifrao;
}
function Converter(){
    var real=document.getElementById("valorReal").value;
    var realConvertido=(real*cotacao.value);
    realConvertido=realConvertido.toFixed(2);
    document.getElementById("valorConvertido").innerHTML=simbolo+realConvertido;
}
// function btMoeda(){
//     document.getElementById("containerMoeda").style.display="block";
//     document.getElementById("container").style.display="none";
//     console.log("oi")
// }