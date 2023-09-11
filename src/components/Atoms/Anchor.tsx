import Link from "next/link";
import { mouseHoverAtom } from "@/store/mouseHoverAtom";
import { useSetRecoilState } from "recoil";

interface AnchorProps {
  href: string;
  children: React.ReactNode;
}

const Anchor = ({ href, children }: AnchorProps) => {
  const setIsHover = useSetRecoilState(mouseHoverAtom);

  return (
    <Link
      href={href}
      className="underline"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </Link>
  );
};

export default Anchor;
