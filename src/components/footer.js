import React, { useState } from 'react';

import emailicon from './pics/SVG/emailicon.svg';
import linkedinicon from './pics/SVG/linkedinicon.svg';
import githubicon from './pics/SVG/githubicon.svg';



function SocialsButton(props) {
    let content = [];
    const type=props.type;
    const [isShown, setisShown] = useState(false);
    const [isClicked, setisClicked] = useState(false);
    function copy() {
        navigator.clipboard.writeText('cguo02@risd.edu');
        setisClicked(true);
    }

    function mouseleave() {
        setisShown(false); setisClicked(false)
    }

    // {(type == 'email') &&
    // content.push(
    //         <div onMouseEnter={() => setisShown(true)}
    //             onMouseLeave={() => setisShown(false)}
    //             style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

    //             <img src={emailicon} alt='email'
    //                 onClick={() => {navigator.clipboard.writeText('cguo02@risd.edu')}}
    //                 className={isShown ? "socialshover socials" : 'socials'}/>
    //             {isShown && (
    //                 <div style={{color: 'black', fontSize: '1.5vw', position: 'absolute', width: '7vw', height: '7vw'}}>
    //                     <div>COPY</div>
    //                 </div>
    //             )}

    //         </div>


    // )}

    {(type == 'email') &&
    content.push(
            <div onMouseEnter={() => setisShown(true)}
                onMouseLeave={() => mouseleave()}
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

                <img src={emailicon} alt='email' className='socials'/>
                <div className={isShown ? 'opacityon' : 'opacityoff'}
                    style={{color: 'white', fontSize: '1.5vw', position: 'absolute', width: '7vw', height: '7vw', borderRadius: '50%', backgroundColor: '#BB89BD', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    onClick={() => copy()} >

                    <div style={{transition: '.7s'}}> {isClicked ? 'copied!' : 'copy'} </div>
                </div>

            </div>


    )}




    {(type == 'linkedin') &&
    content.push(
        <>
            <img src={linkedinicon} alt='linkedin' onClick={() => window.open("https://www.linkedin.com/in/claguo/", "_blank")} className='socials' />
        </>
    )}

    {(type == 'github') &&
    content.push(
        <>
            <img src={githubicon} alt='github' onClick={() => window.open('https://github.com/claguo', "_blank")} className='socials' />
        </>
    )}
    return content;
}

function Footer() {
    return (
        <div style={{paddingBottom: '4vw'}}>
            <hr />
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <SocialsButton type='email' />
                <SocialsButton type='linkedin' />
                <SocialsButton type='github' />
                <SocialsButton type='email' />
                <SocialsButton type='linkedin' />
                <SocialsButton type='github' />
                <SocialsButton type='email' />
            </div>
            <hr />
            <div style={{ color: '#323135', fontSize: '1.5vw', textAlign: 'center', padding: '3vw 0 0' }}>
                Designed and built by me, Claire :)
            </div>
        </div>
    )

}

export default Footer