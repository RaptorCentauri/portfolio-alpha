import './contact.scss';

import * as React from 'react';

import SVG from 'react-inlinesvg'

import resume from './Resume.pdf'
import resumeSVG from './resumePure.svg'
import emailSVG from './emailPure.svg'
import gitSVG from './github.svg'


const Contact = (props) =>
  <div className="contact-styles">
    <a href="mailto:dave.leo.shilander@icloud.com?Subject=Hello%20again" target="_top">
      <SVG className={"email-icon"} src={emailSVG}></SVG>
    </a>

    <a href={resume} target="_blank">
      <SVG className={"resume-icon"} src={resumeSVG}></SVG>
    </a>

    <a href='https://github.com/RaptorCentauri' target="_blank">
      <SVG className={"git-icon"} src={gitSVG}></SVG>
    </a>





  </div>


export default Contact;
