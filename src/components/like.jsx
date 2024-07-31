import { useState } from "react";
import { CiHeart } from "react-icons/ci";

let iconColor = "red"


function Icon(){
const [isLiked, setisLiked] = useState(false)

    function ChangeLike(){
        

        if(isLiked){
            setisLiked(false)
            iconColor = "red"
            console.log("Liked!")
        }

        if(!isLiked){
            setisLiked(true)
            iconColor = "white"
            console.log("Unliked!")
        }
    }

    return(
        <CiHeart color={iconColor} size={30} onClick={ChangeLike} />
    )
}
export default Icon
