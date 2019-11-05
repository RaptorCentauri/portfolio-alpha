import * as React from 'react';
import "./aboutme.scss"
//@ts-ignore
import profilePic from './assets/images/profile_img.jpg'



const AboutMe = (props) => {

  const aboutMe =
  `Driven by curiosity, I am avid learner and always seeking unconventional solutions to existing problems.  This has led me to explore my fascination of the interactions between people and technology. With two years of JavaScript development experience, I combine analytical and logical approaches to deliver solutions that are attractive end-users and developers alike. Additionally, I leverage my excellent communication skills to bridge the gap of understanding between those with non-technical backgrounds and developers. I consider the strongest interfaces to be the ones that come naturally to the user, as if they have always been a part of his or her life.  When not coding you can find me hiking in a nearby forest, playing video games, or just spending time with friends. Additionally, as a classically trained singer, I have sung in languages such as French, Spanish, and Italian.
`


  return (
      <div className='aboutme-styles'>
          <img className='mypic'src={profilePic} alt="profile-pic"/>
          <h1 className='myName'>Dave Leo Shilander</h1>
          <p className="profileAbout">{aboutMe}</p>
      </div>
  );
}

export default AboutMe;
