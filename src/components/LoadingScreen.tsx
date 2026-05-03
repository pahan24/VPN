import { motion, AnimatePresence } from 'motion/react';
import { VPNLogo } from './VPNLogo';

export const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-main overflow-hidden sri-lankan-pattern"
        >
          {/* Decorative SVG Motif from design */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M0,40 Q25,-10 50,40 T100,40" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col items-center gap-8 relative z-10"
          >
            <VPNLogo className="scale-150" />
            
            <div className="flex flex-col items-center gap-2">
              <motion.h1 
                className="text-2xl font-bold tracking-[0.2em] text-white uppercase"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                PS<span className="text-brand-gold">VPN</span>
              </motion.h1>
              <span className="text-brand-maroon font-mono tracking-widest uppercase text-xs">
                SECURE CONNECTION
              </span>
            </div>

            <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden mt-4">
              <motion.div 
                className="h-full bg-gradient-to-r from-brand-maroon via-brand-gold to-brand-maroon"
                animate={{ x: [-200, 200] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: '60%' }}
              />
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/40 text-[10px] uppercase tracking-tighter mt-12 font-mono"
            >
              Secure Tunneling • v3.0.0 • Global Core
            </motion.p>
          </motion.div>

          {/* Traditional Borders Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-maroon via-brand-gold to-brand-maroon opacity-30" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-maroon via-brand-gold to-brand-maroon opacity-30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
