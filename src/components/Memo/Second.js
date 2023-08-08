import { memo } from "react"

function Second({name}){
    //const {name} = props;
    console.log("Second Memo")
    return (
        <>
        <p>Second Component {name}</p>
        </>
    )
}

export default memo(Second);  // PureComponent