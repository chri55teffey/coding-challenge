import { FC, PropsWithChildren } from "react";
const Layout: FC<PropsWithChildren> = (props) => {
  return (
    <div className="bg-blue-400 w-screen h-screen flex items-start justify-center overflow-auto">
      <div className="2xl:w-[1280px] w-full max-h-full py-12">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
