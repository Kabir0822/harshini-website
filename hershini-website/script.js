function typeEffect(element, text, speed) {
    let i = 0;
    function typing() {
        if(i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// For message.html
window.onload = () => {
    const messageElement = document.getElementById('typing-message');
    if(messageElement){
        typeEffect(messageElement, "Sometimes you meet someone only once, but that moment stays forever. 💗", 50);
    }
}