import { FC } from "react";
import Image from "next/image";

type UserCredentialsProps = {
  avatarUrl: string;
  fullName: string;
  userName: string;
};

const UserCredentials: FC<UserCredentialsProps> = (props) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        width={150}
        height={150}
        className="rounded-full"
        src={props.avatarUrl}
      />
      <div className="my-4 flex flex-col items-center gap-1">
        <h2 className="font-bold text-[16px]">{props.fullName}</h2>
        <p className="text-[12px]">{props.userName}</p>
      </div>
    </div>
  );
};

export default UserCredentials;
