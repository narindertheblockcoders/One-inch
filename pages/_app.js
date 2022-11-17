import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../Component/ui/Navbar";
import { SSRProvider } from "react-bootstrap";
import Footer from "../Component/ui/Footer";
import Head from "next/head";
import Script from "next/script";
import '@rainbow-me/rainbowkit/styles.css';
import {publicProvider} from 'wagmi/providers/public'
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {chain, configureChains, createClient, WagmiConfig} from "wagmi";


const {chains, provider} = configureChains([chain.mainnet, chain.goerli],
  [
  //   alchemyProvider({apiKey: 'your_alchemy_key_here'}),
  // infuraProvider({apiKey: 'your_infura_key_here'}),
  publicProvider()
]
  )

  const {connectors} = getDefaultWallets({
    appName: 'Meta Fire',
    chains
  })

  const wagmiClient = createClient({
    autoConnect:true,
    connectors,
    provider
  })

///////Rainbow installation/////


function MyApp({ Component, pageProps }) {
  return (
    <div session={pageProps.session}>
      <SSRProvider>
    

      <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} modalSize="compact" >
  
            <Head>
              <meta
                // key="description"x"
                property="og:description" content="STIER BACK OFFICE."/>
              <meta property="og:image" key="image" content="" />
            </Head>
            {/* <div className="new-dashboard"> */}
            <Navbar />
            <Component {...pageProps} />
            {/* </div> */}
            <Footer />

    </RainbowKitProvider>
    </WagmiConfig>

    
          <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></Script>
 

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/fontawesome.min.css" integrity="sha512-RvQxwf+3zJuNwl4e0sZjQeX7kUa3o82bDETpgVCH2RiwYSZVDdFJ7N/woNigN/ldyOOoKw8584jM4plQdt8bhA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/v5-font-face.min.css" integrity="sha512-FrptovHG4M5T2rAIxvIeTsv3z3luk7BF7WEYdUkTB8VtkqD+8ZYlVPpJgIGqWK65sxuom0q6/lpXpBu43CdaPg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <script src="js/bootstrap.bundle.min.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css" integrity="sha512-5PV92qsds/16vyYIJo3T/As4m2d8b6oWYfoqV+vtizRB6KhF1F9kYzWzQmsO6T3z3QG2Xdhrx7FQ+5R1LiQdUA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    
      </SSRProvider>
    </div>
  );
}

export default MyApp;
