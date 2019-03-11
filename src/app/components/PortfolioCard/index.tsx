import * as React from 'react';
require('./index.scss');

import {gitpic} from '../../../assets/devIcons'



class PortfolioCard extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      visible: false
    }
  }


changeVisible = () => this.state.visible ? this.setState({visible: false}) : this.setState({visible: true})



render(){
  const {visible} = this.state
  const {pic, site, name, code, about} = this.props

  return(
    <div  onClick={this.changeVisible} className='cardStyle'>
      <div className='simpleInfo'>
        <img id='portfolio-pic' src={pic} />
        <h1 id='project-title'><a href={site} target="_blank">{name}</a><a href={code} target="_blank"><img id="project-link-git" src={gitpic}/></a></h1>
      </div>
      {visible ? <h2 id="project-description">{about}</h2> : null}
    </div>
  )
}

}


export default PortfolioCard;
