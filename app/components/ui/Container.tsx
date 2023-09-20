"use client";

interface ContainerProps {
  children: React.ReactNode;
  bgColor?: string;
  id?: string;
  rounded?: boolean;
}

const Container = ({ children, bgColor, id, rounded }: ContainerProps) => {
  return (
    <div id={id} className={`${bgColor} py-10 ${rounded && "rounded-3xl"}`}>
      <div className="mx-auto max-w-5xl py-2 px-6 w-full flex flex-col gap-8">
        {children}
      </div>
    </div>
  );
};

export default Container;
