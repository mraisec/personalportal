'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function GmailPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Gmail Central</h1>
      
      <button 
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
      >
        <Plus className="h-5 w-5" />
        {showForm ? 'Hide Form' : 'Add Account'}
      </button>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Add Gmail Account</h3>
          <input 
            type="email" 
            placeholder="Enter Gmail address"
            className="w-full px-3 py-2 border rounded mb-4"
          />
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Add Account
            </button>
            <button 
              onClick={() => setShowForm(false)}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
