import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
      <navbar className={styles.nav} >
          <img 
          src="data:image/png;base64,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" 
          alt="logo"
          className={styles.logo}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
          }} />
        <div className={styles.NavBar}>

          <NavLink
          to="/"
          className={({ isActive , isPending }) =>
            isPending ? styles.binding : isActive ? styles.active : ""
          }
        >
          Home 
        </NavLink>
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