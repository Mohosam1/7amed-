import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
      <navbar className={styles.nav} >
          <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="logo" className={styles.logo} />
        <div className={styles.NavBar}>
        <NavLink
          to="/first"
          className={({ isActive , isPending }) =>
            isPending ? styles.binding : isActive ? styles.active : ""
          }
        >
          first
        </NavLink>
        <NavLink
          to="/seconde"
          className={({ isActive , isPending }) =>
            isPending ? styles.binding : isActive ? styles.active : ""
          }
        >
          second
        </NavLink>
        <NavLink
          to="/third"
          className={({ isActive , isPending }) =>
            isPending ? styles.binding : isActive ? styles.active : ""
          }
        >
          Register
        </NavLink>
        <NavLink
          to="/fourth"
          className={({ isActive , isPending }) =>
            isPending ? styles.binding : isActive ? styles.active : ""
          }
        >
          Contact us
        </NavLink>
        </div>
       </navbar>
    )
}

export default NavBar