import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import scrollTo from '../../src/utils/scrollTo';
import SocialLinks from './SocialLinks';
import ThemeToggleSwitch from './ThemeToggleSwitch';
import { wait } from '../../src/utils/wait';

// import logo from '/m-logo.svg';

const Navbar = () => {
  const router = useRouter();

  const gotTo = useCallback(async (section: string) => {
    if (location.pathname !== '/') {
      router.push('/', null, { scroll: true });
      setTimeout(() => {
        scrollTo(section);
      }, 2200);
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

  const blogLink = 'https://blog.manishmandal.com';

  return (
    <nav className='h-20 ms:h-28 overflow-hidden ms:px-0 ms:pt-0   px-24 py-8 pt-10 absolute top-0 w-full z-10 bg-white dark:bg-primaryDarkBG transition-all duration-400'>
      <div className='ms:hidden h-full flex items-center justify-around relative'>
        <Image
          src={'/m-logo.svg'}
          className='cursor-pointer'
          width={50}
          height={50}
          alt='manish-mandal'
          priority
        />
        <div className='flex items-center justify-center overflow-hidden text-slate-600  dark:text-gray-300'>
          <p
            onClick={goToAboutMe}
            className='text-lg  hover:text-black dark:hover:text-slate-100  cursor-pointer'
          >
            AboutMe
          </p>
          <p
            onClick={goToProjects}
            className=' cursor-pointer ml-5 text-lg hover:text-black  dark:hover:text-slate-100 '
          >
            Projects
          </p>
          {/* <a
            href={blogLink}
            target='_blank'
            className=' cursor-pointer ml-5 text-lg appearance-none hover:text-black  dark:hover:text-slate-100'
          >
            Blog
          </a> */}
          <p
            onClick={goToContact}
            className=' cursor-pointer ml-5 text-lg hover:text-black dark:hover:text-slate-100  '
          >
            Contact
          </p>
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
          <Image src={'/m-logo.svg'} className='cursor-pointer' width={45} height={45} alt='manish-mandal' />
          <div className=' -mr-20'>
            <SocialLinks github />
          </div>
          <div className='mr-16'>
            <ThemeToggleSwitch />
          </div>
        </div>
        <div className='w-full flex items-center justify-center overflow-hidden text-slate-600 dark:text-white   -mb-2 mt-2'>
          <p onClick={goToAboutMe} className='text-lg   cursor-pointer'>
            AboutMe
          </p>
          <p onClick={goToProjects} className=' cursor-pointer ml-4 text-lg '>
            Projects
          </p>
          <a href={blogLink} target='_blank' className='appearance-none cursor-pointer ml-4 text-lg '>
            Blog
          </a>
          <p onClick={goToContact} className=' cursor-pointer ml-4 text-lg hover:text-black    '>
            Contact
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
