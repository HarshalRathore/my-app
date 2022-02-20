import React from "react";

export const Login = () => {
    const h1 = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#2c3e50',
        textAlign: 'center',
        paddingTop: '5rem',
        paddingRight: '10rem',
        paddingLeft: '10rem',
    }
    const h1div = {
        width: '100%',
        height: '91vh',
        backgroundColor: '#bcbcfc',
    }
    return (
        <div style={h1div} >
            <h1 style={h1} >Howdy there you have entered the <span style={{color: "green"}}>Login page</span>. Sorry for the lack of CSS and finishing in this assingment</h1>
        </div>
    )
}