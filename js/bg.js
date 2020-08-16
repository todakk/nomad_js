const body = document.querySelector('body');
const IMG_NUMBER = 3;

// function handleImgLoad(){
//     console.log('finish');
// }
//- api 일때 필요하다.

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    body.appendChild(image);
    image.classList.add("bgImage");
    //image.addEventListener("loadend",handleImgLoad);  - api 일때 필요하다.
}

function genRandom() {
    //floor =  버림 / ceil = 반올림 
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();