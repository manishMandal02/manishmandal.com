import React from 'react';
import FeaturedProjectCard from './FeaturedProjectCard';
import { nanoid } from 'nanoid';
import featuredProjectsData from '../../src/assets/data/featuredProject.json';

import Divider from '../UI/Divider';
import SectionHeader from '../UI/SectionHeader';
import SectionSubHeader from '../UI/SectionSubHeader';
import Projects from './Projects';

// TODO -  update projects, add new ones

const MyProjects = () => {
  return (
    <div className='overflow-hidden w-full mb-6'>
      <Divider quoteNum={2} marginTop={24} marginBottom={20} marginTopMobile={20} marginBottomMobile={28} />
      <div className='mt-24 ms:mt-14 flex flex-col '>
        <div className='ml-18 ms:ml-3' id='projects'>
          <SectionHeader header='Projects' />
          <SectionSubHeader title="Some Things I've Built" />
        </div>
        <div className='-mt-2 ms:-mt-4 flex flex-col w-full items-center justify-center'>
          {featuredProjectsData.map((data, i) => (
            <div key={nanoid()}>
              <FeaturedProjectCard isFlipped={i % 2 === 0} {...data} />
            </div>
          ))}
          <div className='mt-20 ms:mt-10 w-full flex flex-col items-center justify-center'>
            <div className='relative'>
              <p
                className='text-xl text-slate-600 dark:text-gray-300/90 mb-6 ms:mb-2'
                data-aos='zoom-in-up'
                data-aos-duration='500'
                data-aos-mirror='true'
              >
                Other Projects
              </p>
            </div>
            {/*  */}
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
