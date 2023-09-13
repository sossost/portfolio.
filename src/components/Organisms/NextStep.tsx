import Anchor from "../Atoms/Anchor";
import IconList from "../Molecules/IconList";
import Spacing from "../Atoms/Spacing";

interface NextStepProps {
  href: string;
  text: string;
}

const NextStep = ({ href, text }: NextStepProps) => {
  return (
    <>
      <Spacing className="h-8" />
      <Anchor href={href}>
        <p className="text-lg font-light">{text}</p>
      </Anchor>
      <IconList />
    </>
  );
};

export default NextStep;
