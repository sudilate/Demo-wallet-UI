
import React from 'react';

interface ReceiveCardProps {
  address: string;
}

const ReceiveCard = ({ address }: ReceiveCardProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    // In a real app, you would show a toast notification here
    console.log('Address copied to clipboard');
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden border border-white/5">
      <div className="wallet-gradient p-4 text-center">
        <h2 className="text-lg font-semibold">Receive Funds</h2>
        <p className="text-sm text-white/80">Scan QR code or copy address</p>
      </div>
      
      <div className="p-6 flex flex-col items-center">
        {/* This would be a real QR code in production */}
        <div className="bg-white p-4 rounded-lg mb-4 w-48 h-48 flex items-center justify-center">
          <div className="text-black text-xs">QR Code Placeholder</div>
        </div>
        
        <div className="w-full">
          <div className="bg-muted/50 rounded-lg p-3 flex items-center justify-between mb-4">
            <div className="text-sm font-mono overflow-hidden text-ellipsis">
              {address}
            </div>
            <button 
              onClick={copyToClipboard}
              className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded-md transition-colors"
            >
              Copy
            </button>
          </div>
          
          <button className="wallet-button w-full">
            Share Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiveCard;
