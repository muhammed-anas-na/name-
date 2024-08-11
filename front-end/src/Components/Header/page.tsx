import React from 'react'
import styles from './header.module.css';
import Link from 'next/link';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1 className='italic'>Kamasuthra</h1>
      </div>
      <div className={styles.menu}>
        <ul className='flex gap-14'>
          <li>Home</li>
          <li>About</li>
          <li>Vendors</li>
          <li>Shop</li>
        </ul>
      </div>
      <div className={styles.options}>
        <button>🔍</button>
        <Link href={'/whoareyou'} className='bg-rose-300 px-4 rounded-xl'>
          Login
        </Link>
      </div>
    </div>
  )
}

export default Header;
