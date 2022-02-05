const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos" /*todos 배열은 7행에서 선언되는데 배열을 담는 변수를 미리 만들수 있는지?*/

let toDos = [];

function saveToDos() {
    localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const lii = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(lii.id)); /* a, b, c, a 가 존재할때 a를 삭제할때 a가 전부 삭제되지 않고 선택된 a만 삭제 되게함. */
    /*lii.id는 string타입, toDo.id는 number타입 */
    lii.remove();
    saveToDos();//삭제하고 남은 아이템을 다시 저장
}

function paintToDo(toDo) {
    const li = document.createElement("li");
    li.id = toDo.id;
    const span = document.createElement("span");
    span.innerText = toDo.text;
    const button = document.createElement("button");
    button.innerText = "XXX";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now() /*랜덤한 수 추출 위함*/
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

/*filter는 true면 입력값 그대로 반환, false면 빈 값 반환*/ 