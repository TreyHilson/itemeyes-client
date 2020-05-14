import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
      method: 'get',
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      }
    })
      .then(res => {
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
    // console.log('this is items state', this.state)
    // console.log('this is items user token', this.props.user.token)
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
      itemJSX = (
        <div>
          <ul>
            {items.map(item => (
              <Link to={`/items/${item.id}`} key={item.id}>
                <div className="itemIndex" key={item.id}>
                  {item.name}
                  <p><img src={item.imageurl}/></p>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div>
        <img className="icon" src="https://media.giphy.com/media/6CiIHzivbQmPu/200w_d.gif"/>
        <h1 className="gameboy3">Items Page</h1>
        <br/>
        <br/>
        <div className="gameboy2">  {itemJSX} </div>
      </div>
    )
  }
}

export default ItemIndex
