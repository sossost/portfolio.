import React from "react";

const CrossEffect = () => {
  return (
    <>
      <span
        className="
                      absolute
                      w-0 
                      h-0 
                      left-1/2 
                      bottom-0 
                      transform 
                      translate-x-[-50%] 
                      translate-y-[50%]
                      bg-white 
                      origin-center 
                      transition-all 
                      duration-300 
                      ease-in-out 
                      group-hover:w-[1px]
                      group-hover:h-[200%]
                      group-hover:scale-y-100
                      "
      />
      <span
        className="
                      absolute
                      w-0 
                      h-0 
                      left-1/2 
                      bottom-0
                      transform 
                      translate-x-[-50%]
                      bg-white 
                      origin-center 
                      transition-all 
                      duration-300 
                      ease-in-out 
                      group-hover:w-[120%]
                      group-hover:h-[1px]
                      group-hover:scale-x-100
                      "
      />
    </>
  );
};

export default CrossEffect;
