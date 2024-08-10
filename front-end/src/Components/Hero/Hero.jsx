import styles from "./page.module.css";

function Hero() {
  return (
    <>
      <div className={styles.container}>
        {/* Container for the image and "Destination Weddings" text */}
        <div className="relative">
          <img
            className="w-full h-96 object-cover"
            src="banner01.jpg"
            alt="banner01"          />
          <h1 className="absolute inset-0 flex top-40 justify-center text-white font-extrabold text-2xl sm:text-4xl lg:text-5xl">
            Destination Weddings
          </h1>
        </div>

        {/* Separate container for the "HI" text */}
        <div className="md:flex md:mt-5 gap-5">
          <div className="relative">
            <img
              className="w-full object-cover"
              src="banner02.jpg"
              alt="banner"
            />
            <h1 className="absolute inset-0 flex top-28 lg:top-44 justify-center text-white font-extrabold text-2xl lg:text-4xl">
              Photography
            </h1>
          </div>
          <div className="relative">
            <img
              className="w-full object-cover"
              src="banner03.jpg"
              alt="banner"
            />
            <h1 className="absolute inset-0 flex top-28 lg:top-52 justify-center text-white font-extrabold text-2xl lg:text-4xl">
              Dress Guide
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
