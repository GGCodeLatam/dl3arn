import Layout from "components/Layouts";
import FirebaseProvider from "context/firebase";
import { AppProps } from "next/app";
import { GlobalStyle } from "styles/global";

import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  getDefaultWallets,
  darkTheme,
} from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Head from "next/head";
import useChat from "hooks/useChat";
import { HUBSPOT } from "constants/index";

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon, chain.rinkeby],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      // apiKey: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Dl3arn",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const App = ({ Component, pageProps }: AppProps) => {
  useChat({ url: HUBSPOT });

  return (
    <FirebaseProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
      </WagmiConfig>
    </FirebaseProvider>
  );
};

export default App;
