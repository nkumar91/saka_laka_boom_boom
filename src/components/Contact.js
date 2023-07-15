import { PUBLIC_URL } from "../constant/url";
import Header from "./Layout/Header";

export default function Contact() {
    const obj = {
        name: "mukesh"
    }

    var arr = [
        { name: "A" },
        { name: "B" },
        { name: "C" },
        { name: "D" },
        { name: "E" },
        { name: "F" }
    ]

    const isYes = true;

    return (
        <>
         <Header />
            {/* <h1>Contact  {obj.name}</h1> */}
            {isYes ? <Electron /> : <MoleMass />}

            {
                arr.map((e, index) => {
                    return (<li key={index}>{e.name}</li>)
                })
            }

            <ul>
                {
                    arr.map((e, index) =>
                        <li key={index}>{e.name}
                        <img src = {`${PUBLIC_URL}logo192.png`} width={20} height={20}></img>
                        </li>
                    )
                }
            </ul>
        </>
    )

}


function Electron() {
    return (
        <>
        
         <h1>Hi I am Electron</h1>
        </>
       
    )
}

function MoleMass() {
    return (
        <h1>Hi I am KuNhddudifdu</h1>
    )
}

function Planet() {
    return (
        <h1>Planet Hai Bhai</h1>
    )
}

// 