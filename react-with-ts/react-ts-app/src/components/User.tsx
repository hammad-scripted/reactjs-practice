// import React from 'react';

// type UserShape = {
//   children: React.ReactNode;
//   name: string;
//   age: number;
// };
// const User = ({ children, name, age }: UserShape) => {
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//       <p>{children}</p>
//     </div>
//   );
// };

// export default User;

import React from 'react';
import { FC } from 'react';

type UserShape = {
  name: string;

  age: number;
  children: React.ReactNode;
};
const User: FC<UserShape> = ({ name, age, children }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>{children}</p>
    </div>
  );
};

export default User;
