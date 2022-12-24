import { AppProps } from "next/app";
import { SWRConfig, SWRConfiguration } from "swr";
import Layout from "components/layout";
import "../styles/globals.css";

function GithubUserViewer({ Component, pageProps }: AppProps) {
  const swrConfigValue: SWRConfiguration = {
    fetcher: (resource, init) =>
      fetch(resource, init).then((res) => res.json()),
  };
  return (
    <SWRConfig value={swrConfigValue}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default GithubUserViewer;
