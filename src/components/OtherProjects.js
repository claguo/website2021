import React, {useState} from 'react';



function OtherProjects() {
    const [is3D, setIs3D] = useState(true)

    return (
        <div style = {{ position: 'relative', backgroundColor: '#E7D9E4' }}>
        <div style={{ textAlign: 'center', fontSize: '3.5vw', padding: '10% 0% 5%', color: '#323135' }}>
            other projects
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
            <button
                onClick={() => setIs3D(true)}
                className= { !is3D ? 'buttons' : 'buttons clickedbuttons' }>
                3d
            </button>

            <button
                onClick={() => setIs3D(false)}
                className= { !is3D ? 'buttons clickedbuttons' : 'buttons' }>
                2d
            </button>
        </div>

        {/* <div>
            {is3D === true && (
                <div className='flexbox'>
                    <ProjectCard
                        src={snake}
                        title='Snake'
                        id='9'
                    />
                    <ProjectCard
                    src={boxes}
                    title='Boxes'
                    id='7'
                    />
                    <ProjectCard
                        src={mimesis}
                        title="Rice Krispie Mimesis"
                        link="mimesis"
                        id='8'
                    />
                </div>
            )} 
            {is3D === false && (
                <div className='flexbox'>
                    <ProjectCard
                       src={newyear}
                       title="Guo Family Greeting Card"
                       id='6'
                    />
                    <ProjectCard
                       src={dad}
                       title="Primary"
                       id='10'
                    />
                </div>
            )}   
        </div>  */}
        </div>

    )
}


// function Switch(is3D) {
//     switch (is3D) {
//         case true:
//                 <ProjectCard
//                     src={fish}
//                     title='installation'
//                 />
            
//         case false :
//             return (
//                 <ProjectCard
//                     src={pattern}
//                     title='painting'
//                 />
//             )
//         default:
//             return (null)
//     }
// }

export default OtherProjects;