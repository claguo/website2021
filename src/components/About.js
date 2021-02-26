import React from 'react';
import { Link } from 'react-router-dom';

import MailIcon from '@material-ui/icons/MailOutlineSharp';
import InstagramIcon from '@material-ui/icons/Instagram';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import profilepic from './pics/profile.png';
import GitHubIcon from '@material-ui/icons/GitHub';

function About() {
    return (
    <div style={{display: 'flex'}}>

    <img src={profilepic} style={{width: '25%', borderRadius: '15%', margin: '7% 5%'}} alt='profile pic'/>

    <div style={{ fontSize: '4vw', position: 'fixed', width: '66.6667%',
    color: 'thistle', right: '0px' }}>

        <Link to='/' className='abtbutton' style={{ position: 'fixed', color: '#BA8F95', fontSize: '20', top: '15%', right: '5%' }}>
            <HomeIcon />
        </Link>

        <div style={{padding: '20% 5% 5% 0%'}}>
        <div > Hello, I'm Claire! </div>
        <div style={{}}> I'm an undergraduate industrial design student at Rhode Island School of Design. </div>
        </div>
        
        {/* CONTACT BUTTONS */}
        <div style={{display: 'flex', justifyContent: 'space-around', paddingRight: '8%'}}>
            <div style={{textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                <MailIcon style={{fontSize: '20', paddingRight: '2.5%'}} />
                <p style={{color: 'thistle'}}>cguo02@risd.edu</p>
            </div>

            <a href='https://github.com/claguo' rel="noreferrer" target="_blank" className='contactbuttons'
            style={{textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                <GitHubIcon style={{ fontSize: '20', paddingRight: '2.5%'}} />
                <div>github.com/claguo</div>
            </a>

            <a href='https://www.instagram.com/clrguo/' rel="noreferrer" target="_blank" className='contactbuttons'
            style={{textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                <InstagramIcon style={{ fontSize: '20', paddingRight: '2.5%'}} />
                <div>just for fun: @clrguo</div>
            </a>
        </div>
    
    </div>
    </div>
    )
}

export default About;