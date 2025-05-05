
import React from 'react';
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b border-white/10 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-primary p-2 rounded-lg">
            <Wallet className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-primary">
            Lumina Wallet
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="border-white/10 text-white hover:bg-white/5"
          >
            Connect
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
