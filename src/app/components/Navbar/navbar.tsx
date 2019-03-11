import * as React from 'react';
require('./navbar.scss');


const Navbar = (props) => {
    return(
        <div className='navbar-styles'>
            <ul>
                <li onClick={() => props.setActiveWindow('About Me')}>About Me</li>
                <li onClick={() => props.setActiveWindow('Portfolio')}>Portfolio</li>
                <li onClick={() => props.setActiveWindow('Contact')}>Contact</li>
                {/* <li onClick={() => props.setActiveWindow('Blog')}>Blog</li> */}
                <li onClick={() => props.setActiveWindow('Resume')}>Resume</li>
            </ul>
        </div>
    );
}

export default Navbar;
