declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";
  const content: ReactElement<SVGProps<SVGSVGElement>>;
  export default content;
}
