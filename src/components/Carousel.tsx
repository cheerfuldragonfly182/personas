import React, { useEffect, useState } from "react";
import "./Carousel.css";

export interface ICarouselProps {
  images: string[];
  altText: string[];
  captions: JSX.Element[];
  setFullScreenImage: (value: string) => void;
  setFullScreenCaption: (value: JSX.Element) => void;
  setFullScreenImageShowing: (value: boolean) => void;
}

export const Carousel = (props: ICarouselProps) => {
  const {
    images,
    altText,
    captions,
    setFullScreenImage,
    setFullScreenImageShowing,
    setFullScreenCaption,
  } = props;

  const [centerImageIndex, setCenterImageIndex] = useState(0);
  const [centerImage, setCenterImage] = useState("");
  const [leftImage, setLeftImage] = useState("");
  const [rightImage, setRightImage] = useState("");
  const [centerAlt, setCenterAlt] = useState("");
  const [leftAlt, setLeftAlt] = useState("");
  const [rightAlt, setRightAlt] = useState("");
  const [caption, setCaption] = useState(<div></div>);

  const [hoverLeftButton, setHoverLeftButton] = useState(false);
  const [hoverRightButton, setHoverRightButton] = useState(false);
  const [hoverImage, setHoverImage] = useState(false);

  const incrementCenterIndex = () => {
    if (centerImageIndex == images.length - 1) {
      updateCenterImage(0);
      updateLeftImage(0);
      updateRightImage(0);
      setCenterImageIndex(0);
    } else {
      updateCenterImage(centerImageIndex + 1);
      updateLeftImage(centerImageIndex + 1);
      updateRightImage(centerImageIndex + 1);
      setCenterImageIndex(centerImageIndex + 1);
    }
  };

  const decrementCenterIndex = () => {
    console.log("before left click: ", centerImageIndex);
    if (centerImageIndex == 0) {
      updateCenterImage(images.length - 1);
      updateLeftImage(images.length - 1);
      updateRightImage(images.length - 1);
      setCenterImageIndex(images.length - 1);
    } else {
      updateCenterImage(centerImageIndex - 1);
      updateLeftImage(centerImageIndex - 1);
      updateRightImage(centerImageIndex - 1);
      setCenterImageIndex(centerImageIndex - 1);
    }
  };

  const updateLeftImage = (index: number) => {
    if (index == 0) {
      setLeftImage(images[images.length - 1]);
      setLeftAlt(altText[images.length - 1]);
    } else {
      setLeftImage(images[index - 1]);
      setLeftAlt(altText[index - 1]);
    }
  };

  const updateRightImage = (index: number) => {
    if (index == images.length - 1) {
      setRightImage(images[0]);
      setRightAlt(altText[0]);
    } else {
      setRightImage(images[index + 1]);
      setRightAlt(altText[index + 1]);
    }
  };

  const updateCenterImage = (index: number) => {
    setCenterImage(images[index]);
    setCenterAlt(altText[index]);
    setCaption(captions[index]);
  };

  const makeFullScreenImageAppear = () => {
    setFullScreenImage(centerImage);
    setFullScreenCaption(caption);
    setFullScreenImageShowing(true);
  };

  useEffect(() => {
    updateRightImage(centerImageIndex);
    updateLeftImage(centerImageIndex);
    updateCenterImage(centerImageIndex);
  }, []);

  return (
    <div id="carousel">
      <div id="imageSelection">
        <div
          onClick={decrementCenterIndex}
          className={
            hoverLeftButton ? "imageSelectionButton-hover" : "imageSelectionButton"
          }
          onMouseEnter={() => {
            setHoverLeftButton(true);
          }}
          onMouseLeave={() => {
            setHoverLeftButton(false);
          }}
        >
          {"◀"}
        </div>
        <div id="leftImageContainer">
          <img src={leftImage} alt={leftAlt} id="leftImage" />
        </div>
        <div
          id={hoverImage ? "centerImageContainer-hover" : "centerImageContainer"}
          onMouseEnter={() => {
            setHoverImage(true);
          }}
          onMouseLeave={() => {
            setHoverImage(false);
          }}
          onClick={makeFullScreenImageAppear}
        >
          <img src={centerImage} alt={centerAlt} id="centerImage" />
        </div>
        <div id="rightImageContainer">
          <img src={rightImage} alt={rightAlt} id="rightImage" />
        </div>
        <div
          onClick={incrementCenterIndex}
          className={
            hoverRightButton ? "imageSelectionButton-hover" : "imageSelectionButton"
          }
          onMouseEnter={() => {
            setHoverRightButton(true);
          }}
          onMouseLeave={() => {
            setHoverRightButton(false);
          }}
        >
          {"▶"}
        </div>
      </div>
      <div id="caption">{caption}</div>
    </div>
  );
};
