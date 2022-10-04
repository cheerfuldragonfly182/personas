import React, { useState } from "react";
import "./Menu.css";

export interface IMenuItemProps {
  section: string;
}

export const MenuItem = (props: IMenuItemProps) => {
  const { section } = props;

  const [onButtonHover, setOnButtonHover] = useState(false);

  return (
    <a href={`#${section}`}>
      <div
        id={onButtonHover ? "menuItem-hover" : "menuItem"}
        onMouseEnter={() => {
          setOnButtonHover(true);
        }}
        onMouseLeave={() => {
          setOnButtonHover(false);
        }}
      >
        {section}
      </div>
    </a>
  );
};
