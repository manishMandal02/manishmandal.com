import { motion } from 'framer-motion';
import NewLine from '../UI/NewLine';
import SectionHeader from '../UI/SectionHeader';
import SocialLinks from '../UI/SocialLinks';
import Spacing from '../UI/Spacing';

const About = () => {
  const Spacing = <span className='mr-1'></span>;
  // const spaceMS = <span className='hidden ms:block mr-1'></span>;
  const newLine = (
    <span className='ms:hidden'>
      <br />
    </span>
  );

  return (
    <div className='ml-20 ms:w-full ms:-ml-1 ms:mt-14'>
      <SectionHeader header='About me' />
      <p
        className=' m-0 text-xl ms:text-lg relative font-medium text-slate-700 dark:text-gray-300 tracking-normal mt-8 ms:mt-3'
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-delay='100'
        data-aos-mirror='true'
      >
        🤵 Manish Mandal &nbsp; {Spacing} 📌 Bangalore, India{' '}
        {/* <span className='ms:hidden absolute -top-2 right-12 flex ml-2 '>
          <SocialLinks github />{' '}
        </span> */}
      </p>
      <h2
        className='text-base ms:text-sm font-medium text-slate-700 dark:text-gray-300 tracking-wide mt-5 ms:mt-3 '
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-mirror='true'
      >
        <span className='text-xl mr-1'>👉 </span> Self-taught fullstack developer and product builder creating{' '}
        <p className='ml-[30px]'> scalable, affordable and privacy-first solutions.</p>
        <NewLine />
      </h2>
      {/* divider */}
      <div
        className='w-1 h-[14rem] ms:h-56 bottom-0 ms:-bottom-0 absolute bg-gradient-to-b from-cyan-500 to-blue-400 '
        data-aos='fade-up'
        data-aos-duration='600'
        data-aos-delay='300'
        data-aos-mirror='true'
      ></div>
      <h3
        className='text-base leading-6  text-gray-700 dark:text-gray-300 pt-1.5 pb-3 px-2 mt-0 ml-3'
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-mirror='true'
      >
        Self-taught web developer Experienced in using{' '}
        <span className='bg-yellow-300 px-1 dark:text-gray-900 rounded-sm tracking-wide'> Js/Ts </span>{' '}
        {Spacing}
        {newLine}
        and its ecosystem, namely{' '}
        <span className='bg-cyan-300 px-1 dark:text-gray-900 rounded-sm'> React</span> &{' '}
        <span className='bg-green-300 px-1 dark:text-gray-900 rounded-sm'> NodeJs</span> to develop <br /> web
        applications. <br />
        <p className='mt-1.5'>
          I've spent a significant amount of time developing and {Spacing}
          {newLine}
          nurturing my skills and always looking for opportunities <br />
          to apply them.
        </p>
        <p className='mt-2 text-base'>
          PS: I've added several new skills in recent years, including
          <span className='mx-1 bg-cyan-400 px-1 py-px dark:text-gray-900 rounded-sm tracking-wide'>
            {' '}
            Golang
          </span>
          , <br />
          <span className='mx-1 bg-sky-400 px-1 py-px dark:text-gray-900 rounded-sm tracking-wide'>
            Python{' '}
          </span>
          ,{Spacing}
          <span className='mx-1 bg-yellow-500 px-1 py-px dark:text-gray-900 rounded-sm tracking-wide'>
            AWS Serverless{' '}
          </span>{' '}
          (Lambda, DynamoDB, SQS, etc.)
        </p>
      </h3>
    </div>
  );
};
export default About;
