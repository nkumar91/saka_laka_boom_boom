import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../context/MainContext";

export default function Header(){
    const {loginData} = useContext(ProfileContext);
    return(
     <header>
        <div className="flex-container py-2 bg-success">
            <div className="middle-div py-2 bg-danger">
                <p>hi {loginData?.email}</p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/event">Event</Link></li>
                    <li><Link to="/myform">myForm</Link></li>
                    <li><Link to="/cycle">Life Cycle </Link></li>
                    <li><Link to="/memo">memo Concept</Link></li>
                    <li><Link to="/practiceone">PracticeOne</Link></li>
                    <li><Link to="/ref">useRef</Link></li>
                    <li><Link to="/reducer">Reducer Kholo Na</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </div>
        </div>
     </header>
    )
}