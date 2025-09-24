import React from 'react';
import Navbar from '../components/UI/Navbar';

// doc id for resume document
const GoogleDocId = '2PACX-1vT_74nD2pS-L7LpbBmi1MmkIPxpP1L4bBS7w_8tcw73fe3uap4LA2RAcC65KzaCmNIrvS5iMk7YtGDf';
const EmbedUrl = `https://docs.google.com/document/d/e/${GoogleDocId}/pub?embedded=true`;
const DownloadUrl =
  'https://docs.google.com/document/d/1gMKly6j05T0D2seFMFGHYD0IpCm04QrJofeJ01pAbs4/export?format=pdf';

const Resume = () => {
  return (
    <main className='w-screen h-screen pt-10 overflow-hidden bg-slate-200 dark:bg-primaryDarkBG'>
      <Navbar />
      <section className='!w-full !h-full pl-72 flex items-center'>
        <iframe className='w-full h-full' src={EmbedUrl}></iframe>
      </section>
      <a
        href={DownloadUrl}
        download='Manish_Mandal_Resume.pdf'
        className={`fixed bottom-6 left-12 text-[12.5px] font-medium text-slate-700 dark:text-slate-800/95 px-7 py-2 rounded-md 
            border border-slate-700/90 bg-gray-100/95 shadow-sm shadow-slate-700 hover:scale-105 transition-transform duration-300`}
      >
        Download PDF
      </a>
    </main>
  );
};

export default Resume;
