import type { DefaultLayoutProps } from "../utils/interfaces";

export const DefaultLayout = ({ children, className = "" }: DefaultLayoutProps) => {
  return <div className={`bg-white shadow ${className}`}>{children}</div>;
};
