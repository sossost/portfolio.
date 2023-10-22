import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isDesktopAtom } from "../store/isDesktopAtom";

const useCheckDesktop = () => {
  const [isDesktop, setIsDesktop] = useRecoilState(isDesktopAtom);

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
