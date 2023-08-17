import { useState } from "react"

export default function PracticeOne(){
    const [data,setData] = useState();
    setTimeout(()=>{
        setData("pawan")
    },5000)
    return(
        <>
        <h1>My Name is {data}</h1>
        <button onClick={()=>setData({name:"Kunal"})}>Data set Karo</button>
        </>
    )
}