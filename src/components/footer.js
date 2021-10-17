import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import emailicon from './pics/SVG/emailicon.svg';
import linkedinicon from './pics/SVG/linkedinicon.svg';
import githubicon from './pics/SVG/githubicon.svg';

function EmailButton() {
    const [isShown, setisShown] = useState(false);
    const [isClicked, setisClicked] = useState(false);

    function copy() {
        navigator.clipboard.writeText('cguo02@risd.edu');
        setisClicked(true);
    }

    function mouseleave() {
        setisShown(false); setisClicked(false)
    }

    return (
        <div onMouseEnter={() => setisShown(true)}
        onMouseLeave={() => mouseleave()}
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

        <img src={emailicon} alt='email' className='socials'/>
        <div className={isShown ? 'opacityon' : 'opacityoff'}
            style={{color: 'white', fontSize: '1vw', position: 'absolute', width: '4vw', height: '4vw', borderRadius: '50%', backgroundColor: '#BB89BD', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            onClick={() => copy()} >

            <div style={{transition: '.7s'}}> {isClicked ? 'copied!' : 'copy'} </div>
        </div>
        </div>
    )
}

function GithubButton(){
    return (
    <img src={githubicon} alt='github' onClick={() => window.open('https://github.com/claguo', "_blank")} className='socials' />
    )
}

function LinkedinButton(){
    return (
    <img src={linkedinicon} alt='linkedin' onClick={() => window.open("https://www.linkedin.com/in/claguo/", "_blank")} className='socials' />
    )
}

function Footer() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '9vw 0 4vw'}}>
            <hr style={{width: '3vw'}}/>
            <div style={{ color: '#323135', fontSize: '1.5vw', textAlign: 'center' }}>
                Designed and built by me, <Link to='/about' className= 'hoveropacity' style={{textDecoration: 'none', color: '#BB89BD'}}><b>Claire</b></Link> :)
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '.5vw'}}>
                <EmailButton />
                <GithubButton />
                <LinkedinButton />
            </div>

        </div>
    )

}

export default Footer