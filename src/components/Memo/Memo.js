import { useState } from "react";
import Second from "./Second";

export default function Memo(){
const [one,setOne] = useState(0);
const [two,setTwo] = useState(100);

const fun = ()=>{
    console.log("hii")
}
    return(
        <>
        <h1>Memo</h1>
        <button onClick={()=>setOne(one+1)}>Button One</button>
        <h1>{one}</h1>
        <button onClick={()=>setTwo(two+1)}>Button Two</button>
        <Second name = {two}  jk = {fun}/> 
        </>
    )
}