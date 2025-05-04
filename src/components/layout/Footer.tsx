import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">NGO Connect</h3>
            <p className="text-sm text-gray-600">
              A centralized, secure, and transparent donation platform that connects NGOs with donors.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">For NGOs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/register" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/ngos/kyc" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  KYC Process
                </Link>
              </li>
              <li>
                <Link href="/ngos/guidelines" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Guidelines
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">For Donors</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/donate" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Track Impact
                </Link>
              </li>
              <li>
                <Link href="/tax-benefits" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Tax Benefits
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} NGO Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 