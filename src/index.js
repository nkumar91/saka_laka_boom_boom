import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About,{About2 as MOKO} from './About';
import Contact from './components/Contact';
// import {About2 as No,About as MO} from './About';

// import { MangalMeJangalJaoKangal } from './MangalMeJangalJaoKangal';
// import { Muh } from './Muh';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MangalMeJangalJaoKangal />
    <Muh /> */}

    {/* <Contact />
    <About />
    <MOKO /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
