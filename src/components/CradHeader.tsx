import React from "react";
import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CradHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:px-10 md:py-8",className)}>
      <div className="inline-flex gap-2 items-center">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">{description}</p>
    </div>
  );
};

export default CradHeader;
