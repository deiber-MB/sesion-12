let contraseñacorrecta= "micontraseña123";
let contraseñaingresada
do{
    contraseñaingresada = prompt("por fsvor ingresa la contraseña");
    if(contraseñaingresada != contraseñacorrecta)
        alert("contraseña incorrecta. intenta de nuevo")
}
{
    while (contraseñaingresada !== contraseñacorrecta);
    alert("contaseña correct,");
}