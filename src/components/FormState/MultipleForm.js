import { useState } from "react"

export default function MultipleForm() {
    const [data,setData] = useState({})
    const handleChange = (event) => {

        setData({...data,[event.target.name]:event.target.value});
        console.log(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(data)
    }
    return (
        <>
            <h1>Multiple Form</h1>
            <form onSubmit={handleSubmit}>
                <p><input type="text" name="firstname" onChange={handleChange}></input></p>
                <p><input type="text" name="lastname" onChange={handleChange}></input></p>
                <p><input type="text" name="email" onChange={handleChange}></input></p>
                <p><input type="text" name="address" onChange={handleChange}></input></p>
                <p><input type="password" name="password" onChange={handleChange}></input></p>
                <p><input type="submit" name="Register"></input></p>
            </form>
        </>
    )
}