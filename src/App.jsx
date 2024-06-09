import "./styles.css"
import { useEffect, useState } from 'react'

function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])
  function handleSubmit(e) {
    e.preventDefault()

    setTodos([
      ...todos,
      { id: todos.length + 1, text: newItem, completed: false 
    ])
  }
  console.log(todos)
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="new-item">New Item</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text" id="new-item"
          />
        </div>
        <button className="btn">Add Item</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item1
          </label>
          <button className="btn btn-danger">Remove</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item2
          </label>
          <button className="btn btn-danger">Remove</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item3
          </label>
          <button className="btn btn-danger">Remove</button>
        </li>
      </ul>

    </>
  )


}

export default App
