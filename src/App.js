import TodoItems from './Components/TodoItems';
import './App.css';


import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      itemLists: [],
      currentItem: {
        text: '',
        key: '',
      }
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem = (e) => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem !== '') {
      const todoLists = [...this.state.itemLists, newItem]
      this.setState({
        itemLists: todoLists,
        currentItem: {
          text: '',
          key: '',
        }
      })
    }
  }

  deleteItem = (key) => {
    const filterItem = this.state.itemLists.filter(item => item.key !== key)
    this.setState({
      itemLists: filterItem
    })
  }

  updateItem = (text , key)=>{
    const items = this.state.itemLists
    items.map(item =>{
      if(item.key === key ){
        item.text = text
      }
    })
    this.setState({
      itemLists: items
    })
  }

  render() {
    return (
      <div className='App'>
       
        <header>
          <form id='to-do-form' onSubmit={this.addItem}>
            <input type='text' placeholder='Enter The Text' value={this.state.currentItem.text}
              onChange={this.handleInput} />
            <button type='submit'>Add</button>
          </form>
        </header>
        <TodoItems
          allTodos={this.state.itemLists}
          deleteTodo={this.deleteItem}
          updateTodo={this.updateItem}
        />
      </div>
    )
  }
}






// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

export default App;
