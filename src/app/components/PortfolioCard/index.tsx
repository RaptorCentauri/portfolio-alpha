import * as React from 'react';
require('./index.scss');


const Front = ({pic, name, flipCard}) =>
    <div className='cardFront'>
      <img id='portfolio-pic' src={pic} />
      <h1 id='project-title'>{name}</h1>
      <button onClick={flipCard} className="info-button">i</button>
    </div>

const Back = ({about, code, site, flipCard}) =>
    <div className='cardBack'>
      <h2 className="project-description">{about}</h2>
      <a className="project-site" href={site} target="_blank">Site</a>
      <a className="project-source" href={code} target="_blank">Code</a>
      <button onClick={flipCard} className="info-button">i</button>
    </div>




class PortfolioCard extends React.Component<any, any>{
  constructor(props: any){
    super(props)
    this.state = {
      flip: false
    }
  }

flipCard = () => this.setState({flip: !this.state.flip})


render(){
  const {about, code, site, pic, name} = this.props;

  return(
    <div>
        {this.state.flip ? <Back about={about} code={code} site={site} flipCard={this.flipCard} /> : <Front pic={pic} name={name} flipCard={this.flipCard}/>}
    </div>
  )
}

}

export default PortfolioCard;
