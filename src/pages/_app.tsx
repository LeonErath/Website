import * as Sentry from "@sentry/browser";
import type { AppProps } from "next/app";
import { ApolloProvider } from "react-apollo";
import { apolloClient } from "../clients/apollo.client";
import { Page } from "../layout/Page";
import "../styles.css";
import "../theme.scss";

if (process.env.NODE_ENV !== "development") {
  Sentry.init({
    dsn: "https://6c61dd2c70a4401ebce9ba477fcd6542@sentry.io/1539721",
  });
}

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
};

export default App;
