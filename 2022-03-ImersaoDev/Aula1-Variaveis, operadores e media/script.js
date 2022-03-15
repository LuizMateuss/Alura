function calculaMedia(){
    var notaSem1=document.getElementById("ip1").value;
    var notaSem2=document.getElementById("ip2").value;
    var notaSem3=document.getElementById("ip3").value;
    var notaSem4=document.getElementById("ip4").value;
    notaSem1=parseFloat(notaSem1);
    notaSem2=parseFloat(notaSem2);
    notaSem3=parseFloat(notaSem3);
    notaSem4=parseFloat(notaSem4);
    var res=(notaSem1+notaSem2+notaSem3+notaSem4)/4;
    var notaFinal=document.getElementById("resultado");
    var input=document.getElementsByTagName("input");
    var verifica=true
    for(var i=0; i<input.length-1;i++){
        if(input[i].value<0 || input[i].value>10 || input[i].value=="" || input[i].value=="NaN"){
            verifica=false;
        }
    }

    if(verifica==false){
        alert("Há notas inadequadas");
        notaFinal.value="NaN";
    }
    else
        notaFinal.value=res.toFixed(1);

    
    var bg=document.getElementById("body").style; 
    if(res>=6 && notaFinal.value!="NaN"){
        notaFinal.style.backgroundColor="rgba(142, 248, 213, 0.712)";
        bg.backgroundImage="url('https://mega.ibxk.com.br/2016/07/26/26112810441108.gif?ims=610x')";
    }
    else if(res>0 && notaFinal.value!="NaN"){
        notaFinal.style.backgroundColor="rgba(248, 142, 142, 0.712)";
        bg.backgroundImage="url('https://i.pinimg.com/originals/3d/07/1d/3d071da87e52c2c0a47d5084f82ecdb0.gif')";

    }
    else{
        notaFinal.style.backgroundColor="#ffffff";
        bg.backgroundImage="url('https://static.escolakids.uol.com.br/2020/08/licoes-importantes-escola.jpg')";
    }
}