import React, { useState } from 'react';
import Alert from './Alert';
import Navbar from './Navbar';
import Textarea from './Textarea';

import "./style.css";


function App(){

    const [mode,setMode] = useState("light");
    const [redMode,setRedMode] = useState("light");
    const [greenMode,setGreenMode] = useState("light");
    const [alert,setAlert] = useState(null);
     const[color,setColor] = useState("light")

    const showAlert =(message,type)=>{
        setAlert({msg: message,
        type: type})
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }


  const toggleMode = ()=>{
       if(mode === "light"){
            setMode("dark");
            setColor("dark")
            document.body.style.backgroundColor = "#0a055d";
            showAlert("Dark mode has been enabled", "success");
       }
       else {
           setMode("light");
           setColor("light")
           document.body.style.backgroundColor = "white";
           showAlert("Dark mode has been disabled", "success");
        }
   }
  const toggleRedMode = ()=>{
       if(redMode === "light"){
            setRedMode("dark");
            setColor("dark")
            document.body.style.backgroundColor = "#332421";
            showAlert("Red mode has been enabled", "success");
       }
       else {
        setRedMode("light");
        setColor('light')
           document.body.style.backgroundColor = "white";
           showAlert("Red mode has been disabled", "success");
        }
   }
  const toggleGreenMode = ()=>{
       if(greenMode === "light"){
        setGreenMode("dark");
        setColor('dark')
            document.body.style.backgroundColor = "#0F3325";
            showAlert("Green mode has been enabled", "success")
       }
       else {
        setGreenMode("light");
        setColor('light');
           document.body.style.backgroundColor = "white";
           showAlert("Green mode has been disabled", "success")
        }
   }

    return( 
           
        <div>
        <Navbar title = "TextModo" mode={mode} color={color} toggleMode= {toggleMode} toggleRedMode={toggleRedMode} toggleGreenMode={toggleGreenMode}/>
        <Alert alert={alert} showAlert={showAlert}/>
        <Textarea heading="Enter text to analyze" color={color}   mode={mode} showAlert={showAlert}/>
        </div>
)
}

export default App