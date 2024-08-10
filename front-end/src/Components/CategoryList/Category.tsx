import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './category.module.css'

function Category() {
  return (
<div className={styles.container}>
      <h1 className="ms-3 text-2xl md:text-4xl font-medium my-6">Popular Categories</h1>

      <div className={styles.categories}>
          <Link href={'/blog?cat=style'} className={`${styles.category} ${styles.style}`}>
            <img src="banner02.jpg" alt="style.png" width={32} height={32} className={styles.image}/>
            Style
          </Link>

          <Link href={'/blog?cat=fashion'} className={`${styles.category} ${styles.fashion}`}>
            <img src="banner02.jpg" alt="style.png" width={32} height={32} className={styles.image}/>
            Fashion
          </Link>
          <Link href={'/blog?cat=food'} className={`${styles.category} ${styles.food}`}>
            <img src="banner02.jpg" alt="style.png" width={32} height={32} className={styles.image}/>
            Food
          </Link>
          <Link href={'/blog?cat=travel'} className={`${styles.category} ${styles.travel}`}>
            <img src="banner02.jpg" alt="style.png" width={32} height={32} className={styles.image}/>
            Travel
          </Link>
          <Link href={'/blog?cat=culture'} className={`${styles.category} ${styles.culture}`}>
            <img src="banner02.jpg" alt="style.png" width={32} height={32} className={styles.image}/>
            Culture
          </Link>
          <Link href={'/blog?cat=coding'} className={`${styles.category} ${styles.coding}`}>
            <img src="banner02.jpg" alt="style.png" width={32} height={32} className={styles.image}/>
            Coding
          </Link>
      </div>
    </div>
  )
}

export default Category
