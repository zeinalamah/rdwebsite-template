import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  path?: string;
  action?: () => void;
  items?: { label: string; path: string }[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleItemClick = (item: NavItem) => {
    if (item.items) {
      setExpandedItem(expandedItem === item.label ? null : item.label);
    } else if (item.path) {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      onClose();
    } else if (item.action) {
      item.action();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-16 right-0 bottom-0 w-full max-w-sm bg-background border-l border-primary/20 overflow-y-auto z-50 md:hidden"
          >
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <div key={item.label} className="mb-2">
                  <button
                    onClick={() => handleItemClick(item)}
                    className="w-full py-3 px-4 text-left text-text hover:bg-primary/20 rounded-lg transition-colors flex items-center justify-between"
                  >
                    {item.label}
                    {item.items && (
                      <motion.div
                        animate={{ rotate: expandedItem === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    )}
                  </button>

                  {/* Dropdown items */}
                  <AnimatePresence>
                    {item.items && expandedItem === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4"
                      >
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => {
                              onClose();
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="block py-2 px-4 text-text/80 hover:text-text hover:bg-primary/20 rounded-lg transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};