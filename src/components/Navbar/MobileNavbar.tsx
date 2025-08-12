import { useState } from 'react';
import Link from 'next/link';
import { NavbarMenu, NavbarMenuItem, Button } from '@heroui/react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { NavLink } from '@/types/navbar';

interface MobileNavbarProps {
  navLinks: NavLink[];
  onClose: () => void;
}

export default function MobileNavbar({ navLinks, onClose }: MobileNavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <NavbarMenu className="bg-navbg pt-8 ">
      {navLinks.map((item) =>
        item.isDropdown && item.megaMenu ? (
          <NavbarMenuItem key={item.name} className="py-3 "> {/* Added py-3 */}
            <div className="flex w-full items-center justify-between text-white text-lg"> {/* Removed py-2 */}
              <Link href={item.href} onClick={onClose} className="flex-grow hover:text-cyan">
                {item.name}
              </Link>
              <button
                className="p-2 -mr-2"
                onClick={() => toggleDropdown(item.name)}
                aria-label="Toggle submenu"
              >
                {openDropdown === item.name ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </button>
            </div>
            {openDropdown === item.name && (
              <div className="mt-2 space-y-2 pl-4">
                {item.megaMenu?.flatMap((section) => section.links).map((link) => (
                  <Link
                    key={link.name}
                    className="w-full text-white text-lg py-1 block hover:text-cyan"
                    href={link.href}
                    onClick={onClose}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </NavbarMenuItem>
        ) : (
          <NavbarMenuItem key={item.name} className="py-3"> {/* Added py-3 */}
            <Link className="w-full text-white text-lg hover:text-cyan" href={item.href} onClick={onClose}> {/* Removed py-5 */}
              {item.name}
            </Link>
          </NavbarMenuItem>
        )
      )}
      <NavbarMenuItem>
        <Button
          as={Link}
          href="/estimate-project"
          variant="bordered"
          className="text-white border-white border-1 rounded w-full hover:bg-white/10 mt-6 mb-6"
          onClick={onClose}
        >
          Estimate Your Project
        </Button>
      </NavbarMenuItem>
    </NavbarMenu>
  );
}
