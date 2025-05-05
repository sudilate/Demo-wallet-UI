
import React from 'react';
import { Link } from "react-router-dom";
import { Wallet, BarChart2, Send, CreditCard, Settings, PiggyBank } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-sidebar border-r border-white/10 py-8 px-4 hidden md:block">
      <div className="flex items-center gap-2 mb-8 px-4">
        <div className="bg-gradient-primary p-2 rounded-lg">
          <Wallet className="h-5 w-5 text-white" />
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-primary">
          Lumina Wallet
        </span>
      </div>
      
      <div className="space-y-1">
        <SidebarItem to="/" icon={<BarChart2 className="h-5 w-5" />} text="Dashboard" active />
        <SidebarItem to="/send" icon={<Send className="h-5 w-5" />} text="Send" />
        <SidebarItem to="/receive" icon={<CreditCard className="h-5 w-5" />} text="Receive" />
        <SidebarItem to="/savings" icon={<PiggyBank className="h-5 w-5" />} text="Savings" />
        <SidebarItem to="/settings" icon={<Settings className="h-5 w-5" />} text="Settings" />
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

const SidebarItem = ({ to, icon, text, active }: SidebarItemProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        active
          ? "bg-sidebar-accent text-white"
          : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-white"
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default Sidebar;
