import React from 'react';
require('./titlebarMobile.scss');


const Titlebar = (props) => {
    return (
        <div className='titlebar-styles'>
          {props.title}
        </div>
    );
}

export default Titlebar;