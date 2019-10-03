import React from 'react';
import {Link} from 'react-router-dom';
import './StarShipInfo.css'
const StarShipInfo = (props) => {
    const {name, model,starship_class} = props.location.state.results;
return (
    <div className='info'>
        <h3>Name: {name}</h3>
        <p>Model: {model}</p>
        <p>Class: {starship_class}</p>
        <Link to='/'>Return</Link>
    </div>
    
)
}
export default StarShipInfo;