import React from 'react';
import PropTypes from "prop-types";

const Profile= props=>{
// props.y(props.fullName)
const imgstyle={width:'400px'}
    return(
    <div style={{display:'flex'}}>
        <img style={imgstyle} src={props.imgSource}/>
        <div style={{padding:'0 50px'}}>
            <h1 style={{padding:'0 -10px'}}> {props.fullName}</h1>
            <h2 style={{color:'DarkSlateGray'}}>{props.profession}</h2>
            <p style={{color:'gray', textAlign:'justify'}}>{props.bio}</p>
            <br></br>
            <button style={{width:'80%', height:'50px',fontSize:'18pt', color:'Ivory', backgroundColor:'RoyalBlue'}} 
            onClick={()=>props.name(props.fullName)}>Click</button>
        </div>
    </div>
)}
   Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    }; 
export default Profile


