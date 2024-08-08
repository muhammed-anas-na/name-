"use client";
import React, { useEffect, useState } from "react";

function Commingsoon() {
  const [hour, setHour] = useState(10);
  const [min, setMin] = useState(59);
  const [sec, setSec] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      setSec((prevSec) => {
        if (prevSec === 0) {
          setMin((prevMin) => {
            if (prevMin === 0) {
              setHour((prevHour) => (prevHour === 0 ? 23 : prevHour - 1));
              return 59;
            }
            return prevMin - 1;
          });
          return 59;
        }
        return prevSec - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black h-screen flex items-center justify-center flex-col">
      <div>
        <h1 className="text-white md:text-4xl lg:text-9xl font-extrabold">
          Coming Soon
        </h1>
      </div>

      <h1 className="text-white lg:pt-10 lg:text-4xl">
        {hour.toString().padStart(2, "0")} : {min.toString().padStart(2, "0")} :{" "}
        {sec.toString().padStart(2, "0")}
      </h1>
    </div>
  );
}

export default Commingsoon;
