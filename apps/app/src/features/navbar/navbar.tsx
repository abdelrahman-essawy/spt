'use client';
import React, { useState } from 'react';
import LogoColored from '../../assets/logo-colored.svg';
import Image from 'next/image';
import { Input } from '@nextui-org/input';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { Avatar } from '@nextui-org/avatar';
import SearchIcon from './search-icon'; // Keep your custom search icon
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';
import { useTranslations } from 'next-intl';
import { Link } from '@nextui-org/link';
import { useUserStore } from '../auth/user-store';
import { useLogout } from '../auth/login/use-logout';

// Importing icons from react-icons
import {
  FaClipboardList,
  FaHome,
  FaServicestack,
  FaUserCircle,
  FaWallet,
} from 'react-icons/fa';

export default function Navbar() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: t('sidenav.home'), href: '/', icon: <FaHome /> },
    {
      label: t('sidenav.services'),
      href: '/services',
      icon: <FaServicestack />,
    },
    {
      label: t('sidenav.orders'),
      href: '/orders',
      icon: <FaClipboardList />,
    },
    {
      label: t('sidenav.wallet'),
      href: '/wallet',
      icon: <FaWallet />,
    },
    {
      label: t('sidenav.profile'),
      href: '/profile',
      icon: <FaUserCircle />,
    },
  ];

  const { user } = useUserStore();
  const { logout } = useLogout();

  return (
    <NextUINavbar isBordered maxWidth="full">
      {/* Left Side: Logo and Search */}
      <NavbarContent justify="start" className="flex-1">
        <NavbarBrand className="mr-4 flex items-center gap-32">
          <Image src={LogoColored} alt="SPT Logo" width={100} height={30} />
          <Input
            classNames={{
              base: 'w-full h-8 hidden md:block',
              mainWrapper: 'h-full',
              input: 'text-xs',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/10',
            }}
            placeholder={t('placeholder.search')}
            size="sm"
            startContent={
              <SearchIcon className="fill-[#05B5B4] scale-x-[-1]" />
            }
            type="search"
            radius="full"
          />
        </NavbarBrand>
      </NavbarContent>

      {/* Right Side: User Avatar and Mobile Menu Toggle */}
      <NavbarContent justify="end" className="flex-1 flex items-center">
        {/* User Avatar Dropdown */}
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={user?.avatar}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem onClick={logout} key="logout" color="danger">
              تسجيل الخروج
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Mobile Menu Toggle */}
        <NavbarMenuToggle
          isOpen={isMenuOpen}
          onOpenChange={setIsMenuOpen}
          className="ml-4 md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu isOpen={isMenuOpen} onOpenChange={setIsMenuOpen}>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              href={item.href}
              color="foreground"
              className="w-full flex items-center gap-1.5"
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
