import React from 'react'

export default function Header() {
  return (
    <div className='flex gap-6 p-4 items-center bg-pink-400'>
        <div className="space-y-2">
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
        </div>
        <div className=''>Parent Signup</div>
    </div>
  );
}
