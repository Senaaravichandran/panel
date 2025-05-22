// src/components/UserTable/UserRow.js
import React from 'react';

function UserRow({ user, onView, onEdit, onDelete }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <span className={`status-badge ${user.status.toLowerCase()}`}>
          {user.status}
        </span>
      </td>
      <td className="actions">
        <button 
          className="view-btn"
          onClick={() => onView(user.id)}
        >
          View
        </button>
        <button 
          className="edit-btn"
          onClick={() => onEdit(user.id)}
        >
          Edit
        </button>
        <button 
          className="delete-btn"
          onClick={() => onDelete(user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default UserRow;