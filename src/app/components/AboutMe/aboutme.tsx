import * as React from 'react';
require('./aboutme.scss');
import profilePic from "./assets/images/profile_img.jpg"


const AboutMe = (props) => {
    return (
        <div className='aboutme-styles'>

            <img className='mypic'src={profilePic} alt="profile-pic"/>

            <h1 className='myName'>Dave Leo Shilander</h1>

            <p className="profileAbout">
              Lorem ipsum dolor sit amet consectetur adipiscing elit egestas eget, erat primis enim imperdiet ac fusce platea purus aliquet, habitasse aliquam scelerisque eleifend metus malesuada conubia mollis. Ligula in urna tempor ante luctus parturient risus orci curabitur, scelerisque varius vitae nisl blandit fusce tincidunt phasellus curae consequat, elementum etiam suspendisse vehicula faucibus purus taciti eget. Vitae habitant venenatis non a sociis libero suscipit odio tortor quis, mauris quisque auctor pulvinar id vel etiam dignissim nascetur, varius porttitor tempor class dis himenaeos orci nulla convallis.Lectus etiam vel imperdiet ut potenti porta porttitor laoreet, dis eros nascetur platea tempus a aenean, ullamcorper odio pharetra morbi est mattis ridiculus. Libero cras magnis arcu laoreet imperdiet nec massa enim eros, class dictum non euismod penatibus platea sed integer, nisl potenti purus gravida posuere dui orci iaculis. Posuere vitae pulvinar diam suspendisse interdum cubilia suscipit, penatibus hendrerit pellentesque fermentum feugiat tortor varius cum, orci pretium donec urna augue faucibus.Lorem ipsum dolor sit amet consectetur adipiscing elit egestas eget, erat primis enim imperdiet ac fusce platea purus aliquet, habitasse aliquam scelerisque eleifend metus malesuada conubia mollis. Ligula in urna tempor ante luctus parturient risus orci curabitur, scelerisque varius vitae nisl blandit fusce tincidunt phasellus curae consequat, elementum etiam suspendisse vehicula faucibus purus taciti eget. Vitae habitant venenatis non a sociis libero suscipit odio tortor quis, mauris quisque auctor pulvinar id vel etiam dignissim nascetur, varius porttitor tempor class dis himenaeos orci nulla convallis.Lectus etiam vel imperdiet ut potenti porta porttitor laoreet, dis eros nascetur platea tempus a aenean, ullamcorper odio pharetra morbi est mattis ridiculus. Libero cras magnis arcu laoreet imperdiet nec massa enim eros, class dictum non euismod penatibus platea sed integer, nisl potenti purus gravida posuere dui orci iaculis. Posuere vitae pulvinar diam suspendisse interdum cubilia suscipit, penatibus hendrerit pellentesque fermentum feugiat tortor varius cum, orci pretium donec urna augue faucibus.
            </p>

        </div>
    );
}

export default AboutMe;
