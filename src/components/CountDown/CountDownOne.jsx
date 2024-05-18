import React from "react";
import Countdown from "react-countdown";

const CountDownOne = () => {
  // Target date: December 4th, 2024
  const targetDate = new Date("2024-12-04T00:00:00");

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="event-message">
          The event is going on!
        </div>
      );
    } else {
      return (
        <>
          <div className="time-count day">
            <span>{days < 10 ? "0" + days : days}</span>Days
          </div>
          <div className="time-count hour">
            <span>{hours < 10 ? "0" + hours : hours}</span>Hours
          </div>
          <div className="time-count min">
            <span>{minutes < 10 ? "0" + minutes : minutes}</span>Minutes
          </div>
          <div className="time-count sec">
            <span>{seconds < 10 ? "0" + seconds : seconds}</span>Seconds
          </div>
        </>
      );
    }
  };

  return (
    <div className="coming-time">
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default CountDownOne;
