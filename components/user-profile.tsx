import { FC } from "react";
import Link from "next/link";
import UserCredentials from "./user-credentials";
import Stat from "./stat";

type UserProfileProps = {
  avatarUrl: string;
  fullName: string;
  userName: string;
  id: string;
  address: string;
  website: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  bio: string;
  company: string;
  twitter: string | number;
};

const LINK_STYLES = "underline text-[13px] text-blue-400 underline-offset-2";

const UserProfile: FC<UserProfileProps> = (props) => {
  return (
    <section className="bg-white shadow-2xl flex rounded-lg py-12 px-12 w-full gap-24 pr-24">
      <div className="flex flex-col items-center">
        <UserCredentials
          avatarUrl={props.avatarUrl}
          fullName={props.fullName}
          userName={props.userName}
        />
        <p className="text-[13px]">{props.address}</p>
        <Link href={props.website}>
          <a className={LINK_STYLES}>{props.website}</a>
        </Link>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex items-center justify-between w-full">
          <Stat name="Public Repos" value={props.public_repos} />
          <Stat name="Public Gists" value={props.public_gists} />
          <Stat name="Followers" value={props.followers} />
          <Stat name="Following" value={props.following} />
        </div>
        <div className="flex flex-col gap-2 text-[13px]">
          <p>
            <span className="font-bold">Biography: </span>
            <span>{props.bio}</span>
          </p>
          <p>
            <span className="font-bold">Company: </span>
            <span>{props.company}</span>
          </p>
          <p>
            <span className="font-bold">Twitter: </span>
            <Link href={new URL(`https://twitter.com/${props.twitter}`)}>
              <a className={LINK_STYLES}>@{props.twitter}</a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
