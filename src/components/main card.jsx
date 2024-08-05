import { MdOutlineBedroomParent } from "react-icons/md";
import { LiaHotTubSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import Icon from "./like";
import Add from "./addbook";

function Div({accommodation}){
//   console.log(accommodation)

    return(
        
            <div className="div1">
            <div className='div2' style={{backgroundImage:`url(${require(accommodation.image)})`}}>
                <Icon/>
            </div>

            <div className='div3'>
                <h4 style={{color:"gray"}}>{accommodation.typeOfHouse}- {accommodation.ageOfHouse} Y Old</h4><br></br>
                <h1>{accommodation.priceOfHouse}</h1><br></br>
                <p style={{color:"gray"}}>{accommodation.addressOfHouse}</p>
            </div>

            <div className='div4'>
            <MdOutlineBedroomParent id="bedroom"/><h3>{accommodation.numberOfBedrooms}</h3><h3 style={{color:"gray"}}>Bedrooms</h3><br></br>
            <LiaHotTubSolid id="tub"/><h3>{accommodation.numberOfBathrooms}</h3><h3 style={{color:"gray"}}>Bathrooms</h3>
            </div>

            <div className='div5'>
                <p style={{color:"gray"}}>REALATOR</p><br></br>
                <section className="info">
                    <img id="profile" src=".\src\assets\profile.jpg"></img>
                    <h1>{accommodation.nameOfRealtor}<br></br><p style={{color:"gray", fontSize:"small"}}>{accommodation.numberOfRealtor}</p></h1>
                    
                    
                
                </section>
                
            </div>
        </div>
        
        
    )
}
export default Div