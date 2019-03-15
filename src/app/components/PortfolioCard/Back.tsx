import * as React from 'react';
require('./index.scss');

  const Back = ({about, code, site, flipCard, ref}) => {

    const [cardStyle, setCardStyle] = React.useState({});
    const [aboutStyle, setAboutStyle] = React.useState({});
    const aboutRef = React.useRef(null);

  React.useEffect(() => {
      const {clientHeight, clientWidth, scrollHeight} = aboutRef.current

    console.log(clientHeight, scrollHeight)

    if(clientHeight === scrollHeight){
        console.log('no need')
    }
     else{
      console.log('let resize')
      let area = scrollHeight * clientWidth;

      let newUnit = Math.sqrt(area);

      let nHt = (newUnit/ newUnit) * ((88/100) * newUnit);

      console.log(newUnit, nHt)

            console.log('nH is', nHt)



      const resizeText = {
        height: newUnit,
        width: newUnit
      }

        let grr = newUnit + ((10/100) * newUnit)

    const wS = {
      height: grr,
      width: grr

    }
      setAboutStyle(resizeText);
      setCardStyle(wS)

    }


    }, []
  );


    return(
      <div style={cardStyle} className='cardBack' >
        <h2 style={aboutStyle} className="project-description" ref={aboutRef}>{about}</h2>
        <div className="navwrapper">
          <button onClick={flipCard} className="info-button">x</button>

          <a className="project-site" href={site} target="_blank">Site</a>
          <a className="project-source" href={code} target="_blank">Code</a>
          <h4>Card Title</h4>
        </div>
      </div>
    )

}



export default Back
