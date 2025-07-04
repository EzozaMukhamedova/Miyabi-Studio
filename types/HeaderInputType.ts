import { ChangeEventHandler, FC, FocusEventHandler } from "react";

export interface HeaderInputType {
  placeholder: string;
  type: "text" | "password" | "number" | "tel";
  extraStyle?: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}
