import React from 'react';
import { TrendingUp, Battery, Zap, Activity, ShieldCheck, Users } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Dashboard: React.FC = () => {
  const stats = [
    {
      label: 'Impianto Principale',
      value: '564 kW',
      sub: 'Monitoraggio CER attivo',
      icon: Zap,
      iconColor: 'text-yellow-500',
      iconBg: 'bg-yellow-50',
      badgeColor: 'bg-emerald-50 text-emerald-600'
    },
    {
      label: 'Consumo Attuale',
      value: '382.4 kW',
      sub: 'Media oraria registrata',
      icon: Activity,
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50',
      badgeColor: 'bg-blue-50 text-blue-600'
    },
    {
      label: 'Energia Condivisa',
      value: '142.1 kW',
      sub: 'Assorbimento istantaneo',
      icon: TrendingUp,
      iconColor: 'text-emerald-500',
      iconBg: 'bg-emerald-50',
      badgeColor: 'bg-blue-50 text-blue-600'
    },
    {
      label: 'Livello Autarchia',
      value: '68%',
      sub: 'Target ottimizzato: 70%',
      icon: Battery,
      iconColor: 'text-orange-500',
      iconBg: 'bg-orange-50',
      badgeColor: 'bg-blue-50 text-blue-600'
    },
  ];


  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-3xl font-bold tracking-tight text-secondary">CER Sole</h2>
            <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              LIVE
            </span>
          </div>
        </div>
      </header>

      {/* Grid Statistiche */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div key={index} className="bg-white p-7 rounded-[28px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-center mb-6">
              <div className={cn("p-3.5 rounded-2xl transition-colors", item.iconBg, item.iconColor)}>
                <item.icon className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <span className={cn("text-[10px] font-bold px-3 py-1.5 rounded-full inline-block", item.badgeColor)}>
                {item.sub}
              </span>
            </div>
            <h3 className="text-slate-500 font-semibold mb-2">{item.label}</h3>
            <p className="text-[34px] leading-none font-extrabold text-secondary tracking-tight">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Sezione Centrale */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Grafico Bilancio Energetico */}
        <div className="lg:col-span-3 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 h-[580px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-secondary">Bilancio Energetico</h3>
              <p className="text-xs text-slate-400">Produzione e consumi</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-4 items-center mr-4">
                <div className="flex items-center gap-2 text-[10px] font-bold">
                  <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                  <span className="text-slate-500">Produzione CER</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold">
                  <div className="w-2 h-2 rounded-full bg-[#dadd65]"></div>
                  <span className="text-slate-500">Consumo CER</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="text-slate-500">Condivisione CER</span>
                </div>
              </div>
              <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-600 outline-none">
                <option>Ieri</option>
                <option>Ultimi 7 giorni</option>
              </select>
            </div>
          </div>
          
          <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden">
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

            {/* X-axis labels */}
            <div className="absolute left-16 right-8 bottom-4 flex justify-between text-[10px] text-slate-400 font-bold z-10 pl-6 pr-6">
              <span>02:00</span>
              <span>04:00</span>
              <span>08:00</span>
              <span>10:00</span>
              <span>12:00</span>
              <span>14:00</span>
              <span>16:00</span>
              <span>18:00</span>
              <span>20:00</span>
              <span>22:00</span>
            </div>

            {/* SVG Chart — viewBox 0 0 1000 500, x=time 00:00→22:00, y: 0kW=500, 3k=0 */}
            <svg
              className="absolute left-16 right-8 top-10 bottom-10 w-[calc(100%-6rem)] h-[calc(100%-5rem)]"
              viewBox="0 0 1000 500"
              preserveAspectRatio="none"
            >
              {/* === PRODUZIONE CER (sky blue, bell curve peaking at noon) === */}
              <path
                d="M 0 500 L 91 500 L 182 500 L 273 487 L 364 425 L 455 200 L 545 32 L 636 67 L 727 300 L 818 482 L 909 500 L 1000 500"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3"
              />
              <path
                d="M 0 500 L 91 500 L 182 500 L 273 487 L 364 425 L 455 200 L 545 32 L 636 67 L 727 300 L 818 482 L 909 500 L 1000 500 Z"
                fill="rgba(56,189,248,0.18)"
              />

              {/* === CONSUMO CER (yellow-green) === */}
              <path
                d="M 0 417 L 91 432 L 182 442 L 273 432 L 364 400 L 455 382 L 545 400 L 636 407 L 727 432 L 818 250 L 909 300 L 1000 367"
                fill="none"
                stroke="#dadd65"
                strokeWidth="3"
              />
              <path
                d="M 0 417 L 91 432 L 182 442 L 273 432 L 364 400 L 455 382 L 545 400 L 636 407 L 727 432 L 818 250 L 909 300 L 1000 367 L 1000 500 L 0 500 Z"
                fill="rgba(218,221,101,0.18)"
              />

              {/* === CONDIVISIONE CER (green, small lower area) === */}
              <path
                d="M 0 500 L 91 500 L 182 500 L 273 495 L 364 432 L 455 400 L 545 407 L 636 412 L 727 437 L 818 500 L 909 500 L 1000 500"
                fill="none"
                stroke="#34d399"
                strokeWidth="3"
              />
              <path
                d="M 0 500 L 91 500 L 182 500 L 273 495 L 364 432 L 455 400 L 545 407 L 636 412 L 727 437 L 818 500 L 909 500 L 1000 500 Z"
                fill="rgba(52,211,153,0.2)"
              />

              {/* === DATA POINTS === */}
              {/* Produzione */}
              {([[273,487],[364,425],[455,200],[545,32],[636,67],[727,300]] as [number,number][]).map(([cx,cy],i) => (
                <circle key={`p${i}`} cx={cx} cy={cy} r="9" fill="white" stroke="#38bdf8" strokeWidth="3"/>
              ))}
              {/* Consumo */}
              {([[91,432],[364,400],[636,407],[818,250],[1000,367]] as [number,number][]).map(([cx,cy],i) => (
                <circle key={`c${i}`} cx={cx} cy={cy} r="9" fill="white" stroke="#dadd65" strokeWidth="3"/>
              ))}
              {/* Condivisione */}
              {([[364,432],[455,400],[545,407],[636,412]] as [number,number][]).map(([cx,cy],i) => (
                <circle key={`s${i}`} cx={cx} cy={cy} r="9" fill="white" stroke="#34d399" strokeWidth="3"/>
              ))}
            </svg>

          </div>
        </div>

        {/* Riepilogo Membri */}
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col self-start">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-bold text-secondary flex items-center gap-2">
              <Users className="w-5 h-5 text-[#b8e0b0]" />
              Membri CER
            </h3>
            <span className="bg-[#b8e0b0]/20 text-[#2d6a3f] text-[9px] font-bold px-2 py-1 rounded-full">
              5 ATTIVI
            </span>
          </div>
          <div className="space-y-1.5">
            {[
              { id: 1, name: 'Mario', surname: 'Rossi', role: 'Prosumer', initials: 'MR', bg: 'bg-orange-100', text: 'text-orange-600' },
              { id: 2, name: 'Luigi', surname: 'Bianchi', role: 'Consumer', initials: 'LB', bg: 'bg-blue-100', text: 'text-blue-600' },
              { id: 3, name: 'Anna', surname: 'Neri', role: 'Consumer', initials: 'AN', bg: 'bg-yellow-100', text: 'text-yellow-600' },
              { id: 4, name: 'Elena', surname: 'Verdi', role: 'Consumer', initials: 'EV', bg: 'bg-pink-100', text: 'text-pink-600' },
              { id: 5, name: 'Marco', surname: 'Gialli', role: 'Consumer', initials: 'MG', bg: 'bg-indigo-100', text: 'text-indigo-600' },
            ].map((member) => (
              <div key={member.id} className="flex items-center gap-3 p-1.5 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className={cn("w-8 h-8 rounded-full flex shrink-0 items-center justify-center font-bold text-xs", member.bg, member.text)}>
                  {member.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-secondary text-[13px] group-hover:text-[#2d6a3f] transition-colors truncate">{member.name} {member.surname}</h4>
                  <p className="text-[11px] text-slate-500 font-medium truncate">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stime Incentivi */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold text-secondary">Stime Incentivi</h3>
            <p className="text-xs text-slate-400 mt-0.5">Valori mensili · Luglio 2025</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                Stime incentivi ad oggi
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-dashed border-slate-300"></div>
                Stime incentivi previsti
              </div>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-600">
              <span>Luglio 2025</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <button className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:text-secondary transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Chart */}
          <div className="flex-1 relative bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden" style={{ minHeight: 260 }}>
            {/* Y-axis labels */}
            <div className="absolute left-2 top-6 bottom-8 w-10 flex flex-col justify-between text-[9px] text-slate-400 font-bold items-end pr-1 z-10">
              <span>250</span>
              <span>200</span>
              <span>150</span>
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>
            {/* Grid lines */}
            <div className="absolute left-12 right-4 top-6 bottom-8 flex flex-col justify-between pointer-events-none">
              {[0,1,2,3,4,5].map(i => (
                <div key={i} className="border-b border-dashed border-slate-200 w-full"></div>
              ))}
            </div>
            {/* X-axis labels (days of month) */}
            <div className="absolute left-12 right-4 bottom-2 flex justify-between text-[8px] text-slate-400 font-bold z-10">
              {[1,4,7,10,13,16,19,22,25,28,31].map(d => (
                <span key={d}>{d}</span>
              ))}
            </div>
            {/* SVG - cumulative chart with correct viewBox */}
            {/* viewBox: x=0..1000 (days 1-31), y=0..200 (0€ = y200, 250€ = y0) */}
            <svg
              className="absolute left-12 right-4 top-6 bottom-8 w-[calc(100%-4rem)] h-[calc(100%-3.5rem)]"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
            >
              {/* Dashed projected full line (day 1 → 31, x=0 → x=1000) */}
              <path
                d="M 0 198 L 100 184 L 200 166 L 300 145 L 400 124 L 500 101 L 600 77 L 700 54 L 800 31 L 900 10 L 1000 0"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="8 6"
              />
              {/* Solid actual line (day 1 → 16, x=0 → x=500) */}
              <path
                d="M 0 195 L 33 188 L 66 179 L 100 169 L 133 158 L 166 146 L 200 133 L 233 119 L 266 105 L 300 91 L 333 77 L 366 64 L 400 52 L 433 40 L 466 30 L 500 21"
                fill="none"
                stroke="#34d399"
                strokeWidth="2.5"
              />
              {/* Fill under actual line */}
              <path
                d="M 0 195 L 33 188 L 66 179 L 100 169 L 133 158 L 166 146 L 200 133 L 233 119 L 266 105 L 300 91 L 333 77 L 366 64 L 400 52 L 433 40 L 466 30 L 500 21 L 500 200 L 0 200 Z"
                fill="rgba(52, 211, 153, 0.1)"
              />
              {/* Data dots along actual line */}
              {[[0,195],[100,169],[200,133],[300,91],[400,52],[500,21]].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="4" fill="white" stroke="#34d399" strokeWidth="2" />
              ))}
              {/* Tooltip at day 16 */}
              <rect x="510" y="4" width="90" height="22" rx="5" fill="#1e293b" />
              <text x="555" y="18" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Inter,sans-serif">180,20 €</text>
            </svg>
          </div>

          {/* Stima box */}
          <div className="flex flex-col gap-4 w-52">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Stima incentivi<br/>mese corrente</p>
              <p className="text-3xl font-extrabold text-secondary tracking-tight">180,20 <span className="text-xl">€</span></p>
              <div className="mt-3 flex items-center gap-1.5">
                <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                <span className="text-[10px] font-bold text-emerald-500">+3.6% rispetto alla media</span>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex flex-col">
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-2">Proiezione fine<br/>mese</p>
              <p className="text-2xl font-extrabold text-emerald-700 tracking-tight">352,40 <span className="text-base">€</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
