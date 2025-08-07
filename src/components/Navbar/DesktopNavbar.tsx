import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { NavbarContent, NavbarItem } from '@heroui/react';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { NavLink } from '@/types/navbar';
import NavItem from './NavItem';

interface DesktopNavbarProps {
  navLinks: NavLink[];
  activeItem: string;
  setActiveItem: (href: string) => void;
}

export default function DesktopNavbar({ navLinks, activeItem, setActiveItem }: DesktopNavbarProps) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  return (
    <NavbarContent className="hidden lg:flex gap-8 flex-grow " justify="center">
      {navLinks.map((item) =>
        item.isDropdown && item.megaMenu ? (
          <div
            key={item.name}
            className="relative cursor-pointer"
            ref={megaMenuRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => router.push(item.href)}
          >
            <NavbarItem
              isActive={pathname.startsWith(item.href ?? '')}
              className={`p-2 rounded-md`}
            >
              <div className={`bg-transparent font-medium text-lg flex items-center gap-1 ${pathname.startsWith(item.href ?? '') ? 'text-cyan' : 'text-white '}`}>
                {item.name}
                {isMegaMenuOpen ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
              </div>
            </NavbarItem>
            {isMegaMenuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/3 mt-5 w-screen max-w-5xl py-5 px-2.5">
                <div className="bg-white rounded-lg shadow-lg grid grid-cols-4 text-black overflow-hidden">
                  {item.megaMenu.map((section) => (
                    <div key={section.heading} className={`p-6 ${section.heading === 'How we work' ? 'bg-cyan-50' : ''}`}>
                      <h3 className="text-gray-800 text-base mb-4">{section.heading}</h3>
                      <ul className="space-y-3">
                        {section.links.map((link) => (
                          <li key={link.name}>
                            <Link href={link.href} onClick={(e) => { e.stopPropagation(); setIsMegaMenuOpen(false); }} className="hover:text-cyan-600 text-sm text-gray-700">
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <NavItem
          
            key={item.name}
            item={item}
            isActive={activeItem === item.href}
            onClick={() => setActiveItem(item.href)}
          />
        )
      )}
    </NavbarContent>
  );
}

