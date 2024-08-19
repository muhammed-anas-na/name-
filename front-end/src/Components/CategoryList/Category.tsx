import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './category.module.css'

function Category() {
  return (
<div className={styles.container}>
      <h1 className="ms-3 text-2xl md:text-4xl font-medium my-6">Popular Categories</h1>

      <div className={styles.categories}>
          <Link href={'/category?cat=makeup'} className={`${styles.category} ${styles.style}`}>
            <Image src="/makeup.jpg" alt="style.jpg" width={40} height={40} className="rounded-full object-cover"/>
            Makeup
          </Link>
          <Link href={'/category?cat=invitation'} className={`${styles.category} ${styles.fashion}`}>
            <Image src="/invitation.jpg" alt="style.jpg" width={32} height={32} className={styles.image}/>
            Invitation
          </Link>
          <Link href={'/category?cat=catering'} className={`${styles.category} ${styles.food}`}>
            <Image src="/catering.jpg" alt="style.jpg" width={32} height={32} className={styles.image}/>
            Catering
          </Link>
          <Link href={'/category?cat=video'} className={`${styles.category} ${styles.travel}`}>
            <Image src="/video.jpg" alt="style.jpg" width={32} height={32} className={styles.image}/>
            Video
          </Link>
          <Link href={'/category?cat=mehandi'} className={`${styles.category} ${styles.culture}`}>
            <Image src="/mehandi.jpg" alt="style.jpg" width={32} height={32} className={styles.image}/>
            Mehandi
          </Link>
          <Link href={'/category?cat=decoration'} className={`${styles.category} ${styles.coding}`}>
            <Image src="/decoration.jpg" alt="Decoaration jfjf" width={32} height={32} className={styles.image}/>
            Decoration
          </Link>
      </div>
    </div>
  )
}

export default Category
