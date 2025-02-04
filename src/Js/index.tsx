import React, { type FC } from 'react';

const Js: FC<{ title: string }> = (props) => {
  return (
    <>
      <h4
        onClick={() => {
          alert(11);
        }}
      >
        {props.title}
      </h4>
    </>
  );
};

export default Js;
