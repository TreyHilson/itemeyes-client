import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

// Import axios
import axios from 'axios'
// Import apiUrl
import apiUrl from '../../apiConfig'

import ItemForm from '../shared/ItemForm'

class ItemEdit extends Component {
  constructor () {
    super()

    this.state = {
      item: {
        name: '',
        info: '',
        budget: '',
        imageurl: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/items/${this.props.match.params.id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      }
    })
      .then(res => {
        this.setState({ item: res.data.item })
      })
      .catch(console.error)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios({
      method: 'patch',
      url: `${apiUrl}/items/${this.props.match.params.id}`,
      data: { item: this.state.item },
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      }
    })
      .then(() => {
        this.setState({ updated: true })
      })
      .catch(console.error)
  }

  handleChange = (event) => {
    // create a new object with key of `name` property on input and value with `value` property
    const updatedField = {
      [event.target.name]: event.target.value
    }
    // Combine the current `item` with the `updateField`
    const editedItem = Object.assign(this.state.item, updatedField)
    // Set the state
    this.setState({ item: editedItem })
  }

  render () {
    // Destructure from state:
    const { item, updated } = this.state
    if (updated) {
      // Redirect to the 'show' page
      return <Redirect to={`/items/${this.props.match.params.id}`}/>
    }
    return (
      <div>
        <h1>Item Edit page</h1>
        <ItemForm
          item={item}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

export default ItemEdit
