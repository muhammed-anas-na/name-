
import React, { useEffect, useState } from "react";
function Counter({
    hours,
    mins,
    secs
}:{
    hours:number,
    mins:number,
    secs:number,
}){
    const [hour, setHour] = useState(hours);
    const [min, setMin] = useState(mins);
    const [sec, setSec] = useState(secs);

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
     <h1 className="text-white lg:pt-10 lg:text-4xl">
        {hour?.toString().padStart(2, "0")} : {min?.toString().padStart(2, "0")} :{" "}
        {sec?.toString().padStart(2, "0")}
    </h1>
  )
}

export default Counter
