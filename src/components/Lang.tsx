export const Lang = ({ component }: { component: React.ElementType }) => {
    const Component = component;
    return (
      <>
        <Component className="size-10 fill-[url(#lang-icon-gradient)]" />
        <svg className="size-0 absolute">
          <linearGradient id="lang-icon-gradient">
            <stop offset="0%" stopColor="rgb(110 231 183)" />
            <stop offset="100%" stopColor="rgb(56 189 248)" />
          </linearGradient>
        </svg>
      </>
    );
  };
  