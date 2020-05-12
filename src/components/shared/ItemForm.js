import React from 'react'

const ItemForm = ({ item, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Desired Item </label>
    <input
      placeholder="Item Name"
      name="name"
      value={item.name || ''}
      onChange={handleChange}
    />
    <label>Item Info</label>
    <input
      placeholder="item information"
      name="info"
      value={item.info || ''}
      onChange={handleChange}
    />
    <label>Price</label>
    <input
      placeholder="Price Range"
      name="budget"
      value={item.budget || ''}
      onChange={handleChange}
    />
    <label>Item Image URL</label>
    <input
      placeholder="insert URL for image"
      name="imageurl"
      value={item.imageurl || ''}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
)

// const ItemForm = () => {
//   return (
//     // jsx
//   )
// }

export default ItemForm
