import { memo } from "react"
function Third(props) {
    return (
        <>
            <ul>
                {

                    props.employee.map((e, index) =>
                        <li key={index}>{e}</li>
                    )
                }
            </ul>

            <button onClick={()=>props.add("Ankit")}>add Employee</button>
        </>
    )
}


export default memo(Third)