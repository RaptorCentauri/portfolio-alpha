import './contact.scss';

import * as React from 'react';

import SVG from 'react-inlinesvg'

//@ts-ignore
import resume from './Resume.pdf'
//@ts-ignore
import resumeSVG from './resumePure.svg'
//@ts-ignore
import emailSVG from './emailPure.svg'
//@ts-ignore
import gitSVG from './github.svg'
//@ts-ignore
import linkedinSVG from './linkedin.svg'



const Contact = (props) =>
  <footer>
    <a href="mailto:dave.leo.shilander@icloud.com?Subject=Hello%20again" target="_top">
      <SVG className={"email-icon"} src={emailSVG}></SVG>
    </a>

    <a href={resume} target="_blank">
      <SVG className={"resume-icon"} src={resumeSVG}></SVG>
    </a>

    <a href='https://github.com/RaptorCentauri' target="_blank">
      <SVG className={"git-icon"} src={gitSVG}></SVG>
    </a>

    <a href='https://www.linkedin.com/in/dave-leo-shilander/' target="_blank">
      <SVG className={"git-icon"} src={linkedinSVG}></SVG>
    </a>

  </footer>


export default Contact;
