import React, { useEffect, useRef, useState } from 'react'
import Nav from '../Gradient App Body/Nav'
import "./Radial.css";
import "./Radial2.css"
export default function RadialGradient() {
  let[choice,setChoice] =useState(false)
  return (<>

<Nav/>
{
choice ?
<RadialMnuallyGenerator choice = {choice} setChoice={setChoice} />

:
<RadialRandomGenerator choice = {choice} setChoice={setChoice} />


}


</>)
}

function RadialRandomGenerator({choice,setChoice}) {
///  States And Refrences
let dfColor1;
  GenerateDfColor1()
let dfColor2;
GeneratedfColor12();
let dfColor3;
  GenerateDfColor2()
let [color1,setColor1] =useState(dfColor1)
let [color2,setColor2] =useState(dfColor2)
let [color3,setColor3] =useState(dfColor3)
let [shap1,setShape1] =useState("circle")
let [angle1,setAngle1] =useState("closest-side")
let [angle2,setAngle2] =useState(Math.floor(Math.random()*100))
let [position1,setPosition1]=useState("top")
let copyRef1 = useRef("");
let copyRef2 = useRef("");
let copyRef3 = useRef("");
let [showCopy1,setShowCopy1] =useState(false)
let [showCopy2,setShowCopy2] =useState(false)
let [showCopy3,setShowCopy3] =useState(false)
let [copied1,setCopied1] =useState("Copy")
let [copied2,setCopied2] =useState("Copy")
let [copied3,setCopied3] =useState("Copy")
let [degree1,setDegree1] =useState(Math.floor(Math.random()*100))
let [degree2,setDegree2] =useState(Math.floor(Math.random()*100))
let [degree3,setDegree3] =useState(Math.floor(Math.random()*100))
/// Gnerator functions
const GenerateRandomNumber = (length)=>{
return Math.floor(Math.random()*length)

};
const GenerateColor1 =  ()=>{

let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let hex2 ="#";
for (let i=0; i<6;i++){
  hex2+= elements[GenerateRandomNumber(elements.length)]
}
setColor1(hex2)

}
const GenerateColor2 =  ()=>{

  let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
  let hex1 ="#";
  for (let i=0; i<6;i++){
    hex1+= elements[GenerateRandomNumber(elements.length)]
  }
  setColor2(hex1)

  }
  const GenerateColor3 =  ()=>{

    let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let hex3 ="#";


    for (let i=0; i<6;i++){
      hex3+= elements[GenerateRandomNumber(elements.length)]
    }
    setColor3(hex3)

    }
    let GenerateShap = ()=>{
let shapes = ["cirlce","ellipse"]
let shape;
shape = shapes[GenerateRandomNumber(shapes.length)]
setShape1(shape)
// console.log(shape);



    }
const GenerateAngle2 = ()=>{
  setAngle2(GenerateRandomNumber(100))

}
const GenerateAngle1 = ()=>{
  // setAngle1(GenerateRandomNumber(100))

  let angles =["closest-side","farthest-side","closest-corner","farthest-corner"]
  setAngle1(angles[GenerateRandomNumber(angles.length)])


  }
const GeneratePosition1 = ()=>{
let positions = ["top","bottom","right","left","top right","top bottom","top left","right bottom","right left","right top","bottom right","bottom top","bottom left","left bottom","left right","left top"]
setPosition1(positions[GenerateRandomNumber(positions.length)])


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

function GeneratedfColor12() {
  let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
  let hex1 = "#";
  for(let i =0;i<6;i++){
  hex1+= elements[Math.floor(Math.random()*elements.length)]
  }
  dfColor2=hex1;
  // console.log("Generated 1",hex1);
  }
  function GenerateDfColor2() {
    let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let hex1 = "#";
    for(let i =0;i<6;i++){
    hex1+= elements[Math.floor(Math.random()*elements.length)]
    }
    dfColor3=hex1;
    // console.log("Generated 1",hex1);
    }

// const GeneratedfColor11 = ()=>{
// let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
// let hex1 ="#";

// for(let i=0; i<6; i++){
// hex1+=elements[Math.floor(Math.random()*elements.length)]
// }
// dfColor1=hex1;
// }

// const GeneratedfColor12 = ()=>{
//   let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
//   let hex3 ="#";

//   for(let i=0; i<6; i++){
//   hex3+=elements[Math.floor(Math.random()*elements.length)]
//   }
//   dfColor2=hex3;
//   }

  // const GeneratedfColor13 = ()=>{
  //   let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
  //   let hex2 ="#";
  //   for(let i=0; i<6; i++){
  //   hex2+=elements[Math.floor(Math.random()*elements.length)]
  //   }
  //   dfColor3=hex2;
  //   }








// useEffect(()=>{
//   GenerateColor1()
//   GenerateColor2()
//   GenerateColor3()

// })


let livebgc1 = `radial-gradient(ellipse at ${position1},${color2},${color1})`
let livebgc2 = `radial-gradient(circle,${color2},${color1})`
let livebgc3 = `radial-gradient(circle  ,${color2} ${degree1}% ,${color1} ${degree2}%,${color3} ${degree2}%)`
// console.log(livebgc1);
/// onClikc Functions
const GenerateTwoColor = ()=>{
  GenerateColor1()
  GenerateColor2()
  GenerateColor3()
  // GenerateShap()
  GenerateAngle1()
  GenerateAngle2()
  GeneratePosition1()

  setDegree1(Math.floor(Math.random()*100))
  setDegree2(Math.floor(Math.random()*100))
  setDegree3(Math.floor(Math.random()*100))
}
const Generate = ()=>{
GenerateTwoColor()

setCopied1("Copy")
setCopied2("Copy")
setCopied3("Copy")

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
// setCopied2("Copy")
// setCopied3("Copy")

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
// setCopied2("Copy")
// setCopied3("Copy")

};

return(<>
<div className="RadialBody">


<div className='RadialScreen'>

<div style={{background:livebgc1}}  className="screenOne">
<div   className="copyState"><h2  style={{display:showCopy1?"block":"none"}} >{copied1} </h2></div>
  <p  onMouseOver={()=>setShowCopy1(true)} onMouseLeave={()=>setShowCopy1(false)}  onClick={copyToClipboard1} ref={copyRef1}  title='Copy' >
{/* let livebgc1 = `radial-gradient(ellipse at ${position1},${color2},${color1})` */}
radial-gradient(ellipse at {position1},<span title={color2} style={{color:color2}}>{color2}</span>,<span title={color1} style={{color:color1}}>{color1}</span>)
  </p>

  </div>

  <div  style={{background:livebgc2}} className="screentwo">
<div className="copyState"><h2 style={{display:showCopy2?"block":"none"}} >{copied2} </h2></div>
  <p onClick={copyToClipboard2}  ref={copyRef2} onMouseOver={()=>setShowCopy2(true)} onMouseLeave={()=>setShowCopy2(false)} title='Copy' >
{/* let livebgc2 = `radial-gradient(circle,${color2},${color1})` */}

  radial-gradient(circle,<span style={{color:color2}}>{color2}</span>,<span style={{color:color1}}>{color1}</span>)
  </p>
  </div>
  <div  style={{background:livebgc3}} className="screenthree">
<div className="copyState"><h2 style={{display:showCopy3?"block":"none"}} >{copied3}</h2></div>
  <p style={{fontSize:"1em"}} onClick={copyToClipboard3} ref={copyRef3} onMouseOver={()=>setShowCopy3(true)} onMouseLeave={()=>setShowCopy3(false)}  title='Copy' >
{/* let livebgc3 = `radial-gradient(circle  ,${color2},${color1},${color3})` */}
radial-gradient(circle,<span style={{color:color2}}>{color2} {degree1}%  </span>,<span style={{color:color1}}>{color1} {degree2}%</span>,<span style={{color:color3}}>{color3} {degree3}%</span>)
  </p>
  </div>

</div>

<section className="Radial_edit_section">
<div className="options_radial">
    <button style={{bactkground:livebgc3}} onClick={()=>setChoice(true)} >Generate Manually Radial  Gradient</button>
  </div>

  <div className="randomGenerate_radial">
<button   onClick={Generate} style={{background:livebgc1}} >Generate </button>
</div>
</section>





</div>














</>)

}




function RadialMnuallyGenerator({choice,setChoice}) {
let initColor1;
GenerateDfColor2();
let initColor2;
GenerateDfColor1()
let initColor3;
GenerateDfColor3()

let [color1,setColor1] =useState(initColor1)
let [color2,setColor2] =useState(initColor2)
let [color3,setColor3] =useState(initColor3)
let [degree1,setDegree1] =useState(Math.floor(Math.random()*100))
let [degree2,setDegree2] =useState(Math.floor(Math.random()*100))
let [degree3,setDegree3] =useState(Math.floor(Math.random()*100))
let [shape,setShape] = useState("circle")
let [size1,setSize1] =useState("closest-corner");
let [size2,setSize2] =useState(Math.floor(Math.random()*400));
let [sizeType,setSizeType] =useState(false)
let [allowSize,setAllowSize] =useState(false)
let copyRef =useRef("")
let [copyState,setCopyState] =useState(false)
let [copied,setCopied] =useState("Copy")
let [position1,setPosition1] =useState("top");
let [position2,setPosition2] =useState(Math.floor(Math.random()*50));
let [positionType,setPositionTpe] =useState(false);
let [allowposition,setAlllowPosition] =useState(false);
// linear-gradient(287deg, #FCA69A,#963BEA,#CC78CE)



const GetValue1 = (e)=>{
setColor1(e.target.value)
}
const GetValue2 = (e)=>{
  setColor2(e.target.value)
  }
  const GetValue3 = (e)=>{
    setColor3(e.target.value)
    }

const Getdegree = (e)=>{
setDegree1(e.target.value)

}
const Getdegree2 = (e)=>{
  setDegree2(e.target.value)
  }
  const Getdegree3 = (e)=>{
    setDegree3(e.target.value)

    }

const GetSize1 = (e)=>{
    setSize1(e.target.value)

setSizeType(true)
}

const GetSize2 = (e)=>{
    setSize2(e.target.value)
setSizeType(false)
}

const GetPosition1 = (e)=>{
  setPosition1(e.target.value)
  setPositionTpe(true)
}

const GetPosition2 = (e)=>{
  setPositionTpe(false)
  setPosition2(e.target.value)
}

function GenerateDfColor1   (){

let elements =[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let hex  ="#";
for(let i=0; i<6;i++){
  hex+= elements[Math.floor(Math.random()*elements.length)]
}
// console.log(hex);
initColor2=hex;

}

function GenerateDfColor2() {
  let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
  let hex1 = "#";
  for(let i =0;i<6;i++){
  hex1+= elements[Math.floor(Math.random()*elements.length)]
  }
  initColor1=hex1;
  // console.log("Generated 1",hex1)
  }

function GenerateDfColor3() {
  let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
  let hex1 = "#";
  for(let i =0;i<6;i++){
  hex1+= elements[Math.floor(Math.random()*elements.length)]
  }
  initColor3=hex1;
  // console.log("Generated 1",hex1)
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

let livebgc1 = `radial-gradient(${shape} ${ allowSize?`${sizeType? size1: size2+"px" }`:""} at ${ allowposition?"":`${positionType?position1:position2+"%"}`} ,${color2} ${degree1}%,${color1} ${degree2}%,${color3} ${degree3}%)`
    // closest-side at top

  return(<>
<div className="radialBody">
<div style={{background:livebgc1}} className="radialScreen_manually">
  {/* <h1>hello</h1> */}
<div className="copy"><h3 style={{display:copyState?"block":"none"}}>{copied}</h3></div>
<p ref={copyRef}   onMouseOver={()=>setCopyState(true)} onMouseLeave={()=>{setCopyState(false); setCopied("Copy ")}} onClick={copyToClipboard} >{livebgc1}</p>


</div>

<div className="linear_edit_section">
<div className="options">
  <button style={{background:livebgc1}} onClick={()=>setChoice(false)} >Generate Random</button>
</div>
<div className="edit_radial_mnually">
<fieldset className='colors'>
  <legend>colors</legend>
<div className="">
<label htmlFor="">{color1}</label>

<input type="number" onChange={Getdegree} value={degree1} /><span>%</span>
<input onChange={GetValue1} type="color" name="" value={color1} id="" />
</div>
<div className="">
<label htmlFor="">{color2}</label>
<input type="number" onChange={Getdegree2} value={degree2} /><span>%</span>
<input type="color" onChange={GetValue2} name="" value={color2} id="" />
</div>
<div className="">
<label htmlFor="">{color3}</label>
<input onChange={Getdegree3} value={degree3} type="number" /><span>%</span>
<input type="color" name="" id="" onChange={GetValue3} value={color3} />
</div>

</fieldset>

<fieldset className='shapes'>
  <legend>shape</legend>


<div>
  <input defaultChecked onClick={()=>setShape("circle")} name='option' type="radio" id='Circle' /> <label htmlFor="Circle">Circle</label>
  </div>
  <div>
  <input onClick={()=>setShape("ellipse")} name='option' type="radio" id='ellipse' /> <label htmlFor="ellipse">ellipse</label>
  </div>

</fieldset>
<fieldset className='sizes'>
  <legend>size</legend>

  <div className="allowSize"><input onClick={()=>setAllowSize(!allowSize)} id='allowSize' type="checkbox" /> <label htmlFor="allowSize"> {allowSize?"I wan't to set Size":"I want to set Size"} </label></div>
  <div className='shape_chice' >
<div className="size">
  <select style={{pointerEvents:allowSize?"auto":"none" , color:allowSize?"black":"#00000036" }}  name="" onChange={GetSize1} value={size1} id="">
<option value="closest-side"> closest-side </option>
<option value="farthest-side"> farthest-side </option>
<option value="closest-corner"> closest-corner </option>
<option value="farthest-corner"> farthest-corner </option>

  </select>
</div>
<div className="size_per">
  <input  style={{pointerEvents:allowSize?"auto":"none" , color:allowSize?"black":"#00000036" }} value={size2} onChange={GetSize2} type="number" name="" id="" />
</div>

</div>


</fieldset>


<fieldset className='sizes'>
  <legend>Position</legend>

  <div className="allowSize"><input  defaultChecked  onClick={()=>setAlllowPosition(!allowposition)} id='allowposition' type="checkbox" /> <label htmlFor="allowposition"> I want to set Position </label></div>
  <div className='shape_chice' >
<div className="size">

  <select style={{pointerEvents:allowposition?"none":"auto",color:allowposition?"#00000036":"black"}} onChange={GetPosition1} value={position1} id="">
<option value="top"> top </option>
<option value="right"> right </option>
<option value="bottom"> bottom </option>
<option value="left"> left </option>
  </select>
</div>
<div className="size_per">
  <input style={{pointerEvents:allowposition?"none":"auto",color:allowposition?"#00000036":"black"}} onChange={GetPosition2}  value={position2}  type="number" name="" id="" />
</div>

</div>


</fieldset>




</div>


</div>



</div>

  </>)

}