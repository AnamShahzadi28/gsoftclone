import Link from 'next/link';
import { NavbarItem } from '@heroui/react';
import { NavLink } from '@/types/navbar';

interface NavItemProps {
  item: NavLink;
  isActive: boolean;
  onClick: () => void;
}

export default function NavItem({ item, isActive, onClick }: NavItemProps) {
  return (
    <NavbarItem isActive={isActive} className={`p-2 rounded-md ${isActive ? 'text-cyan' : ''}`}>
      <Link href={item.href} onClick={onClick} className={`text-lg font-medium ${isActive ? 'text-cyan' : 'text-white'}`}>
        {item.name}
      </Link>
    </NavbarItem>
  );
}
