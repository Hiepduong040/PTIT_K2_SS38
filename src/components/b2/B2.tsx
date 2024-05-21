import React, { useMemo } from 'react';

interface User {
  id: number;
  name: string;
  age: number;
}

const UserList = () => {

  const users: User[] = [
    { id: 1, name: 'tien1', age: 17 },
    { id: 2, name: 'tien2', age: 22 },
    { id: 3, name: 'tien3', age: 19 },
    { id: 4, name: 'tien4', age: 16 },
    { id: 5, name: 'tien5', age: 23 }
  ];

  const filteredUsers = useMemo(() => {
    return users.filter(user => user.age > 18);
  }, [users]);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
