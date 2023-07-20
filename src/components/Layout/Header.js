import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header(){
    return(
     <header>
        <div className="flex-container py-2 bg-success">
            <div className="middle-div py-2 bg-danger">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/event">Event</Link></li>
                </ul>
            </div>
        </div>
     </header>
    )
}