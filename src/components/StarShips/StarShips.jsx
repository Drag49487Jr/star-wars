import React from 'react';
import './StarShips.css';
import {Link} from 'react-router-dom';

const StarShips = (props) => {
    return(
        
        <div className='starShips'>
            {props.results.map((starship,idx) => <Link className='link' key={idx} to={{pathname:`/starshipinfo/${idx}`, state: {results: starship}}}><div className='box'key={idx}> {starship.name}</div></Link>)}
        </div>
    )
}



export default StarShips;