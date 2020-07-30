import React from 'react'

const Button=({prev,next,updateUrl})=> {
    if(prev !== null){
        return(
        <div id="style-button">
        <button id="button"onClick={()=>updateUrl(prev)}>Previous</button>
        </div>
        )
    }
    else{
        return(
            <div id="style-button">
            <button id="button"onClick={()=>updateUrl(next)}>Next</button>
            </div>
        )
    }
}
export default Button;
