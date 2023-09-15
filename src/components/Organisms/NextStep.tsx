import Anchor from "../Atoms/Anchor";
import IconList from "../Molecules/IconList";
import Spacing from "../Atoms/Spacing";
import { useSetRecoilState } from "recoil";
import { pageState } from "@/store/pageAtom";
import HoverControlWrapper from "../Atoms/HoverControlWrapper";

interface NextStepProps {
  page: string;
  text: string;
}

const NextStep = ({ page, text }: NextStepProps) => {
  const setPage = useSetRecoilState(pageState);

  return (
    <>
      <Spacing className="h-8" />
      <HoverControlWrapper>
        <p
          className="text-lg font-medium underline cursor-pointer"
          onClick={() => setPage(page)}
        >
          {text}
        </p>
      </HoverControlWrapper>
      <IconList />
    </>
  );
};

export default NextStep;
