import React from "react";


const Listitom = (props) => {

    return(
        <li className="todo-itom">
            <span>
             {  props.completed ? <></> : <input type="checkbox"/>}
              <span className="todo-itam-text">{props.text}</span>
            </span>
           
            <p>...</p>
        </li>
    )
};
export default Listitom;