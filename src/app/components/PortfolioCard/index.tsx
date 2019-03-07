import * as React from 'react';
require('./index.scss');

import {gitpic} from '../../../assets/devIcons'

const PortfolioCard = (props) =>
<div className='wide'>
  <img id='portfolio-pic' src={props.pic} />
  <h1 id='project-title'><a href={props.site} target="_blank">{props.name}</a><a href={props.code} target="_blank"><img id="project-link-git" src={gitpic}/></a></h1>
  <h2 id="project-description">{props.about}</h2>
</div>



export default PortfolioCard;
