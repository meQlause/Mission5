import type { InputProps } from "../../utils/interfaces";

export const InputComponent = ({
  type,
  label,
  error,
  registration,
  className = "",
  ...props
}: InputProps) => {
  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type}
        className={`block w-full rounded-md border-gray-300 px-5 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${error ? "border-red-500" : "border"} ${className} `}
        {...registration}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export const TextInput = (props: Omit<InputProps, "type">) => (
  <InputComponent type="text" {...props} />
);

export const EmailInput = (props: Omit<InputProps, "type">) => (
  <InputComponent type="email" {...props} />
);

export const PasswordInput = (props: Omit<InputProps, "type">) => (
  <InputComponent type="password" {...props} />
);
