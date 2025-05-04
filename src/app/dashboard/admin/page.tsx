"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'ngos' | 'donations' | 'reports'>('overview');

  // Mock data for the dashboard
  const mockData = {
    totalNGOs: 450,
    pendingApprovals: 12,
    totalDonations: "₹1.2Cr",
    totalDonors: "25K+",
    recentNGOApplications: [
      { id: 1, name: "Hope Foundation", category: "Children", status: "Pending", date: "2023-04-20" },
      { id: 2, name: "Clean Water Initiative", category: "Environment", status: "Pending", date: "2023-04-19" },
      { id: 3, name: "Digital Literacy", category: "Education", status: "Pending", date: "2023-04-18" },
      { id: 4, name: "Rural Healthcare", category: "Healthcare", status: "Pending", date: "2023-04-17" },
    ],
    recentDonations: [
      { id: 1, donor: "Rahul Sharma", ngo: "Sunrise Foundation", amount: "₹10,000", date: "2023-04-15" },
      { id: 2, donor: "Priya Patel", ngo: "Green Earth", amount: "₹5,000", date: "2023-04-14" },
      { id: 3, donor: "Vikram Singh", ngo: "Healthcare For All", amount: "₹15,000", date: "2023-04-13" },
      { id: 4, donor: "Ananya Gupta", ngo: "Children First", amount: "₹8,000", date: "2023-04-12" },
    ],
    fraudAlerts: [
      { id: 1, type: "Suspicious NGO", description: "Multiple failed KYC attempts", priority: "High", date: "2023-04-18" },
      { id: 2, type: "Donation Pattern", description: "Unusual transaction frequency", priority: "Medium", date: "2023-04-15" },
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">Platform Overview and Management</p>
        </div>
        <div className="mt-4 md:mt-0 space-x-3">
          <Link href="/admin/settings">
            <Button variant="outline">Platform Settings</Button>
          </Link>
          <Link href="/admin/broadcast">
            <Button>Send Announcement</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Total NGOs</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">{mockData.totalNGOs}</div>
          <div className="text-sm text-gray-500 mt-1">
            <span className="text-amber-600">{mockData.pendingApprovals} pending approvals</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Total Donations</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">{mockData.totalDonations}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Total Donors</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">{mockData.totalDonors}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Fraud Alerts</div>
          <div className="mt-2 text-3xl font-semibold text-red-600">{mockData.fraudAlerts.length}</div>
          <div className="text-sm text-gray-500 mt-1">Require attention</div>
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
              onClick={() => setActiveTab('ngos')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'ngos'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              NGO Approvals
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
              onClick={() => setActiveTab('reports')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'reports'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Reports
            </button>
          </nav>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        {activeTab === 'overview' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Recent NGO Applications</h2>
                  <Link href="/admin/ngos/pending">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
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
                      {mockData.recentNGOApplications.map((ngo) => (
                        <tr key={ngo.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {ngo.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {ngo.category}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {ngo.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                              {ngo.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Donations</h2>
                  <Link href="/admin/donations">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Donor
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          NGO
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
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
                            {donation.ngo}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {donation.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {donation.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Fraud Alerts</h2>
              <div className="space-y-4">
                {mockData.fraudAlerts.map((alert) => (
                  <div key={alert.id} className="border rounded-lg p-4 bg-red-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{alert.type}</h3>
                        <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                        <p className="text-xs text-gray-500 mt-2">Reported on {alert.date}</p>
                      </div>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        alert.priority === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {alert.priority} Priority
                      </span>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm">Investigate</Button>
                      <Button size="sm">Resolve</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ngos' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">NGO Applications</h2>
            <div className="mb-6 flex space-x-4">
              <Button variant="outline" size="sm">All Applications</Button>
              <Button size="sm">Pending Approval</Button>
              <Button variant="outline" size="sm">Approved</Button>
              <Button variant="outline" size="sm">Rejected</Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Organization
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact Person
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date Applied
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
                  {mockData.recentNGOApplications.map((ngo) => (
                    <tr key={ngo.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {ngo.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {ngo.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        John Doe
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {ngo.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                          {ngo.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Review</Button>
                          <Button size="sm">Approve</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'donations' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Donation Monitoring</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Donor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      NGO
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
                  {mockData.recentDonations.map((donation, index) => (
                    <tr key={donation.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        TXN{donation.id}0{index}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {donation.donor}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {donation.ngo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {donation.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {donation.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 flex justify-between">
              <div>
                <Button variant="outline" size="sm">Export Report</Button>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Analytics & Reports</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-4">Generate Reports</h3>
                <div className="space-y-4">
                  <Button className="w-full justify-start" variant="outline">
                    Monthly Donation Report
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    NGO Performance Report
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    User Activity Report
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    Financial Summary
                  </Button>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-4">
                  <Button className="w-full justify-start" variant="outline">
                    Update Platform Fees
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    Send Mass Notification
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    System Maintenance
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    Update KYC Requirements
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="font-medium text-gray-900 mb-4">Recent Platform Activity</h3>
              <div className="space-y-3">
                <div className="flex">
                  <div className="w-2 h-2 mt-2 mr-3 rounded-full bg-green-500"></div>
                  <div>
                    <p className="text-sm text-gray-600">System update completed successfully</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-2 h-2 mt-2 mr-3 rounded-full bg-blue-500"></div>
                  <div>
                    <p className="text-sm text-gray-600">New admin user added to the system</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-2 h-2 mt-2 mr-3 rounded-full bg-amber-500"></div>
                  <div>
                    <p className="text-sm text-gray-600">Backup scheduled for tonight at 2:00 AM</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
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

export default AdminDashboard; 