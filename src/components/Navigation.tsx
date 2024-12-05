// components/Navigation.tsx
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';

interface NavItem {
  label: string;
  path?: string;
  action?: () => void;
}

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const goToSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(goToSection, 100);
    } else {
      goToSection();
    }
  };

  const navItems: NavItem[] = [
    { 
      label: 'Home',
      action: () => {
        if (location.pathname !== '/') {
          navigate('/');
        } else {
          scrollToSection('hero');
        }
      }
    },
    {
      label: 'Why R&D',
      path: '/why-rd',
    },
    {
      label: 'Approach',
      path: '/approach',
    },
    {
      label: 'Services',
      path: '/services',
    },
    {
      label: 'Contact',
      action: () => scrollToSection('contact'),
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // Close dropdown or perform some action if needed
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 h-20">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-none">
              <div 
                onClick={() => scrollToSection('hero')} 
                className="cursor-pointer"
              >
                <Logo />
              </div>
            </div>
            
            {/* Desktop Navigation - Right Aligned */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  ref={dropdownRef}
                >
                  {item.path ? (
                    <Link 
                      to={item.path}
                      className="text-text hover:text-primary transition-colors flex items-center gap-2 py-2 text-[15px] font-medium"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button 
                      onClick={() => {
                        item.action?.();
                      }}
                      className="text-text hover:text-primary transition-colors flex items-center gap-2 py-2 text-[15px] font-medium cursor-pointer"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-text p-2 hover:bg-primary/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>
      
      {/* Mobile Menu moved outside of header */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navItems={navItems}
      />
    </>
  );
};
