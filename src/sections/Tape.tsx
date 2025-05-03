import StarIcon from "@/assets/icons/star.svg"
import { Fragment } from "react";


const word = [
  "Performance",
  "Innovation",
  "Design",
  "Development",
  "Creativity",
  "Strategy",
  "Efficiency",
  "Technology",
  "Solutions",
  "Experience",
]

export const TapeSection = () => {
  return <div className="py-16 lg:py-24">
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    <div className="flex flex-none pr-4 gap-4 py-3 animate-move-left [animation-duration:30s]">
      {[...new Array(2)].fill(0).map((_, idx) =>(
        <Fragment key={idx}>
          {word.map(word => (
      <div key={word} className="inline-flex gap-4 items-center">
        <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
        <StarIcon className="size-6 text-gray-900 -rotate-12" />
      </div>
    ))}
        </Fragment>
      ))}

    {/* {word.map(word => (
      <div key={word} className="inline-flex gap-4 items-center">
        <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
        <StarIcon className="size-6 text-gray-900 -rotate-12" />
      </div>
    ))} */}
    </div>
    </div>
    </div>
  </div>;
};
