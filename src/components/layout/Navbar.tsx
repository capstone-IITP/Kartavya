"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">NGO Connect</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-gray-600"
            }`}
          >
            Home
          </Link>
          <Link 
            href="/ngos" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/ngos" ? "text-primary" : "text-gray-600"
            }`}
          >
            NGOs
          </Link>
          <Link 
            href="/about" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/about" ? "text-primary" : "text-gray-600"
            }`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/contact" ? "text-primary" : "text-gray-600"
            }`}
          >
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="outline" size="sm">Log in</Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Register</Button>
          </Link>
        </div>
      </div>
    </header>
  );
} 