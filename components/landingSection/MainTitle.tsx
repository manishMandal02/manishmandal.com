import React from 'react';
import { AnimationControls, motion } from 'framer-motion';
import {
  introNameVariant,
  introNameLineVariant,
  introTitleVariant,
} from '../../src/animations/landingSection';

interface Props {
  controls: AnimationControls;
}

const MainTitle: React.FC<Props> = ({ controls }) => {
  return (
    <>
      <motion.p
        className='m-0 flex items-center font-semibold text-primary text-xl dark:text-primary-dark tracking-wide'
        variants={introNameVariant}
        initial='initial'
        // animate='animate'
        animate={controls}
      >
        <motion.span
          className=' font-extrabold -mt-5 font-mono  tracking-tighter'
          variants={introNameLineVariant}
          initial='initial'
          // animate={controls}
          animate='animate'
        >
          ____
        </motion.span>{' '}
        &nbsp; Hello, I am Manish Mandal
      </motion.p>
      <motion.h1
        className='text-7xl ms:text-5xl font-extrabold text-slate-700 dark:text-slate-200 leading- tracking-wide'
        variants={introTitleVariant}
        initial='initial'
        animate='animate'
      >
        FullStack Web Developer <span className='-ml-3 ms:-ml-2 ms:text-base text-xl'>🟠🟢🟣</span>
      </motion.h1>
    </>
  );
};

export default MainTitle;
