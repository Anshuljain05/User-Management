// components/Modal.js

import { useState } from 'react';

const Modal = ({ user, onClose }) => {
  const [reportGenerated, setReportGenerated] = useState(false);

  const handleReportGeneration = () => {
    // Here you would normally generate a report for the user
    console.log(`Report generated for user: ${user.username}`);
    setReportGenerated(true);
  };

  return (
    <div className="modal">
      <h2>{user.username}</h2>
      {!reportGenerated ? (
        <button onClick={handleReportGeneration}>Generate Report</button>
        ) : (
        <div>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>ID: {user.id}</p>
          <p>Creation Date: {user.creationDate}</p>
          <p>Report generated!</p>
        </div>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
