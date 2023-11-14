// pages/index.js

import { useEffect, useState } from 'react';
import UserDetails from '../components/UserDetails';
import AccountCreation from '../components/AccountCreation';

export default function Home() {
  const [activeTab, setActiveTab] = useState('UserDetails');

  const renderTab = () => {
    switch (activeTab) {
      case 'UserDetails':
        return <UserDetails />;
      case 'AccountCreation':
        return <AccountCreation />;
      default:
        return <UserDetails />;
    }
  };

  return (
    <div className="app">
      <div className="tab">
        <button onClick={() => setActiveTab('UserDetails')}>User Details</button>
        <button onClick={() => setActiveTab('AccountCreation')}>Account Creation</button>
      </div>
      <div className="tab-content">
        {renderTab()}
      </div>
    </div>
  );
}
