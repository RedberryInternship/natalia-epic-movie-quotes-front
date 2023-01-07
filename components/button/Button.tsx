import React from 'react';

const Button: React.FC<{ item: string; color: string; size?: string }> = (
  props
) => {
  return (
    <button
      className={
        props.size +
        (props.color === 'red'
          ? ' px-6 py-2 text-white rounded-md bg-[#E31221] md:block '
          : props.color === 'transparent'
          ? ' px-6 py-2 text-white rounded-md outline-1 outline-white outline -outline-offset-1'
          : '')
      }
    >
      {props.item}
    </button>
  );
};

export default Button;
