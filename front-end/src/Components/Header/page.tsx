import React from 'react'
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>Company Name</h1>
      </div>
      <div className={styles.menu}>
        <h1>Company Name 02</h1>
      </div>
      <div className={styles.options}>
        <h1>Company Name 03</h1>
      </div>
    </div>
  )
}

export default Header;
