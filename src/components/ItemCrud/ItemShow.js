import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

class Item extends Component {
  constructor (props) {
    super(props)

    this.state = {
      item: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/items/${this.props.match.params.id}`)
      .then(res => this.setState({ item: res.data.item }))
      .catch(console.error)
  }

  destroy = () => {
    axios({
      url: `${apiUrl}/items/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      }
    })
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    const { item, deleted } = this.state

    if (!item) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return <Redirect to={
        { pathname: '/items', state: { msg: 'Item succesfully deleted!' } }
      } />
    }

    return (
      <div className="center">
        <img className="icon" src="https://media.giphy.com/media/6CiIHzivbQmPu/200w_d.gif"/>
        <h4>{item.name}</h4>
        <p>Information: </p>
        <p>{item.info}</p>
        <p>Price: $ {item.budget}</p>
        <p>Item Image: </p>
        <p><img src={item.imageurl}/></p>
        <button className="btn-gradient" onClick={this.destroy}>Delete Item</button>
        <Link to={`/items/${this.props.match.params.id}/edit`}>
          <button className="btn-gradient">Edit</button>
        </Link>
        <Link to="/items"><button className="btn-gradient">Back to all items</button></Link>
      </div>
    )
  }
}

export default Item
