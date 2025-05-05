
import React from 'react';
import Layout from '@/components/wallet/Layout';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Settings = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        <div className="space-y-6">
          <div className="bg-card rounded-xl p-6 border border-white/5">
            <h2 className="text-lg font-medium mb-4">Security</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="2fa" className="text-base font-medium">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <Switch id="2fa" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="biometrics" className="text-base font-medium">Biometric Authentication</Label>
                  <p className="text-sm text-muted-foreground">Use fingerprint or face ID to confirm transactions</p>
                </div>
                <Switch id="biometrics" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-lock" className="text-base font-medium">Auto-Lock Wallet</Label>
                  <p className="text-sm text-muted-foreground">Automatically lock wallet after 5 minutes of inactivity</p>
                </div>
                <Switch id="auto-lock" defaultChecked />
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-white/5">
            <h2 className="text-lg font-medium mb-4">Preferences</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="notifications" className="text-base font-medium">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications for transactions and price alerts</p>
                </div>
                <Switch id="notifications" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="currency" className="text-base font-medium">Display Currency</Label>
                  <p className="text-sm text-muted-foreground">Set your preferred currency for displaying values</p>
                </div>
                <select className="bg-muted text-white border-white/10 rounded-md px-3 py-1">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>JPY</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="testnet" className="text-base font-medium">Testnet Mode</Label>
                  <p className="text-sm text-muted-foreground">Connect to test networks instead of mainnet</p>
                </div>
                <Switch id="testnet" />
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-white/5">
            <h2 className="text-lg font-medium mb-4">About</h2>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Version</span>
                <span>1.0.0</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Terms of Service</span>
                <a href="#" className="text-wallet-teal hover:underline">View</a>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Privacy Policy</span>
                <a href="#" className="text-wallet-teal hover:underline">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
