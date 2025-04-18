"use client"

import { useState,useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Download, Menu, X } from "lucide-react"
import { getAuth, onAuthStateChanged,User  } from 'firebase/auth';
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { app } from '../lib/firebase';
import { useRouter } from "next/navigation";
type NavItem = {
  title: string
  href: string
  children?: { title: string; href: string }[]
}


export function Navbar() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const auth = getAuth(app);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
  
      return () => unsubscribe();
    }, [auth]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  function handleDownload() {
    const link = document.createElement("a");
    link.href = "https://firebasestorage.googleapis.com/v0/b/edge-2060b/o/app-release.apk?alt=media&token=65e8b6c0-84c7-41a7-9021-9002ce012e96"; // Or dynamic URL
    link.download = "EduCops.apk"; // Optional: suggest file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <nav className="relative bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">EduCops</span>
            </Link>
          </div>
            
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            
            <ul className="flex space-x-1">
            <Button 
            onClick={handleDownload}
            className="bg-white text-blue-700 shadow-lg hover:shadow-primary/20 transition-all border border-blue-700 hover:bg-blue-700 hover:text-white">
  Download for Android <Download className="w-5 h-5" />
</Button>


              {user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-royalblue-700 bg-royalblue-100 rounded-full px-3 py-1">
                    {user.email}
                  </span>
                  <Button 
                    onClick={() => auth.signOut()} 
                    className="ml-2 shadow-lg hover:shadow-primary/20 transition-all"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Button  
                  onClick={() => router.push('/login')}
                  className="shadow-lg hover:shadow-primary/20 transition-all">
                    Login
                  </Button>
                  <Button onClick={() => router.push('/login')} className="ml-2 shadow-lg hover:shadow-primary/20 transition-all">
                    Sign Up
                  </Button>
                </>
              )}

            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavItemWithDropdown({ item }: { item: NavItem }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <li className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <button
        className={cn(
          "flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary",
          isHovered && "text-primary",
        )}
        aria-expanded={isHovered}
      >
        {item.title}
        <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isHovered && "rotate-180")} />
      </button>

      {/* Dropdown menu */}
      <div
        className={cn(
          "absolute left-0 z-10 mt-0 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
          isHovered ? "block" : "hidden",
        )}
      >
        <div className="py-1">
          {item.children?.map((child) => (
            <Link
              key={child.title}
              href={child.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {child.title}
            </Link>
          ))}
        </div>
      </div>
    </li>
  )
}

function MobileNavItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.title}
        <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="ml-4 space-y-1">
          {item.children?.map((child) => (
            <Link
              key={child.title}
              href={child.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-primary"
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

