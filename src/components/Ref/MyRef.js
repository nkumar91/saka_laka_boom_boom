import { useContext, useRef } from "react"
import { ProfileContext } from "../../context/MainContext";
import { Link } from "react-router-dom";

export default function MyRef()
{

  const {name,loginData} =   useContext(ProfileContext)
    const m = useRef();
    const m1 = useRef();
    function handleClick(){
        console.log(m.current.value);
        m.current.focus();
        console.log(m1.current.files[0])

        // {image:m1.current.files[0]}

        // var f = FormData();
        // f.append("image",m1.current.files[0]);
        // body:f
    }

    // function handleChange(event){
        
    // }
    return(
        <>
        <h1>Use Ref</h1>
        <input type="text" ref={m}></input>
        <input type="file" ref={m1}></input>
        <button onClick={handleClick}>Click</button>
<h1>{name}</h1>
<h1>{loginData?.email}</h1>

<Link to="/cycle">Cycle</Link>

        </>
    )
}