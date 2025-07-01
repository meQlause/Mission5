import type { FormProps } from "../utils/interfaces";
import { ButtonComponent } from "./ui/button";
import { DividerUI } from "./ui/divider";
import { EmailInput, PasswordInput } from "./ui/input";
import { useForm } from "react-hook-form";
import googleIcon from "../assets/google-icon.png";

type LoginFormValues = {
  email: string;
  password: string;
};

export const FormComponent = ({ className = "", onSubmit, ...props }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className={`space-y-4 ${className}`}
      {...props}
    >
      <EmailInput
        label="Email"
        className="w-full md:w-96"
        registration={register("email")}
        error={errors.email?.message}
      ></EmailInput>

      <div className="flex flex-col">
        <PasswordInput
          label="Password"
          className="w-full md:w-96"
          registration={register("password")}
          error={errors.password?.message}
        ></PasswordInput>
        <div className="mt-2 flex justify-end">
          <a className="font-sans text-bodySmall text-[#4A505C]" href="#">
            Lupa password?
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-2">
        <ButtonComponent variant="primary">Masuk</ButtonComponent>
        <ButtonComponent variant="secondary">Daftar</ButtonComponent>
        <DividerUI />
        <ButtonComponent className="border border-gray-200" variant="tertiary">
          <div className="m-auto flex flex-row items-center justify-center gap-3">
            <img src={googleIcon} />
            Masuk Dengan Google
          </div>
        </ButtonComponent>
      </div>
    </form>
  );
};
