import { useEffect, useState } from "react"

export default function Effect(){
    const [data,setData] = useState(0)
    const [r,setR]  = useState([])

    //setData(90)
   const url = "https://reqres.in/api/users?page=2"

  async function callApi(){
    {console.log("API")}
   const res =  await fetch(url)
   const response = await res.json();
    setR(response.data);
  } 

useEffect(function(){
callApi();
},[])
  
   
    return(
      
        <>
          {console.log("Ui")}
        <h1>effect khul gaya</h1>

        <h1>{data}</h1>
        {
            r.map(e=>
                <h1>{e.first_name}</h1>
                )
        }


        
        </>
    )
}