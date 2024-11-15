let numeros = [5,1,8,6,7,8,6,9];
let sumatoria=0;
let promedio=0;
 
alert("llegue a mi js");
 
for (let i=0; i<numeros.length; i++){
    console.log(numeros[i]);
    sumatoria+=numeros[i];    
}
 
console.log(sumatoria);
promedio=sumatoria/numeros.length;
 
document.write("Este es el resultado de la sumatoria " , sumatoria,"<br>");
document.write("Este es el resultado de la promedio " , promedio,"<br>");
 
document.getElementById("resultado").value("jjjj");
 
//document.getElementById("promedio").value = promedio;