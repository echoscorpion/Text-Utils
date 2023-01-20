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
  const handleRestClick = () => {
    let countText = mainText.replace(/\s+/g,' ').trim();
    setMainText(countText);
    props.showAlertMsg("Extra spaces removed", "success");


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
    <div className='container my-5'>
        <div className="row">
            <div className="col-12">
                <h1 className={`text-center pt-5 text-${props.mode === "light" ?"dark" : "light"}`}>
                    About Text Utils
                </h1>
                <p className={`text-center pb-5 text-${props.mode === "light" ?"dark" : "light"}`}>
                Fast, reliable, and easy! <b>Text-Utils</b> brings several free online tools to assist developers in daily tasks.
                </p>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
            <div className={`card h-100 text-bg-${props.mode === "light" ?"primary" : "secondary"}`}>
                <div className="card-body text-center">
                    <h2 className="card-title">Fast</h2>
                    <p>Super fast web app built on react to render pages fast</p>
                </div>
                </div>
            </div>
            <div className="col">
            <div className={`card h-100 text-bg-${props.mode === "light" ?"secondary" : "secondary"}`}>
                <div className="card-body text-center">
                    <h2 className="card-title">Easy</h2>
                    <p>
                      Super easy to use, clicks away to process your texts
                    </p>
                </div>
                </div>
            </div>
            <div className="col">
            <div className={`card h-100 text-bg-${props.mode === "light" ?"success" : "secondary"}`}>
                <div className="card-body text-center">
                    <h2 className="card-title">Awesome</h2>
                    <p>
                      Always awesome and happy to help
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4 col-12">
          <h2 className={`text-${props.mode === "light" ?"dark" : "light"}`}>
              {props.formTitle}
          </h2>
        </div>
        <div className="col-md-4 col-12">
              <h2 className={`text-${props.mode === "light" ?"dark" : "light"}`}>
              Number of character is {mainText.replaceAll(' ','').length > 0 && 
              <span  className={`text-${props.mode === "light" ?"success" : "light"}`}>
              {mainText.replaceAll(' ','').length}
              </span>
              }
              </h2>
        </div>
        <div className="col-md-4 col-12">
          <h2 className={`text-${props.mode === "light" ?"dark" : "light"}`}>
              Number of words is {mainText.split().length > 0 && 
              <span  className={`text-${props.mode === "light" ?"success" : "light"}`}>
                {mainText.split(/\s+/).filter((element)=>{return element.length!==0}).length}
              </span>
              }
            </h2>
        </div>
        <div className="col-md-12">
          <div className="mb-3 textBox">
              <textarea className={`form-control bg-${props.mode === "dark" ?"dark" : ""} text-${props.mode === "dark" ?"light" : ""}`} value={mainText} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          </div>
          <button className={`btn btn-${props.mode === "dark" ?"outline-" : ""}primary mx-1`} onClick={handleUpClick}>Uppercase</button>
          <button className={`btn btn-${props.mode === "dark" ?"outline-" : ""}primary mx-1`} onClick={handleLowerClick}>Lowercase</button>
          <button className={`btn btn-${props.mode === "dark" ?"outline-" : ""}primary mx-1`} onClick={handleRestClick}>Remove extra spaces</button>
          <button className={`btn btn-${props.mode === "dark" ?"outline-" : ""}danger mx-1`} onClick={handleDelClick}>Delete</button>
          <button className={copiedTextButton} onClick={copyText}>{copiedText}</button>

        </div>
      </div>
    </div>
    
    </>
  )
}
