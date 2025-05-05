
import React from 'react';

interface AssetCardProps {
  name: string;
  symbol: string;
  balance: string;
  value: string;
  changePercent: string;
  isPositive: boolean;
  iconUrl?: string;
}

const AssetCard = ({
  name,
  symbol,
  balance,
  value,
  changePercent,
  isPositive,
  iconUrl
}: AssetCardProps) => {
  return (
    <div className="bg-card rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          {iconUrl ? (
            <img src={iconUrl} alt={symbol} className="w-5 h-5" />
          ) : (
            <div className="text-xs font-bold">{symbol.substring(0, 2)}</div>
          )}
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-xs text-muted-foreground">{symbol}</p>
        </div>
      </div>
      
      <div className="flex justify-between items-end">
        <div>
          <div className="text-sm text-muted-foreground">{balance} {symbol}</div>
          <div className="text-lg font-semibold">{value}</div>
        </div>
        <div className={`text-sm ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
          {isPositive ? '↑' : '↓'} {changePercent}
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
