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
import Effect from "./components/Effect";
import EffectKaro from "./components/EffectKaro";
import MyForm from "./components/FormState/MyForm";
import Cycle from "./components/LifeCycle/Cycle";
import Memo from "./components/Memo/Memo";
import PracticeOne from "./components/Practice/PracticeOne";
import MyRef from "./components/Ref/MyRef";
import Reducer from "./components/Reducer/Reducer";
import Main from "./components/Loading/Main";
import { Suspense } from "react";
import MainData from "./context/MainData";
import Login from "./components/Login/Login";
export default function App() {
  return (
    <>
      {/* <h1>Dikh gaya</h1> */}
      {/* <About /> */}
      {/* <About />
      <Contact /> */}
      <MainData>
<Suspense>
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
          <Route path="effect" element={<Effect />}></Route>
          <Route path="effect1" element={<EffectKaro />}></Route>
          <Route path="myform" element={<MyForm/>}></Route>
          <Route path="cycle" element={<Cycle/>}></Route>
          <Route path="memo" element={<Memo/>}></Route>
          <Route path="practiceone" element={<PracticeOne/>}></Route>
          <Route path="ref" element={<MyRef/>}></Route>
          <Route path="reducer" element={<Reducer/>}></Route>
          <Route path="lazy" element={<Main />}></Route>
          <Route path="login" element={<Login />}></Route>



          <Route path="*" element={<MatchNahiHua />}></Route>
        </Routes>
      </Router>
      </Suspense>
      </MainData>
    </>
  )
}