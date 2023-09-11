import { IconType } from "react-icons";
import Anchor from "../Atoms/Anchor";

interface IconicLinkProps {
  icon: IconType;
  href: string;
  children: React.ReactNode;
}

const IconicAnchor = ({ icon, href, children }: IconicLinkProps) => {
  const Icon = icon;

  return (
    <div className="flex gap-x-2 items-center">
      <Icon size={20} />
      <Anchor href={href} openInNewTab={true}>
        {children}
      </Anchor>
    </div>
  );
};

export default IconicAnchor;
