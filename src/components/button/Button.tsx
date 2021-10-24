import React from 'react';

type TButton = {
  title: string;
  onClick: () => void;
  buttonColor?: string;
};

export const Button = (props: TButton) => {
  const { title, onClick, buttonColor } = props;
  return (
    <button
      className={`ui ${buttonColor ? buttonColor : ''}  button`}
      onClick={onClick}
    >
      <i className='icon user'></i>
      {title}
    </button>
  );
};

export default Button;
