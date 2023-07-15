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
            <Route path="joota" element={<JootaJapani />}></Route>
            <Route path="iphone" element={<Iphone />}></Route>
            <Route path="laptop" element={<Laptop />}></Route>
            <Route path="suzuki" element={<MarutiSuzuki />}></Route>
            <Route path="samsung" element={<Samsung />}></Route>
          </Route>



          <Route path="*" element={<MatchNahiHua />}></Route>
        </Routes>
      </Router>


    </>
  )
}