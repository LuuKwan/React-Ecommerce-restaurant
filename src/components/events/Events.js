import React, { useRef, useEffect, useState } from "react";
import curveRight from "../../images/patterns/pattern-curve-top-right.svg";
import { useGlobalContext } from "../../context";
import Event from "./Event";
const Events = () => {
  const { eventList } = useGlobalContext();

  //element tag references
  const eventContainerRef = useRef(null);
  const eventsRef = useRef(null);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    eventsRef.current.style.height = `${height}px`;
  }, [height]);

  return (
    <section className="events" ref={eventsRef}>
      {console.log(`my event list`, eventList)}
      <div className="curve">
        <img src={curveRight} alt="" />
      </div>
      <div className="event-container " ref={eventContainerRef}>
        {eventList.map((event, eventIndex) => {
          return (
            <Event
              key={eventIndex}
              {...event}
              eventIndex={eventIndex}
              setHeight={setHeight}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Events;
