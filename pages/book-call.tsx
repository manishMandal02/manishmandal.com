import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

import Navbar from '../components/UI/Navbar';

// TODO: fix - unnecessary scrollbar (disabled) when in mobile view

const BookCall = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    })();
  }, []);

  return (
    <main className='min-h-screen w-full bg-slate-200 dark:bg-primaryDarkBG'>
      <Navbar />

      <section className='w-full px-2 md:px-8 pt-24 pb-4'>
        <div className='max-w-6xl mx-auto'>
          <Cal
            namespace='30min'
            calLink='manish-mandal/30min'
            style={{
              width: '100%',
              height: '100%',
              minHeight: '700px' // Ensure minimum height
            }}
            config={{
              layout: 'month_view',
              // Mobile responsive config
              theme: 'auto'
            }}
          />
        </div>
      </section>
    </main>
  );
};

export default BookCall;
