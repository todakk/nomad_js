
/* 0620 3-1 making a clock  */
/* new Date(), get~~();,  */

/*
const clockContainer = document.querySelector('.js-clock'),
//document가 아닌, clockContainer에서 탐색
 clockTitle = clockContainer.querySelector('h1');


function getTime() {
    //1. 현재 시간 얻기
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    //2. 1,2,3.. 아니고 10 이하일때 앞에 0붙기
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours }:${minutes < 10 ? `0${minutes}` : minutes }:${seconds < 10 ? `0${seconds}` : seconds }`;

    
}

function init(){
    getTime()
   setInterval(getTime ,1000);
}

init();*/



/*3-2  setInterval - time 마다 반복해서 function 실행*/

//setInterval(function, time )
//ex)
// function sayHi() {
//     console.log('say Hi');
// }
// setInterval(sayHi , 3000);


// 시계 혼자 만들어 보기-
const clockWrap = document.querySelector('.js-clock');
const clockTitle = clockWrap.querySelector('h1');


function getTime() {
    const date =  new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}`: seconds}`;
}


function init(){
    getTime()
   setInterval(getTime ,1000);
}
init();