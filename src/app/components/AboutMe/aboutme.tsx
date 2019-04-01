import * as React from 'react';
import "./aboutme.scss"
import profilePic from "./assets/images/profile_img.jpg"
import aboutMeText from "./assets/content/aboutMeText"

const AboutMe = (props) => {
    return (
        <div className='aboutme-styles'>
            <img className='mypic'src={profilePic} alt="profile-pic"/>
            <h1 className='myName'>Dave Leo Shilander</h1>
            <p className="profileAbout">{aboutMeText}</p>
        </div>
    );
}

export default AboutMe;
