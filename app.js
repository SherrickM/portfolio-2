const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Thank you for visiting Code by SM2";
        // document.querySelector(".sec-text").style.width = "10%"
    }, 0);
    setTimeout(() => {
        text.textContent = "What do we do?";
    },4000);
    setTimeout(() => {
        text.textContent = "Help Brands Thrive in the digital world";
    },8000); //1s = 1000 milliseconds
    setTimeout(() => {
        text.textContent = "Take a look at the links below and";
    },12000); //1s = 1000 milliseconds
    setTimeout(() => {
        text.textContent = "Contact me or check out my repo";
    }, 16000); //1s = 1000 milliseconds

}

textLoad();
setInterval(textLoad, 20000);