import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdminUserAddresses = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/user-addresses');
        setUsers(response.data.data); // assuming response is in `data.data` format
      } catch (err) {
        setError('Error loading user data');
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (userId) => {
    // Logic to handle editing a user
    alert(`Edit user with ID: ${userId}`);
  };

  const handleDelete = (userId) => {
    // Logic to handle deleting a user
    setUsers(users.filter(user => user.id !== userId));
    alert(`Deleted user with ID: ${userId}`);
  };

  return (
    <div className="container mx-auto p-5">
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">ID Card No</th>
            <th className="border p-2">Phone No</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Home ID</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.ID_card_No || 'N/A'}</td>
              <td className="border p-2">{user.Phone_No || 'N/A'}</td>
              <td className="border p-2">{user.Email || 'N/A'}</td>
              <td className="border p-2">{user.Home_ID || 'N/A'}</td>
              <td className="border p-2">{user.Address || 'N/A'}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(user.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserAddresses;
