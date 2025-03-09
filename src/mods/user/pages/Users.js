import React from 'react';
import UsersList from "../components/UsersList/UsersList";

const USERS = [
  { id: 'u1', name: 'Martin Enghoy', image: 'https://i.imgur.com/jtWM1xS.png', places: 3 }
]


const Users = () => {

  return <UsersList items={USERS} />
}

export default Users;
