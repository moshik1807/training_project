import { useSelector } from "react-redux"

export default function Counter(){
    const counter = useSelector((mystor)=>
        mystor.counterSlice.counter
    )
    return(
        <>
        <h2>counter{counter}</h2>
        <button>+1</button>
        </>
    )
}