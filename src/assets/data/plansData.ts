import { ReactComponent as Plan01 } from "../svg/plansdata1.svg";
import { ReactComponent as Plan02 } from "../svg/plansdata2.svg";
import { ReactComponent as Plan03 } from "../svg/plansdata3.svg";

export const plansData = [
  {
    icon: Plan01,
    name: "BASIC PLAN",
    price: "25",
    features: [
      "2 hours of excercises",
      "Free consultaion to coaches",
      "Access to The Community",
    ],
  },
  {
    icon: Plan02,
    name: "PREMIUM PLAN",
    price: "30",
    features: [
      "5 hour of excercises",
      "Free consultaion of Coaches",
      "Accessto minibar",
    ],
  },
  {
    icon: Plan03,
    name: "PRO PLAN",
    price: "45",
    features: [
      "8 hours of excercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ],
  },
];
