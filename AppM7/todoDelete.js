import {useState} from "react";



function App(){
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    };
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  const deleteBtn = (index) => {
    setToDos(toDos.filter((item,todoindex) => index !== todoindex))
  };
  console.log(toDos)
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
        onChange={onChange}
        value = {toDo}
        type = "text"
        placeholder="Write your to do...">
        </input>
        <button>Add To Do</button>
      </form> 
      <hr/> 
    
      {toDos.map((item, index)=> ( 
        <li key={index}>{item}
          <button onClick={() => deleteBtn(index)}>delete</button>
        </li> 
      ))
      }
    </div>  // 같은 컴포넌트의 리스트(배열)를 렌더링할땐 key라는 prop을 넣어줘야 함(<li key={index}>{item}</li>)
  );
}  // filter 함수에 넣는 두 번째 인자는 todos 배열에 있는 요소의 index가 들어감
   // button onClick 관련해서는 바로 실행되지 않고 클릭을 기다리는 함수로 쓰기 위함 


export default App;
