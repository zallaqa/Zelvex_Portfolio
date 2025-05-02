import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StartIcon from "@/assets/icons/star.svg"
import bookImg from "@/assets/images/book-cover.png"
import JavascriptIcon from "@/assets/icons/square-js.svg"
import HtmlIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromIcon from "@/assets/icons/chrome.svg"
import GithubIcon from "@/assets/icons/github.svg"
import NodeIcon from "@/assets/icons/nodejs-icon-svgrepo-com.svg"
import MongoDb from "@/assets/icons/mongodb-svgrepo-com.svg"
import mapImg from "@/assets/images/map1.png"
import smilleImoji from "@/assets/images/memoji-smile.png"
import Image from "next/image";
import { Lang } from "@/components/Lang";
import { title } from "process";
import { CardHeader } from "@/components/CardHeader";

const toolboxItem =[
  {
    title: 'Javascript',
    iconTypes: JavascriptIcon,
  },

  {
    title: 'Node js',
    iconTypes: NodeIcon,
  },


  {
    title: 'MongoDB',
    iconTypes: MongoDb,
  },

  {
    title: 'React',
    iconTypes: ReactIcon,
  },

  {
    title: 'Chrome',
    iconTypes: ChromIcon,
  },

  {
    title: 'Github',
    iconTypes: GithubIcon,
  },

  
];

const hobbies = [
  {
    title: 'Gaming',
    emoji: '🎮',
  },
  {
    title: 'Reading',
    emoji: '📚',
  },
  {
    title: 'Traveling',
    emoji: '✈️',
  },
  {
    title: 'Photography',
    emoji: '📸',
  },
  {
    title: 'Music',
    emoji: '🎵',
  },
  {
    title: 'Cooking',
    emoji: '👨🏽‍🍳',
  },
  {
    title: 'Workout',
    emoji: '🏋🏽‍♂️',
  },
];



export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
      <SectionHeader
        eyebrow={"About Me"}
        title="A Glimp Into My World"
        description={
          "Learn more about who iam, what i do, and what inspire me."
        }
      />
      <div className="mt-20">
        <Card className="h-[320px]">
          <CardHeader title="My Reads" description="Explore the books shaping my perspective." />
          {/* <div className="flex flex-col">
            <div className="inline-flex items-center gap-2">
            <StartIcon className="size-9 text-emerald-300" />
            <h3 className="font-serif text-3xl">My Reads</h3>
            </div>
            <p className="text-sm text-white/60 mt-2">Explore the books shaping my perspective.</p>
          </div> */}

          <div className="w-40 mx-auto mt-8">
            <Image src={bookImg} alt="book" />
            </div>
        </Card>

        <Card>
        <CardHeader title="My Toolbox" description="Explore the Technologies and tools i used to craft execptional digital expreinces." />
          {/* <div>
            <StartIcon />
            <h3>My Toolbox</h3>
            <p>Explore the Technologies and tools i used to craft execptional digital expreinces.</p>
          </div> */}
          <div>
            {toolboxItem.map(item => (
              <div key={item.title}>
                <Lang component={item.iconTypes} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>


        <Card>
        <CardHeader title="Beyound The Code" description="Explore My intrenst  and hobbies beyond the digital realm." />

        {/* <div>
            <StartIcon />
            <h3>Beyound The Code</h3>
            <p>Explore My intrenst  and hobbies beyond the digital realm.</p>
          </div> */}
          <div>
            {hobbies.map(hobby => (
              <div key={hobby.title}>
                <span>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <Image src={mapImg} alt="map" />
          <Image src={smilleImoji} alt="smile" />
        </Card>

      </div>
    </div>
    </div>
  );
};
