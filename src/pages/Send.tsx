
import React, { useState } from 'react';
import Layout from '@/components/wallet/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Send = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [asset, setAsset] = useState('WAY');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending transaction:', { recipient, amount, asset });
    // In a real app, this would call a function to send the transaction
  };
  
  return (
    <Layout>
      <div className="max-w-md mx-auto">
        <div className="bg-card rounded-xl overflow-hidden border border-white/5">
          <div className="wallet-gradient p-4 text-center">
            <h2 className="text-lg font-semibold">Send Crypto</h2>
            <p className="text-sm text-white/80">Transfer funds to another wallet</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient Address</Label>
              <Input
                id="recipient"
                placeholder="0x..."
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="bg-muted/50 border-white/10"
              />
              <p className="text-xs text-muted-foreground">Enter the wallet address of the recipient</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="asset">Asset</Label>
                <Select
                  value={asset}
                  onValueChange={setAsset}
                >
                  <SelectTrigger className="bg-muted/50 border-white/10">
                    <SelectValue placeholder="Select asset" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="WAY">WAY</SelectItem>
                    <SelectItem value="ETH">ETH</SelectItem>
                    <SelectItem value="USDC">USDC</SelectItem>
                    <SelectItem value="BTC">BTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-muted/50 border-white/10"
                />
              </div>
            </div>
            
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full wallet-button"
                disabled={!recipient || !amount || !asset}
              >
                Review Transaction
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Send;
