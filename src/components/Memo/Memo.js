import { useCallback, useState } from "react";
import Second from "./Second";
import First from "./First";
export default function Memo(){
const [one,setOne] = useState(0);
const [two,setTwo] = useState(100);
const fun = useCallback((data)=>{
        setOne(one+1)
},[two])
    return(
        <>
        {/* <h1>Memo</h1>
        <button onClick={()=>setOne(one+1)}>Button One</button>
        <h1>First Component ka State hai Matalb Memo Component{one}</h1>
        <button onClick={()=>setTwo(two+1)}>Button Two</button>
        <Second name = {two} kaiseBhejenge = {fun}/>  */}
<First />

        </>
    )
}
