// Parent Component
import React from 'react';
import ChildComponent from './ChildComp';

const ParentComponent = () => {
  const name = 'John';
  const age = 30;

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent Txt1={name} Txt2={age} />
    </div>
  );
}

export default ParentComponent;

