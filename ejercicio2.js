let notes=[85,42,33,47,54,63,77,18];
let promedio=0;
for(let i=0; i<notes.length;i++){
    promedio+=notes[i];
}
console.log(promedio)
promedio/=notes.length;

if (promedio>=70){
    console.log("Aprueba con una promedio de: ",promedio);
}else{
    console.log("Reprueba con una promedio de: ",promedio);
}
