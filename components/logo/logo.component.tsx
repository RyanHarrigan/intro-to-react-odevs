import React, {useEffect} from 'react';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div className={'mx-auto w-full max-w-[40em] text-center mb-8'}>
      <div className={'width-[300px] height-[300px] relative'}>
        <Image className={'object-contain drop-shadow-xl absolute z-0'} width={300} height={180} src={'/logo-500.png'} />
      </div>
    </div>
  )
}