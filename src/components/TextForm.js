import React, {useState} from 'react'



export default function TextForm(props) {

  const [mainText, setMainText] = useState('');
  // let copiedText = 0;
  // console.log(copiedText)

  const handleUpClick = () => {
    let upperCaseText = mainText.toUpperCase();
    setMainText(upperCaseText);
    props.showAlertMsg("Changed to uppercase", "success");

  }

  const handleLowerClick = () => {
    let lowerCaseText = mainText.toLowerCase();
    setMainText(lowerCaseText);
    props.showAlertMsg("Changed to lowercase", "success");

  }

  const handleDelClick = () => {
    setMainText("")
    setCopiedText("Copy Result")
  }

  
//copying the result
  const [copiedText, setCopiedText] = useState('Copy Result');
  const [copiedTextButton, setCopiedTextButtonSuccess] = useState('btn btn-outline-success');

  const copyText = () => {
    navigator.clipboard.writeText(mainText);
    setCopiedText("Copied")
    setCopiedTextButtonSuccess("btn btn-success");
    props.showAlertMsg("Copied", "success");

  }

  //Event handler for the value input
  const handleOnChange = (event) => {

    setMainText(event.target.value)
    if (copiedText === "Copied"){
      setCopiedText("Copy New Result");
      setCopiedTextButtonSuccess("btn btn-outline-success");
    }
  }
  return (
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
        <h1 className={`text-${props.mode === "light" ?"dark" : "light"}`}>
            {props.formTitle}
        </h1>
        <div className="mb-3 textBox">
            <textarea className={`form-control bg-${props.mode === "dark" ?"dark" : ""} text-${props.mode === "dark" ?"light" : ""}`} value={mainText} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.mode === "dark" ?"outline-" : ""}primary mx-1`} onClick={handleUpClick}>UPPERCASE</button>
        <button className={`btn btn-${props.mode === "dark" ?"outline-" : ""}primary mx-1`} onClick={handleLowerClick}>lowercase</button>
        <button className={`btn btn-${props.mode === "dark" ?"outline-" : ""}danger mx-1`} onClick={handleDelClick}>Delete</button>
        <button className={copiedTextButton} onClick={copyText}>{copiedText}</button>

        </div>

        {/* {mainText.length > 0 &&
          <div className="col-md-6">
            <h1>
              Result
            </h1>
            <button className={copiedTextButton} onClick={copyText}>
            {copiedText}
            </button>
            <p>
              {mainText}
            </p>
          </div>
        } */}
      </div>
    </div>
    </>
  )
}
