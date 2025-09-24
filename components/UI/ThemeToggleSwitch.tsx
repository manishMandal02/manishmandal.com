import React, { useEffect, useState } from 'react';

const ThemeToggleSwitch = () => {
  const [isDark, setIsDark] = useState<boolean>(true);

  //  check if theme was set previously
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setIsDark(true);
    }
  }, []);

  //   toggle theme

  const toggleTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    toggleTheme(isDark);
  }, [isDark]);

  return (
    <div
      className='relative top-0 -right-16 w-16 ms:w-14 h-8 ms:h-7 cursor-pointer'
      onClick={() => setIsDark(prev => !prev)}
    >
      <div
        className={` w-full  h-full rounded-full transition-all duration-500 cursor-pointer bg-cover ${
          isDark ? 'bg-left' : 'bg-center'
        }`}
        style={{
          backgroundImage: `url("https://res.cloudinary.com/mandal/image/upload/v1644491008/portfolio/${
            isDark ? 'dark' : 'light'
          }-mode.webp")`
        }}
      ></div>
      <div
        className={`absolute top-0   ${
          isDark ? 'translate-x-full' : 'translate-x-0'
        }   w-8 ms:w-7 h-8 ms:h-7 ${
          isDark ? 'bg-gray-200' : 'bg-yellow-300'
        } rounded-full  z-10 transition-all duration-500`}
      ></div>
    </div>
  );
};

export default ThemeToggleSwitch;
