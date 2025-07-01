export type Variant = "login" | "register";
export type ButtonVariant = "primary" | "secondary" | "tertiary" | "quaternary";
export type InputType = "text" | "email" | "password" | "phone";

export type LoginFormValues = {
  email: string;
  password: string;
};

export type StarRatingProps = {
  rating: number;
  size?: number;
};

export type RegisterFormValues = {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
};

export type Props = {
  variant?: Variant;
};
