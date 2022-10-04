import React, { useEffect, useState } from "react";
import "./FullScreenImage.css";

export interface IFullScreenImageProps {
  image: string;
  caption: JSX.Element;
  setFullScreenImageShowing: (value: boolean) => void;
}

export const FullScreenImage = (props: IFullScreenImageProps) => {
  const { image, caption, setFullScreenImageShowing } = props;
  const [hoverButton, setHoverButton] = useState(false);

  return (
    <div>
      <button
        id={hoverButton ? "exitFullScreenButton-hover" : "exitFullScreenButton"}
        onMouseEnter={() => {
          setHoverButton(true);
        }}
        onMouseLeave={() => {
          setHoverButton(false);
        }}
        onClick={() => setFullScreenImageShowing(false)}
      >
        <b>X</b>
      </button>
      <div id="imageWrapper">
        <img id="fullScreenImage" src={image} />
      </div>
      <div id="fullScreenCaption">{caption}</div>
      <div id="backgroundFullScreenImage"></div>
    </div>
  );
};
