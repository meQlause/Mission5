import type { UseFormRegisterReturn } from "react-hook-form";
import type { ButtonVariant, InputType, VideoDetails } from "./types";
import type { ReactNode, FormHTMLAttributes } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export interface DefaultLayoutProps {
  children: ReactNode;
  className?: string;
}

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  onSubmit?: any;
}

export interface InputProps {
  type: InputType;
  label?: string;
  error?: string;
  registration?: Partial<UseFormRegisterReturn>;
  className?: string;
  [key: string]: any;
}

export interface CourseDetailsProps {
  header: string;
  isShow?: boolean;
  subHeader: Record<string, VideoDetails>;
}

export interface showProductProps {
  contents: Record<string, any>[];
}
