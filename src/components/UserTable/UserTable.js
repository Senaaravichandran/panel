// src/components/UserTable/UserTable.js
import React, { useState } from 'react';
import './UserTable.css';
import UserRow from './UserRow';

function UserTable() {
  const initialUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Viewer', status: 'Active' },
  ];

  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleView = (id) => {
    alert(`Viewing user with ID: ${id}`);
    // In a real application, you might open a modal or navigate to a user detail page
  };

  const handleEdit = (id) => {
    alert(`Editing user with ID: ${id}`);
    // In a real application, you might open a modal or navigate to an edit page
  };

  return (
    <div className="user-table-container">
      <h2>User Management</h2>
      
      <div className="table-responsive">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <UserRow 
                key={user.id}
                user={user}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;