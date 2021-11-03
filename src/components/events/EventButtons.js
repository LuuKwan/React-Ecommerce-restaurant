import React from "react";
import { useGlobalContext } from "../../context";
const EventBtn = () => {
  const { handleSlide, showEventIndex, eventList } = useGlobalContext();

  return (
    <>
      {eventList.map((event, index) => {
        return (
          <button id={index} type="button" onClick={() => handleSlide(index)}>
            <h4 className={index === showEventIndex && `active`}>
              {event.title}
            </h4>
          </button>
        );
      })}
    </>
  );
};

export default EventBtn;
