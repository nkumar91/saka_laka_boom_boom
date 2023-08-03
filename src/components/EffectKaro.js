import { useEffect, useState } from "react"

export default function EffectKaro(props){
    const [data,setData] = useState(0);
    const [data1,setData1] = useState(20);
    const [empData,setEmpData]  = useState();
    useEffect(()=>{
        setData(data+1)
    },[props])


    const funKarengeAaj = ()=>{
        setData1(data1+1);
    }

    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${props.monko}`).then(res=>res.json()).then(response=>{
           setEmpData(response.data)
        })
    },[props])

    
    return(
        <>
            <h1>{data}</h1>
            <h3>{data1}</h3>
            <button onClick={funKarengeAaj}>Fun Karo Na</button>
            <p>{empData?.first_name} <img src={empData?.avatar} width={100} height={100}></img></p>
        </>
    )
}