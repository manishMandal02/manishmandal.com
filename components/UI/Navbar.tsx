import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import scrollTo from '../../src/utils/scrollTo';
import SocialLinks from './SocialLinks';
import ThemeToggleSwitch from './ThemeToggleSwitch';
import { MdKeyboardArrowDown, MdInsertDriveFile, MdVideocam, MdCalendarMonth } from 'react-icons/md';
import Link from 'next/link';

// import logo from '/m-logo.svg';

const Navbar = () => {
  const router = useRouter();

  const gotTo = useCallback(async (section: string) => {
    if (location.pathname !== '/') {
      router.push('/', null, { scroll: true });
      setTimeout(() => {
        scrollTo(section);
      }, 1600);
      return;
    }
    scrollTo(section);
  }, []);

  const goToAboutMe = useCallback(() => {
    gotTo('about-me');
  }, [gotTo]);

  const goToProjects = useCallback(() => {
    gotTo('projects');
  }, [gotTo]);

  const goToContact = useCallback(() => {
    gotTo('contact');
  }, [gotTo]);

  // const blogLink = 'https://blog.manishmandal.com';

  return (
    <nav className='h-20 ms:h-28 ms:px-0 ms:pt-0   px-24 py-8 pt-10 absolute top-0 w-full z-10 bg-white dark:bg-primaryDarkBG transition-all duration-400'>
      <div className='ms:hidden h-full flex items-center justify-around relative'>
        <Link href={'/'}>
          <Image
            src={'/m-logo.svg'}
            className='cursor-pointer'
            width={50}
            height={50}
            alt='manish-mandal'
            priority
          />
        </Link>
        <div className='flex items-center justify-center  text-slate-600  dark:text-gray-300'>
          <button
            onClick={goToAboutMe}
            className='text-lg  hover:text-black dark:hover:text-slate-100  cursor-pointer'
          >
            AboutMe
          </button>
          <button
            onClick={goToProjects}
            className=' cursor-pointer ml-5 text-lg hover:text-black  dark:hover:text-slate-100 '
          >
            Projects
          </button>
          {/* <a
            href={blogLink}
            target='_blank'
            className=' cursor-pointer ml-5 text-lg appearance-none hover:text-black  dark:hover:text-slate-100'
          >
            Blog
          </a> */}
          <button
            onClick={goToContact}
            className=' cursor-pointer ml-5 text-lg hover:text-black dark:hover:text-slate-100  '
          >
            Contact
          </button>

          <NavMoreButton />
        </div>
        <div className='w-24 mr-'>
          <SocialLinks github />
        </div>
        <div className='absolute -top-3 right-6'>
          <ThemeToggleSwitch />
        </div>
      </div>
      <div className='hidden ms:flex h-full flex-col'>
        <div className='flex h-full justify-between items-center shadow-sm w-full px-4 relative'>
          <Link href={'/'}>
            <Image
              src={'/m-logo.svg'}
              className='cursor-pointer'
              width={45}
              height={45}
              alt='manish-mandal'
            />
          </Link>
          <div className=' -mr-20'>
            <SocialLinks github />
          </div>
          <div className='mr-16'>
            <ThemeToggleSwitch />
          </div>
        </div>
        <div className='w-full flex items-center justify-center  text-slate-600 dark:text-white  -mb-2 mt-2'>
          <button onClick={goToAboutMe} className='text-lg   cursor-pointer'>
            AboutMe
          </button>
          <button onClick={goToProjects} className=' cursor-pointer ml-4 text-lg'>
            Projects
          </button>
          <button onClick={goToContact} className=' cursor-pointer ml-4 text-lg hover:text-black'>
            Contact
          </button>

          <NavMoreButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// More options button

const NavMoreButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = [
    { label: 'Resume', icon: MdInsertDriveFile, href: '/resume' },
    { label: 'Intro Video', icon: MdVideocam, href: '/intro-video' },
    { label: 'Book a call', icon: MdCalendarMonth, href: '/book-call' }
  ];

  const handleItemClick = useCallback(() => setIsOpen(false), []);

  return (
    <div className='relative ml-3.5'>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center space-x-1 text-lg text-gray-600 dark:text-slate-300 hover:text-gray-900 hover:dark:text-gray-100/90 transition focus:outline-none'
      >
        <span>More</span>
        <MdKeyboardArrowDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <div
          ref={popoverRef}
          className='absolute right-0 mt-2 w-48 z-[999] bg-white dark:bg-gray-950 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700/60 py-2'
        >
          {menuItems.map(item => (
            <a
              href={item.href}
              onClick={handleItemClick}
              key={item.label}
              className='w-full flex items-center space-x-3 px-4 py-2.5 text-gray-700 dark:text-slate-200/90 hover:bg-gray-100/90 hover:dark:bg-gray-900 transition text-left'
            >
              <item.icon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
              <span className='text-sm'>{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
