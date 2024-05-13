import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form';
import { TodoContext, TodoData } from '../../Context/Settings';



const Todo = () => {
  const todoState = useContext<{addItem: () => void, totalItems: Array<TodoData>, toggleComplete: () => void, pageItems: number}>(TodoContext)
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(todoState.addItem, defaultValues);

  // function addItem(item) {
  //   item.id = uuid();
  //   item.complete = false;
  //   console.log(item);
  //   setList([...list, item]);
  // }

  // function deleteItem(id) {
  //   const items = list.filter( item => item.id !== id );
  //   setList(items);
  // }

  // function toggleComplete(id) {

  //   const items = list.map( item => {
  //     if ( item.id === id ) {
  //       item.completed = ! item.completed;
  //     }
  //     return item;
  //   });

  //   setList(items);

  // }

  useEffect(() => {
    const incompleteCount = todoState.totalItems.filter(item => !item.completed).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [todoState.totalItems]);  

  return (
    <>
      <header data-testid="todo-header">
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header>

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>

      {todoState.totalItems.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.completed.toString()}</div>
          <hr />
        </div>
      ))}

    </>
  );
};

export default Todo;
