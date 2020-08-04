import React from 'react'
// import SolidButton from '../shared/SolidButton'
// import OutlineButton from '../shared/OutlineButton'
// import { Link } from 'react-router-dom'

const Home = () => {
  const backgroundImageUrl = 'https://media.giphy.com/media/6CiIHzivbQmPu/200w_d.gif'

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  const whitebox = {
    bottom: '56vh',
    position: 'fixed',
    display: 'flex: in-line',
    justifyContent: 'center',
    backgroundColor: '#ffeefe',
    borderRadius: '10px',
    boxShadow: '5px 10px',
    padding: '8px',
    overflow: 'auto',
    opacity: '0.8'
  }
  return (
    <div style={styles}>
      <div style={whitebox}>
        <h3 className="gameboy"> Welcome to ItemEyes! </h3>
        <p className="gameboy2">A digital tool to help you store & visualize all the items on your wishlist!</p>
      </div>
    </div>
  )
}
export default Home
