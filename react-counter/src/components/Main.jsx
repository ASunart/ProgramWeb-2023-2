import { useState } from "react";
import { Button } from "./Button";
import { Counter } from "./Counter";

export function Main(params) {

    const [count, setCount] = useState(0)

    const mainStyle = {
        position: 'absolute',
        top: '20%',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyItems: 'center', 
        height: '60%'
    }
    
    const addCount = ()=>{
        setCount((prevState)=>{ return prevState + 1});
    }

    const substractCount = ()=>{
        (count > 0) ? setCount((prevState)=>{ return prevState - 1}) : count;
    }

    const restartCount = ()=>{
        setCount((prevState) => { return prevState = 0});
    }

    return(
        <main style={mainStyle}>
            <Button type="substract" action={substractCount} iconClass="bi bi-dash" />
            <Counter value={count}/>
            <Button type="add" action={addCount} iconClass="bi bi-plus" />
            <Button type="restart" action={restartCount} iconClass="bi bi-arrow-counterclockwise" />
        </main>
    )
}