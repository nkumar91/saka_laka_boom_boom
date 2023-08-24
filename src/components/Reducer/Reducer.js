import { useReducer } from "react"

const initData = {
    num1:1,
    num2:100,
    form:[{name:""}]
}
function display(state,action){
    if(action.type === "num1"){
        return {...state,num1:state.num1+1}
    }
    else if(action.type === "num2"){
        return {...state,num2:state.num2+1}
    }
    else if(action.type === "addform"){
        return {...state ,form:[...state.form,{name:""}]}
    }
    return state;
}
export default function Reducer(){
    const [state,dispatch] = useReducer(display,initData)
    return(
        <>
        <button onClick={()=>dispatch({type:"num1"})}>One</button>
        <h1>{state.num1}</h1>
        <button onClick={()=>dispatch({type:"num2"})}>Two</button>
        <h1>{state.num2}</h1>

        <button onClick={()=>dispatch({type:"addform"})}>+Add</button>
        {
            state.form.map((e,index)=>
                <p><input type="text"></input></p>
            )
        }
      
        </>
    )
}