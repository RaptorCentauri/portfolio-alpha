import * as React from 'react';
import profilePic from '../../../assets/images/profile_img.jpg'
require('./index.scss');


const StayTuned = () =>
  <div id='stay-tuned-wrapper'>
    <h1 id='stay-tuned-greeter'>UNDER CONSTRUCTION! PLEASE STAY TUNED!</h1>
    <img id='stay-tuned-pic'src={profilePic} alt="profile-pic"/>

    <p id='stay-tuned-content'>Hello, my name is Dave Leo Shilander, and I am a full-stack web developer. You are currently viewing a placeholder page for my portfolio. You can follow the code <a href="https://github.com/RaptorCentauri/portfolio-alpha">here</a>. Or click <a href="https://github.com/RaptorCentauri/">here</a> for my Github profile. If you have any questions please feel free to <a href="mailto:dave.leo.shilander@icloud.com">Email Me</a>.I hope that you'll check back soon! Exciting things are coming!</p>
  </div>


export default StayTuned;
