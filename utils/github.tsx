import { createAppAuth, AppAuthentication } from "@octokit/auth-app";

export const getAppAuth: () => Promise<AppAuthentication> = async () => {
  const auth = createAppAuth({
    appId: process.env.GITHUB_APP_ID as string,
    privateKey: process.env.GITHUB_APP_PRIVATE_KEY as string,
    clientId: process.env.GITHUB_APP_CLIENT_ID as string,
    clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
  });

  // Retrieve JSON Web Token (JWT) to authenticate as app
  const appAuthentication = await auth({ type: "app" });
  return appAuthentication
};
