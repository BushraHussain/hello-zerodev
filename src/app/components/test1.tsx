// "use client"

// import { 
//   GoogleSocialWalletConnector, 
//   FacebookSocialWalletConnector, 
//   GithubSocialWalletConnector,
//   DiscordSocialWalletConnector,
//   TwitchSocialWalletConnector,
//   TwitterSocialWalletConnector,
//   SocialWalletConnector
// } from '@zerodevapp/wagmi';

// import { configureChains, createClient, WagmiConfig, mainnet } from 'wagmi';
// import { polygonMumbai } from 'wagmi/chains';
// import { alchemyProvider } from 'wagmi/providers/alchemy';

// import { useState } from 'react';
// import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi'


// //--------

// const { chains, provider, webSocketProvider } = configureChains(
//   [polygonMumbai],
//   [alchemyProvider({ apiKey: "1L6LOkgRJMTQ8ZmPfPWSlkz1Vjz9XkvE" })]   
// );

// const client = createClient({
//   autoConnect: false,
//   provider,
//   webSocketProvider,
// })

// const socialConnector = new GoogleSocialWalletConnector({options: {
//   projectId: "11926ef6-bfa1-4e40-8454-bd55ddb95f5d",
// }})


// const ConnectButton = () => {
//   const [loading, setLoading] = useState(false);
//   const { connect, error, isLoading, pendingConnector } = useConnect();
//   const { address, connector, isConnected } = useAccount();
//   const { disconnect } = useDisconnect();
//   const { chain } = useNetwork();

//   const connectWallet = async () => {
//     setLoading(true)
//     await connect({
//       connector: socialConnector
//     })
//     setLoading(false)
//   }

//   if (isConnected) {
//     return (
//       <div>
//         <div>{address}</div>
//         <div>Connected to {socialConnector.name}</div>
//         {/* <button onClick={disconnect}>Disconnect</button> */}
//       </div>
//     )
//   }
//   return (
//     <button disabled={isLoading || loading} onClick={connectWallet}>
//       {isLoading || loading ? 'loading...' : 'Connect to Social'}
//     </button>
//   )


// }


// //-------
// export default function Home() {

//     return (
//       <WagmiConfig client={client}>
//         <ConnectButton />
//       </WagmiConfig>
//     )
   
  
// }
