import { useState } from "react";
import MultipleForm from "./MultipleForm";
import SimpleForm from "./SimpleForm";
import DynamicForm from "./DynamicForm";

export default function MyForm(){
    const [formData,setFormData] = useState("simple");
    const handleRadio = (event)=>{
     const  radioValue = event.target.value
     setFormData(radioValue);    
    }
    return(
        <>
            <div>
                <label>Single <input type="radio" name="formtype" value="simple" defaultChecked onClick={handleRadio}></input></label>
                <label>Multiple <input type="radio" name="formtype" value="multiple" onClick={handleRadio}></input></label>
            </div>
            {formData==="simple"?<SimpleForm />:null}
            {formData==="multiple"?<MultipleForm />:null} 
            <DynamicForm />
        </>
    )
}