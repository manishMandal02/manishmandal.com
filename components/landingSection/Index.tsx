import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { MdInsertDriveFile, MdVideocam } from 'react-icons/md';

import { emailContainerVariant } from '../../src/animations/landingSection';

import { planeVariants } from '../../src/animations/landingSection';
import MainTitle from './MainTitle';
import MyEmail from './MyEmail';
import ScrollDown from './ScrollDown';
import Subtitle from './Subtitle';

import planeSvg from '../../public/plane.svg';
import Link from 'next/link';

const HeroSection = () => {
  // animation ref
  const planeControls = useAnimation();
  const titleControls = useAnimation();
  const subTitleControls = useAnimation();
  const scrollDownControls = useAnimation();
  // state

  // plane animation start
  const planeAnimationSequence = async () => {
    await planeControls.start('animate');
    planeControls.start('whileInView');
  };
  const titleAnimationSequence = async () => {
    await titleControls.start('animate');
    subTitleControls.start('animate');
    scrollDownControls.start('animate');
  };

  planeAnimationSequence();
  titleAnimationSequence();
  // title animation start

  return (
    <div className='flex w-screen -mt-12 ms:mt-12 h-screen ms: relative'>
      {/* Left container */}
      <div className='flex flex-col w-1/2 ms:w-full items-start justify-center py-12 ms:py-8 mt-12 ms:-mt-16 ml-48 ms:ml-4 relative overflow-visible'>
        <MainTitle controls={titleControls} />
        <Subtitle controls={subTitleControls} />
        {/* Email */}
        <motion.div
          className='ms:hidden flex items-end justify-start gap-x-4 w-[120%] -mt-2.5'
          variants={emailContainerVariant}
          initial='initial'
          animate='animate'
        >
          <MyEmail />
          <Link
            href={'/resume'}
            className='flex items-center justify-center text-slate-700/90 dark:text-slate-200/90 border-2 border-slate-500/90 dark:border-slate-300/90 px-4 h-12 rounded-md '
          >
            <MdInsertDriveFile className='mr-1.5 text-slate-gray-500 dark:text-gray-300' />
            My Resume
          </Link>

          <Link
            href={'/intro-video'}
            className='flex items-center justify-center text-slate-700/90 dark:text-slate-200/90 border-2 border-slate-500/90 dark:border-slate-300/90 px-4 h-12 rounded-md'
          >
            <MdVideocam className='mr-1.5 text-slate-gray-500 dark:text-gray-300' />
            Intro Video
          </Link>
        </motion.div>
        {/* Scroll Down */}
        <ScrollDown />
      </div>
      {/* Right container */}
      {/*  Above 850px */}
      <div className='ms:hidden flex w-1/2 items-center justify-center'>
        <motion.div variants={planeVariants} initial='initial' animate={planeControls}>
          <Image alt={'plane-animation'} src={planeSvg} className='w-full' />
        </motion.div>
      </div>
      {/* Below 850px */}
      <div className='hidden ms:flex w-full items-center justify-center absolute top-16'>
        <motion.div className='w-2/4' variants={planeVariants} initial='initial' animate={planeControls}>
          <Image alt={'plane-animation'} src={planeSvg} className='' />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
