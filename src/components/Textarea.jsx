import React, { useState } from 'react'

export default function Textarea(props) {

    const [text,setText] = useState("");

    function handleOnChange(event){
        const newValue = event.target.value
        setText(newValue);

    }

    function handleUPClick(){
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success")
    }
    function handleLowClick(){
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success")
    }
    function handleClearClick(){
        setText("");
        props.showAlert("Cleared text", "success")
    }
    function handleCopyClick(){
      const newText = text
      navigator.clipboard.writeText(newText);
      props.showAlert("Your text is copied", "success")
    }

 
  return (
    <div  className = {`container py-5 text-${props.color === "dark" ? "light" : "dark"}`}>
      <div className="mb-3">
      <h1 >  Enter the text to analize below  </h1>
      <textarea className={`form-control my-2 bg-${props.color} text-${props.color === "dark" ? "light" : "dark"}`} id="exampleFormControlTextarea1" rows="3" onChange={handleOnChange} placeholder="Enter your text"    value={text}></textarea>
      <button  className={`btn my-2 btn-${props.color === "dark" ? "secondary" : "primary"} mx-4`} type="submit" onClick={handleUPClick}>Convert to upper case</button>
      <button  className={`btn my-2 btn-${props.color === "dark" ? "success" : "primary"} mx-4`} type="submit" onClick={handleLowClick}>Convert to lower case</button>
      <button  className={`btn my-2 btn-${props.color === "dark" ? "warning" : "primary"} mx-4`} type="submit" onClick={handleCopyClick}>Copy text</button>
      <button  className={`btn my-2 btn-${props.color === "dark" ? "danger" : "primary"} mx-4`} type="submit" onClick={handleClearClick}>Clear</button>
      
  </div>
  <div className="container my-3">
    <h1>Your text summary</h1>
    <p> {(text.split(" ").length - 1)} words and {text.length} characters</p>
    <p>Time to read {(0.008 * text.split(" ").length).toFixed(3)} Minutes to read</p>
    <h2>Preview</h2>
    {text.length === 0 ? "write something in above message box" : text }

  </div>

  </div>
  );
}
