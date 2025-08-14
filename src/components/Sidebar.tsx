import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Car, 
  MessageCircle, 
  Calculator,
  BarChart3,
  Settings,
  User
} from 'lucide-react';
import { cn } from '../utils/cn';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '#', icon: LayoutDashboard, current: true },
  { name: 'Leads', href: '#', icon: Users, current: false },
  { name: 'Veículos', href: '#', icon: Car, current: false },
  { name: 'WhatsApp', href: '#', icon: MessageCircle, current: false },
  { name: 'FIPE', href: '#', icon: Calculator, current: false },
  { name: 'Métricas', href: '#', icon: BarChart3, current: false },
];

const bottomNavigation = [
  { name: 'Configurações', href: '#', icon: Settings },
  { name: 'Perfil', href: '#', icon: User },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={onClose}
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </div>
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-full flex-col glass-sidebar">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">AutoCRM</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  item.current
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white',
                  'group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200'
                )}
              >
                <item.icon
                  className={cn(
                    item.current ? 'text-white' : 'text-white/80 group-hover:text-white',
                    'mr-3 h-5 w-5 flex-shrink-0'
                  )}
                />
                {item.name}
              </a>
            ))}
          </nav>

          {/* Bottom navigation */}
          <div className="px-3 py-4 border-t border-white/10">
            {bottomNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:bg-white/10 hover:text-white group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
              >
                <item.icon className="text-white/80 group-hover:text-white mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};