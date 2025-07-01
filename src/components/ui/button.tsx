import React from "react";
import type { ButtonProps } from "../../utils/interfaces";

const variantStyles = {
  primary: {
    backgroundColor: "#3ecf4c",
    color: "white",
  },
  secondary: {
    backgroundColor: "#e8fde1",
    color: "#3ecf4c",
  },
  tertiary: {
    backgroundColor: "white",
    color: "#4a505c",
  },
};

export const ButtonComponent: React.FC<ButtonProps> = ({
  variant = "primary",
  fullWidth = true,
  children,
  className = "",
  ...props
}) => {
  const baseClasses = `
    py-2 px-4 rounded-md
    text-center font-medium
    hover:opacity-90 transition-opacity
    ${fullWidth ? "w-full" : "w-auto"}
  `;

  return (
    <button
      className={`${baseClasses} ${className}`}
      style={{
        backgroundColor: variantStyles[variant].backgroundColor,
        color: variantStyles[variant].color,
      }}
      {...props}
    >
      {children}
    </button>
  );
};
