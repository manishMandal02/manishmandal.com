import React from 'react';
import Navbar from '../components/UI/Navbar';

const IntroVideo = () => {
  return (
    <main className='w-screen h-screen flex pt-20 overflow-hidden bg-slate-200 dark:bg-primaryDarkBG'>
      <Navbar />
      <section className='relative !w-full !h-full flex items-center justify-center'>
        <div className='relative w-[950px] h-[600px] flex items-center'>
          <iframe
            src='https://www.loom.com/embed/cdca2f74fedc4a119df8219a8c86cd8c?sid=282a5747-4e04-4028-98b7-dea3e0ec55ec&hideEmbedTopBar=true&hide_title=true&hide_owner=true&hide_speed=true'
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default IntroVideo;
