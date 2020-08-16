//사용된 날씨 api : https://home.openweathermap.org/api_keys
// api =  다른서버로부터 손쉽게 데이터를 가져올 수 있는 수단 / 오직 데이터만 가져오는거야 / 디자인이나 다른건 가져오지 않아
const API_KEY = '1ef02773faefc638d1018b3e979ab15d';
const COORDS = 'corders';


function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=
    ${lng}&appid=${API_KEY}`)
    //fetch 안에는 가져올 데이터가 들어가면 돼
    //https:// 넣기 필수 
    //*주의 : 따옴표가 아닌, 백틱 사용할것
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
   // const latitude = (position.coords.latitude);
    const latitude = (position.coords.latitude);
    const longitude = (position.coords.longitude);
    const coordsObj = {
        // latitude : latitude,
        // longitude : longitude  = 아래와 같은말
        latitude,
        longitude
    };
    //console.log(coordsObj);
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
    
}

function handleGeoError(){
    console.log('Cant access geo location')
}

function askForCoords(){
    //navigator api 를 사용할거야
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null ){
        askForCoords();
    }else{
        //날씨 불러오기
      const parseCoords = JSON.parse(loadedCoords);  
      //console.log(parseCoords);
      getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


function init(){
    loadCoords();
}

init();