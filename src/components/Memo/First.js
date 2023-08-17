import { useCallback, useState } from "react"
import Third from "./Third";

export default function First(){
    const [count,setCount] = useState(1);
    const [employee,setEmployee]  = useState([]);

    const addEmployee = useCallback((name)=>{
        setEmployee([...employee,name]);
    },[employee])

    return(
        <>
        <button onClick={()=>setCount(count+1)}>Counter {count}</button>

        <Third  employee={employee} add = {addEmployee}/>
        </>
    )
}