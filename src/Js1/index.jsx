import React from 'react';

const Js1 = (props) => {
  return (
    <>
      <h4
        onClick={() => {
          alert(222);
        }}
      >
        {props.title}
      </h4>
    </>
  );
};

export default Js1;
