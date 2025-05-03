'use client'
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImg from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NodeIcon from "@/assets/icons/nodejs-icon-svgrepo-com.svg";
import MongoDb from "@/assets/icons/mongodb-svgrepo-com.svg";
import mapImg from "@/assets/images/map1.png";
import smilleImoji from "@/assets/images/memoji-smile.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { CardHeader } from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import { useRef } from "react";

const toolboxItem = [
  {
    title: "Javascript",
    iconTypes: JavascriptIcon,
  },

  {
    title: "Node js",
    iconTypes: NodeIcon,
  },

  {
    title: "MongoDB",
    iconTypes: MongoDb,
  },

  {
    title: "React",
    iconTypes: ReactIcon,
  },

  {
    title: "Chrome",
    iconTypes: ChromIcon,
  },

  {
    title: "Github",
    iconTypes: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "50%",
    top: "5%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "10%",
    top: "35%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45$",
  },
  {
    title: "Cooking",
    emoji: "👨🏽‍🍳",
    left: "5%",
    top: "65%",
  },
  {
    title: "Workout",
    emoji: "🏋🏽‍♂️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {

  const contrainRef = useRef(null);

  return (
    <div id="About" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow={"About Me"}
          title="Driven by Curiosity, Built by Code"
          description={
            "Learn more about who iam, what i do, and what inspire me."
          }
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective."
              />
              {/* <div className="flex flex-col">
            <div className="inline-flex items-center gap-2">
            <StartIcon className="size-9 text-emerald-300" />
            <h3 className="font-serif text-3xl">My Reads</h3>
            </div>
            <p className="text-sm text-white/60 mt-2">Explore the books shaping my perspective.</p>
          </div> */}

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImg} alt="book" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the Technologies and tools i used to craft execptional digital expreinces."
                className="px-6 pt-6"
              />
              {/* <div>
            <StartIcon />
            <h3>My Toolbox</h3>
            <p>Explore the Technologies and tools i used to craft execptional digital expreinces.</p>
          </div> */}
              <ToolBoxItems
                items={toolboxItem}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s] "
              />
              <ToolBoxItems
                items={toolboxItem}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Beyound The Code"
                description="Explore My intrenst  and hobbies beyond the digital realm."
              />

              {/* <div>
            <StartIcon />
            <h3>Beyound The Code</h3>
            <p>Explore My intrenst  and hobbies beyond the digital realm.</p>
          </div> */}
              <div className="relative flex-1" ref={contrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}

                    drag // just this to drak using frema mo
                    dragConstraints ={contrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImg}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-['']
            after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30"
              >
                <Image src={smilleImoji} alt="smile" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
