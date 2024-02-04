import React, { Link } from 'react-router-dom'
import classes from './header.module.css'


const Header = () => {
  return (
    <header className={classes.header}>
      <ol className={classes.nav}>
        <Link to={'/task1'}><li>Task  1</li></Link>
        <Link to={'/task2'}><li>Task  2</li></Link>
        <Link to={'/task3'}><li>Task  3</li></Link>
      </ol>
    </header>
  )
}

export default Header