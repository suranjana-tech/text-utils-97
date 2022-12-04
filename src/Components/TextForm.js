import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-6" style = {{color:props.mode === 'dark' ? 'white' : 'black'}}>
                <h1 style={{textAlign: 'center', fontFamily: 'cursive'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        onChange={handleOnChange}
                        style = {{backgroundColor:props.mode === 'dark' ? '#212121' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}}
                        id="myBox"
                        rows={10}
                        value={text}
                    />
                    <br />
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                        Convert to Uppercase
                    </button>
                    <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                        Convert to LowerCase
                    </button>
                    <button className="btn btn-danger mx-2" onClick={handleClear}>
                        Clear
                    </button>
                </div>

            </div>
            <div className="col-6" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <div className="card mt-10">
                    <div className="card-header" style={{textAlign:'center', fontFamily:'Georgia', backgroundColor:props.mode === 'dark' ? '#212121' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}}>
                        Preview
                    </div>
                    <div className="card-body" style = {{backgroundColor:props.mode === 'dark' ? '#212121' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}}>
                        <p className="card-text">{text.length <= 0 ? "Enter something in the textbox above to preview here" : text}</p>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="container" style = {{color:props.mode === 'dark' ? 'white' : 'black', textAlign:'center'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length -1 } words and {text.length} characters
        </p>
        <p>{Math.ceil(0.008 * text.split(" ").length)} Minutes read</p>
      </div>
    </>
  );
}