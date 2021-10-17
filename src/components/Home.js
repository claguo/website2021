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

const idprojects=  layouts.filter(project => project.section === 'id');
const gdprojects=  layouts.filter(project => project.section === 'gd');
const faprojects=  layouts.filter(project => project.section === 'fa');
  
    return (
      <>
        <Hero />
        
        <div style = {{ position: 'relative', backgroundColor: '#f6f2ef' }}>

          {/* <div style = {{display: 'flex', justifyContent:'center' }}>
            <img src={scallop} style={{ position: 'absolute', top: '-100px', width: '120%' }} />
          </div> */}

          <div className='sectiontitles' >
            <img src={asteriskicon} alt='asterisk' style={{height: '3vw', margin: '0 2vw'}}/> industrial design & modeling </div>
          <div className='thumbflexbox'>
            {idprojects.map((projects) => {
              return <ProjectCard project={projects} />
            })}
          </div>

          <div className='sectiontitles' >
            <img src={asteriskicon} alt='asterisk' style={{height: '3vw', margin: '0 2vw'}}/> graphic design </div>
          <div className='thumbflexbox'>
            {gdprojects.map((projects) => {
              return <ProjectCard project={projects} />
            })}
          </div>

          <div className='sectiontitles' >
            <img src={asteriskicon} alt='asterisk' style={{height: '3vw', margin: '0 2vw'}}/> illustration & fine arts </div>
          <div className='thumbflexbox'>
            {faprojects.map((projects) => {
              return <ProjectCard project={projects} />
            })}
          </div>


          <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', margin: '9.5vw 7vw 0 6%'}}>
            <div style= {{color: '#323135', fontSize: '1.5vw', display: 'flex', alignItems: 'center', width: '64%'}}>
              <img src={asteriskicon} alt='asterisk' style={{height: '3vw'}}/>
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






  