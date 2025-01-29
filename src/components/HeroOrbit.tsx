import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface HeroOrbitProps {
  size: number;
  rotation?: number; // Optional rotation prop
  orOrbitDuraition?: number; // Optional spinDuraition prop
  shouldOrbit?: boolean; // Optional shouldOrbit prop
  shouldSpin?: boolean;
  spinDuraition?: number; // Optional spinDuraition prop
}

const HeroOrbit: React.FC<PropsWithChildren<HeroOrbitProps>> = ({
  children,
  size,
  rotation = 0,
  orOrbitDuraition = 0, // Default spin duration is 0 seconds
  shouldOrbit = false, //
  shouldSpin = false,
  spinDuraition,
}) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 ">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{ animationDuration: `${orOrbitDuraition}s` }}
      >
        <div
          className="flex items-start justify-start "
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={twMerge(shouldSpin === true && "animate-spin")}
            style={{ animationDuration: `${spinDuraition}s` }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${-rotation}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
