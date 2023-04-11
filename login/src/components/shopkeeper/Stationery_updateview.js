import React from "react";
import { useNavigate } from "react-router-dom";
import '../../headerForAll.css';
import logo2 from '../images/logo2.png';
import bv_logo from '../images/bv_logo.jpg';
import "./shopkeeperHomePage.css";


function Stationery_updateview() {
const navigate = useNavigate();

const handleClick = () => navigate("/Table_stationery");
const handleClick1 = () => navigate("/Shop_order");
return (
<>

{/* HEADER */}
<div className="header">
          <div className="logo">
            <img src={logo2} alt="Logo"/>
          </div>
          <div className="bv_logo">
            <img src={bv_logo} alt="Logo"/>
          </div>
       </div>

<div className="container1">
<table className="t1">


<tr>
<td>
<button className="B1" onClick={handleClick}>Update </button>
</td>
<td>
<button className="B1" onClick={handleClick1}>View Orders </button>
</td>
</tr>
</table>
</div>
</>
);
}
export default Stationery_updateview;