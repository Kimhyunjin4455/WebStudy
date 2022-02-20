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
      {toDos.map((item, index)=>  
        <li key={index}>{item}</li>
        
      )}
    </div>  // 같은 컴포넌트의 리스트(배열)를 렌더링할땐 key라는 prop을 넣어줘야 함(<li key={index}>{item}</li>)
  );
} 

export default App;
