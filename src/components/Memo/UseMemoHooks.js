import { useMemo, useState } from "react";

export default function UseMemoHooks(){
    const [number,setNumber] = useState(1);
    const [number1,setNumber1] = useState(200);
  //  const cal = calculation(number);
    const cal = useMemo(()=>{
       return calculation(number)
    },[number])
    
    function fun(){
        setNumber(number+1);
    }



return(
    <>
    <h1>{cal}</h1>

    <button onClick={fun}>Counter</button>
    <button onClick={()=>setNumber1(number1+1)}>Counter2</button>
    </>
)
}


function calculation(num){
    console.log("hello")
    for(let i = 1;i<1000;i++){
        num=num+1;
    }
    return num
}