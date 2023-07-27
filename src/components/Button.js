export default function Button(props){
    const {children,name} = props
    return(
        <>
        {children}
        <h1>{name}</h1>
        </>
    )
}