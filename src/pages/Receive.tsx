
import React from 'react';
import Layout from '@/components/wallet/Layout';
import ReceiveCard from '@/components/wallet/ReceiveCard';

const Receive = () => {
  // In a real app, this would be fetched from wallet state
  const walletAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
  
  return (
    <Layout>
      <div className="max-w-md mx-auto">
        <ReceiveCard address={walletAddress} />
      </div>
    </Layout>
  );
};

export default Receive;
