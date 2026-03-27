import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Community from './components/Community';
import Login from './components/Login';
import { FileText, Settings } from 'lucide-react';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'community':
        return <Community />;
      case 'reports':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-secondary">Reportistica</h2>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]">
              <div className="bg-emerald-50 p-4 rounded-full text-emerald-500">
                <FileText className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-secondary">Archivio Consuntivi</h3>
              <p className="text-slate-500 max-w-sm">
                Qui troverai tutti i report mensili generati automaticamente dal sistema Brilla.
              </p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-secondary">Impostazioni</h2>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]">
              <div className="bg-slate-50 p-4 rounded-full text-slate-500">
                <Settings className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-secondary">Configurazione Rete</h3>
              <p className="text-slate-500 max-w-sm">
                Configura i nodi di rete, i parametri energetici e il profilo della tua CER.
              </p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen w-full bg-brand-bg flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={() => setIsAuthenticated(false)} />
      <main className="flex-1 ml-64 p-10 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
