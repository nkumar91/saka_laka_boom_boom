import { useContext, useEffect, useState } from "react"
import Header from "../Layout/Header"
import { ProfileContext } from "../../context/MainContext"

export default function Cycle(){
const [counter,setCounter] = useState(0)
const {loginData} = useContext(ProfileContext);
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
        <h1>{loginData?.email}</h1>
        </>
    )
}