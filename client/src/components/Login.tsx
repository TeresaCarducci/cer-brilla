import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('teresacarducci7@gmail.com');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-12 space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="flex flex-col items-center space-y-6">
          <img 
            src="/brilla.svg" 
            alt="Brilla Logo" 
            className="h-20 w-auto object-contain"
          />
          <h1 className="text-4xl font-bold text-[#1e293b]">Log In</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-600 ml-1">
              Username
            </label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[#f0f7ff] border-none rounded-2xl p-4 text-slate-700 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              placeholder="Username"
            />
          </div>

          <div className="space-y-2 relative">
            <label className="text-sm font-semibold text-slate-600 ml-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-slate-100 rounded-2xl p-4 text-slate-700 focus:border-blue-200 outline-none transition-all pr-12"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="button" className="text-sm font-semibold text-emerald-500 hover:text-emerald-600 transition-colors">
              Password dimenticata?
            </button>
          </div>

          <div className="text-center">
            <button type="button" className="text-sm font-bold text-slate-700 border-b-2 border-slate-700 pb-0.5 hover:text-slate-900 transition-colors">
              Registrati qui
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#021f2b] text-white font-bold py-5 rounded-2xl hover:bg-[#032a3b] transform active:scale-[0.98] transition-all shadow-lg hover:shadow-xl mt-4"
          >
            Accedi
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
