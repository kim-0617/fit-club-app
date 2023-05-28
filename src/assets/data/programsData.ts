import { ReactComponent as Data01 } from "../svg/programdata1.svg";
import { ReactComponent as Data02 } from "../svg/programdata2.svg";
import { ReactComponent as Data03 } from "../svg/programdata3.svg";
import { ReactComponent as Data04 } from "../svg/programdata4.svg";

type Program = {
  image: any;
  heading: string;
  details: string;
};

export const programsData: Program[] = [
  {
    image: Data01,
    heading: "Strength Training",
    details:
      "In this program, you are trained to improve your strength through many exercises.",
  },
  {
    image: Data02,
    heading: "Cardio Training",
    details:
      "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
  },
  {
    image: Data03,
    heading: "Fat Burning",
    details:
      "This program is suitable for you who wants to get rid of your fat and lose their weight.",
  },
  {
    image: Data04,
    heading: "Health Fitness",
    details:
      "This programs is designed for those who exercises only for their body fitness not body building.",
  },
];
