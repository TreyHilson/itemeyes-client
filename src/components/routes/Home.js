import React from 'react'
// import SolidButton from '../shared/SolidButton'
// import OutlineButton from '../shared/OutlineButton'
// import { Link } from 'react-router-dom'

const Home = () => {
  const backgroundImageUrl = 'https://media.giphy.com/media/RgbzdO1IN7nB9Grb4G/giphy-downsized.gif'

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100vh',
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const whitebox = {
    top: '8vh',
    left: '10vh',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffeefe',
    height: '20vh',
    width: '40vh',
    borderRadius: '10px',
    boxShadow: '5px 10px',
    padding: '8px'
  }
  return (
    <div style={styles}>
      <div style={whitebox}>
        <h1 className="gameboy"> TESTING </h1>
      </div>
    </div>
  )
}
export default Home
