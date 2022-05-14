import React, { useState, useCallback, useMemo, useEffect, useContext } from 'react';
import _ from 'lodash';
import { LogoContext } from '../logo';

export const FullDemo = () => {

  // useState (https://reactjs.org/docs/hooks-reference.html#usestate)
  const [name, setName] = useState('');
  const [inputValue, changeInputValue] = useState('');

  // useContext (https://reactjs.org/docs/hooks-reference.html#usecontext)
  const {animateLogoCallback} = useContext(LogoContext);

  // useCallback (https://reactjs.org/docs/hooks-reference.html#usecallback)
  const handleChangeInput = useCallback(
    (e) => {
      changeInputValue(e?.target?.value ?? '')
    }
    , [changeInputValue]);
  const changeHeading = useCallback((e) => {
    e?.preventDefault();
    setName(inputValue);

    if (_.isFunction(animateLogoCallback)) {
      animateLogoCallback();
    }
  }, [inputValue, setName, animateLogoCallback]);

  // useMemo (https://reactjs.org/docs/hooks-reference.html#usememo)
  const calculatedNum = useMemo(() => {
    // some compute-intense thing
    return _.reduce(_.range(name?.length, 1), (result, value) => {
      return result * value;
    }, 1);
  }, [name]);

  // useEffect (https://reactjs.org/docs/hooks-reference.html#useeffect)
  // this popup can get annoying
  // useEffect(() => {
  //   setTimeout(() => {
  //     alert('side effect')
  //   }, 3000);
  // }, []);

  return (
    <div>
      <h1 className={'text-center text-4xl'}>Hello {name}</h1>
      <form className={'flex justify-center content-center mt-8'}>
        <div className={'flex-auto mr-4'} >
          <input
            onInput={handleChangeInput}
            placeholder={'Type anything'}
            className={'text-lg text-black p-3 w-full rounded-lg border-black border-4'} />
        </div>
        <div className={'flex-initial '} >
          <button
            type={'submit'}
            onClick={changeHeading}
            className={'text-lg text-black rounded-lg border-black border-4 p-2 h-full bg-sky-300'}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};