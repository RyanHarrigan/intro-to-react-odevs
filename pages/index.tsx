import type { NextPage } from 'next';
import { Logo, LogoAnimationProvider } from '../components/logo';
import { BasicComponent } from '../components/basic-component';
import { FullDemo } from '../components/full-demo';

const Home: NextPage = () => {
  return (
    <LogoAnimationProvider>
      <div className={'h-screen flex flex-col justify-center bg-violet-500'}>
        <Logo />
        <div className={'mx-auto w-full max-w-[40em]'}>
          <div className={'w-full'}>
            <div className={'rounded-lg bg-violet-700 border-violet-400 border-4 text-white p-4 w-full max-w-[80%] min-w-[20em] mx-auto p-4'}>
              <FullDemo />
              {/*<BasicComponent />*/}
            </div>
          </div>
        </div>
      </div>
    </LogoAnimationProvider>
  );
}

export default Home
