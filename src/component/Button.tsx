import React from 'react';

type TButton = {
  title: string;
  color?: string;
};

export const Button = (props: TButton) => {
  const { title: text } = props;
  return (
    <button className='ui basic button'>
      <i className='icon user'></i>
      {text}
    </button>
  );
};
