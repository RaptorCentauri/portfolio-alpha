import * as React from 'react';
import "./aboutme.scss"
//@ts-ignore
import profilePic from './assets/images/profile_img.jpg'



const AboutMe = (props) => {

  const aboutMe =
  `Dave is a full-stack web developer currently living in Chicago, IL.
  He possesses strong problem solving skills, an eye for design, and an excellent work ethic.
  He believes that well maintained code and well designed interfaces are equally important, and strives to demonstrate that in his work.`


  return (
      <div className='aboutme-styles'>
          <img className='mypic'src={profilePic} alt="profile-pic"/>
          <h1 className='myName'>Dave Leo Shilander</h1>
          <p className="profileAbout">{aboutMe}</p>
      </div>
  );
}

export default AboutMe;
