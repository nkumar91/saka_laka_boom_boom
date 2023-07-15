import './About.css';
import Header from './components/Layout/Header';
import { PUBLIC_URL } from './constant/url';
import logo from './logo.svg'
export default function About(){
    const a = <h1>Hello</h1>
    return(
     <>
     <Header />
   {a}
   <img src = {`${PUBLIC_URL}logo192.png`}></img>
     </>
      
    )
}

export function About2(){
    return(
        <h1>About2 Component</h1>
    )
}
