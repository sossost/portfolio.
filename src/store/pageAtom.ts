import { LINK } from "@/constants/link";
import { atom } from "recoil";

export const pageState = atom({
  key: "pageState",
  default: LINK.MAIN,
});
