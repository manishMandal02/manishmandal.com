import React from 'react';
import Navbar from '../components/UI/Navbar';

// goggle document url
const DownloadUrl =
  'https://docs.google.com/document/d/1I51kge3Aze5XcKO0jwGpwdUZQPOShK3tnoVRK_xxCZ8/export?format=pdf';
const EmbedUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(DownloadUrl)}&embedded=true`;

//

const Resume = () => {
  return (
    <main className='w-screen h-screen pt-20 overflow-hidden bg-slate-200 dark:bg-primaryDarkBG'>
      <Navbar />
      <section className='!w-fit min-w-[830px] ms:min-w-full !h-full mx-auto flex items-center ms:hidden'>
        <iframe
          title='google-doc-resume'
          sandbox='allow-same-origin allow-scripts allow-popups allow-forms'
          className='w-full h-full'
          src={EmbedUrl}
        ></iframe>
      </section>
      <a
        href={DownloadUrl}
        download='Manish_Mandal_Resume.pdf'
        className={`fixed bottom-6 ms:bottom-[50%] left-12 ms:left-[18%] text-[12.5px] font-medium text-slate-700 dark:text-slate-800/95 px-7 ms:px-16 py-2 ms:py-3 rounded-md 
            border border-slate-700/90 bg-gray-100/95 shadow-sm shadow-slate-700 hover:scale-105 transition-transform duration-300`}
      >
        Download PDF
      </a>
    </main>
  );
};

export default Resume;
