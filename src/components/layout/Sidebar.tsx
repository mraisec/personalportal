'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { 
  FolderOpen, 
  Mail, 
  HardDrive, 
  DollarSign, 
  Music, 
  Film, 
  Home, 
  CheckSquare, 
  TrendingUp,
  LayoutDashboard
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Gmail', href: '/gmail', icon: Mail },
  { name: 'Drives', href: '/drives', icon: HardDrive },
  { name: 'Money', href: '/money', icon: DollarSign },
  { name: 'Music', href: '/music', icon: Music },
  { name: 'Watchlist', href: '/watchlist', icon: Film },
  { name: 'Home Projects', href: '/home-projects', icon: Home },
  { name: 'Honey-Do', href: '/honey-do', icon: CheckSquare },
  { name: 'Habits', href: '/habits', icon: TrendingUp },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Personal Portal</h1>
      </div>
      
      <nav className="space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors',
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
