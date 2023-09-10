import { useEffect, useState } from "react";

const useCheckDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsDesktop(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
};

export default useCheckDesktop;
