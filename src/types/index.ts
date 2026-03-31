export interface Project {
  id: string
  name: string
  description?: string
  status: string
  createdAt: Date
  updatedAt: Date
  userId: string
}

export interface GmailAccount {
  id: string
  email: string
  accessToken?: string
  refreshToken?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  userId: string
}

export interface Drive {
  id: string
  name: string
  type: string
  path: string
  size?: bigint
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  userId: string
}

export interface Transaction {
  id: string
  amount: number
  type: string
  category: string
  description?: string
  date: Date
  createdAt: Date
  updatedAt: Date
  userId: string
}

export interface Music {
  id: string
  title: string
  artist: string
  album?: string
  genre?: string
  isTop10: boolean
  month: string
  year: number
  playCount: number
  createdAt: Date
  updatedAt: Date
  userId: string
}

export interface WatchlistItem {
  id: string
  title: string
  type: string
  status: string
  rating?: number
  notes?: string
  createdAt: Date
  updatedAt: Date
  userId: string
}

export interface Habit {
  id: string
  name: string
  description?: string
  frequency: string
  targetCount?: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  userId: string
}

export interface HabitTracking {
  id: string
  habitId: string
  date: Date
  completed: boolean
  count?: number
  createdAt: Date
}

export interface HomeProject {
  id: string
  title: string
  description?: string
  status: string
  priority: string
  dueDate?: Date
  createdAt: Date
  updatedAt: Date
  userId: string
}

export interface HoneyDoItem {
  id: string
  title: string
  description?: string
  status: string
  priority: string
  dueDate?: Date
  createdAt: Date
  updatedAt: Date
  userId: string
}
