import React from 'react';
import './index.css'
import { useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () => {

  const [item,setItem] = useState();
  const [list,setList] = useState([]);

  const inputEvent = (event) => {
    // console.log(event.target.value)
    setItem(event.target.value);
  }

  const addItem = () => {
    setList((oldList) => {
      return [...oldList, item];
    });
    setItem("");
  }

  const deleteItem = (id) => {
    // console.log("deleted");
    setList((oldList) => {
      return oldList.filter((element, index) => {
        return index!==id;
      })
    })
  }

  return(
    <div className='main_div'>
      <div className='center_div'><br></br>
        <h1> ToDo List </h1><br></br>
        <input 
        type="text" 
        placeholder="Add a item" 
        onChange={inputEvent}
        value={item}
        />
        <button onClick={addItem}> + </button>
        <ol>
          {list.map((i, index) => {
            return <ToDoLists 
            id={index} 
            text={i} 
            onSelect={deleteItem}
            />
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;