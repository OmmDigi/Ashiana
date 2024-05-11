import React from "react";

function SubHeading({ type, text }: { type?: "H3" | "H4"; text: string }) {
  const ComponentToLoad = ({ text }: { text: string }) => {
    if (type === "H3")
      return (
        <h3 className="font-tex text-gray-800 text-xl mt-8 uppercase">
          {text}
        </h3>
      );
    if (type === "H4")
      return (
        <h4 className="font-tex text-gray-800 text-xl mt-8 uppercase">
          {text}
        </h4>
      );

    return (
      <h2 className="font-tex text-gray-800 text-xl mt-8 uppercase">{text}</h2>
    );
  };
  return <ComponentToLoad text={text} />;
}

export default SubHeading;
