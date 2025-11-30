import React from 'react'

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 md:max-w-sm max-w-xs max-w-xs mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8">
      <img src="https://via.placeholder.com/150" alt="User" className=" w-36 h-36 rounded-full sm:w-24 sm:h-24 mx-auto md:w-36 md:h-36"/>
      <h1 className=" text-sm md:text-xl sm:text-lg text-blue-800 my-4">John Doe</h1>
      <p className='text-gray-600 text-base'>Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile