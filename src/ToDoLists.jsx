import React from 'react';

const ToDoLists = (props) => {
    
    return (
        <div className='todo_style'>
            <li> 
            <i class="fa-sharp fa-solid fa-xmark"
            onClick={() => {
                props.onSelect(props.id)
            }}></i>
            {props.text} </li>
        </div>
    )
};

export default ToDoLists;