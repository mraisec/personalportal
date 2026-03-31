'use client'

import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { FolderOpen, Mail, HardDrive, DollarSign, Music, Film, Home, CheckSquare, TrendingUp } from 'lucide-react'

const statsData = [
  { name: 'Projects', value: 8, icon: FolderOpen, color: '#3B82F6' },
  { name: 'Gmail Accounts', value: 3, icon: Mail, color: '#10B981' },
  { name: 'Drives', value: 5, icon: HardDrive, color: '#F59E0B' },
  { name: 'Transactions', value: 24, icon: DollarSign, color: '#EF4444' },
  { name: 'Music Tracks', value: 156, icon: Music, color: '#8B5CF6' },
  { name: 'Watchlist', value: 12, icon: Film, color: '#EC4899' },
  { name: 'Home Projects', value: 6, icon: Home, color: '#14B8A6' },
  { name: 'Habits', value: 9, icon: TrendingUp, color: '#F97316' },
]

const monthlyData = [
  { month: 'Jan', income: 4500, expenses: 3200 },
  { month: 'Feb', income: 5200, expenses: 3800 },
  { month: 'Mar', income: 4800, expenses: 2900 },
]

const habitData = [
  { name: 'Exercise', value: 85, fill: '#10B981' },
  { name: 'Reading', value: 70, fill: '#3B82F6' },
  { name: 'Meditation', value: 60, fill: '#8B5CF6' },
  { name: 'Coding', value: 90, fill: '#F59E0B' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to your personal management portal</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.name} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className="p-3 rounded-full" style={{ backgroundColor: `${stat.color}20` }}>
                  <Icon className="h-6 w-6" style={{ color: stat.color }} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Money Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Money Overview</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="income" fill="#10B981" />
              <Bar dataKey="expenses" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Habit Progress */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Habit Progress</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={habitData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {habitData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {habitData.map((habit) => (
              <div key={habit.name} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: habit.fill }} />
                <span className="text-sm text-gray-600">{habit.name}: {habit.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
            <div className="p-2 bg-blue-100 rounded-full">
              <FolderOpen className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">New project "Mobile App" created</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
            <div className="p-2 bg-green-100 rounded-full">
              <DollarSign className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Transaction recorded: $250 income</p>
              <p className="text-xs text-gray-500">5 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
            <div className="p-2 bg-purple-100 rounded-full">
              <CheckSquare className="h-4 w-4 text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Habit "Exercise" completed</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
