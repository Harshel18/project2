var numb1=document.getElementById("numb1");
var numb2=document.getElementById("numb2");
var resu=document.getElementById("result");

document.getElementById("addi").addEventListener("click" , function(){

    resu.value=parseInt(numb1.value)+parseInt(numb2.value);
});
document.getElementById("subt").addEventListener("click" , function(){

    resu.value=parseInt(numb1.value)-parseInt(numb2.value);
});
document.getElementById("multi").addEventListener("click" , function(){

    resu.value=parseInt(numb1.value)*parseInt(numb2.value);
});
document.getElementById("didv").addEventListener("click" , function(){

    resu.value=parseInt(numb1.value)/parseInt(numb2.value);
});
document.getElementById("squt").addEventListener("click" , function(){

    resu.value=Math.sqrt(parseInt(numb1.value));
});
document.getElementById("pwd").addEventListener("click" , function(){

    resu.value=Math.pow(parseInt(numb1.value), parseInt(numb2.value));
});
document.getElementById("sin").addEventListener("click" , function(){

    resu.value=Math.sin(parseInt(numb1.value))
});
document.getElementById("cos").addEventListener("click" , function(){

    resu.value=Math.cos(parseInt(numb1.value))
});
document.getElementById("tan").addEventListener("click" , function(){

    resu.value=Math.tan(parseInt(numb1.value))
});