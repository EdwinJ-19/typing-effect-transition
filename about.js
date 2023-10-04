const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Front-End Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Photographer";
    }, 2000);
    setTimeout(() => {
        text.textContent = "Gamer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Photo-Editor";
    }, 6000);
    
}

textLoad();
setInterval(textLoad,8000);