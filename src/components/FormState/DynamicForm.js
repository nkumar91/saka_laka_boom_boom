import { useState } from "react"

export default function DynamicForm() {
    const [data, setData] = useState([{ person_name: "" }]);
    const handleChange = (event,index) => {
        const formd = data;
        formd[index][event.target.name] = event.target.value;
        setData(formd);
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(data)
    }

    const addPerson = () => {
            setData([...data,{person_name:""}])
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <button onClick={addPerson} type="button">+Add Person</button>
                {
                    data.map((e,index) =>
                        <div key={index}>
                            <p>Person name</p>
                            <p><input type="text" name="person_name" onChange={(e)=>handleChange(e,index)}></input></p>
                        </div>
                    )
                }

                <input type="submit" value="register"></input>

            </form>
        </>
    )
}