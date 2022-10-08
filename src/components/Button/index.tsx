import { ButtonSld } from "./styles";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  margin?: string;
};

export function Button({ title, margin, ...rest }: ButtonProps) {
  return (
    <ButtonSld margin={margin} {...rest}>
      {title}
    </ButtonSld>
  );
}
