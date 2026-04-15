import React, { useState } from 'react';
import { User, ArrowLeft, Plus, Search, FileEdit, Trash2 } from 'lucide-react';

interface Member {
  id: string;
  name: string;
  role: 'Prosumer' | 'Consumer';
  email: string;
  pod: string;
  status: 'Attivo' | 'Inattivo';
  isOnline: boolean;
  joinDate: string;
  performance: {
    consumo30d: number;
    produzione30d: number;
    autoconsumo: number;
    autarchia: number;
    energiaCondivisa: number;
    cashback: number;
  };
}

const members: Member[] = [
  {
    id: '1',
    name: 'Mario Rossi',
    role: 'Prosumer',
    email: 'mario.rossi@example.com',
    pod: 'IT 674738399',
    status: 'Attivo',
    isOnline: true,
    joinDate: '2024-01-15',
    performance: {
      consumo30d: 450,
      produzione30d: 850,
      autoconsumo: 65,
      autarchia: 82,
      energiaCondivisa: 400,
      cashback: 125.50
    }
  },
  {
    id: '2',
    name: 'Luigi Bianchi',
    role: 'Consumer',
    email: 'luigi.bianchi@example.com',
    pod: 'IT 634725829',
    status: 'Attivo',
    isOnline: false,
    joinDate: '2024-02-01',
    performance: {
      consumo30d: 320,
      produzione30d: 0,
      autoconsumo: 0,
      autarchia: 40,
      energiaCondivisa: 128,
      cashback: 45.20
    }
  },
  {
    id: '3',
    name: 'Anna Neri',
    role: 'Consumer',
    email: 'anna.neri@example.com',
    pod: 'IT 588348490',
    status: 'Attivo',
    isOnline: true,
    joinDate: '2024-02-10',
    performance: {
      consumo30d: 280,
      produzione30d: 0,
      autoconsumo: 0,
      autarchia: 35,
      energiaCondivisa: 98,
      cashback: 32.80
    }
  },
  {
    id: '4',
    name: 'Elena Verdi',
    role: 'Consumer',
    email: 'elena.verdi@example.com',
    pod: 'IT 739402074',
    status: 'Attivo',
    isOnline: true,
    joinDate: '2024-03-05',
    performance: {
      consumo30d: 410,
      produzione30d: 0,
      autoconsumo: 0,
      autarchia: 28,
      energiaCondivisa: 115,
      cashback: 38.45
    }
  },
  {
    id: '5',
    name: 'Marco Gialli',
    role: 'Consumer',
    email: 'marco.gialli@example.com',
    pod: 'IT 928374651',
    status: 'Attivo',
    isOnline: true,
    joinDate: '2024-03-20',
    performance: {
      consumo30d: 350,
      produzione30d: 0,
      autoconsumo: 0,
      autarchia: 32,
      energiaCondivisa: 112,
      cashback: 39.10
    }
  }
];

const Community: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  if (selectedMember) {
    return (
      <div className="flex flex-col w-full flex-1 mb-8 animate-in fade-in slide-in-from-right-4 duration-500" style={{ minWidth: '100%' }}>
        {/* Intestazione (fuori dal contenitore) */}
        <div className="flex items-start gap-4 mb-6">
          <button
            onClick={() => setSelectedMember(null)}
            className="text-slate-400 hover:text-secondary transition-colors mt-1"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-[28px] leading-tight font-bold text-secondary">{selectedMember.name}</h2>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium whitespace-nowrap mt-1.5">
              <span className="hover:text-secondary cursor-pointer transition-colors" onClick={() => setSelectedMember(null)}>Lista CER</span>
              <span>/</span>
              <span className="hover:text-secondary cursor-pointer transition-colors" onClick={() => setSelectedMember(null)}>CER Sole</span>
              <span>/</span>
              <span className="hover:text-secondary cursor-pointer transition-colors" onClick={() => setSelectedMember(null)}>Utenti</span>
              <span>/</span>
              <span className="font-bold text-secondary">{selectedMember.name}</span>
            </div>
          </div>
        </div>

        {/* Contenitore Box Bianco */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col w-full flex-1">
        {/* Content Area - Compattato */}
        <div className="p-8 flex-1 flex flex-col space-y-12">
          
          {/* Cashback Widget */}
          <div className="w-full rounded-3xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-8 flex justify-between items-center text-white shadow-lg relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full translate-y-1/3 -translate-x-1/4 blur-xl"></div>

            <div className="flex items-center gap-6 relative z-10">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center overflow-hidden border-2 border-white/30 backdrop-blur-sm shadow-inner">
                <User className="w-10 h-10 text-white/90" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">{selectedMember.name}</h3>
                <p className="text-purple-100 mt-1 font-medium text-lg">{selectedMember.performance.energiaCondivisa.toLocaleString('it-IT')} <span className="text-sm">kWh</span></p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-5 flex flex-col items-center justify-center border border-white/20 relative z-10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]">
              <p className="text-3xl font-extrabold tracking-tight">€ {selectedMember.performance.cashback.toFixed(2).replace('.', ',')}</p>
              <p className="text-sm text-purple-100 mt-1 font-medium tracking-wide uppercase">Cashback</p>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-stretch">
          {/* Sezione Anagrafica */}
          <section className="flex flex-col">
            <h3 className="text-xl font-bold text-secondary mb-6">Anagrafica</h3>
            <div className="space-y-6 bg-slate-50/30 p-8 rounded-2xl border border-slate-100 flex-1">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Nome e Cognome</label>
                  <input
                    type="text"
                    defaultValue={selectedMember.name}
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm font-medium text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Tipologia Utente</label>
                  <input
                    type="text"
                    defaultValue={selectedMember.role === 'Prosumer' ? "Privato - Prosumer" : "Privato - Consumer"}
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm font-medium text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">C.F. / P.IVA</label>
                  <input
                    type="text"
                    defaultValue="LCVRD85F20I4829"
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm font-medium text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Indirizzo</label>
                  <input
                    type="text"
                    defaultValue="Via delle Viole, 37"
                    className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm font-medium text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">E-mail</label>
                    <input
                      type="email"
                      defaultValue={selectedMember.email}
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm font-medium text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Cellulare</label>
                    <input
                      type="text"
                      defaultValue=""
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm font-medium text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
              </div>
          </section>

          {/* Sezione Energia */}
          <section className="flex flex-col">
            <h3 className="text-xl font-bold text-secondary mb-6">Energia</h3>
            <div className="w-full flex flex-col gap-6 flex-1">
              
              {/* Chart Section */}
              <div className="flex-1 flex flex-col">

              <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 flex-1 relative overflow-hidden min-h-[400px]">
                {/* Y-axis labels */}
                <div className="absolute left-4 top-10 bottom-10 w-12 flex flex-col justify-between text-[10px] text-slate-400 font-bold items-end pr-2 z-10">
                  <span>3k</span>
                  <span>2.25k</span>
                  <span>1.5k</span>
                  <span>0.75k</span>
                  <span>0</span>
                </div>

                {/* Horizontal Grid lines */}
                <div className="absolute left-16 right-8 top-10 bottom-10 flex flex-col justify-between">
                  <div className="border-b border-dashed border-slate-200 w-full"></div>
                  <div className="border-b border-dashed border-slate-200 w-full"></div>
                  <div className="border-b border-dashed border-slate-200 w-full"></div>
                  <div className="border-b border-dashed border-slate-200 w-full"></div>
                  <div className="border-b border-slate-300 w-full mb-[-1px] z-10"></div>
                </div>

                {/* Bar Chart representing the new style */}
                <div className="absolute left-16 right-16 top-10 bottom-10 flex justify-between items-end z-10">
                  {[
                    { time: '02:00', prod: 0, cons: 7 },
                    { time: '04:00', prod: 0, cons: 8 },
                    { time: '08:00', prod: 10, cons: 15 },
                    { time: '10:00', prod: 30, cons: 10 },
                    { time: '12:00', prod: 35, cons: 12 },
                    { time: '14:00', prod: 35, cons: 15 },
                    { time: '16:00', prod: 5,  cons: 5 },
                    { time: '18:00', prod: 10, cons: 60 },
                    { time: '20:00', prod: 0,  cons: 30 },
                    { time: '22:00', prod: 0,  cons: 20 },
                  ].map((d, i) => (
                    <div key={i} className="flex flex-col items-center justify-end h-full w-10 group relative">
                      <div className="w-full h-full bg-slate-200/50 rounded-2xl relative flex items-end justify-center p-1">
                        <div className="w-full bg-[#bef264] rounded-[10px] transition-all duration-500" style={{ height: `${d.cons}%` }}></div>
                        {d.prod > 0 && (
                          <div className="absolute w-full px-0.5 z-10 transition-all duration-500" style={{ bottom: `${d.prod}%` }}>
                            <div className="w-full h-[2px] bg-[#3b82f6]"></div>
                          </div>
                        )}
                      </div>
                      <span className="absolute -bottom-8 text-[10px] text-slate-400 font-bold whitespace-nowrap">{d.time}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Toolbar Moved Below Chart */}
              <div className="flex justify-between items-center mt-6">
                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-xs font-bold text-slate-500">Produzione</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary-dark"></div>
                    <span className="text-xs font-bold text-slate-500">Consumo</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="border border-slate-200 rounded-md px-3 py-1.5 text-xs font-bold text-slate-600 bg-white flex items-center gap-2 shadow-sm">
                    2 luglio 2025
                    <div className="bg-slate-100 p-0.5 rounded cursor-pointer hover:bg-slate-200 transition-colors">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                  </div>
                  <button className="border border-slate-200 rounded-md p-1.5 bg-white text-slate-500 hover:text-secondary shadow-sm transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
                  </button>
                </div>
              </div>

              </div>
            </div>
          </section>
          </div>

          {/* Sezione POD */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-secondary">Dati POD</h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-slate-800 transition-colors shadow-sm text-sm font-bold">
                <Plus className="w-4 h-4" />
                Aggiungi POD
              </button>
            </div>

            <div className="w-full flex flex-col items-end">

              <div className="w-full bg-slate-50/50 rounded-2xl border border-slate-100 p-8 flex flex-col relative group">
                {/* Dots menu */}
                <button className="absolute right-6 top-8 text-slate-400 hover:text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></svg>
                </button>

                {/* Status Pill */}
                <div className="mb-6">
                  {selectedMember.isOnline ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary/20 text-primary-dark">
                      Online
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-600">
                      Attesa approvazione
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wide">POD*</label>
                    <input
                      type="text"
                      defaultValue={selectedMember.pod}
                      className="w-full bg-slate-100/70 border border-transparent rounded px-4 py-2 text-sm font-bold text-slate-600 focus:outline-none focus:bg-white focus:border-slate-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Tipologia*</label>
                    <select className="w-full bg-slate-100/70 border border-transparent rounded px-4 py-2 text-sm font-medium text-slate-600 focus:outline-none focus:bg-white focus:border-slate-200 focus:ring-2 focus:ring-primary/20 appearance-none">
                      <option>{selectedMember.role === 'Prosumer' ? 'Scambio M1 / Prosumer' : 'Consumo M0 / Consumer'}</option>
                      <option>Produzione M2 / Producer</option>
                    </select>
                  </div>
                  <div className="w-24">
                    <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Fattore K</label>
                    <select className="w-full bg-slate-100/70 border border-transparent rounded px-4 py-2 text-sm font-medium text-slate-600 focus:outline-none focus:bg-white focus:border-slate-200 focus:ring-2 focus:ring-primary/20 appearance-none">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Potenza (kW)*</label>
                    <div className="relative">
                      <input
                        type="text"
                        defaultValue="5"
                        className="w-full bg-slate-100/70 border border-transparent rounded px-4 py-2 text-sm font-bold text-slate-600 focus:outline-none focus:bg-white focus:border-slate-200 focus:ring-2 focus:ring-primary/20"
                      />
                      <span className="absolute right-4 top-2 text-xs font-bold text-slate-400">kW</span>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Località*</label>
                    <input
                      type="text"
                      defaultValue="Salerno"
                      className="w-full bg-slate-100/70 border border-transparent rounded px-4 py-2 text-sm font-medium text-slate-600 focus:outline-none focus:bg-white focus:border-slate-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Impianto*</label>
                    <select className="w-full bg-slate-100/70 border border-transparent rounded px-4 py-2 text-sm font-medium text-slate-400 focus:outline-none focus:bg-white focus:border-slate-200 focus:ring-2 focus:ring-primary/20 appearance-none">

                      <option>Impianto Fotovoltaico Principale</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Azioni finali */}
          <div className="pt-4 mt-8 border-t border-slate-100 flex justify-end gap-3">
            <button className="px-6 py-2.5 text-sm font-bold text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors" onClick={() => setSelectedMember(null)}>
              Annulla modifiche
            </button>
            <button className="px-6 py-2.5 text-sm font-bold text-white bg-secondary rounded-lg hover:bg-slate-800 transition-colors px-10">
              Salva
            </button>
          </div>

          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col w-full flex-1 mb-8" style={{ minWidth: '100%' }}>

      {/* Intestazione */}
      <div className="px-8 pt-8 pb-6">
        <h2 className="text-2xl font-bold text-secondary mb-1">CER Sole</h2>
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
          <span className="hover:text-secondary cursor-pointer transition-colors">Lista CER</span>
          <span>/</span>
          <span className="hover:text-secondary cursor-pointer transition-colors">CER Sole</span>
          <span>/</span>
          <span className="font-bold text-secondary">Utenti</span>
        </div>
      </div>


      {/* Toolbar */}
      <div className="p-8 border-b border-slate-50 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-72 text-slate-600 transition-all font-medium"
            />
            <button className="absolute right-0 top-0 bottom-0 px-3 bg-secondary text-white rounded-r-lg hover:bg-slate-800 transition-colors flex items-center justify-center">
              <Search className="w-4 h-4" />
            </button>
          </div>

          <div className="flex gap-4 ml-2 border-l border-slate-200 pl-6 self-stretch items-end pb-0.5">
            <button className="text-sm font-bold text-primary-dark border-b-[3px] border-primary pb-1">
              Attivi
            </button>
            <button className="text-sm font-semibold text-slate-500 hover:text-secondary transition-colors border-b-[3px] border-transparent pb-1">
              In pending
            </button>
          </div>
        </div>

        <button className="w-10 h-10 bg-secondary text-white rounded-xl flex items-center justify-center hover:bg-slate-800 transition-colors shadow-sm focus:ring-4 focus:ring-primary/20">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1">
                Nome e Cognome
                <span className="text-[10px] text-slate-400">↑↓</span>
              </th>
              <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  POD
                  <span className="text-[10px] text-slate-400">↑↓</span>
                </div>
              </th>
              <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Ruolo
                  <span className="text-[10px] text-slate-400">↑↓</span>
                </div>
              </th>
              <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  Status POD
                  <span className="text-[10px] text-slate-400">↑↓</span>
                </div>
              </th>
              <th className="px-6 py-4 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {members.map((member) => (
              <tr
                key={member.id}
                className="hover:bg-slate-50/50 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div>
                    <span className="font-medium text-secondary block text-sm">{member.name}</span>
                    <span className="text-xs text-slate-400 leading-tight">{member.email}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-600 font-mono tracking-wide">{member.pod}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-slate-700">{member.role}</span>
                </td>
                <td className="px-6 py-4">
                  {member.isOnline ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-primary/20 text-primary-dark">
                      Online
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-red-100 text-red-600">
                      Offline
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-3 transition-opacity">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="text-slate-400 hover:text-secondary transition-colors"
                      title="Vedi Dettagli"
                    >
                      <FileEdit className="w-4 h-4" />
                    </button>
                    <button
                      className="text-slate-400 hover:text-red-500 transition-colors"
                      title="Elimina"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination placeholder */}
      <div className="p-4 border-t border-slate-100 flex justify-end items-center gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span>Elementi per pagina:</span>
          <select className="border border-slate-200 rounded px-2 py-1 bg-white outline-none">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>
        <span>1 - {members.length} di {members.length}</span>
        <div className="flex gap-1">
          <button className="p-1 rounded hover:bg-slate-100 text-slate-300 pointer-events-none">
            &lt;
          </button>
          <button className="p-1 rounded hover:bg-slate-100 text-slate-300 pointer-events-none">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
