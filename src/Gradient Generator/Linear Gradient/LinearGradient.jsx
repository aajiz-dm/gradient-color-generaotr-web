import React, { useEffect, useRef, useState } from 'react';
// import GradientBody from '../../Gradient App Body'
import Nav from "../Gradient App Body/Nav.jsx";
import "./Linear.css";
import "./Linear2.css";

export default function LinearGradient() {
let [choice,setChoice] = useState(false);




  return (
<>
<Nav  />
{
  choice?
<ManuallyLinear choice={choice} setChoice={setChoice} />:
 <RandomLinear choice={choice} setChoice={setChoice}/>


}


</>
  )
}
function ManuallyLinear({choice,setChoice}) {
// let r = "#ffff"

let dfColor1 ;;
GenerateDfColor1()
let dfColor2;
GenerateDfColor2()
let dfColor3;
GenerateDfColor3()

  let [choiceColor1,seTChoiceColor1] = useState(dfColor1)
  let [choiceColor2,seTChoiceColor2] = useState(dfColor2)
  let [choiceColor3,seTChoiceColor3] = useState(dfColor3)
  let [choiceDegree,seTchoiceDegree] =useState(Math.floor(Math.random()*360))
  let [choiceSide,setChoiceSide] =useState("to right")
  let [angleType,seTangleType] =useState(false);
  let [msg,setMsg] =useState(false)
  let copyRef =useRef("")
  let [copyState,setCopyState] =useState(false)
  let [copied,setCopied]=useState("Copy")
  // copyToClipboard1 ="#"
  // let [choiceColor4,seTChoiceColor4] = useState("#0800ff")
  // let [colorIndex,setColorIndex] =useState(4)
// let [colorArray,setColorArray] = useState([]);
// let colorArray = new Array();
// colorArray.push(choiceColor1,choiceColor2,choiceColor3)
// colorArray.push(choiceColor2)
// colorArray.push(choiceColor3)
// colorArray.push(choiceColor4)

// console.log(colorArray);
  const GetColor1 =  (e) =>{
    let currentColor =  e.target.value;
    seTChoiceColor1(currentColor)
    setCopied("Copy")
    }
    const GetColor2 =  (e) =>{
      let currentColor =  e.target.value;
      seTChoiceColor2(currentColor)
    setCopied("Copy")
    // ➜

      }
      const GetColor3 =  (e) =>{
        let currentColor =  e.target.value;
        seTChoiceColor3(currentColor)
    setCopied("Copy")

        }

// const GetDegree = (e)=>{
// seTchoiceDegree(e.target.value)

// }
const GetDegree = (event) => {
  const value = event.target.value;
  if (value <= 360) {

    seTchoiceDegree(value);
// alert ("Maximum Angele is 360.")
  }
  else if(value >= 361){
// alert("")
setMsg(true)
  }
seTangleType(true)
setCopied("Copy ")

};

useEffect(()=>{
  setTimeout(()=>{
    setMsg(false)
  },6000)
},[msg])


const GetSide  =(e)=>{
setChoiceSide(e.target.value)
seTangleType(false);
setCopied("Copy")
}

// console.log(choiceSide);

// const GetColor4 =  (e) =>{
        //   let currentColor =  e.target.value;
        //   seTChoiceColor4(currentColor)
        //   }
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
            let hex1 = "#";

            for(let i =0;i<6;i++){

            hex1+= elements[Math.floor(Math.random()*elements.length)]
            }
            dfColor2=hex1;
            // console.log("Generated 1",hex1);




            }
            function GenerateDfColor3() {

              let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
              let hex1 = "#";

              for(let i =0;i<6;i++){

              hex1+= elements[Math.floor(Math.random()*elements.length)]
              }
              dfColor3=hex1;
              // console.log("Generated 1",hex1);




              }
useState(()=>{
seTangleType(true)
},[choice])









  const liveLinearGradientBackground1 = `linear-gradient(${angleType?choiceDegree+"deg":choiceSide}, ${choiceColor1}, ${choiceColor2}, ${choiceColor3})`;

  return(<>


<div className='linearBody'>
  {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ut possimus minus porro quia libero eligendi voluptatem obcaecati quidem earum iure culpa fugit repellendus, facilis blanditiis ipsum quam eveniet pariatur.</h1> */}


<div style={{background:liveLinearGradientBackground1}} className="linearScreen_manually">
<div style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}>
<h1  style={{display:copyState?"block":"none"}}  className='CopiedMsg'>{copied}
</h1>
<h2 className={msg?"open_msg":"msg"} >The Angle is maximum 360</h2>

</div>

<p onMouseOver={()=>setCopyState(true)}  onMouseLeave={()=>setCopyState(false)} ref={copyRef} onClick={copyToClipboard} className="copytext">
  {/* { `linear-gradient(${angleType?choiceDegree+"deg":choiceSide}, ${choiceColor1}, ${choiceColor2}, ${choiceColor3})`} */}
  linear-gradient({angleType?choiceDegree+"deg":choiceSide},<span style={{color:choiceColor1}}>{choiceColor1}</span>,<span style={{color:choiceColor2}}>{choiceColor2}</span>,<span style={{color:choiceColor3}}>{choiceColor3}</span>)
</p>
</div>



<section className="linear_edit_section">
    <div className="options">
    <button onClick={()=>setChoice(!choice)}  style={{background:liveLinearGradientBackground1}} className='button-29'>{choice?"Generate Random":""}</button>
  </div>

<div className="manuallyGenearte">


<fieldset  >
  <legend> Choice Colors</legend>


  <div className="color">
  <label htmlFor="">{choiceColor1}</label>
  <input onChange={GetColor1} type="color" value={choiceColor1} name="" id="" />
  </div> <div className="color">
  <label htmlFor="">{choiceColor2}</label>
  <input  onChange={GetColor2} type="color" value={choiceColor2} name="" id="" /> <span></span>
  </div> <div className="color">
  <label htmlFor="">{choiceColor3}</label>
  <input onChange={GetColor3} type="color" value={choiceColor3} name="" id="" />
  </div>
  {/* <div className="color">
  <label htmlFor="">{choiceColor4}</label>
  <input onChange={GetColor4} type="color" value={choiceColor4} name="" id="" />
  </div> */}



  {/* {
colorArray.map((c,i)=>{

return(<>
 <div className="color">
  <label htmlFor="">{choiceColor1}</label>
  <input onChange={GetColor1} type="color" value={choiceColor1} name="" id="" />
  </div>

</>)

})
  } */}



</fieldset>

<fieldset>
  <legend> set Angles</legend>

<div className="deg">
  <input onChange={GetDegree} type="number" value={choiceDegree} max={360} maxLength={4} />
  <select onChange={GetSide} name="" value={choiceSide} id="">
<option value="to left">to left</option>
<option value="to right">to right</option>
<option value="to top">to top</option>
<option value="to bottom">to bottom</option>
{/* <option value="">to left</option> */}
  </select>
</div>

</fieldset>

</div>



</section>






</div>






  </>)

}








function RandomLinear({choice,setChoice}) {
let dfColor1;
GenerateDfColor1();
let dfColor2;
GenerateDfColor2();
let dfColor3;
GenerateDfColor3();
  let[ color1,setColor1]=useState(dfColor1)
  let[ color2,setcolor2]=useState(dfColor2)
  let[ color3,setcolor3]=useState(dfColor3)
  let copyRef1 =useRef("")
  let copyRef2 =useRef("")
  let copyRef3 =useRef("")
  let [degree1,setDegree1] =useState(Math.floor(Math.random()*360))
  let [degree2,setDegree2] =useState(Math.floor(Math.random()*360))
  let [degree3,setDegree3] =useState(Math.floor(Math.random()*360))
  let [showCopy1,setShowCopy1] =useState(false)
  let [showCopy2,setShowCopy2] =useState(false)
  let [showCopy3,setShowCopy3] =useState(false)
  let [copied1,setCopied1]= useState("Copy")
  let [copied2,setCopied2]= useState("Copy")
  let [copied3,setCopied3]= useState("Copy")
// aetColor1("#3445F")

const GenenrteRandomNumber = (length)=>{
  return Math.floor(Math.random()*length)
};

const GenerateHex1 = ()=>{
let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let livebgc1 = "#";
for(let i=0;i<6;i++){
  livebgc1+=elements[GenenrteRandomNumber(elements.length)]
}

setColor1(livebgc1)
}

const GenerateHex2 = ()=>{
  let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
  let livebgc2 = "#";
  for(let i=0;i<6;i++){
    livebgc2+=elements[GenenrteRandomNumber(elements.length)]
  }

  setcolor2(livebgc2)
  }
  const GenerateHex3 = ()=>{
    let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let livebgc3 = "#";
    for(let i=0;i<6;i++){
      livebgc3+=elements[GenenrteRandomNumber(elements.length)]
    }

    setcolor3(livebgc3)
    }

    const GenerateDegree1 = ()=>{
       setDegree1(GenenrteRandomNumber(360))
    }
    const GenerateDegree2 = ()=>{
      setDegree2(GenenrteRandomNumber(360))
   }
   const GenerateDegree3 = ()=>{
    setDegree3(GenenrteRandomNumber(360))
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
        // alert('Content copied to clipboard! 2');

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
        // alert('Content copied to clipboard! 3');
      }
      setCopied3("Copied !")
      setCopied2("Copy")
setCopied1("Copy")
    };
// GenerateHex()


// useEffect(()=>{
// setTimeout(()=>{
//   GenerateHex1();
//   GenerateHex2();
//   GenerateHex3();

// },500)
// })

const Generate= ()=>{
  GenerateHex1();
    GenerateHex2();
    GenerateHex3();
GenerateDegree1();
GenerateDegree2();
GenerateDegree3();
setCopied1("Copy")
setCopied2("Copy")
setCopied3("Copy")
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
    let hex1 = "#";

    for(let i =0;i<6;i++){

    hex1+= elements[Math.floor(Math.random()*elements.length)]
    }
    dfColor2=hex1;
    // console.log("Generated 1",hex1);




    }
    function GenerateDfColor3() {

      let elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
      let hex1 = "#";

      for(let i =0;i<6;i++){

      hex1+= elements[Math.floor(Math.random()*elements.length)]
      }
      dfColor3=hex1;
      // console.log("Generated 1",hex1);




      }







// console.log(GenerateDegree());

const liveLinearGradientBackground1 = `linear-gradient(${degree1}deg, ${color1}, ${color2}, ${color3})`;
const liveLinearGradientBackground2 = `linear-gradient(${degree2}deg, ${color3}, ${color1}, ${color2})`;
const liveLinearGradientBackground3 = `linear-gradient(${degree3}deg, ${color2}, ${color3}, ${color1})`;
let optionsButtonBc = `radial-gradient(100% 100% at 100% 0, ${color1} 0, ${color2} 100%)`

// const styles = {
//   background: liveLinearGradientBackground,
// };

return(<>


<div className="linearBody">
<div   className="linearScreen">

<div style={{background:liveLinearGradientBackground1}} className="screenOne">
<div className="copyState"><h2  style={{display:showCopy1?"block":"none"}}>{copied1} </h2></div>
  <p  onMouseLeave={()=>setShowCopy1(false)} onMouseOver={()=>setShowCopy1(true)} onClick={copyToClipboard1} ref={copyRef1} title='Copy' > linear-gradient({degree1}deg, <span style={{color:color1}}>{color1}</span>,<span style={{color:color2}}>{color2}</span>,<span style={{color:color3}}>{color3}</span>)</p>
  </div>
<div style={{background:liveLinearGradientBackground2}}className="screentwo">
<div className="copyState"><h2 style={{display:showCopy2?"block":"none"}}  >{copied2} </h2></div>

<p onMouseLeave={()=>setShowCopy2(false)} onMouseOver={()=>setShowCopy2(true)} onClick={copyToClipboard2} ref={copyRef2} title='Copy' > linear-gradient({degree2}deg, <span style={{color:color3}}>{color3}</span>,<span style={{color:color1}}>{color1}</span>,<span style={{color:color2}}>{color2}</span>)</p>

  </div>
<div style={{background:liveLinearGradientBackground3}} className="screenthree">
<div className="copyState"><h2 style={{display:showCopy3?"block":"none"}}> {copied3} </h2></div>

<p onMouseLeave={()=>setShowCopy3(false)} onMouseOver={()=>setShowCopy3(true)} onClick={copyToClipboard3} ref={copyRef3} title='Copy'> linear-gradient({degree3}deg, <span style={{color:color2}}>{color2}</span>,<span style={{color:color3}}>{color3}</span>,<span style={{color:color1}}>{color1}</span>)</p>
  </div>
</div >

<section className="linear_edit_section">
  <div className="options">
    <button onClick={()=>setChoice(!choice)} style={{background:optionsButtonBc}} className='button-29'>Generate Manually Linear Gradient</button>
  </div>

<div className="randomGenerate">
<button onClick={Generate} style={{background:optionsButtonBc}} className='button-29'>Generate </button>
{/* <textarea name="" id="">
  {`linear-gradient(to right, ${color1}, ${color2}, ${color3})`}
  hhh
    </textarea> */}
    {/* <div className='copyCode' style={{background:liveLinearGradientBackground1}} ref={copyRef} onClick={copyToClipboard} title='Copy' >
  {`linear-gradient(to right, ${color1}, ${color2}, ${color3})`}
<mark style={{background:"white"}}>
  linear-gradient({degree}deg, <span style={{color:color1}}>{color1}</span>,<span style={{color:color2}}>{color2}</span>,<span style={{color:color3}}>{color3}</span>)
  </mark>

  </div> */}


</div>

{/* <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic fugiat totam quasi quam suscipit, dolores, cupiditate assumenda quaerat provident voluptatum illum doloribus maxime fuga recusandae nisi facere temporibus eum.</div> */}

</section>


</div>









</>)


}