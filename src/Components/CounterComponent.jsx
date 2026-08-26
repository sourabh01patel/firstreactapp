import React,{useState} from "react";

const CountComponent = () => {
     const [count, setcount] = useState(12);
   
    return (
        <div>
            <p> count component - {count}</p>
            <h6>number is {count%2 === 0 ? "even" : "odd"}</h6>
          
            <button onClick={()=> setcount(count+1)}>increment</button>
            <button onClick={()=> setcount(count-1)}>dicrement</button>
        </div>
    );
}
export default CountComponent;