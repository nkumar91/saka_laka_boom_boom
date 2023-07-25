import { useState } from "react";
import Xyz from "./Xyz";

export default function Event2(){
  const [data,setData]  = useState(10);
  const [my,joMy] = useState(100)
  const [list,setList] = useState([]);
  const [lal,jaLal] = useState({a:2,b:3,c:90})

  
    const callKaroNa = ()=>{
       setData(90)

       joMy(400)
    }

    function jodo(){
            setList([...list,"hiii"])  // ["hiii","hiiii"]
    }
    return(
        <>
            <h1>{data}</h1>
            <p>{my}</p>
            <h1>{lal.b}</h1>
            <h1>{lal.a}</h1>
            <h1>{lal.h?.d}</h1>

            <button onClick={callKaroNa}>Click me !!</button>
            <button onClick={jodo}>jodo</button>


            <button onClick={()=>jaLal({...lal,b:45,h:{d:95}})}>Lal Change</button>


        {
            list.map(e=>
                <p>{e}</p>
                )
        }

        <Xyz mila_ke_barsat = {data} milunga_barsat_me = {my} jaunga_sawan_me="hello" jao_bhai={56}  karo_bhai = {[10,20,56,89]}/>
        </>
    )
}