import { useParams } from "react-router-dom"

export default function OpenKarwao(){
    const {a,b,c,d} = useParams()
    return(
        <>
            <h1>Hiii {a} - {b} - {c}  - {d}</h1>
        </>
    )
}