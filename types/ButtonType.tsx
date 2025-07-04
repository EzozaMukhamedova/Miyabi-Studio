import { MouseEventHandler, ReactNode } from "react";

export interface ButtonType {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  title?: string;
  extraStyle?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ActionsButtonType {
  icon: ReactNode;
  id: number;
  count?: number;
  to: string;
  title?: string;
  extraStyle?: string;
  onClick?: () => void;
}
