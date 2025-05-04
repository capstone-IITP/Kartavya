"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const DonorDashboard = () => {
  const [activeTab, setActiveTab] = useState<'donations' | 'impact' | 'favorites'>('donations');

  // Mock data for the dashboard
  const mockData = {
    donorName: "Rahul Sharma",
    totalDonations: "₹45,000",
    donationCount: 8,
    impactPoints: 245,
    badges: [
      { name: "First Donation", description: "Made your first donation" },
      { name: "Regular Donor", description: "Donated for 3 consecutive months" },
      { name: "Education Champion", description: "Supported 5+ education projects" },
    ],
    donationHistory: [
      { id: 1, ngo: "Sunrise Foundation", cause: "Education", amount: "₹10,000", date: "2023-04-15", status: "Completed", receipt: "RCPT001" },
      { id: 2, ngo: "Green Earth", cause: "Environment", amount: "₹5,000", date: "2023-03-20", status: "Completed", receipt: "RCPT002" },
      { id: 3, ngo: "HealthCare For All", cause: "Healthcare", amount: "₹15,000", date: "2023-02-10", status: "Completed", receipt: "RCPT003" },
      { id: 4, ngo: "Children First", cause: "Children", amount: "₹8,000", date: "2023-01-05", status: "Completed", receipt: "RCPT004" },
    ],
    favoriteNGOs: [
      { id: 1, name: "Sunrise Foundation", category: "Education", lastDonation: "April 15, 2023" },
      { id: 2, name: "Green Earth", category: "Environment", lastDonation: "March 20, 2023" },
      { id: 3, name: "HealthCare For All", category: "Healthcare", lastDonation: "February 10, 2023" },
    ],
    impact: [
      { 
        id: 1, 
        ngo: "Sunrise Foundation",
        project: "Education for Rural Children", 
        description: "Your donation helped provide educational materials to 15 children in remote villages.",
        date: "April 20, 2023"
      },
      { 
        id: 2, 
        ngo: "Green Earth",
        project: "Tree Plantation Drive", 
        description: "Your contribution helped plant 25 trees in urban areas to combat pollution.",
        date: "March 25, 2023"
      },
      { 
        id: 3, 
        ngo: "HealthCare For All",
        project: "Medical Camp", 
        description: "Your support enabled free health checkups for 50 underprivileged individuals.",
        date: "February 15, 2023"
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {mockData.donorName}</h1>
          <p className="text-gray-500 mt-1">Donor Dashboard</p>
        </div>
        <div className="mt-4 md:mt-0 space-x-3">
          <Link href="/ngos">
            <Button>Donate Now</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Total Donations</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">{mockData.totalDonations}</div>
          <div className="text-sm text-gray-500 mt-1">Across {mockData.donationCount} donations</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Impact Points</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">{mockData.impactPoints}</div>
          <div className="text-sm text-gray-500 mt-1">Keep donating to earn more</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Badges Earned</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">{mockData.badges.length}</div>
          <div className="text-sm text-gray-500 mt-1">View all badges</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('donations')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'donations'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              My Donations
            </button>
            <button
              onClick={() => setActiveTab('impact')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'impact'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              My Impact
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'favorites'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Favorite NGOs
            </button>
          </nav>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        {activeTab === 'donations' && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Donation History</h2>
              <Link href="/dashboard/tax-certificates">
                <Button variant="outline" size="sm">Download Tax Certificates</Button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      NGO
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cause
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Receipt
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockData.donationHistory.map((donation) => (
                    <tr key={donation.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {donation.ngo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {donation.cause}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {donation.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {donation.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          {donation.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <Button variant="outline" size="sm">Download</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Impact</h2>
            <div className="space-y-6">
              {mockData.impact.map((item) => (
                <div key={item.id} className="border rounded-lg p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                      {item.ngo}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.project}</h3>
                  <p className="text-gray-600 mt-2 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Updated on {item.date}</span>
                    <Link href={`/ngos/${item.ngo}`}>
                      <Button variant="outline" size="sm">View NGO</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Continue supporting causes that matter to create more impact.</p>
              <Link href="/ngos">
                <Button>Donate Again</Button>
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'favorites' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Favorite NGOs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockData.favoriteNGOs.map((ngo) => (
                <div key={ngo.id} className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{ngo.name}</h3>
                  <div className="text-sm text-gray-500 mt-1 mb-3">Category: {ngo.category}</div>
                  <p className="text-sm text-gray-600 mb-4">Last donated on {ngo.lastDonation}</p>
                  <div className="flex space-x-3">
                    <Link href={`/ngos/${ngo.id}`}>
                      <Button variant="outline" size="sm">View Profile</Button>
                    </Link>
                    <Link href={`/donate/${ngo.id}`}>
                      <Button size="sm">Donate</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Discover more NGOs working on causes you care about.</p>
              <Link href="/ngos">
                <Button variant="outline">Explore More NGOs</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Badges & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockData.badges.map((badge, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <span className="text-primary text-lg">🏆</span>
                </div>
                <h3 className="font-medium text-gray-900">{badge.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/dashboard/badges">
            <Button variant="outline" size="sm">View All Achievements</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard; 