// Child Component
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {props.Txt1}</p>
      <p>Age: {props.Txt2}</p>
    </div>
  );
}


export default ChildComponent;


// function Childcompoennt(Txt1, Txt2){
//   document.write(Txt1 + Txt2)
// }

// ChildComponent(2, 4)

// ChildComponent(5, 6)




