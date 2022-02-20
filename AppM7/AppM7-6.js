import {
    BrowserRouter as Router, Switch, Route} from "react-router-dom";
  import Home from "./routes/Home";
  import Detail from "./routes/Detail";
  
  function App(){
    
    return (<Router>
      <Switch>
        <Route path="/movie/:id"> 
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    );
  }
  // 10행의 id는 변수명이라 임의 설정 가능 <Route path="/movie/:smtm"> 가능, url이 id(smtm) 위치에 변수를 받음 
  export default App;
  
  