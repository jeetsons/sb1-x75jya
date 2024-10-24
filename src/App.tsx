import React from 'react';
import { WagmiConfig, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { createPublicClient, http } from 'viem';
import { LendingDashboard } from './components/LendingDashboard';

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  }),
});

function App() {
  return (
    <WagmiConfig config={config}>
      <div className="min-h-screen bg-gray-50">
        <LendingDashboard />
      </div>
    </WagmiConfig>
  );
}

export default App;