
import React from 'react';
import Layout from '@/components/wallet/Layout';
import { PiggyBank } from 'lucide-react';

const Savings = () => {
  // Mock data - in a real app, this would come from API/state
  const savingsProducts = [
    {
      id: '1',
      name: 'Flexible Savings',
      description: 'Earn interest with the flexibility to withdraw anytime',
      apy: '4.5%',
      minDeposit: '0.1 ETH',
      assets: ['ETH', 'USDC', 'BTC']
    },
    {
      id: '2',
      name: 'Fixed Savings',
      description: 'Higher returns for locking your assets for a fixed period',
      apy: '8.2%',
      minDeposit: '1 ETH',
      assets: ['ETH', 'USDC']
    },
    {
      id: '3',
      name: 'Staking',
      description: 'Earn rewards by staking your assets to secure the network',
      apy: '5.8%',
      minDeposit: '32 ETH',
      assets: ['ETH']
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-wallet-purple/20 p-2 rounded-lg">
            <PiggyBank className="h-6 w-6 text-wallet-purple" />
          </div>
          <h1 className="text-2xl font-bold">Savings & Earn</h1>
        </div>
        
        <div className="bg-card rounded-xl p-6 border border-white/5 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-medium">Start earning on your crypto</h2>
              <p className="text-muted-foreground">Put your assets to work and earn passive income</p>
            </div>
            <button className="wallet-button whitespace-nowrap">Get Started</button>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Available Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savingsProducts.map((product) => (
            <div key={product.id} className="bg-card rounded-xl border border-white/5 overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">APY</span>
                    <span className="font-semibold text-emerald-400">{product.apy}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min. Deposit</span>
                    <span>{product.minDeposit}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Assets</span>
                    <div className="flex gap-1">
                      {product.assets.map((asset) => (
                        <span key={asset} className="text-xs bg-white/10 px-2 py-1 rounded-full">
                          {asset}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button className="wallet-button w-full">
                  Start Earning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Savings;
