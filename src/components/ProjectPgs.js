import React from 'react'; 
import {useParams, Link} from 'react-router-dom';
import layouts from "./layouts";

import ArrowBack from '@material-ui/icons/ArrowBackIos';
import ArrowForward from '@material-ui/icons/ArrowForwardIosOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import AboutIcon from '@material-ui/icons/AccountCircleOutlined';


function ProjectPg(props) {

  const LinkMatch = (layout) => {
    return layout.link === params.id
  }

  const params = useParams();
  const num = layouts.findIndex(LinkMatch);
  console.log(num);
  let project = layouts[num];

  return (
    <div style={{backgroundColor:'#f6f2ef' }}>


      <div style={{
        position: 'fixed',
        width: '23.3333%', 
        color: '#323135',
        padding: '5%' }}>
        <div style={{position: 'absolute', top: '1rem', right: '5%', display: 'flex', alignItems: 'center', width: '12%', justifyContent: 'space-between' }}>
        <Link to='/about'>
          <AboutIcon className='abtbutton' style={{color: '#BA8F95', fontSize: '20'}}/>
        </Link>
        <Link to='/'>
          <HomeIcon className='abtbutton' style={{color: '#BA8F95', fontSize: '22'}}/>
        </Link>
        </div>
        <h1 style={{fontSize: '3.5vw'}}>{project.title}</h1>
        <p style={{fontSize: '1.25vw'}}>made with: {project.mats}</p>
        <p style={{fontSize: '1.25vw'}}>{project.year}</p>
        <p>{project.desc1}</p>
        <p>{project.desc2}</p>
        <a className='exturl' href={project.exturl} rel="noreferrer" target="_blank">{project.desc3}</a>

        {/* PREV/NEXT */}
      {(num !== 0) &&
        <Link
          to={ '/projects/' + layouts[num-1].link } className='abtbutton'
          style={{
            position: 'fixed', bottom: '3%', left: '3%',
            display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#BA8F95', fontFamily: 'Montserrat' }}>
          <ArrowBack style={{fontSize: '15'}} />
          <span style={{marginBottom: '.15rem'}}>previous</span>

        </Link>
      }
      {(num !== layouts.length-1) &&
        <Link
          to={ '/projects/' + layouts[num+1].link } className='abtbutton'
          style={{
            position: 'fixed', bottom: '3%', right: '70%',
            display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#BA8F95', fontFamily: 'Montserrat' }}>
          <span style={{marginRight: '.4rem', marginBottom: '.15rem'}}>next</span>
          <ArrowForward style={{fontSize: '15'}} />
        </Link>
      }
      </div>  

{/* IMAGES */}
      <div style={{ backgroundColor:'#323135', display: 'flex', flexDirection: 'column', width: '66.6667%', position: 'relative', left: '33.3333%' }}>
      {project.imgs.map((img) => {
        return (
          <img src={img} alt={project.title} style={{width: '100%'}}/>
        )
      })}
      {(project.fullimg !== undefined) &&
          <img src={project.fullimg} style={{height: '100vh', objectFit: 'contain'}} alt={project.title}/>
      }
      </div>



    </div>
  )
  
}


export default ProjectPg;