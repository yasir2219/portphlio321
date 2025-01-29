import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkIcon from "@/assets/icons/sparkle.svg";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orOrbitDuraition={30}
          shouldSpin
          spinDuraition={3}
        >
          <SparkIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orOrbitDuraition={32}
          shouldSpin
          spinDuraition={3}
        >
          <SparkIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          orOrbitDuraition={34}
          shouldSpin
          spinDuraition={3}
        >
          <div>
            {" "}
            <SparkIcon className="size-2 rounded-full bg-emerald-300/20" />
          </div>
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orOrbitDuraition={36}
          shouldSpin
          spinDuraition={3}
        >
          <SparkIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orOrbitDuraition={38}
          shouldSpin
          spinDuraition={6}
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orOrbitDuraition={40}
          shouldSpin
          spinDuraition={6}
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          orOrbitDuraition={42}
          shouldSpin
          spinDuraition={3}
        >
          <div>
            {" "}
            <SparkIcon className="size-2 rounded-full bg-emerald-300/20" />
          </div>
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orOrbitDuraition={44}
          shouldSpin
          spinDuraition={3}
        >
          <SparkIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={90}
          shouldOrbit
          orOrbitDuraition={46}
          shouldSpin
          spinDuraition={3}
        >
          <div>
            {" "}
            <SparkIcon className="size-3 rounded-full bg-emerald-300/20" />
          </div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orOrbitDuraition={48}
          shouldSpin
          spinDuraition={6}
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            className="size-[100px]"
            src={memojiImage}
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-x-4 rounded-lg">
            <div className=" relative animate-ping-large opacity-75 bg-green-500 size-2.5 rounded-full"></div>
            <span className="absolute ml-[0px] bg-green-500 size-2.5 rounded-full"></span>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif md:text-5xl text-3xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming into funtional, high-performing web
            applications.Let discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-8 gap-4 justify-center">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let contact</span>
          </button>
        </div>
      </div>
    </div>
  );
};
