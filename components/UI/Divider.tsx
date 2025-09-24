import React, { useMemo } from 'react';
import quotes from '../../src/assets/data/quotes.json';

interface Props {
  quoteNum: number;
  marginTop: number;
  marginTopMobile: number;
  marginBottom: number;
  marginBottomMobile: number;
}

const Divider: React.FC<Props> = ({
  quoteNum,
  marginTop,
  marginBottom,
  marginBottomMobile,
  marginTopMobile
}) => {
  const quote = useMemo(() => quotes[quoteNum - 1], [quoteNum]);
  return (
    <div
      className={`mt-${marginTop} ms:mt-${marginTopMobile} mb-${marginBottom} ms:mb-${marginBottomMobile} h-44  ms:h-28 flex flex-col items-center justify-center`}
    >
      <img
        src='/triangle.svg'
        className='w-52 absolute !opacity-30'
        data-aos='fade-down'
        data-aos-duration='450'
        data-aos-mirror='true'
      />
      <div
        className='flex flex-col items-center -mt-4'
        data-aos='zoom-in'
        data-aos-duration='450'
        data-aos-delay='200'
        data-aos-mirror='true'
      >
        <p className='text-2xl ms:text-xl tracking-wide text-center text-slate-800 dark:text-gray-300 dark:opacity-90 font-medium leading-tight ms:leading-6'>
          {quote?.quoteLine1}{' '}
          <span className='ms:hidden'>
            <br />
          </span>
          {quote?.quoteLine2}
        </p>
        <p className='text-base text-slate-700 dark:text-gray-300  font-medium '>
          <span className=' font-bold  font-mono text-slate-800 dark:text-gray-400  tracking-tighter mr-1'>
            —
          </span>
          {quote?.author}
        </p>
      </div>
    </div>
  );
};

export default Divider;
