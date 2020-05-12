import React from 'react'

const ItemForm = ({ item, handleSubmit, handleChange }) => (
  <form className="formable" onSubmit={handleSubmit}>
    <p className="gameboy">Desired Item </p>
    <input
      placeholder="Item Name"
      name="name"
      value={item.name || ''}
      onChange={handleChange}
    />
    <br/>
    <br/>
    <br/>
    <p className="gameboy">Item Info</p>
    <textarea
      placeholder="item information"
      name="info"
      value={item.info || ''}
      onChange={handleChange}
    />
    <br/>
    <br/>
    <br/>
    <p className="gameboy">Price</p>
    <input
      placeholder="Price Range"
      name="budget"
      value={item.budget || ''}
      onChange={handleChange}
    />
    <br/>
    <br/>
    <br/>
    <p className="gameboy">Item Image URL</p>
    <input
      placeholder="insert URL for image"
      name="imageurl"
      value={item.imageurl || ''}
      onChange={handleChange}
    />
    <br/>
    <button className="btn-gradient" type="submit">Submit</button>
  </form>
)

// const ItemForm = () => {
//   return (
//     // jsx
//   )
// }

export default ItemForm
