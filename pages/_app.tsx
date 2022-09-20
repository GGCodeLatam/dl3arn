import FirebaseProvider from "context/firebase";
import { AppProps } from "next/app";
import { GlobalStyle } from "styles/global";

import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  getDefaultWallets,
  darkTheme,
  lightTheme,
  connectorsForWallets,
  wallet,
} from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
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
const connectors2 = connectorsForWallets([
  {
    groupName: "Popular",
    wallets: [
      wallet.rainbow({ chains }),
      wallet.trust({ chains }),
      wallet.metaMask({ chains }),
      wallet.coinbase({ appName: "DL3ARN", chains }),
      wallet.walletConnect({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: connectors2,
  provider,
  webSocketProvider,
});

const App = ({ Component, pageProps }: AppProps) => {
  useChat({ url: HUBSPOT });

  return (
    <FirebaseProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          appInfo={{
            appName: "DL3ARN",
            learnMoreUrl: "https://dl3arn.com/about",
          }}
          modalSize="compact"
          theme={lightTheme({
            accentColor: "#ba9050",
          })}
        >
          <GlobalStyle />
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </FirebaseProvider>
  );
};

export default App;
