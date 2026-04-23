'use client';

import { GraduationCap, Mail, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

export default function CanvaLogin() {
  const [view, setView] = useState<'selection' | 'form'>('selection');
  const [email, setEmail] = useState('');
  
  // New state to remember which button they clicked
  const [activePlatform, setActivePlatform] = useState<string>('');

  const handleLoginClick = (platform: string) => {
    setActivePlatform(platform);
    
    setEmail('');
    
    setView('form');
  };

  const handleFormContinue = () => {
    if (activePlatform === 'Google') {
      window.location.href = 'https://accounts.google.com/signin';
    } else if (activePlatform === 'Facebook') {
      window.location.href = 'https://www.facebook.com/login';
    } else {
      alert(`Proceeding to verification for: ${email}`);
    }
  };

  const getHeadingText = () => {
    if (activePlatform === 'email') return 'Continue with email';
    return `Continue with ${activePlatform}`;
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-start pt-32 pb-10 p-4 overflow-x-hidden">
      
      <nav className="absolute top-0 left-0 right-0 z-50 grid grid-cols-3 items-center px-8 py-6 text-white">
        <div className="flex justify-start">
          <div className="text-2xl font-bold tracking-tighter cursor-pointer">Canva</div>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-8 text-sm font-medium">
          <button className="hover:text-gray-300 transition">Design</button>
          <button className="hover:text-gray-300 transition">Product</button>
          <button className="hover:text-gray-300 transition">Plans</button>
          <button className="hover:text-gray-300 transition">Business</button>
          <button className="hover:text-gray-300 transition">Education</button>
          <button className="hover:text-gray-300 transition">Help</button>
        </div>
      </nav>

      <div className="fixed inset-0 z-0">
        <img 
          src="/wmremove-transformed (1).png" 
          alt="background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0e1318]/50" />
      </div>

      <div className="relative z-10 w-full max-w-[440px] rounded-2xl bg-[#18191b] p-8 sm:p-10 text-white shadow-2xl border border-white/10 transition-all duration-300">
        
        {view === 'selection' ? (
          <div className="flex flex-col">
            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-center leading-tight">
              Log in or sign up in seconds
            </h1>
            <p className="mb-8 text-sm text-gray-400 text-center">
              Sign up with your account to access premium Canva features for free.
            </p>

            <div className="space-y-3">
              <button 
                onClick={() => handleLoginClick('DepEd')}
                className="flex w-full items-center gap-4 rounded-md border border-gray-600 px-6 py-3 font-semibold hover:bg-white/10 transition active:scale-95"
              >
                <GraduationCap size={20} />
                <span className="truncate">Continue with DepEd email</span>
              </button>

              <button 
                onClick={() => handleLoginClick('Google')}
                className="flex w-full items-center gap-4 rounded-md border border-gray-600 px-6 py-3 font-semibold hover:bg-white/10 transition active:scale-95"
              >
                <span className="w-5 text-center font-bold text-red-500">G</span>
                <span>Continue with Google</span>
              </button>

              <button 
                onClick={() => handleLoginClick('Facebook')}
                className="flex w-full items-center gap-4 rounded-md border border-gray-600 px-6 py-3 font-semibold hover:bg-white/10 transition active:scale-95"
              >
                <span className="w-5 text-center font-bold text-blue-500 text-xl">f</span>
                <span>Continue with Facebook</span>
              </button>

              <button 
                onClick={() => handleLoginClick('email')}
                className="flex w-full items-center gap-4 rounded-md border border-gray-600 px-6 py-3 font-semibold hover:bg-white/10 transition active:scale-95"
              >
                <Mail size={20} />
                <span>Continue with email</span>
              </button>
            </div>

            <button className="mt-6 w-full text-sm font-semibold text-gray-400 hover:text-white underline-offset-4 hover:underline transition active:scale-95">
              Continue another way
            </button>
          </div>
        ) : (

          <div className="flex flex-col animate-in fade-in slide-in-from-right-4 duration-300">
            <button 
              onClick={() => setView('selection')}
              className="mb-6 flex items-center gap-2 text-white hover:text-gray-300 transition w-fit"
            >
              <ChevronLeft size={24} />
              <h2 className="text-xl sm:text-2xl font-bold">{getHeadingText()}</h2>
            </button>
            
            <p className="mb-6 text-[15px] text-gray-300 leading-relaxed">
              To log in with your {activePlatform} account, click continue and follow the account verification steps.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <input 
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border-2 border-transparent bg-[#252627] px-4 py-3 text-white outline-none focus:border-[#8b3dff] transition shadow-inner"
                  autoFocus
                />
              </div>
              
              <button 
                onClick={handleFormContinue}
                className="w-full rounded-md bg-[#8b3dff] py-3 font-bold text-white hover:bg-[#7d2ae7] transition active:scale-95 text-lg"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        <p className="mt-8 text-[11px] text-gray-500 text-center">
          By continuing, you agree to Canva's <span className="underline cursor-pointer">Terms of Use</span>.
        </p>
      </div>
    </main>
  );
}