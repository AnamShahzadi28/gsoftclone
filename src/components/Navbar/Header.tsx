"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button
} from "@heroui/react";
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import navData from '@/json/navbar.json';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(pathname);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {


      if (pathname === "/estimate-project"  ||pathname === "/jobDetails/business-development-manager-at-global-software-consulting"|| pathname === "/jobDetails/frontend-developer-at-global-software-consulting"
        ||pathname === "/jobDetails/back-end-developer-at-global-software-consulting"|| pathname ==="/jobDetails/backend-developer-at-global-software-consulting"
       ) {
            setIsScrolled(true);
            return;
          }
          else{
            setIsScrolled(window.scrollY > 50);
          }
          
      
    };

    handleScroll(); // Check scroll position on initial load

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  const navClass = isScrolled
    ? 'bg-navbg'
    : 'bg-transparent';

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-cyan z-[60] origin-[0%]"
        style={{ scaleX }}
      />
      <Navbar 
        onMenuOpenChange={setIsMenuOpen} 
        isMenuOpen={isMenuOpen}
        className={`fixed top-1 left-0 right-0 transition-all duration-300 backdrop-blur-none backdrop-filter-none ${navClass}`}
        classNames={{
          wrapper: "max-w-full mx-auto px-6 sm:px-8 lg:px-16",
          item: "data-[active=true]:text-cyan",
        }}
        height="5rem"
      >
        <NavbarContent justify="start" className="flex-grow-0">
          <NavbarBrand>
            <Link href="/">
              <Image src="/images/logo.png" alt="Global Software Consulting Logo" width={200} height={200} />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <DesktopNavbar navLinks={navData.navLinks} activeItem={activeItem} setActiveItem={setActiveItem} />

        <NavbarContent justify="end" className="flex-grow-0">
          <NavbarItem className="hidden lg:flex">
            <Button
              as={Link}
              href="/estimate-project"
              variant="bordered"
              className="text-white text-lg border-white  border-1 rounded  w-full hover:bg-white/10 "
            >
              Estimate Your Project
            </Button>
          </NavbarItem>
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </NavbarContent>

        <MobileNavbar navLinks={navData.navLinks} onClose={() => setIsMenuOpen(false)} />
      </Navbar>
      <motion.div 
        className="fixed top-20 left-0 right-0 h-1.5 bg-cyan z-[60] origin-[0%]"
        style={{ scaleX }}
      />
    </>
  );
}
