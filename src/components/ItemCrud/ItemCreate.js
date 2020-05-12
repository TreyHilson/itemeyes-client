import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import ItemForm from '../shared/ItemForm'

class ItemCreate extends Component {
  constructor () {
    super()
    this.state = {
      item: {
        name: '',
        info: '',
        budget: '',
        imageurl: ''
      },
      createdId: null
    }
  }

  handleChange = (event) => {
    // create an object with the key/value of the field I'm typing in
    const updatedField = {
      [event.target.name]: event.target.value
    }

    // merge state and updatedField
    // merge updatedField INTO this.state.item
    // assign updatedField TO this.state.item
    const editedItem = Object.assign(this.state.item, updatedField)

    // set the state
    this.setState({ item: editedItem })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/items`,
      method: 'post',
      data: {
        item: this.state.item
      },
      headers: {
        Authorization: `Bearer ${this.props.user.token}` }
    })
      .then(res => {
        // Set the createdId to be the items .id!
        this.setState({ createdId: res.data.item.id })
      })
      .catch(console.error)
  }

  render () {
    const { item, createdId } = this.state

    let itemJsx

    if (createdId) {
      // Redirect
      itemJsx = <Redirect to={`/items/${createdId}`}/>
    } else {
      itemJsx = (
        <ItemForm
          item={item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }

    return (
      <div>
        <img className="icon" src="https://media.giphy.com/media/6CiIHzivbQmPu/200w_d.gif"/>
        <h1> ItemEyes your item! </h1>
        {itemJsx}
      </div>
    )
  }
}

export default ItemCreate
