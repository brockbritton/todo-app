
import React, { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { ItemsContext } from '../../Context/Items';

export default function List({ activePage }): React.ReactElement {
  const settingsState = useContext(SettingsContext)
  const itemsState = useContext(ItemsContext)
  const startIndex = (activePage - 1) * settingsState.pageItems;
  const endIndex = startIndex + settingsState.pageItems;
  const displayedItems = itemsState.totalItems.slice(startIndex, endIndex);
  return (
    <>
      {displayedItems.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => itemsState.toggleComplete(item.id)}>Complete: {item.completed.toString()}</div>
          <hr />
        </div>
      ))}
    </>
  )
}