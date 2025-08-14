import React from 'react';
import { Menu, Bell, Search, User } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="glass-card border-b border-white/20 h-16">
      <div className="flex items-center justify-between px-4 h-full">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden"
            icon={<Menu className="w-5 h-5" />}
          />
          
          <div className="hidden md:flex relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-silver-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar leads, veículos..."
              className="block w-80 pl-10 pr-3 py-2 border border-silver-200 rounded-lg bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder-silver-400"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </Button>

          {/* User menu */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-silver-900">Roberto Mendes</p>
              <p className="text-xs text-silver-500">Vendedor Senior</p>
            </div>
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};