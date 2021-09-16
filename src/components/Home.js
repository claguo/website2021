import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';

import ProjectCard from './ProjectCard.js';
import layouts from './layouts';
import Footer from './footer';

import berryicon from './pics/SVG/strawberry.svg';
import tulipicon from './pics/SVG/tulip.svg';
import asteriskicon from './pics/SVG/asterick.svg';
import bearicon from './pics/SVG/bear.svg';
import flowericon from './pics/SVG/flower.svg';

import arrowright from './pics/SVG/arrowright.svg';

function SwitchImage(){
 
  let [count, setCount] = useState(0);
  const imgs= [
    bearicon,berryicon,tulipicon,asteriskicon,flowericon
  ]
  const length = imgs.length-1

  useEffect(() => {

    const interval=setInterval(() => {

      if (count === length) {
        setCount(0);
      }
      else {
        setCount(count+1);
      }
    },1000)

    return () => clearInterval(interval)
  },[count]);

  return (
    <img src={imgs[count]} alt='icon' style={{ height: '3vw', margin: '1vw' }}/>  )
}

function Hero() {
    return (
      <div style={{ textAlign: 'center', height: '100vh', fontSize: '4vw', letterSpacing: '.15vw',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <SwitchImage />
        <span style={{margin: '2vw'}}> claire guo </span>
        <span> art & design </span>
      </div>
    )
  }

function Home() {
    return (
      <>
        <Hero />
        
        <div style = {{ position: 'relative', backgroundColor: '#f6f2ef' }}>

          {/* <div style = {{display: 'flex', justifyContent:'center' }}>
            <img src={scallop} style={{ position: 'absolute', top: '-100px', width: '120%' }} />
          </div> */}

          <div style={{ display: 'flex', alignItems: 'center', fontSize: '4vw', padding: '10% 4% 0', color: '#323135' }}>
            <img src={asteriskicon} alt='asterisk' style={{height: '5vw', margin: '2vw'}}/> projects </div>

          <div className='flexbox' style={{color:'black', marginBottom: '15%'}}>
            {layouts.map((layout) => {
              return <ProjectCard project={layout} />
            })}
          </div>

{/* RESUME */}
          {/* <div style={{ display: 'flex', alignItems: 'center', fontSize: '4vw', padding: '18% 4% 5%', color: '#323135' }}>
            <img src={asteriskicon} alt='asterisk' style={{height: '5vw', margin: '2%'}}/>
            ABOUT
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '6%' }} >
            {resume.map((item) => {
              return (
                <div style={{ display: 'flex', color:'#323135', margin: '1% 5%', width: '50%' }}>

                  <span style= {{ marginTop: '.3vw', fontSize: '1.5vw', width: '20%', textAlign: 'right' }}>{item.dates}</span>

                  <div style={{ display: 'flex', flexDirection: 'column', fontSize: '2vw', marginLeft: '3%' }}>
                    <span style={{ fontWeight: 'regular' }}>{item.company}</span>
                    <span>{item.position}</span>
                  </div>

                </div>
              )
            })}
          </div> */}
          <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', margin: '0% 7% 6% 6%'}}>
            <div style= {{color: '#323135', fontSize: '1.5vw', display: 'flex', alignItems: 'center', width: '64%'}}>
              <img src={asteriskicon} alt='asterisk' style={{height: '5vw'}}/>
              <div style= {{marginLeft: '2vw'}}>Thank you so much for visiting! Please feel free to reach out to me anytime through email or LinkedIn (linked below). </div>
            </div>

            <Link to='/about' className='button' style={{textDecoration: 'none', justifyContent: 'center', width: '20%', height: '4vw', fontSize: '1.5vw'}} >
              More about me
              <img src={arrowright} alt='arrow icon' style={{width: '1.5vw', marginLeft: '.8vw'}} />
            </Link>
          </div>

          <Footer />

        </div>
        </>
    )
  }

  export default Home;






  