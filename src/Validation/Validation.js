import React from 'react'

const Validation=(props)=>{
    let validationMessage='Text is too short'
    if(props.length>=10){
        validationMessage="Text is too long"
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )

}
export default Validation