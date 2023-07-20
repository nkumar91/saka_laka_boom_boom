const Event  = ()=>{
    console.log("hello Event")
var a = 123;
function maiCandaJaunga(){
    console.log("Canada")
    a = 50
    console.log(a);
}

const maiCandaJaunga2 = async (b)=>{
  a = b;
    
}

const handleSubmit = (event)=>{
    event.preventDefault();
    console.log("submit")
}
return(
    <>

        <h1>Hello {a}</h1>
        <button onClick={maiCandaJaunga}>Click Kro Na !!</button>
        <button onClick={()=>maiCandaJaunga2(890)}>Mujhe Click Mat Karo</button>


        <form onSubmit={handleSubmit}>
            <input type="text" name="name"></input>
            <input type="submit" value="Register"></input>
        </form>
    </>
)
}

export default Event