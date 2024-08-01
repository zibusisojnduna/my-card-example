import { useState } from "react"

function StateVariable(){
    let count = 0

    function SetCount(num){
        count = num
    }

    SetCount()

    const [list,setlist] = useState (0)

    // list = ["Tom", "Jerry", "Paul"]

    function ChnageList(){
        if(list){
            setlist()
        }
    }

    return(
        <div style={{backgroundColor:"green"}}><p>hi</p></div>
    )
}
export default StateVariable