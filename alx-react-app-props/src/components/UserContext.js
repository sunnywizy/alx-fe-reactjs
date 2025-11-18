import React, { useState, createContext, useContext } from 'react';

// ==========================================================
// 1. CONTEXT DEFINITION (The Global Broadcast Channel)
// ==========================================================

// We create and export the UserContext. This object holds the data
// that we want to share throughout the application without prop drilling.
const UserContext = createContext(null); 


// ==========================================================
// 2. CHILD COMPONENT (The Consumer)
// ==========================================================

// UserDetails now consumes the context directly.
function UserDetails() {
  // Use the useContext hook to "tune in" to the UserContext.
  // This automatically pulls the value provided by the nearest UserContext.Provider above it.
  const userData = useContext(UserContext); 

  // Guard clause in case userData is null (e.g., if the component is used outside the Provider)
  if (!userData) {
    return <p style={{ color: 'red', textAlign: 'center' }}>User data is not available.</p>;
  }

  return (
    <div style={{ padding: '15px', border: '1px dashed lightgray', backgroundColor: '#e8f5e9' }}>
      <h4 style={{ color: '#00796b', marginBottom: '10px' }}>User Details (Consumed Context)</h4>
      {/* Access the data directly */}
      <p style={{ margin: '5px 0' }}><strong>Name:</strong> {userData.name}</p>
      <p style={{ margin: '5px 0' }}><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

// ==========================================================
// 3. INTERMEDIATE COMPONENTS (The components that skip props)
// ==========================================================

// ProfilePage is an intermediate component. It does NOT need the userData prop anymore.
function UserInfo() {
  // It simply renders its child (UserDetails) without touching the data.
  return (
    <div style={{ margin: '15px', padding: '10px', border: '1px solid #c8e6c9', backgroundColor: '#f9fbe7' }}>
      <h3 style={{ color: '#388e3c', marginBottom: '15px' }}>User Info (Intermediate Level 2)</h3>
      <UserDetails />
    </div>
  );
}

// UserInfo is an intermediate component. It does NOT need the userData prop anymore.
function ProfilePage() {
  // It simply renders its child (UserInfo) without touching the data.
  return (
    <div style={{ border: '2px solid #a5d6a7', padding: '15px', backgroundColor: '#f1f8e9' }}>
      <h2 style={{ color: '#2e7d32' }}>User Profile Page (Intermediate Level 1)</h2>
      <UserInfo />
    </div>
  );
}

