import React, { useEffect, useState } from 'react'
import { User, fetchUsers } from '../../common/constants'
import classes from './task2.module.css'

const Task2 = () =>  {
    const[users, setUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        async function fetchUserData() {
            const data = await fetchUsers();
            setUsers(data);
        }
        fetchUserData();
    }, []);

    const filteredUsers = users.filter((user) => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
   <div className={classes.main}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name..."
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task2