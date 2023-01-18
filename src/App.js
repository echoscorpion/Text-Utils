import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {

  const [mode, setScreenMode] = useState("light")
  const [modeText, setModeText] = useState("Dark")
  const [alertMsg, setalertMsg] = useState()

  const showAlertMsg =(message, type) =>{
    setalertMsg({
      showMsg : message,
      showType : type 
    })
    setTimeout(() => {
      setalertMsg(null)
    }, 2000);
  }

  const screenMode = ()=>{
    if (mode === "light"){
      setScreenMode("dark")
      setModeText("Light")
      document.body.style.backgroundColor = "black";
      showAlertMsg("Dark mode enabled", "success")

    }
    else {

      setScreenMode("light")
      setModeText("Dark")
      document.body.style.backgroundColor = "";
      showAlertMsg("Light mode enabled", "success")

    
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="EkoScorpion" mode={mode} chhngMode={screenMode} scrnModeTxt={modeText}/>
      <Alert alert={alertMsg}/>
      <Routes>
        <Route exact path="/about" element={<About/>}>
        </Route>
        <Route exact path="/" element={<TextForm formTitle="Text Utils Form" mode={mode} chhngMode={screenMode} scrnModeTxt={modeText}  showAlertMsg={showAlertMsg}/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
