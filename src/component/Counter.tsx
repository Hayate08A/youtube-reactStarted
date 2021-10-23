import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);
  const onCountUp = () => {
    setCount(count + 1);
  };
  const onCountDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>Count: {count}</p>
      <Button
        className={'ui primary button'}
        onClick={onCountUp}
        title='CountUp'
      />
      <Button
        className={'ui red button'}
        onClick={onCountDown}
        title='CountDown'
      ></Button>
    </>
  );
};

export default Counter;
