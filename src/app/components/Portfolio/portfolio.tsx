import * as React from 'react';
require('./portfolio.scss');
import PortfolioCard from '../PortfolioCard/'




class Portfolio extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentIndex: 0,
      arr: this.props.arr
    }
    console.log(this.state)
  }

  // handleNextClick = () =>{
  //     if (this.state.currentIndex < (this.state.arr.length-1)) {
  //         this.setState({ currentIndex: this.state.currentIndex + 1 });
  //     } else {
  //         this.setState({ currentIndex: 0});
  //     }
  // }

// gitClick = (src) => {
//   console.log('src', src)
// }

 // onClick={() => this.gitClick(e.github)}

  handlePrevClick = () => {
      if (this.state.currentIndex === 0) {
          this.setState({currentIndex: this.state.arr.length-1 });
      } else {
          this.setState({currentIndex: this.state.currentIndex - 1 });
      }
  }

  componentDidMount() {
    console.log('port mojnt');
  }


  render(){
    return(
      <div className='portfolio-wrapper'>
           <div id='portfolio-main'>
              {this.state.arr.map(e => <PortfolioCard site={e.site} pic={e.pic} name={e.name} code={e.code} about={e.about}/>)}
           </div>
      </div>
    )
  }

}

export default Portfolio;
