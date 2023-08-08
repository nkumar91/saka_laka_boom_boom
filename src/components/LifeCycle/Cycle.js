import { useEffect, useState } from "react"
import Header from "../Layout/Header"

export default function Cycle(){
const [counter,setCounter] = useState(0)
    useEffect(()=>{
        console.log("part 1")
    })

    useEffect(()=>{
        console.log("part 2")
    },[])


    useEffect(()=>{
        console.log("part 3")
    },[counter]);

    useEffect(()=>{
        return function(){
            console.log("part 4")
        }
    },[])


    return(
        <>
             <Header />
        <h1>Hello</h1>
   

        <button onClick={()=>setCounter(counter+1)}>counter {counter}</button>
        
        </>
    )
}