import React from 'react';
import { Bell, AlertTriangle, Activity, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Notifications: React.FC = () => {
  const notifications = [
    { id: 1, title: 'Anomalia Inverter 2', description: 'Rilevato calo di tensione anomalo nella CER.', time: '2 min fa', type: 'error', read: false },
    { id: 2, title: 'POD #452 Offline', description: 'Il carico aziendale non risponde alle query AI.', time: '15 min fa', type: 'warning', read: false },
    { id: 3, title: 'Ottimizzazione Suggerita', description: 'Opportunità di condivisione energia tra Consumer 1 e 3.', time: '1 ora fa', type: 'info', read: false },
    { id: 4, title: 'Sincronizzazione completata', description: 'I dati dei consumi sono stati aggiornati con successo tramite GSE.', time: 'Ieri, 18:30', type: 'success', read: true },
    { id: 5, title: 'Nuovo Report Disponibile', description: 'Il report di consuntivazione del mese precedente è pronto.', time: 'Ieri, 09:00', type: 'info', read: true },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-secondary flex items-center gap-3">
            <Bell className="w-8 h-8 text-primary" />
            Centro Notifiche
          </h2>
          <p className="text-slate-500 mt-2">Gestisci avvisi, anomalie e raccomandazioni AI</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors font-bold text-sm">
          <CheckCircle2 className="w-4 h-4" />
          Segna tutte come lette
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-100">
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              className={cn(
                "p-6 transition-all hover:bg-slate-50 cursor-pointer flex gap-5",
                !notif.read ? "bg-slate-50/50" : "bg-white"
              )}
            >
              <div className="mt-1">
                {notif.type === 'error' && <div className="p-3 bg-red-50 text-red-500 rounded-2xl"><AlertTriangle className="w-5 h-5" /></div>}
                {notif.type === 'warning' && <div className="p-3 bg-orange-50 text-orange-400 rounded-2xl"><Activity className="w-5 h-5" /></div>}
                {notif.type === 'info' && <div className="p-3 bg-blue-50 text-blue-400 rounded-2xl"><ShieldCheck className="w-5 h-5" /></div>}
                {notif.type === 'success' && <div className="p-3 bg-emerald-50 text-emerald-500 rounded-2xl"><CheckCircle2 className="w-5 h-5" /></div>}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className={cn("font-bold text-secondary text-base", !notif.read && "text-slate-900 font-extrabold")}>
                    {notif.title}
                  </h4>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{notif.time}</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-3 pr-8">{notif.description}</p>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg",
                    notif.type === 'error' ? "bg-red-50 text-red-600" :
                    notif.type === 'warning' ? "bg-orange-50 text-orange-600" : 
                    notif.type === 'success' ? "bg-emerald-50 text-emerald-600" :
                    "bg-blue-50 text-blue-600"
                  )}>
                    {notif.type === 'error' ? 'Critico' : 
                     notif.type === 'warning' ? 'Attenzione' : 
                     notif.type === 'success' ? 'Completato' : 'Analisi AI'}
                  </span>
                  {!notif.read && (
                    <span className="w-2 h-2 rounded-full bg-primary ml-2"></span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
