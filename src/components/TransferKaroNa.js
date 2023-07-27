export default function TransferKaroNa(props){
    const {count} = props

    var jane = "anjane me"
    var g = props.function_bhejo_na;

    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>g(["hello","lala","nahi padhunga","mama"])}>badhao</button>
        </>
    )
}