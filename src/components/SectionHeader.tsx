
export const SectionHeader = ({
    title,
    eyebrow,
    description,
}: {
    title:String,
    eyebrow:String,
    description:String
} ) => {
  return (
    <>
      <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 bg-clip-text text-transparent to-sky-400 text-center">
            {eyebrow}
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          {title}
        </h2>
        <p className="text-center md:text-lg lg:text-lg text-white/60 mt-4 max-w-md mx-auto">
          {description}
        </p>

    </>
  )
}
