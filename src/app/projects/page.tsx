'use client'

import { useState } from 'react'
import { Plus, Edit, Trash2 } from 'lucide-react'

interface Project {
  id: string
  name: string
  description?: string
  status: string
  createdAt: Date
  updatedAt: Date
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'Personal Website',
      description: 'Build my personal portfolio website',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      name: 'Mobile App',
      description: 'Develop a mobile app for task management',
      status: 'planning',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  
  const [showAddForm, setShowAddForm] = useState(false)
  const [newProject, setNewProject] = useState({ name: '', description: '' })

  const addProject = () => {
    if (newProject.name.trim()) {
      const project: Project = {
        id: Date.now().toString(),
        name: newProject.name,
        description: newProject.description,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      setProjects([...projects, project])
      setNewProject({ name: '', description: '' })
      setShowAddForm(false)
    }
  }

  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Add Project</span>
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Add New Project</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Name
              </label>
              <input
                type="text"
                value={newProject.name}
                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Enter project description"
              />
            </div>
            <div className="flex space-x-3">
              <button
                onClick={addProject}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Add Project
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                {project.description && (
                  <p className="text-gray-600 mt-1">{project.description}</p>
                )}
                <div className="flex items-center space-x-4 mt-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-sm text-gray-500">
                    Created: {project.createdAt.toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Edit className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => deleteProject(project.id)}
                  className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects yet. Click "Add Project" to get started.</p>
        </div>
      )}
    </div>
  )
}
