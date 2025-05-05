
import React from 'react';
import Layout from '@/components/wallet/Layout';
import BalanceCard from '@/components/wallet/BalanceCard';
import AssetCard from '@/components/wallet/AssetCard';
import TransactionList, { Transaction } from '@/components/wallet/TransactionList';

const Dashboard = () => {
  // Mock data - in a real app, this would come from API/state
  const mockTransactions: Transaction[] = [
    {
      id: '1',
      type: 'receive',
      amount: '0.42',
      symbol: 'ETH',
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      timestamp: '2h ago',
      status: 'completed',
    },
    {
      id: '2',
      type: 'send',
      amount: '0.15',
      symbol: 'ETH',
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      timestamp: '1d ago',
      status: 'completed',
    },
    {
      id: '3',
      type: 'receive',
      amount: '125',
      symbol: 'USDC',
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      timestamp: '3d ago',
      status: 'completed',
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BalanceCard 
              balance="3.42" 
              symbol="ETH" 
              change="2.5%" 
              isPositive={true} 
            />
            
            <div className="bg-card rounded-xl p-6 border border-white/5">
              <h2 className="text-lg font-medium text-white/80 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                <button className="wallet-button">Send</button>
                <button className="wallet-button-secondary">Receive</button>
                <button className="wallet-button-secondary">Swap</button>
                <button className="wallet-button-secondary">Buy</button>
              </div>
            </div>
          </div>
          
          <TransactionList transactions={mockTransactions} />
        </div>
        
        <div className="space-y-6">
          <div className="bg-card rounded-xl p-6 border border-white/5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-white/80">Your Assets</h2>
              <button className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded-md transition-colors">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              <AssetCard
                name="Ethereum"
                symbol="ETH"
                balance="3.42"
                value="$6,840.00"
                changePercent="2.5%"
                isPositive={true}
              />
              
              <AssetCard
                name="USD Coin"
                symbol="USDC"
                balance="1,250.00"
                value="$1,250.00"
                changePercent="0.1%"
                isPositive={true}
              />
              
              <AssetCard
                name="Bitcoin"
                symbol="BTC"
                balance="0.12"
                value="$4,320.00"
                changePercent="1.2%"
                isPositive={false}
              />
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-white/5">
            <h2 className="text-lg font-medium text-white/80 mb-4">Network Status</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Ethereum</span>
                <span className="flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-sm">Active</span>
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Gas Price</span>
                <span className="text-sm">15 Gwei</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Last Block</span>
                <span className="text-sm">#14,245,671</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
