import React from 'react';

const Button = (props: {
  label: string;
  disabled: boolean;
  onClick: () => void;
}) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        disabled={props.disabled}
        style={{ backgroundColor: props.disabled ? 'gray' : 'blue' }}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
