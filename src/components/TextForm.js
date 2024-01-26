import React, {useState} from 'react'

export default function TextForm(props) {
  // setText("black"); // Remove this line
  const handleUpClick = () => {
    // Update the text state with the value of the textarea
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase!" , "success");
  }
  const handleLoClick = () => {
    // Update the text state with the value of the textarea
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To  Lowercase!" , "success");
  }
  const  handleClearClick = () => {
    // Update the text state with the value of the textarea
    let newText =  ' ';
    setText(newText);
    props.showAlert(" Text Cleared!" , "success");
  }
  
  const handleOnChange = (event)=>{
    // console.log("onChange");
    setText(event.target.value);
  }
  
  const handleCopy =()=>{
    console.log("onCopy");
    var text = document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To Clipboard !" , "success");
  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    props.showAlert("Removed Extra Spaces !" , "success");
  }
  
  const [text , setText] = useState(" ");  // this is hooks  --- referance to react.dev documentation.
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'? 'white':'#042743'}} > 
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? 'grey':'white' , color: props.mode==='dark' ? 'white' : '#042743' }} id="my-box" rows="8" ></textarea> 
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}> copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove extra spaces </button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'? 'white':'#042743'}} >
  <h2>Your Text Summery</h2>
  <p>{text.split(" ").length}words and{text.length} characters</p>
  <p>{0.008*text.split(" ").length} minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"enter something above to Preview it here"}</p>
</div>
</>
  )
}
