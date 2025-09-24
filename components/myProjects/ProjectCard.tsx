import { motion } from 'framer-motion';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface Props {
  title: string;
  github?: string;
  link?: string;
  desc: string;
  tech: string[];
}

const ProjectCard: React.FC<Props> = ({ title, tech, github, link, desc }) => {
  return (
    <div
      className='w-80 h-44 ms:h-60 ms:w-full flex flex-col justify-between py-3 px-4 border-2 border-gray-600 shadow-sm rounded-md transition-all duration-200 overflow-hidden'
      data-aos='fade-up'
      data-aos-duration='650'
      // data-aos-delay='150'
      data-aos-mirror='true'
    >
      <p className='text-slate-700 dark:text-gray-300/95 text-center'>{title}</p>
      <p className='m-0 mt-0.5 text-sm text-slate-700 dark:text-gray-400/80 !font-extralight'>{desc}</p>
      <div className='w-full -ml-3 self-center flex flex-wrap dark:text-gray-500'>
        {tech.map((tech, i) => (
          <span key={tech + i} className='m-0 -mt-px leading-snug ml-2 text-[10px] ms:ml-1 opacity-90'>
            {i !== 0 && '• \u2009'} {tech}
          </span>
        ))}
      </div>
      <div className='flex justify-end items-center mt-2 text-slate-600 dark:text-gray-400/80 dark:opacity-90 overflow-hidden'>
        {github && (
          <a
            href={github && github}
            target='_blank'
            rel='noreferrer'
            className='scale-90 cursor-pointer mr-3 ms:mr-4 hover:text-slate-900 dark:hover:text-gray-400'
          >
            <FaGithub className='' />
          </a>
        )}
        {link && (
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className='scale-75 cursor-pointer mr-1 hover:text-slate-900 dark:hover:text-gray-400'
          >
            <FaExternalLinkAlt className='' />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
