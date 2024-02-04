import React, { useState } from 'react'
import classes from './task1.module.css'

const Task1 = () => {
    const [items, setItems] = useState<string[]>([])

    const handleAddItem = () => {
        setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
    }
  return (
    <div className={classes.main}>
      <button onClick={handleAddItem}>Add Item</button>
      <ul className={classes.ulList}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Task1;