import { FieldSld, LabelSld, InputSld } from "./styles";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  width?: string;
  height?: string;
  value: string;
  type?: string;
};

export function Field({ children}){
  return (
    <FieldSld>{children}</FieldSld>
  )
}

export function Label({ children }) {
  return (
    <LabelSld>{children}</LabelSld>
  );
}

export function Input({ value, type, width, height, onChange, ...rest }: InputProps) {
  return (
    <InputSld width={width} height={height} value={value} type={type || "text"} onChange={onChange} />
  );
}


