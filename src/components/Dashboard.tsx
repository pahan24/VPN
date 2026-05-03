import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Globe, Zap, X, ChevronRight, Activity, Lock, Settings, LayoutDashboard } from 'lucide-react';
import { Server, ConnectionStats } from '../types';
import { VPNLogo } from './VPNLogo';

const SERVERS: Server[] = [
  // NORTH AMERICA (40)
  { id: 'us-1', name: 'USA - Dallas', country: 'USA', flag: '🇺🇸', latency: 45, status: 'online', isPremium: false },
  { id: 'us-2', name: 'USA - Los Angeles', country: 'USA', flag: '🇺🇸', latency: 62, status: 'online', isPremium: false },
  { id: 'us-3', name: 'USA - New York', country: 'USA', flag: '🇺🇸', latency: 58, status: 'online', isPremium: false },
  { id: 'us-4', name: 'USA - Miami', country: 'USA', flag: '🇺🇸', latency: 71, status: 'online', isPremium: false },
  { id: 'us-5', name: 'USA - Chicago', country: 'USA', flag: '🇺🇸', latency: 55, status: 'online', isPremium: false },
  { id: 'us-6', name: 'USA - Seattle', country: 'USA', flag: '🇺🇸', latency: 68, status: 'online', isPremium: false },
  { id: 'us-7', name: 'USA - Atlanta', country: 'USA', flag: '🇺🇸', latency: 64, status: 'online', isPremium: false },
  { id: 'us-8', name: 'USA - Denver', country: 'USA', flag: '🇺🇸', latency: 59, status: 'online', isPremium: false },
  { id: 'us-9', name: 'USA - Phoenix', country: 'USA', flag: '🇺🇸', latency: 63, status: 'online', isPremium: false },
  { id: 'us-10', name: 'USA - Houston', country: 'USA', flag: '🇺🇸', latency: 60, status: 'online', isPremium: false },
  { id: 'us-11', name: 'USA - San Francisco', country: 'USA', flag: '🇺🇸', latency: 66, status: 'online', isPremium: false },
  { id: 'us-12', name: 'USA - Boston', country: 'USA', flag: '🇺🇸', latency: 57, status: 'online', isPremium: false },
  { id: 'us-13', name: 'USA - Washington DC', country: 'USA', flag: '🇺🇸', latency: 54, status: 'online', isPremium: false },
  { id: 'us-14', name: 'USA - Las Vegas', country: 'USA', flag: '🇺🇸', latency: 65, status: 'online', isPremium: false },
  { id: 'us-15', name: 'USA - Salt Lake City', country: 'USA', flag: '🇺🇸', latency: 61, status: 'online', isPremium: false },
  { id: 'us-16', name: 'USA - Minneapolis', country: 'USA', flag: '🇺🇸', latency: 59, status: 'online', isPremium: false },
  { id: 'us-17', name: 'USA - Detroit', country: 'USA', flag: '🇺🇸', latency: 56, status: 'online', isPremium: false },
  { id: 'us-18', name: 'USA - Portland', country: 'USA', flag: '🇺🇸', latency: 69, status: 'online', isPremium: false },
  { id: 'us-19', name: 'USA - San Diego', country: 'USA', flag: '🇺🇸', latency: 67, status: 'online', isPremium: false },
  { id: 'us-20', name: 'USA - Austin', country: 'USA', flag: '🇺🇸', latency: 62, status: 'online', isPremium: false },
  { id: 'us-21', name: 'USA - Nashville', country: 'USA', flag: '🇺🇸', latency: 64, status: 'online', isPremium: false },
  { id: 'us-22', name: 'USA - Philadelphia', country: 'USA', flag: '🇺🇸', latency: 56, status: 'online', isPremium: false },
  { id: 'us-23', name: 'USA - San Jose', country: 'USA', flag: '🇺🇸', latency: 65, status: 'online', isPremium: false },
  { id: 'us-24', name: 'USA - Charlotte', country: 'USA', flag: '🇺🇸', latency: 63, status: 'online', isPremium: false },
  { id: 'us-25', name: 'USA - Indianapolis', country: 'USA', flag: '🇺🇸', latency: 60, status: 'online', isPremium: false },
  { id: 'ca-1', name: 'Canada - Toronto', country: 'Canada', flag: '🇨🇦', latency: 85, status: 'online', isPremium: false },
  { id: 'ca-2', name: 'Canada - Vancouver', country: 'Canada', flag: '🇨🇦', latency: 92, status: 'online', isPremium: false },
  { id: 'ca-3', name: 'Canada - Montreal', country: 'Canada', flag: '🇨🇦', latency: 88, status: 'online', isPremium: false },
  { id: 'ca-4', name: 'Canada - Calgary', country: 'Canada', flag: '🇨🇦', latency: 95, status: 'online', isPremium: false },
  { id: 'ca-5', name: 'Canada - Ottawa', country: 'Canada', flag: '🇨🇦', latency: 89, status: 'online', isPremium: false },
  { id: 'mx-1', name: 'Mexico - Mexico City', country: 'Mexico', flag: '🇲🇽', latency: 98, status: 'online', isPremium: false },
  { id: 'mx-2', name: 'Mexico - Guadalajara', country: 'Mexico', flag: '🇲🇽', latency: 105, status: 'online', isPremium: false },
  { id: 'us-26', name: 'USA - New Orleans', country: 'USA', flag: '🇺🇸', latency: 72, status: 'online', isPremium: false },
  { id: 'us-27', name: 'USA - Memphis', country: 'USA', flag: '🇺🇸', latency: 68, status: 'online', isPremium: false },
  { id: 'us-28', name: 'USA - Oklahoma City', country: 'USA', flag: '🇺🇸', latency: 64, status: 'online', isPremium: false },
  { id: 'us-29', name: 'USA - El Paso', country: 'USA', flag: '🇺🇸', latency: 75, status: 'online', isPremium: false },
  { id: 'us-30', name: 'USA - Milwaukee', country: 'USA', flag: '🇺🇸', latency: 61, status: 'online', isPremium: false },

  // EUROPE (50)
  { id: 'uk-1', name: 'UK - London', country: 'UK', flag: '🇬🇧', latency: 120, status: 'online', isPremium: false },
  { id: 'uk-2', name: 'UK - Manchester', country: 'UK', flag: '🇬🇧', latency: 125, status: 'online', isPremium: false },
  { id: 'uk-3', name: 'UK - Birmingham', country: 'UK', flag: '🇬🇧', latency: 122, status: 'online', isPremium: false },
  { id: 'uk-4', name: 'UK - Glasgow', country: 'UK', flag: '🇬🇧', latency: 128, status: 'online', isPremium: false },
  { id: 'de-1', name: 'Germany - Frankfurt', country: 'Germany', flag: '🇩🇪', latency: 140, status: 'online', isPremium: false },
  { id: 'de-2', name: 'Germany - Berlin', country: 'Germany', flag: '🇩🇪', latency: 145, status: 'online', isPremium: false },
  { id: 'de-3', name: 'Germany - Munich', country: 'Germany', flag: '🇩🇪', latency: 142, status: 'online', isPremium: false },
  { id: 'fr-1', name: 'France - Paris', country: 'France', flag: '🇫🇷', latency: 135, status: 'online', isPremium: false },
  { id: 'fr-2', name: 'France - Marseille', country: 'France', flag: '🇫🇷', latency: 138, status: 'online', isPremium: false },
  { id: 'nl-1', name: 'Netherlands - Amsterdam', country: 'Netherlands', flag: '🇳🇱', latency: 130, status: 'online', isPremium: false },
  { id: 'es-1', name: 'Spain - Madrid', country: 'Spain', flag: '🇪🇸', latency: 148, status: 'online', isPremium: false },
  { id: 'es-2', name: 'Spain - Barcelona', country: 'Spain', flag: '🇪🇸', latency: 152, status: 'online', isPremium: false },
  { id: 'it-1', name: 'Italy - Milan', country: 'Italy', flag: '🇮🇹', latency: 142, status: 'online', isPremium: false },
  { id: 'it-2', name: 'Italy - Rome', country: 'Italy', flag: '🇮🇹', latency: 146, status: 'online', isPremium: false },
  { id: 'ch-1', name: 'Switzerland - Zurich', country: 'Switzerland', flag: '🇨🇭', latency: 138, status: 'online', isPremium: false },
  { id: 'no-1', name: 'Norway - Oslo', country: 'Norway', flag: '🇳🇴', latency: 152, status: 'online', isPremium: false },
  { id: 'se-1', name: 'Sweden - Stockholm', country: 'Sweden', flag: '🇸🇪', latency: 150, status: 'online', isPremium: false },
  { id: 'dk-1', name: 'Denmark - Copenhagen', country: 'Denmark', flag: '🇩🇰', latency: 149, status: 'online', isPremium: false },
  { id: 'pl-1', name: 'Poland - Warsaw', country: 'Poland', flag: '🇵🇱', latency: 160, status: 'online', isPremium: false },
  { id: 'ie-1', name: 'Ireland - Dublin', country: 'Ireland', flag: '🇮🇪', latency: 132, status: 'online', isPremium: false },
  { id: 'be-1', name: 'Belgium - Brussels', country: 'Belgium', flag: '🇧🇪', latency: 138, status: 'online', isPremium: false },
  { id: 'fi-1', name: 'Finland - Helsinki', country: 'Finland', flag: '🇫🇮', latency: 158, status: 'online', isPremium: false },
  { id: 'gr-1', name: 'Greece - Athens', country: 'Greece', flag: '🇬🇷', latency: 172, status: 'online', isPremium: false },
  { id: 'pt-1', name: 'Portugal - Lisbon', country: 'Portugal', flag: '🇵🇹', latency: 160, status: 'online', isPremium: false },
  { id: 'tr-1', name: 'Turkey - Istanbul', country: 'Turkey', flag: '🇹🇷', latency: 155, status: 'online', isPremium: false },
  { id: 'eu-01', name: 'Europe - Alpha Node', country: 'Germany', flag: '🇩🇪', latency: 105, status: 'online', isPremium: false },
  { id: 'eu-02', name: 'Europe - Beta Node', country: 'UK', flag: '🇬🇧', latency: 110, status: 'online', isPremium: false },
  { id: 'eu-03', name: 'Europe - Gamma Node', country: 'France', flag: '🇫🇷', latency: 115, status: 'online', isPremium: false },
  { id: 'eu-04', name: 'Europe - Delta Node', country: 'Netherlands', flag: '🇳🇱', latency: 112, status: 'online', isPremium: false },
  { id: 'eu-05', name: 'Europe - Epsilon Node', country: 'Poland', flag: '🇵🇱', latency: 120, status: 'online', isPremium: false },

  // ASIA & OCEANIA (60)
  { id: 'lk-1', name: 'Sri Lanka - Colombo 01', country: 'Sri Lanka', flag: '🇱🇰', latency: 12, status: 'online', isPremium: false },
  { id: 'lk-2', name: 'Sri Lanka - Colombo 02', country: 'Sri Lanka', flag: '🇱🇰', latency: 14, status: 'online', isPremium: false },
  { id: 'lk-3', name: 'Sri Lanka - Kandy Node', country: 'Sri Lanka', flag: '🇱🇰', latency: 18, status: 'online', isPremium: false },
  { id: 'lk-4', name: 'Sri Lanka - Galle Node', country: 'Sri Lanka', flag: '🇱🇰', latency: 22, status: 'online', isPremium: false },
  { id: 'jp-1', name: 'Japan - Tokyo 01', country: 'Japan', flag: '🇯🇵', latency: 40, status: 'online', isPremium: false },
  { id: 'jp-2', name: 'Japan - Tokyo 02', country: 'Japan', flag: '🇯🇵', latency: 42, status: 'online', isPremium: false },
  { id: 'jp-3', name: 'Japan - Osaka Hub', country: 'Japan', flag: '🇯🇵', latency: 45, status: 'online', isPremium: false },
  { id: 'sg-1', name: 'Singapore - Supreme 01', country: 'Singapore', flag: '🇸🇬', latency: 15, status: 'online', isPremium: false },
  { id: 'sg-2', name: 'Singapore - Supreme 02', country: 'Singapore', flag: '🇸🇬', latency: 18, status: 'online', isPremium: false },
  { id: 'sg-3', name: 'Singapore - Supreme 03', country: 'Singapore', flag: '🇸🇬', latency: 20, status: 'online', isPremium: false },
  { id: 'au-1', name: 'Australia - Sydney', country: 'Australia', flag: '🇦🇺', latency: 120, status: 'online', isPremium: false },
  { id: 'au-2', name: 'Australia - Melbourne', country: 'Australia', flag: '🇦🇺', latency: 125, status: 'online', isPremium: false },
  { id: 'in-1', name: 'India - Mumbai Speed', country: 'India', flag: '🇮🇳', latency: 32, status: 'online', isPremium: false },
  { id: 'in-2', name: 'India - Bangalore Hub', country: 'India', flag: '🇮🇳', latency: 35, status: 'online', isPremium: false },
  { id: 'in-3', name: 'India - New Delhi Node', country: 'India', flag: '🇮🇳', latency: 38, status: 'online', isPremium: false },
  { id: 'hk-1', name: 'Hong Kong - HK Node', country: 'Hong Kong', flag: '🇭🇰', latency: 48, status: 'online', isPremium: false },
  { id: 'kr-1', name: 'South Korea - Seoul', country: 'South Korea', flag: '🇰🇷', latency: 45, status: 'online', isPremium: false },
  { id: 'my-1', name: 'Malaysia - KL Hub', country: 'Malaysia', flag: '🇲🇾', latency: 52, status: 'online', isPremium: false },
  { id: 'th-1', name: 'Thailand - Bangkok', country: 'Thailand', flag: '🇹🇭', latency: 48, status: 'online', isPremium: false },
  { id: 'vn-1', name: 'Vietnam - Hanoi Node', country: 'Vietnam', flag: '🇻🇳', latency: 62, status: 'online', isPremium: false },
  { id: 'id-1', name: 'Indonesia - Jakarta', country: 'Indonesia', flag: '🇮🇩', latency: 55, status: 'online', isPremium: false },
  { id: 'ph-1', name: 'Philippines - Manila', country: 'Philippines', flag: '🇵🇭', latency: 65, status: 'online', isPremium: false },
  { id: 'tw-1', name: 'Taiwan - Taipei Node', country: 'Taiwan', flag: '🇹🇼', latency: 50, status: 'online', isPremium: false },
  { id: 'ae-1', name: 'UAE - Dubai Supreme', country: 'UAE', flag: '🇦🇪', latency: 68, status: 'online', isPremium: false },
  { id: 'as-nitro-1', name: 'Nitro - SG Extreme', country: 'Singapore', flag: '🇸🇬', latency: 10, status: 'online', isPremium: false },
  { id: 'as-nitro-2', name: 'Nitro - Tokyo Core', country: 'Japan', flag: '🇯🇵', latency: 35, status: 'online', isPremium: false },
  { id: 'as-nitro-3', name: 'Nitro - Mumbai Core', country: 'India', flag: '🇮🇳', latency: 28, status: 'online', isPremium: false },

  // SOUTH AMERICA & AFRICA (20)
  { id: 'br-1', name: 'Brazil - Sao Paulo 01', country: 'Brazil', flag: '🇧🇷', latency: 145, status: 'online', isPremium: false },
  { id: 'br-2', name: 'Brazil - Sao Paulo 02', country: 'Brazil', flag: '🇧🇷', latency: 148, status: 'online', isPremium: false },
  { id: 'ar-1', name: 'Argentina - BA Node', country: 'Argentina', flag: '🇦🇷', latency: 160, status: 'online', isPremium: false },
  { id: 'za-1', name: 'South Africa - Joburg', country: 'South Africa', flag: '🇿🇦', latency: 270, status: 'online', isPremium: false },
  { id: 'ng-1', name: 'Nigeria - Lagos Hub', country: 'Nigeria', flag: '🇳🇬', latency: 305, status: 'online', isPremium: false },
  { id: 'eg-1', name: 'Egypt - Cairo Node', country: 'Egypt', flag: '🇪🇬', latency: 220, status: 'online', isPremium: false },
  { id: 'cl-1', name: 'Chile - Santiago', country: 'Chile', flag: '🇨🇱', latency: 165, status: 'online', isPremium: false },
  { id: 'co-1', name: 'Colombia - Bogota', country: 'Colombia', flag: '🇨🇴', latency: 110, status: 'online', isPremium: false },
  { id: 'mx-3', name: 'Mexico - Monterrey', country: 'Mexico', flag: '🇲🇽', latency: 102, status: 'online', isPremium: false },
  { id: 'pe-1', name: 'Peru - Lima Hub', country: 'Peru', flag: '🇵🇪', latency: 130, status: 'online', isPremium: false },
  { id: 'br-3', name: 'Brazil - Brasilia', country: 'Brazil', flag: '🇧🇷', latency: 152, status: 'online', isPremium: false },
  { id: 'ma-1', name: 'Morocco - Casablanca', country: 'Morocco', flag: '🇲🇦', latency: 180, status: 'online', isPremium: false },
  { id: 'ke-1', name: 'Kenya - Nairobi', country: 'Kenya', flag: '🇰🇪', latency: 285, status: 'online', isPremium: false },
  { id: 'gh-1', name: 'Ghana - Accra', country: 'Ghana', flag: '🇬🇭', latency: 300, status: 'online', isPremium: false },
  { id: 'dz-1', name: 'Algeria - Algiers', country: 'Algeria', flag: '🇩🇿', latency: 190, status: 'online', isPremium: false },
].sort((a,b) => a.name.localeCompare(b.name)) as Server[];


export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedServer, setSelectedServer] = useState<Server>(SERVERS[0]);
  const [showServers, setShowServers] = useState(false);
  const [stats, setStats] = useState<ConnectionStats>({
    download: '0.0',
    upload: '0.0',
    ping: 0,
    duration: '00:00:00',
    ip: '112.134.120.45',
    location: 'Location (Exposed)'
  });

  const handleConnect = () => {
    if (isConnected) {
      setIsConnected(false);
      return;
    }

    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
      setStats(prev => ({
        ...prev,
        ping: selectedServer.latency,
        ip: selectedServer.id === 'lk-1' ? '112.134.120.45' : '172.56.21.' + Math.floor(Math.random() * 255),
        download: (Math.random() * 800 + 100).toFixed(1),
        upload: (Math.random() * 300 + 50).toFixed(1),
        location: `${selectedServer.name}, ${selectedServer.country}`
      }));
    }, 2000);
  };

  return (
    <div className="w-full h-screen bg-bg-main text-white font-sans flex overflow-hidden relative sri-lankan-pattern">
      {/* Decorative SVG Motif */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M0,40 Q25,-10 50,40 T100,40" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-bg-secondary p-6 flex flex-col relative z-20">
        <div className="flex items-center gap-3 mb-12">
          <VPNLogo className="scale-75" />
          <span className="text-xl font-bold tracking-tight uppercase">PS<span className="text-brand-gold">VPN</span></span>
        </div>

        <nav className="space-y-4">
          <MenuBtn 
            icon={<LayoutDashboard size={18} />} 
            label="Dashboard" 
            isActive={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')} 
          />
          <MenuBtn 
            icon={<Globe size={18} />} 
            label="Server List" 
            isActive={showServers} 
            onClick={() => setShowServers(true)} 
          />
          <MenuBtn 
            icon={<Zap size={18} />} 
            label="Speed Test" 
            isActive={activeTab === 'security'} 
            onClick={() => setActiveTab('security')} 
          />
          <MenuBtn 
            icon={<Settings size={18} />} 
            label="Settings" 
            isActive={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')} 
          />
        </nav>

        <div className="mt-auto">
          <div className="p-4 bg-gradient-to-br from-[#1a1f2e] to-bg-main border border-white/5 rounded-2xl">
            <p className="text-[10px] text-white/40 mb-2 uppercase tracking-widest font-mono font-bold italic">Network Status</p>
            <p className="text-sm font-semibold">GLOBAL FREE ACCESS</p>
            <div className="w-full mt-3 py-2 bg-brand-gold/10 text-brand-gold text-[10px] font-bold rounded-lg uppercase tracking-wider text-center border border-brand-gold/20">
              Supreme Unlocked
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-10 flex flex-col relative z-20 overflow-y-auto">
        {activeTab === 'dashboard' ? (
          <>
            <header className="flex justify-between items-center mb-12">
              <div>
                <h1 className="text-3xl font-light text-white/90 italic tracking-tighter">Welcome to <span className="font-bold">PS VPN</span></h1>
                <p className="text-white/40 text-sm tracking-widest uppercase text-[10px]">{isConnected ? 'Your global tunnel is active and secure' : 'Warning: Your real location is visible'}</p>
              </div>
              <div className="flex gap-10">
                <HeaderStat label="NETWORK IP" value={stats.ip} />
                <HeaderStat label="PROTOCOL" value={isConnected ? 'OpenVPN / AES-256' : 'INSECURE'} />
              </div>
            </header>

            <div className="flex-1 flex flex-col items-center justify-center relative py-12">
              <div className={`absolute w-[500px] h-[500px] blur-[120px] rounded-full transition-colors duration-1000 ${
                isConnected ? 'bg-brand-gold/10' : 'bg-brand-maroon/5'
              }`} />
              
              <div className="relative group cursor-pointer" onClick={handleConnect}>
                <AnimatePresence>
                  {(isConnecting || isConnected) && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: 1.5 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 bg-white/5 rounded-full" 
                    />
                  )}
                </AnimatePresence>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-64 h-64 rounded-full border-4 flex items-center justify-center relative z-10 bg-bg-secondary shadow-2xl transition-all duration-700 ${
                    isConnected ? 'border-brand-gold shadow-brand-gold/20' : 'border-white/10'
                  }`}
                >
                  <div className="w-[240px] h-[240px] rounded-full border border-white/5 flex flex-col items-center justify-center bg-gradient-to-b from-[#161B26] to-bg-main">
                    <div className={`transition-all duration-700 ${isConnected ? 'text-brand-gold' : 'text-white/20'}`}>
                      {isConnected ? (
                        <ShieldCheck size={80} strokeWidth={1} />
                      ) : isConnecting ? (
                        <Activity size={80} strokeWidth={1} className="animate-pulse" />
                      ) : (
                        <Zap size={80} strokeWidth={1} />
                      )}
                    </div>
                    <span className={`text-[10px] tracking-[0.4em] uppercase mt-4 font-black ${isConnected ? 'text-brand-gold' : 'text-white/40'}`}>
                      {isConnecting ? 'ESTABLISHING...' : isConnected ? 'DISCONNECT' : 'START TUNNEL'}
                    </span>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 text-center">
                <motion.p 
                  key={isConnected ? 'con' : 'dis'}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-2xl font-black italic mb-1 uppercase tracking-tighter"
                >
                  {isConnected ? 'Supreme Protection Live' : 'Disconnected'}
                </motion.p>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-white/30 text-[10px] uppercase font-mono tracking-[0.2em]">
                    {isConnected ? `Secure node: ${selectedServer.name}` : 'Tap center button to connect global network'}
                  </p>
                  {isConnected && (
                    <span className="text-[10px] text-brand-gold font-mono uppercase tracking-[0.3em]">
                      {selectedServer.flag} {selectedServer.country} Node Stable
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="h-48 grid grid-cols-4 gap-6">
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <StatSmall label="DOWNLOAD SPEED" value={isConnected ? `${stats.download} Mb/s` : '--'} />
                <StatSmall label="UPLOAD SPEED" value={isConnected ? `${stats.upload} Mb/s` : '--'} />
                <StatSmall label="LATENCY" value={isConnected ? `${stats.ping} ms` : '--'} />
                <StatSmall label="ACTIVE SERVER" value={selectedServer.name} />
              </div>

              <div 
                onClick={() => setShowServers(true)}
                className="col-span-2 bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{selectedServer.flag}</div>
                  <div>
                    <p className="font-black italic tracking-tighter text-xl uppercase">{selectedServer.name}</p>
                    <p className="text-[10px] text-white/40 uppercase font-mono tracking-widest">{selectedServer.country} • Free Node</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono font-black italic text-brand-gold">{selectedServer.latency}ms</span>
                  <ChevronRight size={24} className="text-white/20 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </>
        ) : activeTab === 'security' ? (
          <SpeedTestSection stats={stats} isConnected={isConnected} selectedServer={selectedServer} />
        ) : (
          <SettingsSection />
        )}
      </main>


      {/* Connection Detail Display */}
      <div className="absolute top-10 right-10 w-48 bg-[#161B26]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 z-30">
        <div className="flex justify-between items-end mb-4">
          <div>
            <p className="text-[10px] text-white/40 uppercase font-black tracking-widest font-mono">NODE LOAD</p>
            <p className="text-xl font-black">{isConnected ? '8%' : '0%'}</p>
          </div>
          <div className="flex gap-1 h-8 items-end">
            {[10, 20, 15, 30, 12].map((h, i) => (
              <div key={i} className={`w-1 transition-all h-[${h}%] ${isConnected ? 'bg-green-500' : 'bg-white/10'}`} />
            ))}
          </div>
        </div>
        <div className="text-[10px] text-white/30 border-t border-white/5 pt-2 flex justify-between font-mono font-black tracking-tighter italic">
           <span>SUPREME MESH</span>
           <span className={isConnected ? 'text-green-500' : 'text-red-500/50'}>
             {isConnected ? 'STABLE' : 'IDLE'}
           </span>
        </div>
      </div>

      {/* Global Server Selector */}
      <AnimatePresence>
        {showServers && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowServers(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed inset-y-0 right-0 w-[420px] bg-bg-secondary border-l border-white/10 z-50 p-8 flex flex-col gap-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-2xl font-black tracking-tighter italic uppercase underline decoration-brand-gold underline-offset-4">Global Network</h3>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1 font-mono">150+ Free High-Speed Servers</p>
                </div>
                <button onClick={() => setShowServers(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-hide">
                {SERVERS.map((server) => (
                  <button
                    key={server.id}
                    onClick={() => {
                      setSelectedServer(server);
                      setShowServers(false);
                      if (isConnected) handleConnect();
                    }}
                    className={`w-full p-4 rounded-xl flex items-center justify-between transition-all border ${
                      selectedServer.id === server.id 
                        ? 'bg-brand-gold/10 border-brand-gold/40 scale-[1.02]' 
                        : 'bg-white/5 border-transparent hover:border-white/10 hover:bg-white/8'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl drop-shadow-lg">{server.flag}</span>
                      <div className="text-left">
                        <div className="font-bold tracking-tight text-sm uppercase italic">
                          {server.name}
                        </div>
                        <p className="text-[9px] text-white/40 uppercase tracking-widest font-mono">{server.country} • Optimized</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-end">
                        <span className={`text-[10px] font-mono font-black italic ${server.latency < 100 ? 'text-green-500' : 'text-white/40'}`}>
                          {server.latency} MS
                        </span>
                        <div className={`w-12 h-1 rounded-full mt-1 bg-white/5`}>
                          <div className={`h-full rounded-full ${server.latency < 100 ? 'bg-green-500' : 'bg-brand-gold'}`} style={{ width: Math.max(20, 100 - server.latency/3) + '%' }} />
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="p-4 bg-bg-main border border-white/5 rounded-xl text-center">
                <span className="text-[10px] text-white/20 font-mono uppercase tracking-[0.1em]">All nodes feature AES-256 GCM encryption protocol</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

const HeaderStat = ({ label, value }: { label: string; value: string }) => (
  <div className="text-right">
    <p className="text-[10px] text-white/40 uppercase font-mono font-black tracking-widest">{label}</p>
    <p className="text-sm font-mono text-white/80 font-black tracking-tight">{value}</p>
  </div>
);

const MenuBtn = ({ icon, label, isActive, onClick }: { icon: React.ReactNode; label: string; isActive: boolean; onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full p-4 rounded-xl flex items-center gap-3 border-l-4 transition-all ${
      isActive ? 'bg-white/5 border-brand-gold text-brand-gold' : 'border-transparent text-white/40 hover:bg-white/5 hover:text-white'
    }`}
  >
    {icon}
    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
  </button>
);

const StatSmall = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 transition-all hover:bg-white/10 hover:border-white/10 group">
    <p className="text-[10px] text-white/30 uppercase font-mono font-black tracking-widest mb-1 group-hover:text-brand-gold transition-colors">{label}</p>
    <p className="text-base font-black italic truncate tracking-tighter">{value}</p>
  </div>
);

const SpeedTestSection = ({ isConnected, selectedServer, stats }: { isConnected: boolean; selectedServer: Server; stats: ConnectionStats }) => {
  const [isTesting, setIsTesting] = useState(false);
  const [currentTest, setCurrentTest] = useState<any>({
    dl: '0.0',
    ul: '0.0',
    ping: '--',
    jitter: '--',
    progress: 0,
    phase: 'Idle'
  });

  const runTest = () => {
    if (isTesting) return;
    setIsTesting(true);
    setCurrentTest({ dl: '0.0', ul: '0.0', ping: '--', jitter: '--', progress: 0, phase: 'Initializing...' });

    // Simulate test phases
    const timeline = [
      { phase: 'Testing Latency...', progress: 10, ping: isConnected ? selectedServer.latency : 24, jitter: isConnected ? 2 : 5 },
      { phase: 'Testing Download...', progress: 30, dl: '20' },
      { phase: 'Testing Download...', progress: 50, dl: isConnected ? '840.4' : '45.2' },
      { phase: 'Testing Upload...', progress: 70, ul: '10' },
      { phase: 'Testing Upload...', progress: 90, ul: isConnected ? '320.1' : '15.8' },
      { phase: 'Test Complete', progress: 100 }
    ];

    timeline.forEach((step, index) => {
      setTimeout(() => {
        setCurrentTest((prev: any) => ({ ...prev, ...step }));
        if (index === timeline.length - 1) setIsTesting(false);
      }, (index + 1) * 1200);
    });
  };

  return (
    <div className="flex flex-col gap-8 h-full">
      <header>
        <h2 className="text-3xl font-black italic tracking-tighter uppercase underline decoration-brand-gold underline-offset-8">Supreme Network Diagnostic</h2>
        <p className="text-[10px] text-white/40 uppercase font-mono tracking-widest mt-4">Analyze tunnel performance and stability</p>
      </header>

      <div className="grid grid-cols-12 gap-8 flex-1">
        <div className="col-span-8 flex flex-col gap-6">
          <div className="bg-bg-secondary border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 opacity-20 pointer-events-none" />
            
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="w-64 h-64 rounded-full border-8 border-white/5 flex items-center justify-center relative">
                 <motion.div 
                    animate={{ rotate: isTesting ? 360 : 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 border-t-8 border-brand-gold rounded-full"
                    style={{ display: isTesting ? 'block' : 'none' }}
                 />
                 <div className="text-center">
                   <p className="text-4xl font-black italic">{isTesting ? (currentTest.phase.includes('Download') ? currentTest.dl : currentTest.ul) : (isConnected ? stats.download : '0.0')}</p>
                   <p className="text-[10px] text-white/30 font-mono font-bold tracking-[0.3em] uppercase">Mb/s</p>
                 </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-xl font-black italic uppercase tracking-tighter">{currentTest.phase}</p>
                <div className="w-96 h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${currentTest.progress}%` }}
                    className="h-full bg-brand-gold"
                  />
                </div>
              </div>

              <button 
                onClick={runTest}
                disabled={isTesting}
                className={`mt-10 px-12 py-4 rounded-2xl font-black italic uppercase tracking-[0.2em] text-sm transition-all ${
                  isTesting ? 'bg-white/5 text-white/20' : 'bg-brand-gold text-black hover:scale-105 active:scale-95 shadow-xl shadow-brand-gold/10'
                }`}
              >
                {isTesting ? 'DIAGNOSING...' : 'RUN SPEED TEST'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
             <StatBox label="LATENCY (PING)" value={isTesting ? `${currentTest.ping} ms` : (isConnected ? `${stats.ping} ms` : '--')} icon={<Activity size={16} />} />
             <StatBox label="TUNNEL JITTER" value={isTesting ? `${currentTest.jitter} ms` : (isConnected ? '2.1 ms' : '--')} icon={<Activity size={16} />} />
             <StatBox label="PACKET LOSS" value={isConnected ? '0.001%' : '--'} icon={<ShieldCheck size={16} />} />
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-6">
          <div className="bg-white/5 border border-white/5 rounded-3xl p-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-6 font-mono">Tunnel Identity</h4>
            <div className="space-y-6">
              <IdentityRow label="HOSTNAME" value={isConnected ? `${selectedServer.id}.ps-vpn.global` : 'UNKNOWN_CLIENT'} />
              <IdentityRow label="PUBLIC IP" value={isConnected ? stats.ip : '112.134.120.45'} />
              <IdentityRow label="GATEWAY" value={isConnected ? 'supreme-gw-01' : 'none'} />
              <IdentityRow label="ISP" value={isConnected ? 'Supreme Network' : 'Dialog Axiata'} />
            </div>
          </div>

          <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-3xl p-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold mb-3 font-mono">Security Check</h4>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${isConnected ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                {isConnected ? <Lock size={16} /> : <X size={16} />}
              </div>
              <p className={`text-xs font-bold ${isConnected ? 'text-green-500' : 'text-red-500'}`}>
                {isConnected ? 'ENCRYPTION ACTIVE: AES-256-GCM' : 'UNSECURED CONNECTION'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsSection = () => {
  const [settings, setSettings] = useState({
    killSwitch: true,
    autoConnect: false,
    splitTunnel: true,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      <header>
        <h2 className="text-3xl font-black italic tracking-tighter uppercase underline decoration-brand-gold underline-offset-8 font-sans">PS System Config</h2>
        <p className="text-[10px] text-white/40 uppercase font-mono tracking-widest mt-4">Manage connection protocols and app behavior</p>
      </header>

      <div className="space-y-4">
        <SettingCard 
          title="Kill Switch" 
          desc="Block internet access if VPN connection drops unexpectedly." 
          checked={settings.killSwitch} 
          onClick={() => toggle('killSwitch')}
        />
        <SettingCard 
          title="Auto-Connect" 
          desc="Instantly establish tunnel on application launch." 
          checked={settings.autoConnect} 
          onClick={() => toggle('autoConnect')}
        />
        <SettingCard 
          title="Split Tunneling" 
          desc="Select specific applications to bypass the VPN tunnel." 
          checked={settings.splitTunnel} 
          onClick={() => toggle('splitTunnel')}
        />
        
        <div className="bg-bg-secondary p-6 rounded-3xl border border-white/5 flex items-center justify-between group hover:border-brand-gold/30 transition-all">
          <div>
            <h4 className="font-black italic uppercase tracking-tighter text-lg">Connection Protocol</h4>
            <p className="text-xs text-white/30 font-mono">Supreme Mesh (UDP) Optimized for gaming and streaming</p>
          </div>
          <select className="bg-bg-main border border-white/10 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-widest outline-none cursor-pointer hover:border-brand-gold transition-colors">
            <option>Supreme Mesh (UDP)</option>
            <option>OpenVPN (TCP)</option>
            <option>WireGuard Core</option>
            <option>Stealth Tunnel</option>
          </select>
        </div>
      </div>

      <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 font-mono mb-4">Supreme Build Info</h4>
        <div className="flex justify-between text-[10px] font-mono font-bold italic opacity-60">
          <span>APP VERSION</span>
          <span>v3.5.0-STABLE</span>
        </div>
        <div className="flex justify-between text-[10px] font-mono font-bold italic opacity-60 mt-2">
          <span>CORE ENGINE</span>
          <span>NITRO-X GLOBAL</span>
        </div>
      </div>
    </div>
  );
};

const SettingCard = ({ title, desc, checked, onClick }: { title: string; desc: string; checked: boolean; onClick: () => void }) => (
  <div 
    onClick={onClick}
    className="bg-bg-secondary p-6 rounded-3xl border border-white/5 flex items-center justify-between group hover:border-brand-gold/30 transition-all cursor-pointer"
  >
    <div>
      <h4 className="font-black italic uppercase tracking-tighter text-lg">{title}</h4>
      <p className="text-xs text-white/30 font-mono">{desc}</p>
    </div>
    <div className={`w-14 h-7 rounded-full p-1 transition-colors ${checked ? 'bg-brand-gold' : 'bg-white/10'}`}>
      <div className={`w-5 h-5 rounded-full bg-black transition-transform ${checked ? 'translate-x-7' : 'translate-x-0'}`} />
    </div>
  </div>
);

const StatBox = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => (
  <div className="bg-white/5 border border-white/5 rounded-3xl p-6 flex flex-col justify-between">
    <div className="flex justify-between items-center mb-4">
      <span className="text-[10px] text-white/30 font-mono font-black uppercase tracking-widest">{label}</span>
      <div className="text-brand-gold opacity-30">{icon}</div>
    </div>
    <p className="text-xl font-black italic">{value}</p>
  </div>
);

const IdentityRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center border-b border-white/5 pb-4">
    <span className="text-[10px] text-white/30 font-mono font-bold uppercase tracking-widest">{label}</span>
    <span className="text-xs font-mono font-black italic">{value}</span>
  </div>
);
