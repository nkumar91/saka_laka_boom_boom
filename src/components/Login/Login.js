import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../context/MainContext";

export default function Login(){
    const [formData,setFormData] = useState();
   const {loginKaro}  = useContext(ProfileContext)
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        event.preventDefault();
        loginKaro(formData);
        navigate("/ref");

    }

    const handleChange = (event)=>{
        setFormData({...formData,[event.target.name]:event.target.value});
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" name="email" onChange={handleChange}></input>
        <input type="submit" value="submit"></input>
        </form>
        
        </>
    )
}