import React, { useState } from 'react';
import { 
  Info, 
  Zap, 
  Factory, 
  Coins, 
  BarChart3, 
  ChevronRight, 
  Sun, 
  Users, 
  MapPin, 
  RotateCw, 
  History, 
  Calendar,
  PieChart,
  Wallet,
  CheckCircle2,
  Lock
} from 'lucide-react';

const CER: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Dati CER');

  const tabs = [
    { id: 'Dati CER', label: 'Dati CER', icon: Info },
    { id: 'Impianto', label: 'Impianto', icon: Factory },
    { id: 'Incentivi', label: 'Incentivi', icon: Coins },
    { id: 'Ripartizione Incentivi', label: 'Ripartizione Incentivi', icon: BarChart3 },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Dati CER':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full space-y-10 pb-16">
            {/* Header Summary Section (No Card Border) */}
            <div className="flex flex-col lg:flex-row gap-10 w-full items-stretch">
              {/* Left Column: Identity, Stats, Legal */}
              <div className="lg:w-1/2 flex flex-col space-y-8">
                {/* Logo & Name Row */}
                <div className="bg-slate-50/30 rounded-full py-3.5 px-6 flex items-center gap-5 border border-slate-100 shadow-sm self-start min-w-[280px]">
                  <div className="w-11 h-11 rounded-full border-2 border-[#b8e0b0] bg-white flex items-center justify-center shadow-inner overflow-hidden flex-shrink-0">
                    <Sun className="w-6 h-6 text-[#2d6a3f]" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-700 tracking-tight">Sole</h3>
                </div>

                {/* Stats Bar */}
                <div className="flex items-center gap-10 px-2 text-slate-400 font-bold">
                  <div className="flex items-center gap-3">
                    <Sun className="w-5 h-5 text-slate-300" strokeWidth={2.5} />
                    <span className="text-base tracking-tight">54 kW</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-slate-300" strokeWidth={2.5} />
                    <span className="text-base tracking-tight">4 Membri</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <MapPin className="w-5 h-5 text-slate-300" strokeWidth={2.5} />
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-400 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                    <span className="text-base text-slate-500 tracking-tight">Taranto, Italia</span>
                  </div>
                </div>

                {/* Status & Legal Badge */}
                <div className="space-y-4 px-2">
                  <p className="text-sm text-slate-500 font-bold flex items-center gap-2">
                    Stato della Comunità: <span className="text-slate-400 font-semibold tracking-wide">active</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-slate-500 tracking-tight">Struttura Legale:</span>
                    <span className="bg-[#00b29a] text-white px-6 py-2 rounded-xl text-sm font-bold inline-block shadow-sm">
                      Associazione di diritto civile riconosciuta
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Full Height Map */}
              <div className="lg:w-1/2 rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm min-h-[220px]">
                <iframe
                  title="Mappa Taranto"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=17.150,40.400,17.350,40.500&layer=mapnik&marker=40.466,17.244"
                  className="grayscale-[20%] opacity-90 contrast-[1.1]"
                ></iframe>
              </div>
            </div>

            {/* Form Section */}
            <div className="space-y-6 pt-8 border-t border-slate-100 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Nome CER */}
                <div className="space-y-1.5 opacity-60">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nome CER</label>
                  <input
                    type="text"
                    defaultValue="Sole"
                    disabled
                    className="w-full bg-slate-50/50 border border-slate-100 rounded-lg px-4 py-2 text-[13px] font-bold text-slate-500 cursor-not-allowed"
                  />
                </div>
                {/* Codice Fiscale CER */}
                <div className="space-y-1.5 opacity-60">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Codice Fiscale CER</label>
                  <input
                    type="text"
                    defaultValue="AHDYEISBEUE7483"
                    disabled
                    className="w-full bg-slate-50/50 border border-slate-100 rounded-lg px-4 py-2 text-[13px] font-bold text-slate-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Codice Area */}
                <div className="space-y-1.5 opacity-60">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Codice Area</label>
                  <input
                    type="text"
                    defaultValue="AC5673638288"
                    disabled
                    className="w-full bg-slate-50/50 border border-slate-100 rounded-lg px-4 py-2 text-[13px] font-bold text-slate-500 cursor-not-allowed"
                  />
                </div>
                {/* Indirizzo */}
                <div className="space-y-1.5 opacity-60">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Indirizzo</label>
                  <input
                    type="text"
                    defaultValue="Via Roma 123, 74100 Taranto (TA)"
                    disabled
                    className="w-full bg-slate-50/50 border border-slate-100 rounded-lg px-4 py-2 text-[13px] font-bold text-slate-500 cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Descrizione */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Descrizione</label>
                <div className="relative">
                  <textarea
                    rows={4}
                    placeholder="Scrivi qui una descrizione dettagliata della CER Sole..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 text-[13px] font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none shadow-sm"
                  ></textarea>
                  <div className="absolute bottom-3 right-3 text-[9px] text-slate-300 font-bold tracking-tighter">
                    0 / 100
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 flex justify-end items-center">
                <div className="flex gap-4">
                  <button className="px-8 py-2.5 bg-white border border-slate-200 text-slate-500 rounded-xl text-[13px] font-bold hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95">
                    Annulla modifiche
                  </button>
                  <button className="px-8 py-2.5 bg-[#1a2b3c] text-[#b8e0b0] border border-[#1a2b3c] rounded-xl text-[13px] font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95">
                    Salva modifiche
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Impianto':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full space-y-10 pb-16">
            {/* Plant Overview Header */}
            <div className="flex justify-between items-center border-b border-slate-100 pb-6">
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">Impianto IMP-0000123</h3>
                <p className="text-sm text-slate-400 font-medium tracking-wide">Panoramica tecnica dell'asset di produzione</p>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Impianto Details Form */}
            <div className="space-y-10">
              {/* Technical Section */}
              <div className="space-y-6">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Dati Tecnici Impianto</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tipologia Impianto</label>
                    <input type="text" defaultValue="Fotovoltaico" disabled className="w-full bg-slate-50/30 border border-slate-100 rounded-xl px-4 py-3 text-[13px] font-bold text-slate-500" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Potenza Nominale</label>
                    <input type="text" defaultValue="54 kW" disabled className="w-full bg-slate-50/30 border border-slate-100 rounded-xl px-4 py-3 text-[13px] font-bold text-slate-500" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Località</label>
                    <input type="text" defaultValue="San Giovanni" disabled className="w-full bg-slate-50/30 border border-slate-100 rounded-xl px-4 py-3 text-[13px] font-bold text-slate-500" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Data Installazione</label>
                    <input type="text" defaultValue="23/07/2023" disabled className="w-full bg-slate-50/30 border border-slate-100 rounded-xl px-4 py-3 text-[13px] font-bold text-slate-500" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest text-emerald-500">Contributo PNRR</label>
                    <input type="text" defaultValue="20%" disabled className="w-full bg-emerald-50/10 border border-emerald-100 rounded-xl px-4 py-3 text-[13px] font-bold text-emerald-600 shadow-sm shadow-emerald-50" />
                  </div>
                </div>
              </div>

              {/* POD Section - Unified List */}
              <div className="space-y-6 pt-6">
                <div className="flex items-center justify-between border-b border-slate-50 pb-4">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">POD Collegati (6)</h4>
                  <div className="flex gap-2">
                    <span className="bg-slate-50 text-slate-400 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-100">6 TOTALI</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Prosumer PODs (Integrated in list) */}
                  <div className="space-y-1.5">
                    <label className="block text-[9px] font-bold text-amber-500 uppercase tracking-widest">POD Prosumer - Produzione M2</label>
                    <div className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3.5 shadow-sm">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span className="text-[13px] font-bold text-slate-600 tracking-wide">IT00AE12345678</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[9px] font-bold text-amber-500 uppercase tracking-widest">POD Prosumer - Scambio M1</label>
                    <div className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3.5 shadow-sm">
                      <Factory className="w-4 h-4 text-blue-400" />
                      <span className="text-[13px] font-bold text-slate-600 tracking-wide">IT001E12345678</span>
                    </div>
                  </div>

                  {/* Consumer PODs */}
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="space-y-1.5">
                      <label className="block text-[9px] font-bold text-blue-400 uppercase tracking-widest">POD Consumer 0{i}</label>
                      <div className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3.5 shadow-sm">
                        <Users className="w-4 h-4 text-slate-300" />
                        <span className="text-[13px] font-bold text-slate-500 tracking-wide">IT00{i}E{87654321 + i}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'Incentivi':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full space-y-10 pb-16">
            {/* Unified Header outside the card */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 px-1">
              <div className="space-y-0.5 group cursor-pointer">
                <h3 className="text-xl font-bold text-slate-700 tracking-tight transition-colors group-hover:text-[#00b29a]">Stime Incentivi</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-0.5 opacity-80">Valori mensili &bull; Luglio 2025</p>
              </div>
              
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex gap-6 items-center mb-1 md:mb-0">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-[#00b29a] rounded-full shadow-sm shadow-emerald-100"></div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Stime incentivi ad oggi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="opacity-40">
                       <History className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest whitespace-nowrap">Stime incentivi previsti</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="bg-white border border-slate-100 px-3.5 py-2 rounded-xl text-[10px] font-bold text-slate-600 flex items-center gap-2.5 shadow-sm hover:border-emerald-100/50 hover:bg-emerald-50/10 transition-all cursor-pointer">
                    Luglio 2025 <Calendar className="w-3 h-3 text-slate-300" />
                  </div>
                  <div className="w-8 h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#00b29a] hover:border-emerald-100/50 transition-all cursor-pointer shadow-sm group">
                    <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Main Chart Card - Clean container */}
              <div className="flex-1 bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden">
                {/* Performance Chart (SVG Line/Area) - Extra space for labels */}
                <div className="relative h-72 w-full pl-8">
                  {/* Y-Axis Lines & Labels */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-12">
                    {[250, 200, 150, 100, 50, 0].map((v) => (
                      <div key={v} className="relative flex items-center w-full">
                        <span className="absolute -left-12 text-[10px] font-bold text-slate-300 w-8 text-right pr-2">{v}</span>
                        <div className="border-b border-slate-50 w-full"></div>
                      </div>
                    ))}
                  </div>

                  {/* SVG Chart Area - overflow-visible to help with tooltips */}
                  <svg className="absolute inset-0 h-full w-full pointer-events-none pb-12 overflow-visible">
                    {/* Projection Line (Full Month) */}
                    <path
                      d="M 0 280 L 100 240 L 250 180 L 450 150 L 700 80 L 900 40"
                      fill="none"
                      stroke="#cbd5e1"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      className="opacity-40"
                    />
                    
                    {/* Actual Line Gradient Fill */}
                    <defs>
                      <linearGradient id="chartGradientUI" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00b29a" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#00b29a" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 280 L 100 230 L 250 160 L 400 120 L 520 60 L 520 280 Z"
                      fill="url(#chartGradientUI)"
                    />
                    
                    {/* Actual Line (Up to Current Day) */}
                    <path
                      d="M 0 280 L 100 230 L 250 160 L 400 120 L 520 60"
                      fill="none"
                      stroke="#00b29a"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* Data Points on Actuals */}
                    {[
                      { x: 0, y: 280 },
                      { x: 100, y: 230 },
                      { x: 250, y: 160 },
                      { x: 400, y: 120 },
                      { x: 520, y: 60 }
                    ].map((p, i) => (
                      <circle key={i} cx={p.x} cy={p.y} r="4.5" fill="white" stroke="#00b29a" strokeWidth="2.5" className="shadow-sm" />
                    ))}

                    {/* Active Tooltip / Marker */}
                    <g transform="translate(520, 60)">
                      <circle r="6" fill="#00b29a" className="animate-pulse" />
                      <foreignObject x="12" y="-18" width="100" height="40">
                        <div className="bg-[#1a2b3c] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5 whitespace-nowrap">
                          180,20 €
                        </div>
                      </foreignObject>
                    </g>
                  </svg>

                  {/* X-Axis Days */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1 pt-2">
                    {[1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31].map(d => (
                      <span key={d} className="text-[10px] font-bold text-slate-300">{d}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Stats (Current Month Overview) */}
              <div className="w-full lg:w-[280px] space-y-5">
                <div className="bg-slate-50/50 border border-slate-100 rounded-[1.8rem] p-6 shadow-sm space-y-5">
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Stima Incentivi Mese Corrente</p>
                    <h4 className="text-2xl font-black text-slate-800 tracking-tighter">180,20 €</h4>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 text-[9px] font-bold text-emerald-500 bg-emerald-50/80 self-start rounded-full border border-emerald-100/50">
                    <Zap className="w-3.5 h-3.5" />
                    <span>+3.6% rispetto alla media</span>
                  </div>
                </div>

                <div className="bg-emerald-50/20 border border-emerald-100/50 rounded-[1.8rem] p-6 space-y-5">
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-emerald-600/60 uppercase tracking-widest">Proiezione Fine Mese</p>
                    <h4 className="text-2xl font-black text-emerald-600 tracking-tighter">352,40 €</h4>
                  </div>
                  <div className="w-full h-1.5 bg-emerald-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[51%]"></div>
                  </div>
                </div>

                <div className="p-2">
                  <p className="text-[9px] text-slate-300 font-medium leading-relaxed italic text-right opacity-80">
                    *Le stime Brilla vengono ricalcolate ogni 24 ore sulla base dei consumi reali rilevati dai nodi attivi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Ripartizione Incentivi':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full space-y-8 pb-16">
            {/* Tab Header */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 px-1">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-700 tracking-tight transition-colors group-hover:text-[#00b29a]">Ripartizione Incentivi</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-0.5 opacity-80">Configurazione Distribuzione &bull; Anno 2025</p>
              </div>
              <button className="flex items-center gap-2.5 bg-[#1a2b3c] text-[#b8e0b0] px-6 py-2.5 rounded-xl text-[11px] font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95">
                <PieChart className="w-4 h-4" />
                Modifica Regole
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Active Model Card */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                         <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                         <h4 className="text-lg font-bold text-slate-800">Modello Proporzionale</h4>
                      </div>
                      <p className="text-sm text-slate-500 max-w-lg">
                        L'incentivo viene distribuito in base all'energia effettivamente condivisa nel periodo di riferimento (sharing).
                      </p>
                    </div>
                    <div className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-full border border-emerald-100 tracking-wider">
                      ATTIVO
                    </div>
                  </div>

                  {/* Percentage Split Visualization */}
                  <div className="space-y-6 pt-4">
                    <div className="flex justify-between items-end">
                      <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Suddivisione del Ricavo Totale</h5>
                      <div className="flex items-center gap-4 text-[11px] font-bold text-slate-600">
                        <span className="flex items-center gap-1.5"><div className="w-2 h-2 bg-emerald-400 rounded-full"></div> Comunità 70%</span>
                        <span className="flex items-center gap-1.5"><div className="w-2 h-2 bg-blue-400 rounded-full"></div> Produttore 20%</span>
                        <span className="flex items-center gap-1.5"><div className="w-2 h-2 bg-slate-400 rounded-full"></div> CER 10%</span>
                      </div>
                    </div>
                    <div className="w-full h-4 flex rounded-full overflow-hidden shadow-inner bg-slate-50">
                      <div className="h-full bg-emerald-400 w-[70%] transition-all duration-1000" />
                      <div className="h-full bg-blue-400 w-[20%] transition-all duration-1000" />
                      <div className="h-full bg-slate-400 w-[10%] transition-all duration-1000" />
                    </div>
                  </div>
                </div>

                {/* Member Allocation Table */}
                <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm overflow-hidden">
                  <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Quote Individuali dei Membri</h5>
                  <div className="space-y-5">
                    {[
                      { name: 'Mario Rossi', role: 'Prosumer', weight: '1.2x', est: '420.50 €', color: 'amber' },
                      { name: 'Luigi Bianchi', role: 'Consumer', weight: '1.0x', est: '185.20 €', color: 'blue' },
                      { name: 'Anna Neri', role: 'Consumer', weight: '1.0x', est: '162.80 €', color: 'blue' },
                      { name: 'Elena Verdi', role: 'Consumer', weight: '1.0x', est: '198.45 €', color: 'blue' }
                    ].map((m, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-slate-50/40 rounded-2xl border border-slate-100 transition-all hover:shadow-md hover:border-emerald-100/50 group cursor-default">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs shadow-sm`}>
                            {m.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-[13px] font-bold text-slate-700">{m.name}</p>
                            <p className={`text-[10px] font-bold text-${m.color}-500/80 uppercase tracking-widest`}>{m.role}</p>
                          </div>
                        </div>
                        <div className="flex gap-12 text-right">
                          <div className="space-y-0.5">
                            <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Peso/Coeff.</p>
                            <p className="text-sm font-bold text-slate-600">{m.weight}</p>
                          </div>
                          <div className="space-y-0.5">
                            <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest text-[#00b29a]">Stima Annuale</p>
                            <p className="text-sm font-bold text-slate-800 tracking-tight">{m.est}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Info/Sim Card */}
              <div className="space-y-8">
                <div className="bg-[#1a2b3c] text-white rounded-[2.5rem] p-8 shadow-xl space-y-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:scale-150" />
                  <div className="space-y-2 relative">
                    <Wallet className="w-8 h-8 text-[#b8e0b0] mb-2" />
                    <h4 className="text-xl font-bold tracking-tight">Portafoglio CER</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-medium">Accumulato nell'ultimo periodo per questa distribuzione.</p>
                  </div>
                  <div className="space-y-1 relative">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Totale Disponibile</p>
                    <h4 className="text-4xl font-black text-[#b8e0b0] tracking-tighter">1.250,00 €</h4>
                  </div>
                  <button className="w-full py-4 bg-white/10 border border-white/10 rounded-2xl text-[11px] font-bold tracking-widest uppercase hover:bg-white/20 transition-all active:scale-95 backdrop-blur-sm">
                    Simula Distribuzione
                  </button>
                </div>

                <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 space-y-6 shadow-sm">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500">
                         <Lock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">Recupero Investimento</h4>
                        <p className="text-[11px] font-medium text-slate-400">Canone mensile attivo</p>
                      </div>
                   </div>
                   <div className="pt-2 border-t border-slate-50 flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">Quota mensile</p>
                        <p className="text-lg font-black text-slate-700 tracking-tight">150,00 €</p>
                      </div>
                      <div className="text-right">
                         <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">Scadenza</p>
                         <p className="text-xs font-bold text-slate-600">Giugno 2026</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-secondary mb-1">CER Sole</h2>
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
          <span>Lista CER</span>
          <ChevronRight className="w-3 h-3" />
          <span className="font-bold text-secondary underline decoration-primary decoration-2 underline-offset-4">Dettagli CER</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden min-h-[600px] flex flex-col">
        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-100 px-8 bg-slate-50/30">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-5 font-bold text-sm transition-all relative ${activeTab === tab.id
                ? 'text-secondary border-b-[3px] border-primary'
                : 'text-slate-500 hover:text-secondary border-b-[3px] border-transparent font-semibold'
                }`}
            >
              <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-primary' : 'text-slate-400'}`} />
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-primary/5 -bottom-[3px]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-8 flex-1">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default CER;
