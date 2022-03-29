import React from 'react'
import './todo.css'

export default function TodoItems(props) {

    const itemLists = props.allTodos
    const listItems = itemLists.map((item) => {
        return (
            <div className='lists' key={item.key}>
                <p>
                    <input id={item.key} value={item.text} onChange={(e) => props.updateTodo(e.target.value , item.key) }/>
                    <i className='fa fa-trash' onClick={() => { props.deleteTodo(item.key) }} ></i>
                </p>
            </div>
        )
    })

    return (
        <div>
            {listItems}
        </div>
    )
}
