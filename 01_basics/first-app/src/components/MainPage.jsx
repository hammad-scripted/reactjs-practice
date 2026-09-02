import React from 'react';

const MainPage = () => {
  const obj = {
    name: 'Ankit',
    age: 20,
    city: 'Delhi',
  };
  const users = [
    {
      name: 'Ankit',
      age: 20,
      city: 'Delhi',
    },
    {
      name: 'Ankit',
      age: 20,
      city: 'Delhi',
    },
    {
      name: 'Ankit',
      age: 20,
      city: 'Delhi',
    },
  ];
  const numbers = [1, 2, 3, 4, 5];
  return (
    <main>
      <div>
        <h1>My First React App</h1>
        <p>This is a paragraph</p>
        <p>{obj.name}</p>
        <p>{obj.age}</p>
        <p>{obj.city}</p>
        <ul>
          {' '}
          {numbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>

        <ul>
          {users.map((user, index) => {
            return <li key={index}>{user.name}</li>;
          })}
        </ul>
      </div>
    </main>
  );
};

export default MainPage;
