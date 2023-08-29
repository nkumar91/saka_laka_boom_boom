import { useState } from "react"
import { ProfileContext } from "./MainContext"
export default function MainData({children}){

    const [loginData,setLoginData]  = useState();
    function loginKaro(l){
        setLoginData(l);
    }

    const data = {
        name:"junjun",
        loginData:loginData,
        loginKaro:loginKaro,
        f:[]

    }
    return (
        <ProfileContext.Provider value={data}>
                {children}
        </ProfileContext.Provider>
    )
}