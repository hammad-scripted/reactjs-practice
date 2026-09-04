import React from 'react';

type UserShape = {
  name: string;
  age: number;
};
const User = ({ name, age }: UserShape) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default User;
