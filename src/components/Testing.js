import React, { useState, useEffect, useRef } from "react";

const Testing = () => {
  const cRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    // let height = cRef.current.getBoundingClientRect().height;
    let height = cRef.current.offsetHeight;
    console.log(height);
    pRef.current.style.height = `${height}px`;
  }, []);
  return (
    <>
      <div className="parent" ref={pRef}>
        <h4>this is image</h4>
        <div className="child" ref={cRef}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis id
            reprehenderit rerum! Laborum numquam architecto eveniet, aliquid
            dolor incidunt a!
          </p>
        </div>
      </div>
    </>
  );
};
export default Testing;
