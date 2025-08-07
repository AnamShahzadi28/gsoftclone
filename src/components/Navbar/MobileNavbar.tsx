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
    <NavbarMenu className="bg-navbg pt-8">
      {navLinks.map((item) =>
        item.isDropdown && item.megaMenu ? (
          <NavbarMenuItem key={item.name}>
            <div className="w-full text-white text-lg py-2">
              <button
                className="w-full flex justify-between items-center bg-transparent"
                onClick={() => toggleDropdown(item.name)}
              >
                <span>{item.name}</span>
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
                    className="w-full text-white text-lg py-1 block"
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
          <NavbarMenuItem key={item.name}>
            <Link className="w-full text-white text-lg py-5" href={item.href} onClick={onClose}>
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
