import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ItemForm from '../shared/ItemForm'

const ItemEdit = (props) => {
  const [item, setItem] = useState({ name: '', info: '', budget: '', imageurl: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/items/${props.match.params.id}`)
      .then(res => setItem(res.data.item))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setItem(item => ({ ...item, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/items/${props.match.params.id}`,
      method: 'PATCH',
      data: { item },
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(() => setUpdated(true))
      .catch(console.error)
  }

  if (updated) {
    return <Redirect to={`/items/${props.match.params.id}`} />
  }

  return (

    <ItemForm
      item={item}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath={`/items/${props.match.params.id}`}
    />

  )
}

export default ItemEdit
