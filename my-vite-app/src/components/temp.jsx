import { useState } from "react";
import "./temp.css";
function Temp(props){
    const [count, setCount] = useState(0);
    const username = 'Shivani Thakur';
    return (
        <div>
            <h1>Clicks: {count}</h1>
            <button onClick={() => setCount(c => c + 1)}>Click Me</button>
            <h1>Name: {props.name}</h1>
        </div>
    );
}
export default Temp;