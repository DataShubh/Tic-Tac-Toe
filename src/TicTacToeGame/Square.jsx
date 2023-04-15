import React from 'react';

const Square = (props)=>{

    return(
        <button onClick = {props.onClick}
            className='container' 
            style = {{
            backgroundColor: "grey",
            border: "2px solid",
            height: "100px",
            width: "400px",
            justifyContent: "center",
            alignItems:" center",
            display: "flex"
        }}>
            {props.value}
        </button>
    )
}

export default Square