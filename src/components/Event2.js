import { useState } from "react";
import Xyz from "./Xyz";
import Button from "./Button";
import TransferKaroNa from "./TransferKaroNa";
import { useParams, useSearchParams } from "react-router-dom";
import { FaInstagram,FaInstalod } from "react-icons/fa6";
import { AiOutlinePhone } from "react-icons/ai";

export default function Event2() {
    const [data, setData] = useState(10);
    const [my, joMy] = useState(100)
    const [list, setList] = useState([]);
    const [lal, jaLal] = useState({ a: 2, b: 3, c: 90 })
    const [counter, setCounter] = useState(0);
    const [m, setM] = useState("");
    const [searchParams] = useSearchParams();
    const kk = searchParams.get("kk")


    const callKaroNa = () => {
        setData(90)

        joMy(400)
    }

    function jodo() {
        setList([...list, "hiii"])  // ["hiii","hiiii"]
    }


    function kabhi_mat_bhulna(data) {
        setM(data);
    }
    return (
        <>
            <p>{kk}</p>
            <h1>{data}</h1>
            <p>{my}</p>
            <h1>{lal.b}</h1>
            <h1>{lal.a}</h1>
            <h1>{lal.h?.d}</h1>
            <button onClick={callKaroNa}>Click me !!</button>
            <button onClick={jodo}>jodo</button>
            <button onClick={() => jaLal({ ...lal, b: 45, h: { d: 95 } })}>Lal Change</button>


            {
                list.map(e =>
                    <p>{e}</p>
                )
            }

            <Xyz mila_ke_barsat={data} milunga_barsat_me={my} jaunga_sawan_me="hello" jao_bhai={56} karo_bhai={[10, 20, 56, 89]} />
            <Button name="De">
                <span>Hello <AiOutlinePhone /></span>
            </Button>
            <h1>{m}</h1>
            <TransferKaroNa count={counter} function_bhejo_na={kabhi_mat_bhulna} />

            <button onClick={() => setCounter(counter + 1)}>Badhao Na <FaInstagram /></button>
        </>
    )
}