// --- New Component: UserProfile (Implementing the Objective) ---
// This component receives data (name, age, bio) via props and displays it.
function UserProfile(props) {
  // In React, all the custom attributes (like name="Alice") that are passed
  // to this component are collected into one object called 'props'.

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      {/* Access the data using props.propertyName */}
      <h2 style={{ color: 'blue' }}>{props.name}</h2>
      
      <p>
        <span style={{ fontWeight: 'bold' }}>Age:</span> {props.age}
      </p>
      
      <p>
        <span>Bio:</span> {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;