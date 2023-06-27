import React from 'react';
const Header = ()=>{
    return (
        <div className="ui fixed menu" style={{display:"flex",justifyContent:"center",height:"5vh",alignItems:"center",flexDirection:"column"}}>
            <div className="ui container center">
                <h2>Contact Manager</h2>
            </div>
        </div>
    )
}

export default Header;