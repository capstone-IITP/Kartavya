"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 min-h-screen py-16 flex items-center justify-center">
      <div className="animate-slide-up container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            NGO Connect Dashboard
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Select the appropriate dashboard based on your role
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center shadow-xl">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">NGO Dashboard</h2>
            <p className="text-white/70 mb-6">
              Manage your organization, track donations, and share impact stories
            </p>
            <Link href="/dashboard/ngo" className="block">
              <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                Access NGO Dashboard
              </Button>
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center shadow-xl">
            <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Donor Dashboard</h2>
            <p className="text-white/70 mb-6">
              Track your donations, see your impact, and explore NGOs to support
            </p>
            <Link href="/dashboard/donor" className="block">
              <Button size="lg" className="w-full bg-white text-indigo-600 hover:bg-indigo-50">
                Access Donor Dashboard
              </Button>
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center shadow-xl">
            <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Admin Dashboard</h2>
            <p className="text-white/70 mb-6">
              Verify NGOs, monitor platform activity, and generate reports
            </p>
            <Link href="/dashboard/admin" className="block">
              <Button size="lg" className="w-full bg-white text-purple-600 hover:bg-purple-50">
                Access Admin Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 