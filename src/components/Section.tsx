import React, { useState } from "react";
import "./Section.css";

export interface ISectionProps {
  title: string;
  explainer: string;
  content: JSX.Element;
}

export const Section = (props: ISectionProps) => {
  const { title, explainer, content } = props;

  return (
    <div className="section">
      <div id="section-title">{title}</div>
      <div id="section-explainer">{explainer}</div>
      <div id="section-content">{content}</div>
    </div>
  );
};
