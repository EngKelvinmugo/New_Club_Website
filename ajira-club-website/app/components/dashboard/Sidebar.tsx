"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, LogOut, Home, User, BookOpen, Megaphone, Users, Briefcase, Globe, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    router.push("/") // Redirect to home
  }

  const menuItems = [
    { href: "/dashboard", icon: Home, label: "Home" },
    { href: "/dashboard/resources", icon: BookOpen, label: "Resources" },
    { href: "/dashboard/announcements", icon: Megaphone, label: "Announcements" },
    { href: "/dashboard/community", icon: Users, label: "Community" },
    { href: "/dashboard/partnerships", icon: Briefcase, label: "Partnerships" },
    { href: "/dashboard/bpo", icon: Globe, label: "BPO Services" },
    { href: "/dashboard/learning-hub", icon: GraduationCap, label: "Learning Hub" },
    { href: "/dashboard/profile", icon: User, label: "Profile" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        {isOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
      </button>

      {/* Sidebar Overlay (Mobile) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Sidebar Content */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-screen bg-white text-gray-900 shadow-xl transform",
          "transition-transform duration-300 ease-in-out",
          "lg:translate-x-0 lg:relative lg:w-64",
          "flex flex-col z-50",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <nav className="flex flex-col justify-between flex-1 h-full">
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold text-green-600 mb-8">Dashboard</h2>
            <ul className="space-y-2">
              {menuItems.map(({ href, icon: Icon, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-green-50 hover:text-green-600 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon
                      size={20}
                      className="text-gray-500 group-hover:text-green-600 transition-colors duration-300"
                    />
                    <span className="font-medium">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logout Button */}
          <div className="p-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-3 bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar

