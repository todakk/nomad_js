const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');


const TODOS_LS = 'toDos';

//20200701  ( make toDos 02)
//해야 할일을 생성할때마다 toDos라는 array에 추가되도록 한다.
const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //localStorage는 저장 시, js를 data를 저장할 수 없어. 오직 string만 저장할 수 있어.
    //모든걸 string으로 저장하려 하니까, 우리가 object만든 것을 string으로 변환 해 줘야해
    //그것에 좋은 트릭인 JSON.stringifty
    // : 모든 object를 string으로 변환해준다.
}






function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");

  //20200701
  const newId = toDos.length + 1;

  delBtn.innerText = "X";
  span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span); 
    //200701    선언 한 뒤 append해야 id가 제대로 생성된다.
    li.id = newId;
    toDoList.appendChild(li);

    

    //20200701  ( make toDos 02)
    toDoObj ={
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    //push뒤에 호출해야지 지대로 호출된다!!!!

    saveToDos(); 
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

//200701
//forEach 각각의 요소에 다 실행
// function something(toDo){
//     console.log(toDo.text);
// }


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if( toDos !== null ){
        //200701
       // console.log(loadedToDos);
        //우리는 string이 아니라, object를 불러오고 싶은 거니까, JSON을 다시 사용
        const parsedToDos = JSON.parse(loadedToDos);
        //console.log(parsedToDos);
        
        //forEach 각각의 요소에 다 실행
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text)
        })

        // parsedToDos.forEach(something);

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}
init();