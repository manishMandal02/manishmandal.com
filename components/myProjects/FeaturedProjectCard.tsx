import Image from 'next/image';
import React from 'react';

import { FaGithub, FaExternalLinkAlt, FaChrome } from 'react-icons/fa';

interface Props {
  image: string;
  title: string;
  subTitle: string;
  github?: string;
  chrome?: string;
  link: string;
  tags: string[];
  tech: string[];
  isFlipped?: boolean;
}

const FeaturedProjectCard: React.FC<Props> = ({
  title,
  subTitle,
  github,
  chrome,
  link,
  tags,
  tech,
  isFlipped,
  image
}) => {
  return (
    <div
      className={`h-72 ms:h-full w-100 ms:w-full flex ${
        isFlipped ? 'flex-row-reverse' : ''
      } ms:flex-col mt-20 ms:mt-12 ${isFlipped ? '-ml-16' : '-mr-16'} ms:ml-0 ms:mr-0 ms:px-2`}
      data-aos={isFlipped ? 'fade-left' : 'fade-right'}
      data-aos-duration='500'
      data-aos-delay='100'
      data-aos-mirror='true'
      data-aos-anchor-placement='top-bottom'
    >
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className='w-3/6 max-w-3/6  ms:w-full bg-emerald-300 dark:bg-primaryDarkBG rounded-lg  group'
      >
        <Image
          src={image}
          alt={title}
          width={520}
          height={295}
          className='w-full group-hover:opacity-90 dark:opacity-90  dark:group-hover:opacity-80 transition-all duration-200'
        />
      </a>
      <div
        className={`w-1/2 ms:w-full flex  ${
          isFlipped ? 'items-start' : 'items-end'
        } justify-center flex-col pr-4 ${
          isFlipped ? '-mr-12' : '-ml-12'
        } ms:items-start ms:mr-0 ms:ml-0 ms:mt-2 ms:px-3 ms:relative`}
      >
        <p className='text-slate-700 dark:text-gray-200/90 font- text-[1.3rem] tracking-wide max-w-[90%] leading-[1.7rem]'>
          {title}
        </p>
        <p className='text-gray-600 dark:text-gray-400 !font-light text-sm ms:text-base mt-1 max-w-[95%]'>
          {subTitle}
        </p>
        {/* tags */}
        <div className='w-full flex-wrap mt-4 ms:mt-2 gap-3 flex items-center justify-center z-10 bg-slate-600 dark:bg-slate-800/95 text-gray-50 dark:text-gray-400/90 py-4 ms:py-3 px-2 ms:px-0 pl-0 rounded-md ms:my-0 shadow-sm '>
          {tags.map((tag, i) => (
            <span
              key={tag + i}
              className='border shadow-lg border-slate-200 dark:border-slate-700/90 border-opacity-70 py-1 px-3 ms:px-2 rounded-full text-[11px]'
            >
              {tag}
            </span>
          ))}
        </div>
        {/* tech */}
        <div className='w-full flex items-center justify-center gap-x-2.5 gap-y-1 text-slate-600 dark:text-gray-400/70 flex-wrap mt-4 ms:mt-2 mb-4 ms:mb-2 max-w-[92%]'>
          {tech.map((tech, i) => (
            <span key={tech + i} className='font-medium text-xs'>
              {i !== 0 && '• \u2009'}
              {tech}
            </span>
          ))}
        </div>
        <div className='flex gap-x-4 w-fit ms:self-center item-center justify-between text-slate-600 dark:text-gray-400'>
          {github && (
            <a
              href={github}
              target='_blank'
              rel='noreferrer'
              className='group ms:text-xl cursor-pointer hover:text-slate-900 dark:hover:text-gray-400'
            >
              <FaGithub className='group-hover:scale-110 transition-all duration-300 ' />
            </a>
          )}
          {chrome && (
            <a
              href={chrome}
              target='_blank'
              rel='noreferrer'
              className='group ms:text-2xl cursor-pointer hover:text-slate-900 dark:hover:text-gray-400'
            >
              <FaChrome className='group-hover:scale-110 transition-all duration-300 ' />
            </a>
          )}

          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className='group cursor-pointer hover:text-slate-900 dark:hover:text-gray-400 ms:mt-px'
          >
            <FaExternalLinkAlt className='group-hover:scale-110 transition-all duration-300' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
