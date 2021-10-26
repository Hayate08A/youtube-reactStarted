import { useState } from 'react';
import Button from '../button/Button';

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
      <Button buttonColor={'primary'} onClick={onCountUp} title='CountUp' />
      <Button
        buttonColor={'red'}
        onClick={onCountDown}
        title='CountDown'
      ></Button>
    </>
  );
};

export default Counter;
