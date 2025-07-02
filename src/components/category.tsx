import { useState } from "react";
import { useIsMobile } from "../utils/useIsMobile";

type CategoryProps = {
  title: string;
  content: Record<string, string>[];
};

export const CategoryComponent = ({ title, content }: CategoryProps) => {
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const isMobile = useIsMobile();

  return (
    <>
      <div className={`grid w-full gap-0 ${showCategory ? "gap-2" : "gap-0"}`}>
        <div
          className="flex cursor-pointer justify-between md:cursor-default"
          onClick={() => setShowCategory(!showCategory)}
        >
          <div className="text-heading6 font-bold">{title}</div>
          <img className="mr-5 block h-[15px] md:hidden" src="/assets/right-arrow.png" alt="Logo" />
        </div>
        <ul
          className={`${showCategory ? "block gap-3" : "hidden gap-0"} ${isMobile && "flex"} mt-4 flex-col md:flex md:gap-3`}
        >
          {content.map((group, i) =>
            Object.entries(group).map(([label, url]) => (
              <li
                key={`${label}-${i}`}
                className="text-bodyMedium font-normal md:whitespace-nowrap"
              >
                <a href={url} className="hover:underline">
                  {label}
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};
