
import React, { createContext, useState } from "react";
import { v4 as uuid } from 'uuid';

export const TodoContext = createContext({});

export type TodoData = {
    id: string,
    text: string,
    assignee: string, 
    difficulty: string,
    completed: boolean
}

interface childrenType {
    children: React.ReactElement;
}

export default function TodoProvider({children}: childrenType) {

    const [pageItems, setPageItems] = useState(3);
    //const [hideCompleted, setHideCompleted] = useState(true);
    //const [difficulty, setDifficulty] = useState('3');
    const [totalItems, setTotalItems] = useState<Array<TodoData>>([{id: "me123456789", text:"eat", assignee: "brock", difficulty: "5", completed: false}])
    
    function addItem(item) {
        item.id = uuid();
        item.completed = false;
        console.log(item);
        setTotalItems([...totalItems, item]);
    }

    function toggleComplete(id) {

        const items = totalItems.map( item => {
          if ( item.id === id ) {
            item.completed = ! item.completed;
          }
          return item;
        });
    
        setTotalItems(items);
    
    } 

    return (
        <TodoContext.Provider value={{pageItems, totalItems, addItem, toggleComplete}}>
            {children}
        </TodoContext.Provider>
    )
}