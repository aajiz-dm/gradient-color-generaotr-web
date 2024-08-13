import React, { useEffect, useRef, useState } from 'react'
import Nav from '../Gradient App Body/Nav.jsx'
import "./conic.css";
import "./conic2.css";

export default function ConicGradient() {
let [choice,setChoice] =useState(false)

  return (<>
  <Nav/>
  {
    choice?
    <ConicManuallyGenerator choice={choice} setChoice={setChoice} />
    :
<ConicRandomGenerator choice={choice} setChoice={setChoice} />

  }






  </>
  )
}


function ConicManuallyGenerator({choice,setChoice}) {
let dfColor1;
DFColor1()
let dfColor2;
DFColor2()
let dfColor3;
DFColor3()
let [color1,setColor1] =useState(dfColor1)
let [color2,setColor2] =useState(dfColor2)
let [color3,setColor3] =useState(dfColor3)
let [colorRatio1,setColorRatio1] =useState(Math.floor(Math.random()*100))
let [colorRatio2,setColorRatio2] =useState(Math.floor(Math.random()*100))
let [colorRatio3,setColorRatio3] =useState(Math.floor(Math.random()*100))
const[angle,setAngle] =useState(Math.floor(Math.random()*360))
const [allowAngle,setAllowAngle] =useState(true)
const [PositionX,setPositionX ]=useState(Math.floor(Math.random()*100))
const [PositionY,setPositionY ]=useState(Math.floor(Math.random()*100))
const [positionWord,setPositionWord] =useState("top")
const [position,setPosition]  = useState(false)
const [allowPosition,setAllowPosition] =useState(true)
const copyRef  =useRef(null)
const [showCopy,setShowCopy] =useState(false)
const [copied,setCopied]=useState("Copy")
// false ===> X/Y
// true ===> keyWord

const GetColor1 =(e)=>{
  setColor1(e.target.value)
}

const GetColor2 =(e)=>{
  setColor2(e.target.value)
}
const GetColor3 =(e)=>{
  setColor3(e.target.value)
}

const GetColorRatio1  =(e)=>{
  setColorRatio1(e.target.value)
}

const GetColorRatio2  =(e)=>{
  setColorRatio2(e.target.value)
}

const GetColorRatio3  =(e)=>{
  setColorRatio3(e.target.value)
}

const GetAngle = (e)=>{
  setAngle(e.target.value)
}

const GetPositionX=(e)=>{
setPositionX(e.target.value)
}

const GetPositionY=(e)=>{
  setPositionY(e.target.value)
  }

const GetPositionWord = (e)=>{
setPositionWord(e.target.value)
}

function DFColor1 () {
let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let hex1= "#"

for(let i=0; i<6;i++){
hex1+=elements[Math.floor(Math.random()*elements.length)]
}

// console.log(hex1);
dfColor1=hex1;
}
function DFColor2 () {
  let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
  let hex2= "#"

  for(let i=0; i<6;i++){
  hex2+=elements[Math.floor(Math.random()*elements.length)]
  }

  // console.log(hex1);
  dfColor2=hex2;
  }
  function DFColor3 () {
    let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let hex3= "#"

    for(let i=0; i<6;i++){
    hex3+=elements[Math.floor(Math.random()*elements.length)]
    }

    // console.log(hex1);
    dfColor3=hex3;
    }

    const copyToClipboard = () => {
      if (copyRef.current) {
        const range = document.createRange();
        range.selectNode(copyRef.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        // alert('Content copied to clipboard! 1');
      }
    setCopied("Copied !")

    };


let livebg  = `conic-gradient( ${ !allowAngle ?`from ${angle}deg`:""} ${allowPosition ? `at  ${position?`  ${positionWord}`: ` ${PositionX}% ${PositionY}%`}`:""} , ${color1} ${colorRatio1}% ,${color2} ${colorRatio2}%,${color3} ${colorRatio3}% )`


return(<>

<div className="radialBody">
<div style={{background:livebg}} className="radialScreen_manually">
<div>
  <h2 style={{display:showCopy?"block":"none"}}>{copied} </h2>
</div>
<p onMouseOver={()=>setShowCopy(true)} onMouseLeave={()=>{setShowCopy(false); setCopied("Copy")}} onClick={copyToClipboard} ref={copyRef}>
  {/* {livebg} */}
  {/* let livebg  = `conic-gradient( ${ !allowAngle ?`from ${angle}deg`:""} ${allowPosition ? `at  ${position?`  ${positionWord}`: ` ${PositionX}% ${PositionY}%`}`:""} , ${color1} ${colorRatio1}% ,${color2} ${colorRatio2}%,${color3} ${colorRatio3}% )` */}
  conic-gradient({ !allowAngle ?`from ${angle}deg`:""} {allowPosition ? `at  ${position?`  ${positionWord}`: ` ${PositionX}% ${PositionY}%`}`:""} ,<span style={{color:color1}}>{color1} {colorRatio1}%</span>,<span style={{color:color2}}>{color2} {colorRatio2}%</span>,<span style={{color:color3}}>{color3} {colorRatio3}%</span>)

</p>
</div>

<div className="linear_edit_section">

<div className="options">
<button  style={{background:livebg}} onClick={()=>setChoice(false)} >Generate Random</button>

</div>
<div className="edit_radial_mnually">
<fieldset className='colors'>
  <legend>Colors</legend>

  <div className="">
    <label htmlFor="color1">{color1}</label>
    <input type="number"  onChange={GetColorRatio1} value={colorRatio1} /><span>%</span>
    <input onChange={GetColor1} type="color" value={color1} id="color1" />
  </div>

  <div className="">
    <label htmlFor="color2">{color2}</label>
    <input type="number" onChange={GetColorRatio2} value={colorRatio2} /><span>%</span>
    <input onChange={GetColor2} type="color" value={color2} id="color1" />
  </div>
  <div className="">
    <label htmlFor="color1">{color3}</label>
    <input type="number" onChange={GetColorRatio3} value={colorRatio3} /><span>%</span>
    <input onChange={GetColor3} type="color" value={color3} id="color1" />
  </div>

</fieldset>


<fieldset className='colors'>
  <legend>Angle</legend>
  <div className="angle">
    <div>

<input  type="checkbox" onClick={()=>setAllowAngle(!allowAngle)} name="" id="angle" /> <label style={{cursor:"pointer"}} htmlFor="angle">{allowAngle?"I want set Angle":"I wan't set Angle"}</label></div>
<div>
<input style={{pointerEvents:allowAngle?"none":"auto", color:allowAngle?"#0000003c":"" }} type="number" name="" onChange={GetAngle} value={angle} id="" /><span style={{color:allowAngle?"#0000003c":""}}>deg</span>
</div>
  </div>
</fieldset>


<fieldset className='colors'>
  <legend>Position</legend>
<div className="allowPostition"><input  onClick={()=>setAllowPosition(!allowPosition)} type="checkbox" name="" id="allowPosition" /><label style={{cursor:"pointer"}} htmlFor="allowPosition">{allowPosition?"I wan't to Set Position":"I want to Set Position"}</label> </div>
<div className="positionKeyWord">
<select style={{color:allowPosition?"":"#0000004a",pointerEvents:allowPosition?"":"none"}} onChange={GetPositionWord} onClick={()=>setPosition(true)} name="" value={positionWord} id="">
  <option value="top">top</option>
  <option value="right">right</option>
  <option value="bottom">bottom</option>
  <option value="left">left</option>
</select>

</div>
<div className="positionAxis">
<div className="Xaxis">
<label style={{color:allowPosition?"":"#0000004a",pointerEvents:allowPosition?"":"none"}} htmlFor="">X-axis</label> <input style={{color:allowPosition?"":"#0000004a",pointerEvents:allowPosition?"":"none"}} onClick={()=>setPosition(false)} onChange={GetPositionX} type="number" value={PositionX} /><span style={{color:allowPosition?"":"#0000004a",pointerEvents:allowPosition?"":"none"}}>%</span>
</div>
<label style={{color:allowPosition?"":"#0000004a",pointerEvents:allowPosition?"":"none"}} htmlFor="">Y-axis</label> <input onClick={()=>setPosition(false)}  style={{color:allowPosition?"":"#0000004a",pointerEvents:allowPosition?"":"none"}} onChange={GetPositionY} type="number" value={PositionY} /><span style={{color:allowPosition?"":"#0000004a",pointerEvents:allowPosition?"":"none"}}>%</span>
  <div className="Yaxis"></div>

</div>


</fieldset>





</div>


</div>









</div>





</>)
}



function ConicRandomGenerator({choice,setChoice}) {
  let dfColor1 ;
  GenerateDfColor1();
  let dfColor2 ;
  GenerateDfColor2();
    let dfColor3 ;
  GenerateDfColor3();
let [color1,setColor1] =useState(dfColor1)
let [color2,setColor2] =useState(dfColor2)
let [color3,setColor3] =useState(dfColor3)
let [colorRatio1,setColorRatio1] =useState(Math.floor(Math.random()*100))
let [colorRatio2,setColorRatio2] =useState(Math.floor(Math.random()*100))
let [colorRatio3,setColorRatio3] =useState(Math.floor(Math.random()*100))
let [degree1,setDegree1] = useState(Math.floor(Math.random()*360))
let [positionX1,setPositionX1] =useState(Math.floor(Math.random()*100))
let [positionY1,setPositionY1] =useState(Math.floor(Math.random()*100))
let [positionwithKeyWord,setPositionwithKeyWord]=useState("top")
let copyRef1 =useRef("")
let copyRef2 =useRef("")
let copyRef3 =useRef("")
let [copyState1,setCopyState1] = useState(false)
let [copyState2,setCopyState2] = useState(false)
let [copyState3,setCopyState3] = useState(false)
let [copied1,setCopied1] =useState("Copy")
let [copied2,setCopied2] =useState("Copy")
let [copied3,setCopied3] =useState("Copy")
const GenerateRandomnumber = (length) =>{
  return Math.floor(Math.random()*length)
}


const GenerateHexColor1 = ()=>{
let hexElements = [1,2,3,4,5,6,7,7,8,9,"A","B","C","D","E","F"]
let hex= "#";
for(let i=0;i<6;i++){
hex+= hexElements[GenerateRandomnumber(hexElements.length)]
}
// console.log(hex);
setColor1(hex)
}
const GenerateHexColor2 = ()=>{
  let hexElements = [1,2,3,4,5,6,7,7,8,9,"A","B","C","D","E","F"]
  let hex= "#";
  for(let i=0;i<6;i++){
  hex+= hexElements[GenerateRandomnumber(hexElements.length)]
  }
  // console.log(hex);
  setColor2(hex)
  }
  const GenerateHexColor3 = ()=>{
    let hexElements = [1,2,3,4,5,6,7,7,8,9,"A","B","C","D","E","F"]
    let hex= "#";
    for(let i=0;i<6;i++){
    hex+= hexElements[GenerateRandomnumber(hexElements.length)]
    }
    // console.log(hex);
    setColor3(hex)
    }


    const GeneratePositionX1 = ()=>{
      setPositionX1(GenerateRandomnumber(100))
    }

    const GeneratePositionY1 = ()=>{
      setPositionY1(GenerateRandomnumber(100))
    }

const GenerateDegree1 = ()=>{
  setDegree1(GenerateRandomnumber(360))
}

const GenerateColorRatio1 = ()=>{
setColorRatio1(GenerateRandomnumber(100))
}
const GenerateColorRatio2 = ()=>{
  setColorRatio2(GenerateRandomnumber(100))
  }
  const GenerateColorRatio3 = ()=>{
    setColorRatio3(GenerateRandomnumber(100))
    }

const GeneratePositionWithKeyWord = ()=>{

  const positions = [
"right","left","top","bottom","center",
    "right left",
    "left right",
    "right bottom",
    "bottom right",
    "right top",
    "top right",
    "right center",
    "center right",
    "left bottom",
    "bottom left",
    "left top",
    "top left",
    "left center",
    "center left",
    "bottom top",
    "top bottom",
    "bottom center",
    "center bottom",
    "top center",
    "center top"
];

let randomPosition  = positions[GenerateRandomnumber(positions.length)]
// console.log(randomPosition);
setPositionwithKeyWord(randomPosition)
}


function GenerateDfColor1() {

  let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
  let hex1 = "#";

  for(let i =0;i<6;i++){

  hex1+= elements[Math.floor(Math.random()*elements.length)]
  }
  dfColor1=hex1;
  // console.log("Generated 1",hex1);
  }


  function GenerateDfColor2() {

    let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let hex2 = "#";

    for(let i =0;i<6;i++){

    hex2+= elements[Math.floor(Math.random()*elements.length)]
    }
    dfColor2=hex2;
    // console.log("Generated 1",hex1);
    }


    function GenerateDfColor3() {

      let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
      let hex3 = "#";

      for(let i =0;i<6;i++){

      hex3+= elements[Math.floor(Math.random()*elements.length)]
      }
      dfColor3=hex3;
      // console.log("Generated 1",hex1);
      }


const copyToClipboard1 = () => {
  if (copyRef1.current) {
    const range = document.createRange();
    range.selectNode(copyRef1.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    // alert('Content copied to clipboard! 1');
  }
setCopied1("Copied !")
setCopied2("Copy")
setCopied3("Copy")

};
const copyToClipboard2 = () => {
  if (copyRef2.current) {
    const range = document.createRange();
    range.selectNode(copyRef2.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    // alert('Content copied to clipboard! 1');
  }
setCopied2("Copied !")
setCopied1("Copy")
setCopied3("Copy")

};
const copyToClipboard3 = () => {
  if (copyRef3.current) {
    const range = document.createRange();
    range.selectNode(copyRef3.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    // alert('Content copied to clipboard! 1');
  }
setCopied3("Copied !")
setCopied2("Copy")
setCopied1("Copy")

};

const Generate  = ()=>{
  GenerateHexColor1()
GenerateHexColor2()
GenerateHexColor3()
GenerateDegree1()
GeneratePositionX1()
GeneratePositionY1()
GenerateColorRatio1()
GenerateColorRatio2()
GenerateColorRatio3()
GeneratePositionWithKeyWord()
setCopied1("Copy")
setCopied2("Copy")
setCopied3("Copy")

}





let livebg1 = `conic-gradient( at ${positionX1}% ${positionY1}%, ${color1},${color2},${color3})`
let livebg2 = `conic-gradient(from ${degree1}deg at ${positionX1}% ${positionY1}%, ${color1} ${colorRatio1}%,${color2} ${colorRatio2}%,${color3} ${colorRatio3}%)`
let livebg3 = `conic-gradient(at ${positionwithKeyWord}, ${color1} ${colorRatio1}%,${color2} ${colorRatio2}%,${color3} ${colorRatio3}%)`

return(<>
  <div className="conicBody">

<div className="conicScreen">

<div style={{background:livebg1}} className="screenone">
<div className="copied"><h2 style={{display:copyState1?"block":"none"}} >{copied1}</h2> </div>
<p style={{fontSize:".9em"}} title='copy' onClick={copyToClipboard1} onMouseOver={()=>setCopyState1(true)} onMouseLeave={()=>setCopyState1(false)} ref={copyRef1} className='code'>
  {/* {livebg1} */}
{/* let livebg1 = `conic-gradient(from ${degree1}deg at ${positionX1}% ${positionY1}%, ${color1},${color2},${color3})` */}
conic-gradient(at {positionX1}% {positionY1}%,<span style={{color:color1}}>{color1}</span>,<span style={{color:color2}}>{color2}</span>,<span style={{color:color3}}>{color3}</span>)
  </p>
</div>
<div style={{background:livebg2}} className="screentwo">
<div className="copied"><h2 style={{display:copyState2?"block":"none"}} >{copied2}</h2> </div>
<p style={{fontSize:".8em"}} title='copy' onClick={copyToClipboard2} onMouseOver={()=>setCopyState2(true)} onMouseLeave={()=>setCopyState2(false)} ref={copyRef2} className='code'>
  {/* {livebg2} */}
  {/* let livebg2 = `conic-gradient(from ${degree1}deg at ${positionX1}% ${positionY1}%, ${color1} ${colorRatio1}%,${color2} ${colorRatio2}%,${color3} ${colorRatio3}%)` */}

conic-gradient(from {degree1}deg at {positionX1}% {positionY1}%,<span style={{color:color1}}>{color1} {colorRatio1}%</span>,<span style={{color:color2}}>{color2} {colorRatio2}%</span>,<span style={{color:color3}}>{color3} {colorRatio3}%</span>)

  </p>

</div>
<div style={{background:livebg3}} className="screenthree">
<div className="copied"><h2 style={{display:copyState3?"block":"none"}} >{copied3}</h2> </div>
<p style={{fontSize:".9em"}} title='copy' onClick={copyToClipboard3} onMouseOver={()=>setCopyState3(true)} onMouseLeave={()=>setCopyState3(false)} ref={copyRef3} className='code'>
  {/* {livebg3} */}
{/* let livebg3 = `conic-gradient(at ${positionwithKeyWord}, ${color1} ${colorRatio1}%,${color2} ${colorRatio2}%,${color3} ${colorRatio3}%)` */}

conic-gradient(at {positionwithKeyWord},<span style={{color:color1}}>{color1} {colorRatio1}%</span>,<span style={{color:color2}}>{color2} {colorRatio2}%</span>,<span style={{color:color3}}>{color3} {colorRatio3}%</span>)

  </p>

</div>
</div>

<div className="linear_edit_section">

<div className="options">
    <button  onClick={()=>setChoice(true)} style={{background:livebg3}}  >Generate Manually Conic Gradient</button>
  </div>

  <div className="randomGenerate">
  <button style={{background:livebg1}} onClick={Generate} >Generate </button>

  </div>

</div>




  </div>













</>)
}