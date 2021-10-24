import React from 'react';

type TButton = {
  className?: string;
  title: string;
  onClick: () => void;
};

export const Button = (props: TButton) => {
  const { title, onClick, className } = props;
  return (
    <button className={className ? className : ''} onClick={onClick}>
      <i className='icon user'></i>
      {title}
    </button>
  );
};

export default Button;
