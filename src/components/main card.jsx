import { MdOutlineBedroomParent } from "react-icons/md";
import { LiaHotTubSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import Icon from "./like";

function Div(){
  

    return(
        <div className="div1">
            <div className='div2' style={{backgroundImage:`url(${require("../assets/house.jpg")})`}}>
                <Icon/>
            </div>

            <div className='div3'>
                <h4 style={{color:"gray"}}>Spanish Villa - 3 Y Old</h4><br></br>
                <h1>$1.5 Million</h1><br></br>
                <p style={{color:"gray"}}>86 Armitage Drive</p>
            </div>

            <div className='div4'>
            <MdOutlineBedroomParent id="bedroom"/><h3>3</h3><h3 style={{color:"gray"}}>Bedrooms</h3><br></br>
            <LiaHotTubSolid id="tub"/><h3>2</h3><h3 style={{color:"gray"}}>Bathrooms</h3>
            </div>

            <div className='div5'>
                <p style={{color:"gray"}}>REALATOR</p><br></br>
                <section className="info">
                    <img id="profile" src=".\src\assets\profile.jpg"></img>
                    <h1>Dana Smith<br></br><p style={{color:"gray", fontSize:"small"}}>(+27) 67 845-2345</p></h1>
                    
                    
                
                </section>
                
            </div>
        </div>
    )
}
export default Div