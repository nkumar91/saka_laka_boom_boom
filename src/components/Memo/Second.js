import { memo, useCallback } from "react"

function Second(props){   // PureComponent
    const {name,kaiseBhejenge} = props;
    console.log("Second Memo")

    return (
        <>
        <h1>Second Component  Ka State Hai  {name}</h1>
        <button onClick={()=>kaiseBhejenge("rahul")}>Function call karo</button>
        </>
    )
}

export default memo(Second);  // PureComponent