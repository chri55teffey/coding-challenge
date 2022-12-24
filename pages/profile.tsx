import Head from "next/head";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import LoadingIndicator from "components/loading-indicator";
import UserProfile from "components/user-profile";
import { User } from "types";

export default function Home() {
  const { query } = useRouter();
  const { data, error, isLoading } = useSWR(
    query?.username ? `/api/users/${query.username}` : null
  );

  if (isLoading) return <LoadingIndicator />;

  const user: User = data?.user;
  if (!user) return null;

  return (
    <>
      <Head>
        <title>User Profile - Coding Challenge</title>
      </Head>

      <main>
        <UserProfile
          avatarUrl={user.avatar_url}
          fullName={user.name || "N/A"}
          userName={user.login}
          id={user.id.toString()}
          address={user.location || "N/A"}
          website={user.html_url}
          public_repos={user.public_repos || 0}
          public_gists={user.public_gists || 0}
          followers={user.followers || 0}
          following={user.following || 0}
          bio={user.bio || "N/A"}
          company={user.company || "N/A"}
          twitter={user.twitter_username || "N/A"}
        />
        <div className="flex justify-center gap-4 text-white my-6">
          <Link href="/">
            <a className="flex items-center text-[14px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <span>Back</span>
            </a>
          </Link>
          <p>|</p>
          <Link href="/">
            <a className="flex items-center text-[14px]">
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
