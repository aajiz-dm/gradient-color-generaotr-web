import React, { useState } from 'react'
import Nav from '../Gradient App Body/Nav.jsx'

export default function RepeatingLinear() {
  return (<>



<Nav/>

<RepeatingLinearRandom/>



  </>
  )
}

function RepeatingLinearRandom(params) {

const [color1,setColor1] =useState("#ff43ad")
const [color2,setColor2] =useState("#f67ed4")
const [color3,setColor3] =useState("#f76dad")
const [colorRatio1,setColorRatio1] =useState(Math.floor(Math.random()*30))
const [colorRatio2,setColorRatio2] =useState(Math.floor(Math.random()*30))
const [colorRatio3,setColorRatio3] =useState(Math.floor(Math.random()*30))
const [degree1,setDegree1]  =useState(Math.floor(Math.random()*360))

const GenerateColor1 = ()=>{
let elements = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
let hex= "#";
for(let i=0;i<=5;i++){
hex+=elements[Math.floor(Math.random()*elements.length)]
}
setColor1(hex)
}
const GenerateColor2 = ()=>{
    let elements = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
    let hex1= "#";
    for(let i=0;i<=5;i++){
    hex1+=elements[Math.floor(Math.random()*elements.length)]
    }
    setColor2(hex1)
    }
    const GenerateColor3 = ()=>{
        let elements = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
        let hex3= "#";
        for(let i=0;i<=5;i++){
        hex3+=elements[Math.floor(Math.random()*elements.length)]
        }
        setColor3(hex3)
        }

const GenerateRatio1 = ()=>{
    setColorRatio1(Math.floor(Math.random()*30))
}
const GenerateRatio2 = ()=>{
    setColorRatio2(Math.floor(Math.random()*30))
}
const GenerateRatio3 = ()=>{
    setColorRatio3(Math.floor(Math.random()*30))
}

const GenearteDegree1 = ()=>{
setDegree1(Math.floor(Math.random()*360))

}

const Generate = () =>{
GenerateColor1()
GenerateColor2()
GenerateColor3()
GenerateRatio1()
GenerateRatio2()
GenerateRatio3()
GenearteDegree1()
}

// Generate()


// background: repeating-linear-gradient(
//     45deg,
//     red,
//     red 10%,
//     yellow 10%,
//     yellow 20%,
//     green 20%,
//     green 30%
// );





const livebg2 = `repeating-linear-gradient(${degree1* degree1  }deg,${color1},${color1} 10%,${color2} 10%,${color2} 20%,${color3} 20%,${color3} 30%`
    const livebg1  =` repeating-linear-gradient(${degree1}deg,${color1} 5%, ${color2} 10%,${color3} 15%`
return(<>
<div className="RadialBody">

<div className="RadialScreen">

    <div style={{background:livebg1}} className="screentwo"></div>

    <div style={{background:livebg2}} className="screentwo"></div>
    <div className="screentwo"></div>
</div>

<div className="Radial_edit_section">

<div className="options_radial">
    <button>Genearte Linear Repeating Manually </button>
</div>


<div className="randomGenerate_radial">
   <button style={{background:livebg1}} onClick={Generate}>generate</button>
</div>

</div>



</div>


</>)

}