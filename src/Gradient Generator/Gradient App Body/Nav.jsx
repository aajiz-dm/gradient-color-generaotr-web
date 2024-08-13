import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav(  ) {
const Reload = ()=>{
window.history.Reload
}


  return (
   <>
<div className="GraidentApp_Nav">

<nav>

<div className="logo">
<p className='dM'>~dM</p>
<p className='generaotr'><span>G</span>enerato<span>R</span></p>
<p className='gardient'>gradient</p>


</div>
<div className="linear"> <a   href=""> <Link to="/"> <mark onClick={Reload} >Linear</mark></Link></a></div>
<div className="Radial"> <a href=""> <Link to="/Raidal-gradient"> <mark>Radial</mark></Link></a></div>
<div className="conic"> <a href=""> <Link to="/Conic-gradient"><mark>Conic</mark></Link></a> </div>
<div className="ReapeatingLinear">  <a href=""><Link to="/Repeating-linear"><mark>Repeating <br /> Linear</mark> </Link></a></div>
<div className="repetingRadial"><a href=""><Link to="/"> <mark>Repeating <br /> Radial</mark></Link></a></div>
<div className="repeatingConic"><a href=""><Link to="/"><mark> Repeating  <br />Conic</mark></Link></a></div>


{/* <Link to={"/Linear-Gradient-generator"}> <h1>dM Gradient Genenratot</h1></Link> */}
</nav>


</div>











   </>
  )
};
