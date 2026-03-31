'use client'

import { useState } from 'react'

export default function TestPage() {
  const [showForm, setShowForm] = useState(false)
  const [count, setCount] = useState(0)

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Test Page</h1>
      
      <div className="space-y-2">
        <p>Count: {count}</p>
        <button 
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment Count
        </button>
      </div>

      <div className="space-y-2">
        <p>Form visible: {showForm ? 'Yes' : 'No'}</p>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Toggle Form
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-100 p-4 rounded">
          <p>Form is now visible!</p>
        </div>
      )}
    </div>
  )
}
