import React, { useEffect, useRef, useState } from "react";
import eventImageTab from "../../images/homepage/family-gathering-tablet.jpg";
import EventBtn from "./EventButtons";
import ReserveTableButton from "../ReserveTableButton";

import { useGlobalContext } from "../../context";

const Event = ({
  title,
  description,
  image,
  setHeight,
  eventIndex,
  //showEventIndex,
}) => {
  const { showEventIndex } = useGlobalContext();
  const singleEventRef = useRef(null);
  const [eventImage, setEventImage] = useState("");

  //=======selecting specific event to show=======
  const slideControl = () => {
    let slide = "";
    if (eventIndex === showEventIndex) {
      slide = "active-slide";
    }
    return slide;
  };
  //=======end selecting specific event to show=====

  //======upDate functions for responsive viewport=====
  const updateImage = () => {
    const { mobile, tablet, desktop } = image;
    if (window.innerWidth < 735) {
      setEventImage(mobile);
    } else if (window.innerWidth < 1025) {
      setEventImage(tablet);
    } else {
      setEventImage(desktop);
    }
  };

  const updateHeight = () => {
    let height = singleEventRef.current.clientHeight;
    if (window.innerWidth >= 735) {
      height += 6 * 16; // position top 6rem
    }
    setHeight(height);
  };

  const update = () => {
    updateImage();
    updateHeight();
  };
  //======end upDate functions for responsive viewport=====

  useEffect(() => {
    //initial set up for the first loading this component
    let height = singleEventRef.current.clientHeight;
    if (window.innerWidth >= 735) {
      height += 6 * 16; // position top 6rem
    }
    setHeight(height);
    updateImage();

    window.addEventListener(`resize`, update);
    return () => window.removeEventListener(`resize`, update);
  }, []);

  return (
    <article className={`event ${slideControl()}`} ref={singleEventRef}>
      {/* handle event image */}
      <div className="event-image">
        {/* the onLoad is added to help me wait for image fully loaded, then we can get full height of event component */}
        <img src={eventImage} alt="event image" onLoad={updateHeight} />
      </div>
      {/* end handle event image */}
      <div className="event-text">
        <div className="event-text__nav">
          <EventBtn />
        </div>
        {/* handle event description */}
        <div className="event-text__description">
          <h2>{title}</h2>
          <p>{description}</p>
          <ReserveTableButton msg="Book a table" path="/reserve-table" />
        </div>
        {/* end hanle event description */}
      </div>
      {/* end single event */}
    </article>
  );
};

export default Event;
