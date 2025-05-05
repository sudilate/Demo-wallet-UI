
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, Menu, X, BarChart2, Send, CreditCard, Settings, PiggyBank } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between py-4 px-4 border-b border-white/10">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-primary p-2 rounded-lg">
            <Wallet className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-primary">
            WAY
          </span>
        </Link>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 top-[73px] z-50 bg-background">
          <div className="flex flex-col p-4 space-y-4">
            <MobileNavItem to="/" icon={<BarChart2 className="h-5 w-5" />} text="Dashboard" />
            <MobileNavItem to="/send" icon={<Send className="h-5 w-5" />} text="Send" />
            <MobileNavItem to="/receive" icon={<CreditCard className="h-5 w-5" />} text="Receive" />
            <MobileNavItem to="/savings" icon={<PiggyBank className="h-5 w-5" />} text="Savings" />
            <MobileNavItem to="/settings" icon={<Settings className="h-5 w-5" />} text="Settings" />
          </div>
        </div>
      )}
    </div>
  );
};

interface MobileNavItemProps {
  to: string;
  icon: React.ReactNode;
  text: string;
}

const MobileNavItem = ({ to, icon, text }: MobileNavItemProps) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-white/5 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default MobileNav;
