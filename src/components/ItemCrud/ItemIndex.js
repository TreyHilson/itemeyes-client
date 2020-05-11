import React, { Component } from 'react'

// Import Axios:
import axios from 'axios'
// Import apiConfig:
import apiUrl from '../../apiConfig'

class ItemIndex extends Component {
  constructor () {
    // Call the constructor on `Component` (the parent class)
    super()

    this.state = {
      items: null
    }
  }

  componentDidMount () {
    // Run once, when the component mounts
    // This is where our API request will go
    axios({
      url: `${apiUrl}/items`,
      method: 'get'
    })
      .then(res => {
        console.log(res)
        this.setState({ items: res.data.items })
      })
      .catch(err => {
        this.props.msgAlert({
          heading: 'items List failed to load',
          message: err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    // Destructure things from state:
    const { items } = this.state
    console.log('this is items state', this.state)
    let itemJSX
    // 3 states:
    // if items is `null`, we are loading
    if (!items) {
      itemJSX = <img src="https://media.giphy.com/media/cMQopWp5e3YyP1lMrc/giphy.gif"/>
    } else if (items.length === 0) {
      // If the array of items is empty, we have no items to show
      itemJSX = 'No items yet, go make some!'
    } else {
      // Otherwise, display the items
      const itemsList = items.map(item => (
        <li key={item.id}>
          <h3>{item.name}</h3>
          <p>Info: {item.info}</p>
          <p>Price:$ {item.budget}</p>
          <p>Item Image:</p>
          <p><img src={item.imageurl}/></p>
        </li>
      ))

      itemJSX = (
        <ul>
          {itemsList}
        </ul>
      )
    }
    return (
      <React.Fragment>
        <h1>Items Page</h1>
        {itemJSX}
      </React.Fragment>
    )
  }
}

export default ItemIndex
