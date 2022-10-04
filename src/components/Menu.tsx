import React, { useState } from "react";
import { MenuItem } from "./MenuItem";
import "./Menu.css";

export interface IMenuProps {
  sections: string[];
}

export const Menu = (props: IMenuProps) => {
  const { sections } = props;

  return (
    <div className="menu">
      {sections &&
        sections.map((sectionTitle, i) => {
          return (
            <div key={i}>
              <MenuItem section={sectionTitle} />
            </div>
          );
        })}
    </div>
  );
};
