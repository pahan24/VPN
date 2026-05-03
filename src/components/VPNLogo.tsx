import { motion } from 'motion/react';

export const VPNLogo = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className} group`}>
    {/* PS Text Logo Layout */}
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-16 h-16 bg-gradient-to-br from-brand-gold via-black to-brand-maroon rounded-2xl border-2 border-white/20 shadow-2xl relative flex items-center justify-center overflow-hidden"
    >
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center justify-center -space-y-1">
        <span className="text-2xl font-black italic tracking-tighter text-white">PS</span>
        <span className="text-[6px] font-bold tracking-[0.4em] text-brand-gold">SUPREME</span>
      </div>

      {/* Animated Scan Line */}
      <motion.div 
        animate={{ y: [-64, 128] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-1 bg-white/20 blur-sm pointer-events-none"
      />
    </motion.div>
    
    {/* Pulse ring */}
    <motion.div 
      animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute -inset-2 border border-brand-gold/30 rounded-3xl"
    />
  </div>
);
