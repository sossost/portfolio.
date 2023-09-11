import Link from "next/link";
import { mouseHoverAtom } from "@/store/mouseHoverAtom";
import { useSetRecoilState } from "recoil";

interface AnchorProps {
  href: string;
  openInNewTab?: boolean;
  children: React.ReactNode;
}

const Anchor = ({ href, openInNewTab = false, children }: AnchorProps) => {
  const setIsHover = useSetRecoilState(mouseHoverAtom);

  if (!openInNewTab) {
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
  }

  return (
    <div
      className="underline hover:cursor-pointer"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => window.open(href)}
    >
      {children}
    </div>
  );
};

export default Anchor;
