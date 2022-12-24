import Head from "next/head";
import useSWR from "swr";
import LoadingIndicator from "components/loading-indicator";
import UserCard from "components/user-card";
import { User } from "types";

export default function Home() {
  const { data, error, isLoading } = useSWR(`/api/users`);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  const users: Array<User> = data?.users || [];

  return (
    <>
      <Head>
        <title>Github User Viewer - Coding Challenge</title>
        <meta
          name="description"
          content="View a list of Github users provided by the Github Users API"
        />
      </Head>

      <main className="flex flex-col items-center">
        <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-col-1 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              avatarUrl={user.avatar_url}
              fullName={user.login}
              userName={user.html_url}
              id={user.id.toString()}
            />
          ))}
        </div>
      </main>
    </>
  );
}
