import type { NextPage } from 'next';
import Image from 'next/image'
// import {BasicComponent} from '../components/basic-component';
import {FullDemo} from '../components/full-demo';
import {Logo} from '../components/logo';


const Home: NextPage = () => {
  return(
    <div className={'h-screen flex flex-col justify-center bg-violet-500'}>
      <Logo />
      <div className={'mx-auto w-full max-w-[40em]'}>
        <div className={'w-full'}>
          <div className={'rounded-lg bg-violet-700 text-white p-4 w-full max-w-[80%] min-w-[20em] mx-auto p-4'}>
            <FullDemo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
