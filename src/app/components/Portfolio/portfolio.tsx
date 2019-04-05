import * as React from 'react';
import './portfolio.scss'
import PortfolioCard from '../PortfolioCard'

import * as API from '../../../API'

const Portfolio = () => {

  const [projects, setProjects] = React.useState([]);
    const portfolioRef = React.useRef(null);

// const listenScroll = () => {
//   // console.log('portfolioRefSCROLL', portfolioRef.current.getBoundingClientRect().y);
//   if(portfolioRef.current.getBoundingClientRect().y <= 10 ){
//     console.log('scrolling near top')
//   }
// }


  React.useEffect(()=>{
    API.getProjects().then((data) => {setProjects(data)});
    // window.addEventListener('scroll', listenScroll);
    // return () => {
    //       window.removeEventListener('scroll', listenScrollEvent);
    //     }
    console.log('portfolioRef', portfolioRef.current.getBoundingClientRect().y);
    console.log('portfolioRef', portfolioRef)
  },[])

    return(
      <div className='portfolio-wrapper' ref={portfolioRef}>
          {projects.map((e => <PortfolioCard key={e.id} site={e.site}  name={e.name} pic={e.files[0]} code={e.code} about={e.about}/>)}
      </div>
    )
}

export default Portfolio;
