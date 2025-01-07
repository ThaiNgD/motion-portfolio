"use client";
import moment from "moment";
import { useEffect } from "react";
export const ClockRealtime = () => {
  useEffect(() => {
    const updateTime = () => {
      document.documentElement.style.setProperty(
        "--timer-day",
        `'${moment().format("dd")}'`
      );
      document.documentElement.style.setProperty(
        "--timer-hours",
        `'${moment().format("k")}'`
      );
      document.documentElement.style.setProperty(
        "--timer-minutes",
        `'${moment().format("mm")}'`
      );
      document.documentElement.style.setProperty(
        "--timer-seconds",
        `'${moment().format("ss")}'`
      );
      requestAnimationFrame(updateTime);
    };

    requestAnimationFrame(updateTime);

    return () => {
      // Cleanup if necessary
      // Cancel animation frame if you've stored its ID
    };
  }, []);
  return (
    <div className="clock-container !rounded-xl absolute top-0 z-20 ">
      <div className="clock-col">
        <p className="clock-day clock-timer"></p>
        <p className="clock-label">Day</p>
      </div>
      <div className="clock-col">
        <p className="clock-hours clock-timer"></p>
        <p className="clock-label">Hours</p>
      </div>
      <div className="clock-col">
        <p className="clock-minutes clock-timer"></p>
        <p className="clock-label">Minutes</p>
      </div>
      <div className="clock-col">
        <p className="clock-seconds clock-timer"></p>
        <p className="clock-label">Seconds</p>
      </div>
    </div>
  );
};
