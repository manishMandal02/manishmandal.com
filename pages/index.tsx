import Head from 'next/head';

// aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';

// components

import Navbar from '../components/UI/Navbar';
import HeroSection from '../components/landingSection/Index';
import MyProjects from '../components/myProjects/index';
import ContactMe from '../components/contactMe/Index';
import AboutMe from '../components/aboutMe/Index';
import Blog from '../components/blog';
import { useState } from 'react';
import { NextSeo } from 'next-seo';

export default function Home() {
  if (process.browser) {
    AOS.init();
  }

  return (
    <div className=' flex flex-col min-h-screen dark:bg-primaryDarkBG overflow-x-hidden transition-all duration-400 '>
      <Head>
        <title>Manish Mandal</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='theme-color' content='#3b82f6' />
        <meta
          name='keywords'
          content='A FullStack web developer, Experienced in using JavaScript and its ecosystem, namely React & NodeJs to develop web applications.'
        />
        <meta
          name='keywords'
          content='Manish, Mandal, Manish Mandal, portfolio, web developer, fullstack developer, bangalore, JavaScript, react, node'
        />
      </Head>
      <NextSeo
        title='Manish Mandal'
        titleTemplate='Manish Mandal'
        defaultTitle='Manish Mandal'
        description='A FullStack web developer, Experienced in using JavaScript and its ecosystem, namely React & NodeJs to develop web applications.'
        canonical='https://manishmandal.me'
        openGraph={{
          url: 'https://manishmandal.me',
          title: 'Manish Mandal',
          description:
            'A FullStack Web Developer,  Experienced in using JavaScript and its ecosystem, namely React & NodeJs to develop web applications.',
          images: [
            {
              url: 'https://manishmandal.me/manish-mandal-web.png',
              width: 1650,
              height: 850,
              alt: 'Manish Mandal',
            },
            // {
            //   url: '/manish-mandal-web.png',
            //   width: 800,
            //   height: 420,
            //   alt: 'Manish Mandal',
            // },
          ],
          site_name: 'Manish Mandal',
        }}
        twitter={{
          handle: '@onemandal',
          site: '@onemandal',
          cardType: 'summary_large_image',
        }}
      />
      ;
      <Navbar />
      <HeroSection />
      <AboutMe />
      <MyProjects />
      {/* <Blog /> */}
      <ContactMe />
    </div>
  );
}
