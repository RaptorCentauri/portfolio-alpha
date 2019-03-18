import React from 'react';
require('./aboutme.scss');


const AboutMe = (props) => {
    return (
        <div className='aboutme-styles'>

            <img src="../../assets/images/profile_img.jpg" alt="profile-pic"/>

        <div id='aboutme-text'>
            <p>
                My name is Dave Shilander, and I am a full stack web developer.
            </p>
        </div>

        </div>
    );
}

export default AboutMe;
