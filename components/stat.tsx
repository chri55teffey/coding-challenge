import { FC } from "react";

type StatProps = {
  name: string;
  value: string | number;
};

const Stat: FC<StatProps> = (props) => {
  return (
    <div className="flex flex-col items-center py-4">
      <h3 className="text-[48px] font-extralight">{props.value}</h3>
      <p className="font-bold">{props.name}</p>
    </div>
  );
};

export default Stat;
