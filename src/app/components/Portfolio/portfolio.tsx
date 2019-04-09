import * as React from 'react';
import './portfolio.scss'
import PortfolioCard from '../PortfolioCard'

import * as API from '../../../API'

const Portfolio = () => {

  const [projects, setProjects] = React.useState([]);
  const portfolioRef = React.useRef(null);


  React.useEffect(()=>{
    API.getProjects().then((data) => {setProjects(data)});
  },[])

    return(
      <div className='portfolio-wrapper' ref={portfolioRef}>

          {projects.map((e => <PortfolioCard key={e.id} site={e.site}  name={e.name} pic={e.files[0]} code={e.code} about={e.about}/>)}
      </div>
    )
}

export default Portfolio;
