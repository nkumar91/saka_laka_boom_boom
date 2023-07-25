export default function Xyz(props) {
    return (
        <>
            <h1>Hello {props.mila_ke_barsat}</h1>

            <ul>
            {
                props.karo_bhai.map(e=>
                    <li>{e}</li>
                    )
            }
            </ul>
        </>

    )
}