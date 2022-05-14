import React, { useContext } from 'react';
import Image from 'next/image';
import { LogoContext } from './logo.hook';

export const Logo = () => {
  const {isLogoAnimating} = useContext(LogoContext);

  return (
    <div className={'mx-auto w-full max-w-[40em] text-center mb-8 select-none'}>
      <div className={'w-[300px] h-[180px] mx-auto relative'}>
        <div className={'w-[300px] h-[180px] inline-block absolute left-0 top-[50%] -translate-y-[50%]'}>
          <Image className={'object-contain drop-shadow-xl absolute z-0'} alt={'Orlando Devs logo: an astronaut helmet with a terminal symbol inside'} draggable={'false'} width={300} height={180} src={'/logo-500.png'} />
        </div>
        <div className={`w-[300px] h-[180px] inline-block absolute left-0 top-[50%] -translate-y-[50%] ${isLogoAnimating ? 'visible' : 'hidden'}`}>
          <Image className={`object-contain drop-shadow-xl absolute z-1 ${isLogoAnimating ? 'animate-shock' : ''}`} alt={'lightning strikes when user input is submitted'} draggable={'false'} width={300} height={180} src={'/lightning-500.png'} />
        </div>
      </div>
    </div>
  )
};