import React, { useEffect, useState, useRef } from "react";

export default function AttendeesCounter({ label, countTo, duration, index }) {
  const [counterValue, setCounterValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []); 

  useEffect(() => {
    if (isVisible) {
      animateCounter();
    }
  }, [isVisible]);

  const animateCounter = () => {
    const end = countTo;
    const stepTime = Math.abs(Math.floor(duration / end)); 
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setCounterValue(current);

      if (current >= end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  return (
    <div key={index} ref={ref} className="team-item" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <div className="team-div" style={{ width: "200px", height: "200px", objectFit: "cover", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(to right, #1C2833, #00c4f4)" }}>
        <h2 style={{fontSize:"54px"}}>{counterValue} +</h2>
      </div>
      <div className="team-content">
        <h2 className="title"> <span>{label}</span></h2>
      </div>
    </div>
  );
}
