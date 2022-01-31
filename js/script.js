console.log("this file is loaded");
let sound1 = document.getElementById("audio1");
sound1.preload;

function buttonClick(){
    sound1.play();
    alert('Ceci était un bouton qui montre ce qu\'on peut faire avec un site internet');
}