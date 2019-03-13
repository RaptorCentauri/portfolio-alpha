import * as React from 'react';
require('./portfolio.scss');
import PortfolioCard from '../PortfolioCard'




class Portfolio extends React.Component{
  constructor(props: any){
    super(props)
    this.state = {
      arr: this.props.arr
    }
  }


  render(){
    return(
      <div className='portfolio-wrapper'>
              {this.state.arr.map((e => <PortfolioCard key={e.id} site={e.site} pic={e.pic} name={e.name} code={e.code} about={e.about}/>)}
      </div>
    )
  }

}

export default Portfolio;
