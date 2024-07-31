import { MdOutlineBedroomParent } from "react-icons/md";

function Div(){

    return(
        <div className="div1">
            <div className='div2' style={{backgroundImage:`url(${require("../assets/house.jpg")})`}}></div>
            <div className='div3'>
                <h4 style={{color:"gray"}}>Spanish Villa - 3 Y Old</h4><br></br>
                <h1>$1.5 Million</h1><br></br>
                <p style={{color:"gray"}}>86 Armitage Drive</p>
            </div>
            <div className='div4'>
            <MdOutlineBedroomParent id="bedroom"/><h3>3</h3><h3 style={{color:"gray"}}>Bedrooms</h3><br></br>
            </div>
            <div className='div5'>dd</div>
        </div>
    )
}
export default Div