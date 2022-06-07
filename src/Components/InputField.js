import React from 'react';
const InputField = (props) => {
  const { labelText, ...restProps } = props;
  return (
    <>
      <label htmlFor={props.id}>{labelText}</label>
      <input {...restProps} />
    </>
  );
};

export default InputField;
