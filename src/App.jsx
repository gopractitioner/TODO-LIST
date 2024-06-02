import "./styles.css"

function App() {

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="new-item">New Item</label>
          <input type="text" id="new-item" />
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
