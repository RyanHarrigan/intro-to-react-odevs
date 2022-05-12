import React, {useState, useCallback, useMemo, useEffect} from 'react';
import _ from 'lodash';

export const FullDemo = () => {
  const [name, setName] = useState('');
  const [inputValue, changeInputValue] = useState('');

  const handleChangeInput = useCallback((e) => {
    changeInputValue(e?.target?.value ?? '')
  }, [changeInputValue]);

  const changeHeading = useCallback((e) => {
    e?.preventDefault();
    setName(inputValue);
  }, [inputValue, setName]);

  // const calculatedNum = useMemo(() => {
  //   return _.reduce(_.range(10, 1), (result, value) => {
  //     return result * value;
  //   }, 1)
  // }, []);

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
            className={'text-lg text-black p-3 w-full rounded-lg'} />
        </div>
        <div className={'flex-initial '} >
          <button
            type={'submit'}
            onClick={changeHeading}
            onSubmit={changeHeading}
            className={'text-lg text-black rounded-lg p-2 h-full bg-sky-300'}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
};