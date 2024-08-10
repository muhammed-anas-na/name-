import styles from'./page.module.css'

function Hero() {
  return (
    <div className={styles.container}>
        <div className="relative">
            <img className='absolute inset-0 w-full h-96 object-cover' src="banner01.jpg" alt="banner"/>
            <h1
            className=
            'relative inset-0 flex top-40 justify-center text-white font-extrabold text-2xl lg:text-5xl'>
              Destination Weddings
            </h1>
        </div>
    </div>
  )
}

export default Hero;
