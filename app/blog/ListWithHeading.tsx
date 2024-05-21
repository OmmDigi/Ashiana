import React from "react";
import SubHeading from "./SubHeading";
import P from "./P";

interface IProps {
  className?: string;
  options: { heading: string; text: string }[];
}

export default function ListWithHeading({ className, options }: IProps) {
  return (
    <ul className={`w-full py-9 ${className}`}>
      {options.map((item, key) => (
        <li key={key} className="">
          <SubHeading text={item.heading} />
          <P className="mt-[5px]" text={item.text} />
          {/* {<ComponentToLoad text={item} />} */}
        </li>
      ))}
    </ul>
  );
}
