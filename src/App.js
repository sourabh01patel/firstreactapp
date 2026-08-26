import React from "react";
import Header from "./Components/Header";
import Listitom from "./Components/Listitom";
import Button from "./Components/Button";
import CountComponent from "./Components/CounterComponent";
import './style.css';
const App = () => {
  return(
    <div className="Todo-container">
      <CountComponent/>
      <header  tittle = "Todoie App" >Todoie App</header>
      <Listitom text ="Eat"/>
      <Listitom   completed = "True" text ="Code"/>
      <Listitom  text ="Play"/>
      <Listitom   text ="Study"/>
      <Listitom   text ="Sleep"/>
      <Button/>
    </div>
  )
}


  

export default App;
