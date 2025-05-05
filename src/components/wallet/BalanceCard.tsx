
import React from 'react';
import { CreditCard } from 'lucide-react';

interface BalanceCardProps {
  balance: string;
  symbol: string;
  change: string;
  isPositive: boolean;
}

const BalanceCard = ({ balance, symbol, change, isPositive }: BalanceCardProps) => {
  return (
    <div className="wallet-card p-6">
      <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-wallet-purple/20 blur-2xl" />
      <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-wallet-indigo/20 blur-2xl" />
      
      <div className="relative z-10">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-lg font-medium text-white/80">Total Balance</h2>
          <div className="bg-white/10 p-2 rounded-lg">
            <CreditCard className="h-4 w-4 text-white" />
          </div>
        </div>
        
        <div className="mb-4">
          <div className="text-3xl font-bold text-white">{balance} {symbol}</div>
          <div className={`text-sm ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
            {isPositive ? '↑' : '↓'} {change} (24h)
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6">
          <button className="wallet-button flex-1">Send</button>
          <button className="wallet-button-secondary flex-1">Receive</button>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
