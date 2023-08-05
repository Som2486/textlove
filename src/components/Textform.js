import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick =()=>{
    
    let newtext= text.toUpperCase();
    setText(newtext)
  }
  const handleLoClick =()=>{
    
    let newtext= text.toLowerCase();
    setText(newtext)
  }
  const handleOnChange =(event)=>{
    
   setText(event.target.value); 
  }
  const[text, setText] = useState("Enter text here")
  return (
    <>
    
      <div className="container">
    <h1>{props.heading}</h1> 
        
  <div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleOnChange} id="my box" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert To LowerCase</button>
      </div>
      <div className='=container my-2'>
    <h1>
      Your Text summary
      </h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes read</p>
      

      </div>
      </> 
  )
}
