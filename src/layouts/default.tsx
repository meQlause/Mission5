import type { DefaultLayoutProps } from "../utils/interfaces";

export const DefaultLayout = ({ children, className = "" }: DefaultLayoutProps) => {
  return <div className={`mx-3 bg-white p-7 shadow ${className}`}>{children}</div>;
};
