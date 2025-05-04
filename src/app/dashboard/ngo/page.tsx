"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const NGODashboard = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'kyc' | 'donations' | 'impact'>('overview');

  // Mock data for the dashboard
  const mockData = {
    ngoName: "Sunrise Foundation",
    totalDonations: "₹1,45,000",
    donorsCount: 28,
    kycStatus: "Verified",
    impact: {
      beneficiaries: 450,
      campaigns: 3,
      events: 2
    },
    recentDonations: [
      { id: 1, donor: "Rahul Sharma", amount: "₹10,000", date: "2023-04-15", status: "Completed" },
      { id: 2, donor: "Priya Patel", amount: "₹5,000", date: "2023-04-10", status: "Completed" },
      { id: 3, donor: "Vikram Singh", amount: "₹15,000", date: "2023-04-05", status: "Completed" },
      { id: 4, donor: "Ananya Gupta", amount: "₹8,000", date: "2023-04-01", status: "Completed" },
    ],
    kycDocuments: {
      pan: { status: "Verified", date: "2023-01-15" },
      certificate12A: { status: "Verified", date: "2023-01-15" },
      certificate80G: { status: "Verified", date: "2023-01-15" },
      cancelledCheque: { status: "Verified", date: "2023-01-15" },
      fcra: { status: "Pending", date: "-" }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{mockData.ngoName}</h1>
          <p className="text-gray-500 mt-1">NGO Dashboard</p>
        </div>
        <div className="mt-4 md:mt-0 space-x-3">
          <Link href="/dashboard/profile">
            <Button variant="outline">Edit Profile</Button>
          </Link>
          <Link href="/dashboard/create-campaign">
            <Button>Create Campaign</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Total Donations</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">{mockData.totalDonations}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Donors</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">{mockData.donorsCount}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Beneficiaries</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">{mockData.impact.beneficiaries}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">KYC Status</div>
          <div className="mt-2">
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
              {mockData.kycStatus}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('kyc')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'kyc'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              KYC Documents
            </button>
            <button
              onClick={() => setActiveTab('donations')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'donations'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Donations
            </button>
            <button
              onClick={() => setActiveTab('impact')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'impact'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Impact Stories
            </button>
          </nav>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        {activeTab === 'overview' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">NGO Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Recent Donations</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Donor
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
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockData.recentDonations.map((donation) => (
                        <tr key={donation.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {donation.donor}
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
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/donations">
                    <Button variant="outline" className="text-sm">View All Donations</Button>
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Impact Summary</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">{mockData.impact.beneficiaries}</div>
                      <div className="text-sm text-gray-500 mt-1">Lives Impacted</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">{mockData.impact.campaigns}</div>
                      <div className="text-sm text-gray-500 mt-1">Active Campaigns</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">{mockData.impact.events}</div>
                      <div className="text-sm text-gray-500 mt-1">Events Conducted</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Quick Actions</h3>
                  <div className="space-y-2">
                    <Link href="/dashboard/post-impact-story" className="block">
                      <Button variant="outline" className="w-full justify-start">
                        <span>Post New Impact Story</span>
                      </Button>
                    </Link>
                    <Link href="/dashboard/fund-utilization" className="block">
                      <Button variant="outline" className="w-full justify-start">
                        <span>Upload Fund Utilization Report</span>
                      </Button>
                    </Link>
                    <Link href="/dashboard/update-profile" className="block">
                      <Button variant="outline" className="w-full justify-start">
                        <span>Update Organization Profile</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'kyc' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">KYC Documents</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">PAN Card</h3>
                    <p className="text-sm text-gray-500">Verified on {mockData.kycDocuments.pan.date}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    {mockData.kycDocuments.pan.status}
                  </span>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">12A Certificate</h3>
                    <p className="text-sm text-gray-500">Verified on {mockData.kycDocuments.certificate12A.date}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    {mockData.kycDocuments.certificate12A.status}
                  </span>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">80G Certificate</h3>
                    <p className="text-sm text-gray-500">Verified on {mockData.kycDocuments.certificate80G.date}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    {mockData.kycDocuments.certificate80G.status}
                  </span>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Cancelled Cheque</h3>
                    <p className="text-sm text-gray-500">Verified on {mockData.kycDocuments.cancelledCheque.date}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    {mockData.kycDocuments.cancelledCheque.status}
                  </span>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">FCRA Approval</h3>
                    <p className="text-sm text-gray-500">
                      {mockData.kycDocuments.fcra.date === "-" ? "Not uploaded yet" : `Verified on ${mockData.kycDocuments.fcra.date}`}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    {mockData.kycDocuments.fcra.status}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Link href="/dashboard/upload-kyc">
                <Button>Upload New Document</Button>
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'donations' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Donation History</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Donor
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
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockData.recentDonations.map((donation) => (
                    <tr key={donation.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {donation.donor}
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
                        <Button variant="outline" size="sm">Send Thank You</Button>
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
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Impact Stories</h2>
              <Link href="/dashboard/post-impact-story">
                <Button>Post New Story</Button>
              </Link>
            </div>
            <div className="space-y-6">
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Education for Rural Children</h3>
                <p className="text-gray-600 mb-4">
                  Thanks to our donors, we were able to provide educational materials to 150 children in remote villages.
                  This has significantly improved their learning outcomes.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Posted on April 10, 2023</span>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">Delete</Button>
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Clean Water Initiative</h3>
                <p className="text-gray-600 mb-4">
                  We successfully installed 5 water purification systems in communities that lacked access
                  to clean drinking water. These systems now serve over 300 families.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Posted on March 25, 2023</span>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">Delete</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NGODashboard; 