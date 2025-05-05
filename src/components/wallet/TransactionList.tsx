
import React from 'react';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';

export interface Transaction {
  id: string;
  type: 'send' | 'receive';
  amount: string;
  symbol: string;
  address: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div className="bg-card rounded-xl border border-white/5 overflow-hidden">
      <div className="p-4 border-b border-white/5">
        <h2 className="font-semibold">Recent Transactions</h2>
      </div>
      
      <div className="divide-y divide-white/5">
        {transactions.length > 0 ? (
          transactions.map((tx) => (
            <TransactionItem key={tx.id} transaction={tx} />
          ))
        ) : (
          <div className="p-6 text-center text-muted-foreground">
            No transactions yet
          </div>
        )}
      </div>
    </div>
  );
};

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const { type, amount, symbol, address, timestamp, status } = transaction;
  
  return (
    <div className="transaction-item">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${type === 'receive' ? 'bg-emerald-500/10' : 'bg-red-500/10'}`}>
          {type === 'receive' ? (
            <ArrowDownLeft className="h-5 w-5 text-emerald-400" />
          ) : (
            <ArrowUpRight className="h-5 w-5 text-red-400" />
          )}
        </div>
        
        <div>
          <div className="font-medium">
            {type === 'receive' ? 'Received' : 'Sent'} {symbol}
          </div>
          <div className="text-sm text-muted-foreground">
            {address.substring(0, 6)}...{address.substring(address.length - 4)}
          </div>
        </div>
      </div>
      
      <div className="text-right">
        <div className="font-medium">
          {type === 'receive' ? '+' : '-'}{amount} {symbol}
        </div>
        <div className="text-xs text-muted-foreground flex items-center justify-end gap-1">
          <span className={`inline-block w-2 h-2 rounded-full ${
            status === 'completed' ? 'bg-emerald-400' : 
            status === 'pending' ? 'bg-amber-400' : 'bg-red-400'
          }`}></span>
          <span>{timestamp} · {status}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
