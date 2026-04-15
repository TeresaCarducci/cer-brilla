import React from 'react';
import { LayoutDashboard, Users, Settings, Bell, Zap, X } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onLogout, isOpen, onClose }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'cer', label: 'CER', icon: Zap },
    { id: 'notifications', label: 'Notifiche', icon: Bell },
    { id: 'settings', label: 'Impostazioni', icon: Settings },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      <aside className={`fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-100 flex flex-col shadow-sm z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        {/* Logo and close button */}
        <div className="px-8 pt-6 pb-6 flex items-center justify-between">
          <img src="/brilla.svg" alt="Brilla Logo" className="h-10 w-auto" />
          <button 
            onClick={onClose}
            className="md:hidden p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 mt-2 overflow-y-auto">
          <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase px-3 mb-3">Generale</p>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-semibold ${activeTab === item.id
                    ? 'bg-[#b8e0b0] text-[#1a3d2b]'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                    }`}
                >
                  <item.icon
                    className={`w-5 h-5 flex-shrink-0 ${activeTab === item.id ? 'text-[#2d6a3f]' : 'text-slate-400'
                      }`}
                    strokeWidth={1.8}
                  />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User / Logout */}
        <div className="px-4 pb-6 border-t border-slate-100 pt-4 mt-auto">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-all"
          >
            <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-extrabold text-sm shadow-sm flex-shrink-0">
              T
            </div>
            <span className="text-sm font-semibold">Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
