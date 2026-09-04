// import React from 'react';
// import User from './components/User';

// const App = () => {
//   return (
//     <div>
//       <User name="Ankit" age={20}>
//         Hello, I am Ankit. I am a software developer with a passion for building
//         web applications. I have experience in React, TypeScript, and Node.js.
//         In my free time, I enjoy contributing to open-source projects and
//         learning new technologies.
//       </User>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import Button from './components/Button';

const App: React.FC = () => {
  // 1. Create a state variable initialized to false
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleClick = () => {
    // 2. Toggle state using the previous value
    setIsDisabled((prev) => !prev);
    alert('Button clicked!');
  };

  return (
    <div>
      <Button
        label="Click Me"
        disabled={isDisabled}
        onClick={handleClick}
      />
    </div>
  );
};

export default App;