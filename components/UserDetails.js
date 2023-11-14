// components/UserDetails.js

import { useEffect, useState } from 'react';
import Modal from './Modal';

export default function UserDetails() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleUserClick = user => {
    setSelectedUser(user);
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-details">
      <input
        type="text"
        placeholder="Search by username"
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>ID</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id} onClick={() => handleUserClick(user)}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.id}</td>
              <td>{user.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {selectedUser && (
        <div className="modal">
          <h2>{selectedUser.username}</h2>
          <button onClick={() => setSelectedUser(null)}>Close</button>
        </div>
      )} */}
      {selectedUser && (
        <Modal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}
