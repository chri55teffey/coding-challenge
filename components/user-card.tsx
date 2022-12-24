import { FC } from "react";
import Link from "next/link";
import UserCredentials from "./user-credentials";

type UserCardProps = {
  avatarUrl: string;
  fullName: string;
  userName: string;
  id: string;
};

const UserCard: FC<UserCardProps> = (props) => {
  return (
    <section className="flex items-center justify-center">
      <div className="bg-white shadow-2xl flex flex-col items-center rounded-lg py-6 px-12 w-64">
        <UserCredentials
          avatarUrl={props.avatarUrl}
          fullName={props.fullName}
          userName={props.userName}
        />
        <Link href={`/profile?username=${props.fullName}`}>
          <a className="rounded-md uppercase py-2 px-6 bg-blue-700 text-white text-[12px] my-2">
            view profile
          </a>
        </Link>
      </div>
    </section>
  );
};

export default UserCard;
