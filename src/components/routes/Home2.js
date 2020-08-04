import React from 'react'
// import SolidButton from '../shared/SolidButton'
// import OutlineButton from '../shared/OutlineButton'
// import { Link } from 'react-router-dom'

const Home2 = () => {
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

  const whitebox2 = {
    bottom: '4vh',
    display: 'flex: in-line',
    justifyContent: 'center',
    backgroundColor: '#ffeefe',
    borderRadius: '10px',
    boxShadow: '5px 10px',
    padding: '8px',
    overflow: 'auto'
  }
  return (
    <div style={styles}>
      <div style={whitebox2}>
        <h3 className="gameboy"> Welcome to ItemEyes! </h3>
        <p className="gameboy2">Welcome!</p>
      </div>
    </div>
  )
}
export default Home2
