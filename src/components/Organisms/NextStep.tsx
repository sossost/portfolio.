import IconList from "../Molecules/IconList";
import Spacing from "../Atoms/Spacing";
import HoverControlWrapper from "../Atoms/HoverControlWrapper";
import { useRouter } from "next/navigation";

interface NextStepProps {
  page: string;
  text: string;
}

const NextStep = ({ page, text }: NextStepProps) => {
  const router = useRouter();

  return (
    <>
      <Spacing className="h-8" />
      <HoverControlWrapper>
        <p
          className="text-lg font-medium underline cursor-pointer"
          onClick={() => router.push(`?page=${page}`)}
        >
          {text}
        </p>
      </HoverControlWrapper>
      <IconList />
    </>
  );
};

export default NextStep;
