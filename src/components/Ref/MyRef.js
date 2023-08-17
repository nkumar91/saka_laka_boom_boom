import { useRef } from "react"

export default function MyRef()
{
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
        </>
    )
}