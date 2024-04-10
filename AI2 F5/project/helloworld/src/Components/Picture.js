import React from 'react';

const Picture = (props) => {
    return ( 
        <div className='picture'> 
            <img alt='Whatever' src={props.src} style={{ width: '10%', height: 'auto' }} /> {/* Apply styles here */}
      {props.children}
        </div> 
    ) 
} 

export default Picture;