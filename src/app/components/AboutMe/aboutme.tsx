import React from 'react';
require('./aboutme.scss');


const AboutMe = (props) => {
    return (
        <div className='aboutme-styles'>

            <img src="../../assets/images/profile_img.jpg" alt="profile-pic"/>

        <div id='aboutme-text'>
            <p>
                My name is Dave Shilander, and I am a full stack web developer.
                My path here has not been a direct one, but it is a place where both my passion and determination has found a home. 
            </p>

            <p>
                Growing up I was always  fascinated with computers and user interfaces. Without effort I would think, often without meaning, about algorithms, 
                about why certain elements were chosen over others in the design of a software, about how a problem could be solved quickly, and if solving that 
                problem quickly would translate into solving it efficiently. 
                Indeed, computer science was a hobby that has shaped most of my life in some form or another, and for a while that’s all it was, a hobby.
            </p>
        </div>

        </div>
    );
}

export default AboutMe;