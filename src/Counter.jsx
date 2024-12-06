import { useState } from "react"

export default function Counter () {
    const [count, setcount] = useState(0);
    const addCount = () =>{
        let newNum = count + 1;
        setcount(newNum)
    }
    const reduce = () =>{
       let newNumber = count -1;
        setcount(newNumber)
    }
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={addCount}>ADD</button>
            <button onClick={reduce}>Reduce</button>
        </div>
    )
}