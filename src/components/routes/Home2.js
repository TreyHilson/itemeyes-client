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

  const whitebox = {
    top: '17vh',
    right: '17vh',
    position: 'fixed',
    display: 'inline',
    justifyContent: 'center',
    backgroundColor: '#ffeefe',
    height: '24vh',
    width: '44vh',
    borderRadius: '10px',
    boxShadow: '5px 10px',
    padding: '8px',
    overflow: 'auto'
  }
  return (
    <div style={styles}>
      <div style={whitebox}>
        <h3 className="gameboy"> Did you know!? </h3>
        <p className="gameboy2">According to research using brain imagery, visualization works because neurons in our brains, those electrically excitable cells that transmit information, interpret imagery as equivalent to a real-life action. </p>
        <a className="gameboy links" href="https://www.huffpost.com/entry/visualization-goals_b_878424" target="blank">
        -Huffpost </a>
      </div>
    </div>
  )
}
export default Home2
