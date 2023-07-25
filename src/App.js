import About from "./About";
import Contact from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MatchNahiHua from "./components/MatchNahiHua";
import Service from "./components/Service";
import JootaJapani from "./components/JootaJapani";
import Iphone from "./components/Iphone";
import Laptop from "./components/Laptop";
import MarutiSuzuki from "./components/MarutiSuzuki";
import Samsung from "./components/Samsung";
import OpenKarwao from "./components/OpenKarwao";
import Event from "./components/Event";
import Event2 from "./components/Event2";
export default function App() {
  return (
    <>
      {/* <h1>Dikh gaya</h1> */}
      {/* <About /> */}
      {/* <About />
      <Contact /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="service">
            <Route path = "" element={<Service />}></Route>
            <Route path=":a/:b/:c/:d" element={<OpenKarwao />}></Route>
    
          </Route>

          <Route path="event" element={<Event2 />}></Route>



          <Route path="*" element={<MatchNahiHua />}></Route>
        </Routes>
      </Router>


    </>
  )
}