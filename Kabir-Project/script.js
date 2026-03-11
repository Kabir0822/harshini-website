const text = "I made this small website just to say hi 🙂";
let i = 0;

function typeEffect() {
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect,50);
    }
}

window.onload = typeEffect;

function showMessage(){
    document.getElementById("secret").style.display = "block";
}