import React from 'react'
import '../App.css'; // Use relative path for imports

export const HomePage = () => {
    const home=  {
        overflow: 'hidden',
        position: 'relative',
    }
    const mediaStyle = {
        zIndex: 0,
        display: 'flex',
        justifyContent:'end',
        position: 'absolute',
        bottom: '5%',
        right: '5%',
        width: '100vw',
        height: '10vh',
        
    }

    const mediaIcon = {
        backgroundColor:'transparent',
        width: '5%',
        height: '90%',
        marginLeft: '1%',
        marginTop: '1%',
        border: 'none',
        cursor: 'pointer',
    }
    


    const background = {
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        top: 0,
        bottom: 0,
        backgroundColor: null,
    }

    const mediaImage = {
        width: '85%',
        height: '85%',
        

    }
    
    const navigationMenu = {
        textAlign: 'center',
        zIndex: 0,
        position: 'absolute',
        top: '10%',
        left: '3%',
        width: '25vw',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    }
    const cushion = {
        marginRight: "2%",
    }

    const headerStyle = {
        color: 'white',
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '1.5vw',
    }
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
    }

    const profilePicture = {
        zIndex: 0,
        top: '23%',
        left: '30%',
        position: 'absolute',

        width: '25vw',
        height: '47vh'
    }
    const aboutMe = {
        textAlign: 'center',
        zIndex: 0,
        top: '25%',
        left: '60%',
        position: 'absolute',
        width: '35vw',
        height: '45vh',

    }

    const strongHeading = {
        color: 'white',
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '3vw',
    }
    
    const secondHeading = {
        color: 'white',
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '1.5vw',
    }

    const normalText = {
        color: 'white',
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '1.25vw',
    }

  return (
    <div style = {home} className='home'>
        <img style = {background} className='background' src={process.env.PUBLIC_URL + '/SpaceBackground2.png'} alt='background'/>
        <div style= {mediaStyle} className='mediaIcons'>
            <div style ={cushion}></div>
            <button link='' style = {mediaIcon} type='button' className='mediaIcon'>
                <img src={process.env.PUBLIC_URL + '/githublogo.webp'} style= {mediaImage}></img>
            </button>
            <button link='' style = {mediaIcon} type='button' className='mediaIcon'>
                <img src={process.env.PUBLIC_URL + '/devpostlogo.webp'} style= {mediaImage}></img>
            </button>
            <button link='' style = {mediaIcon} type='button' className='mediaIcon'>
                <img src={process.env.PUBLIC_URL + '/linkedinlogo.webp'} style= {mediaImage}></img>
            </button>
            <button link='' style = {mediaIcon} type='button' className='mediaIcon'>
                <img src={process.env.PUBLIC_URL + '/instagramlogo.webp'} style= {mediaImage}></img>
            </button>
            <button link='' style = {mediaIcon} type='button' className='mediaIcon'>
                <img src={process.env.PUBLIC_URL + '/youtubelogo.webp'} style= {mediaImage}></img>
            </button>

        </div>
        <div style = {navigationMenu} className ='navigationMenu'>
            <h1 style={headerStyle}><a style={linkStyle} href=''>Home</a></h1>
            <h1 style={headerStyle}><a style={linkStyle} href=''>Portfolio</a></h1>
            <h1 style={headerStyle}><a style={linkStyle} href=''>Skills</a></h1>
            <h1 style={headerStyle}><a style={linkStyle} href=''>Mentoring</a></h1>
            <h1 style={headerStyle}><a  style={linkStyle} href=''>Startup</a></h1>
            <h1 style={headerStyle}><a style={linkStyle} href=''>Blog</a></h1>
            <h1 style={headerStyle}><a style={linkStyle} href=''>Got Projects?</a></h1>
        </div>

        <img style= {profilePicture} className ='profilePicture' src={process.env.PUBLIC_URL + '/harshghibil.webp'}/>
        
        <div style = {aboutMe} className ='aboutMe'>
            <h1 style={strongHeading}>HARSH JINDAL</h1>
            <hr></hr>
            <h2 style={secondHeading}>Founder of BlockState&copy;</h2>
            <p style={normalText}>Hey! I am Harsh, an aspiring techpreneur. I am passionate about finding innovative solutions to global issues. I specialise in technologies such as Computer Vision, Blockchain, and Natural Language Processing.</p>
        </div>

    </div>
  )
}
