import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TechIcon from "@/components/TechIcon";
import MapImage from "@/assets/images/map2.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CradHeader from "@/components/CradHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSS3Icon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];
const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left:"5%",
    top:"5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left:"50%",
    top:"5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left:"10%",
    top:"35%",
  },
  {
    title: "Hiking",
    emoji: "🏔️",
    left:"35%",
    top:"40%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left:"75%",
    top:"45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♀️",
    left:"5%",
    top:"65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left:"45%",
    top:"70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-24">
      <div className="container">
        <SectionHeader
          title="A Glimpase Into My world"
          eyebrow="About Me"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CradHeader
              title="My Reads"
              description="Explore the books shaping my perspective."
              className=""
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={BookImage} alt="Book Cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CradHeader
              title="My Toolbox"
              description="Explore the tecnologies and tools I use to craft exceptional digital experiences."
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card className="h-[320px] p-0 flex flex-col">
            <CradHeader
              title="My Hobbies"
              description="Explore the things that keep me entertained and inspired."
              className="px-6 pt-6"
            />
            <div className="relative flex-1">
              {hobbies.map((item) => (
                <div key={item.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                style={{
                  left:item.left,
                  top:item.top,
                }}
                >
                  <span className="font-medium text-gray-950 ">{item.title}</span>
                  <span>{item.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={MapImage} alt="Map" />
            <Image src={smileMemoji} alt="Memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
