import React from 'react';
import Navbar from '../components/UI/Navbar';

const loomVideoLink =
  'https://www.loom.com/embed/e76631520b9a45adb1a2f912a6dc4fc1?sid=de3f9197-71a2-4094-9fa2-53913498028d&hideEmbedTopBar=true&hide_title=true&hide_owner=true&hide_speed=true';

const IntroVideo = () => {
  return (
    <main className='w-screen h-screen flex pt-20 overflow-hidden bg-slate-200 dark:bg-primaryDarkBG'>
      <Navbar />
      <section className='relative !w-full !h-full flex items-center justify-center'>
        <div className='relative w-[950px] h-[600px] flex items-center'>
          <iframe
            title='intro-video'
            src={loomVideoLink}
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
