
import { FC } from 'react';
import { type Info } from '../types';

type UserInfoProps = {
  user: Info;
};
const UserInfo: FC<UserInfoProps> = ({ user }) => {
  console.log('UserInfo props:', user); // Log the props to the console for debugging
  return (
    <div>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserInfo;
