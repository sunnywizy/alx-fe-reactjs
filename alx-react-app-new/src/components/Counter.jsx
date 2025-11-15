import React, { useState } from 'react';

// --- New Component: Counter (Implementing the Objective) ---
// This component manages its own single piece of data (the count) using useState.
function Counter() {
  // 1. Initialize State: 
  // [count, setCount] is array destructuring.
  // 'count' is the current value (starts at 0).
  // 'setCount' is the special function used to change 'count'.
  const [count, setCount] = useState(0);

  // Function to handle the Increment button click
  const handleIncrement = () => {
    // 2. Update State: Calls setCount with the new value (current count + 1).
    // This tells React to re-render the component with the new 'count'.
    setCount(count + 1);
  };

  // Function to handle the Decrement button click
  const handleDecrement = () => {
    // We can add a simple check to prevent the count from going below zero, 
    // although not required by the instructions, it's good practice.
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Function to handle the Reset button click
  const handleReset = () => {
    // 3. Update State: Calls setCount with the initial value (0).
    setCount(0);
  };

  return (
    <div style={{ 
      border: '2px solid #5E35B1', 
      padding: '25px', 
      margin: '20px 30px', 
      borderRadius: '10px', 
      backgroundColor: '#ede7f6', // Light purple background
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(94, 53, 177, 0.2)'
    }}>
      <h3 style={{ 
        fontSize: '20px', 
        color: '#5E35B1', 
        marginBottom: '15px' 
      }}>Interactive Counter</h3>
      
      {/* Display the current value of the state */}
      <p style={{ 
        fontSize: '48px', 
        fontWeight: 'bold', 
        color: '#4527a0', // Darker purple
        margin: '10px 0' 
      }}>{count}</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
        
        {/* Button 1: Increment */}
        <button 
          onClick={handleIncrement}
          style={buttonStyle('green')}
        >
          Increment
        </button>
        
        {/* Button 2: Decrement */}
        <button 
          onClick={handleDecrement}
          style={buttonStyle('red')}
        >
          Decrement
        </button>
        
        {/* Button 3: Reset */}
        <button 
          onClick={handleReset}
          style={buttonStyle('gray')}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

// Helper function for inline button styling
const buttonStyle = (color) => {
  let bgColor;
  let hoverBgColor;

  switch (color) {
    case 'green':
      bgColor = '#4CAF50'; // Green
      hoverBgColor = '#43A047';
      break;
    case 'red':
      bgColor = '#F44336'; // Red
      hoverBgColor = '#E53935';
      break;
    case 'gray':
    default:
      bgColor = '#9E9E9E'; // Gray
      hoverBgColor = '#757575';
      break;
  }

  return {
    backgroundColor: bgColor,
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'background-color 0.3s',
  };
};
