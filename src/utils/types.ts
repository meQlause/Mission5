export type ButtonVariant = "primary" | "secondary" | "tertiary";
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
  nama: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};
