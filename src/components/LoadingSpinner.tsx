import { motion } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import { Logo } from './Logo';

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-[#0E0F1F] flex flex-col items-center justify-center z-50">
      <div className="mb-8">
        <Logo />
      </div>
      <motion.div
        className="w-16 h-16 border-4 border-[#2B3187]/20 border-t-[#2B3187] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        role="status"
        aria-label="Loading"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-[#F7F8F8]/60"
      >
        Loading...
      </motion.p>
    </div>
  );
};