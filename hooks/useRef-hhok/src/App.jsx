// import React from 'react';
// import { useRef } from 'react';
// const App = () => {
//   const countRef = useRef(0);
//   const handleIncrement = () => {
//     countRef.current += 1;
//     console.log('Count:', countRef.current);
//     console.log('CountRef:', countRef);
//   };
//   const handleDecrement = () => {
//     countRef.current -= 1;
//     console.log('Count:', countRef.current);
//     console.log('CountRef:', countRef);
//   };
//   return (
//     <div>
//       <h1>Ref Example</h1>

//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </div>
//   );
// };

// export default App;

import React from 'react';

const App = () => {
  const inputRef = React.useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>Ref Example</h1>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default App;
