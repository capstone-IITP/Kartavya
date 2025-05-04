"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type UserType = "ngo" | "donor";

const baseSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string(),
});

const ngoSchema = baseSchema.extend({
  organizationName: z.string().min(2, { message: "Organization name is required" }),
  registrationNumber: z.string().min(1, { message: "Registration number is required" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const donorSchema = baseSchema.extend({
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type NgoFormValues = z.infer<typeof ngoSchema>;
type DonorFormValues = z.infer<typeof donorSchema>;

export default function RegisterPage() {
  const [userType, setUserType] = useState<UserType>("donor");
  const [isLoading, setIsLoading] = useState(false);
  
  const { 
    register: registerNgo, 
    handleSubmit: handleNgoSubmit, 
    formState: { errors: ngoErrors } 
  } = useForm<NgoFormValues>({
    resolver: zodResolver(ngoSchema),
  });
  
  const { 
    register: registerDonor, 
    handleSubmit: handleDonorSubmit, 
    formState: { errors: donorErrors } 
  } = useForm<DonorFormValues>({
    resolver: zodResolver(donorSchema),
  });

  const onSubmitNgo = async (data: NgoFormValues) => {
    setIsLoading(true);
    // In a real application, this would be a call to your API
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("NGO registration data:", data);
      // Redirect to dashboard or verification page
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const onSubmitDonor = async (data: DonorFormValues) => {
    setIsLoading(true);
    // In a real application, this would be a call to your API
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Donor registration data:", data);
      // Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:text-primary/90">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex justify-center space-x-4 mb-6">
            <button
              type="button"
              onClick={() => setUserType("donor")}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                userType === "donor"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Individual Donor
            </button>
            <button
              type="button"
              onClick={() => setUserType("ngo")}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                userType === "ngo"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              NGO
            </button>
          </div>

          {userType === "donor" ? (
            <form className="space-y-6" onSubmit={handleDonorSubmit(onSubmitDonor)}>
              <div>
                <label htmlFor="donor-name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="donor-name"
                    type="text"
                    className={`block w-full rounded-md border ${
                      donorErrors.name ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm`}
                    {...registerDonor("name")}
                  />
                  {donorErrors.name && (
                    <p className="mt-1 text-sm text-red-600">{donorErrors.name.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="donor-email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="donor-email"
                    type="email"
                    autoComplete="email"
                    className={`block w-full rounded-md border ${
                      donorErrors.email ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm`}
                    {...registerDonor("email")}
                  />
                  {donorErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{donorErrors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="donor-phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    id="donor-phone"
                    type="tel"
                    className={`block w-full rounded-md border ${
                      donorErrors.phoneNumber ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm`}
                    {...registerDonor("phoneNumber")}
                  />
                  {donorErrors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-600">{donorErrors.phoneNumber.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="donor-password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="donor-password"
                    type="password"
                    className={`block w-full rounded-md border ${
                      donorErrors.password ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm`}
                    {...registerDonor("password")}
                  />
                  {donorErrors.password && (
                    <p className="mt-1 text-sm text-red-600">{donorErrors.password.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="donor-confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="donor-confirm-password"
                    type="password"
                    className={`block w-full rounded-md border ${
                      donorErrors.confirmPassword ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm`}
                    {...registerDonor("confirmPassword")}
                  />
                  {donorErrors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{donorErrors.confirmPassword.message}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="donor-terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  required
                />
                <label htmlFor="donor-terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the{" "}
                  <Link href="/terms" className="font-medium text-primary hover:text-primary/90">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="font-medium text-primary hover:text-primary/90">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
              </div>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={handleNgoSubmit(onSubmitNgo)}>
              <div>
                <label htmlFor="ngo-name" className="block text-sm font-medium text-gray-700">
                  Contact Person Name
                </label>
                <div className="mt-1">
                  <input
                    id="ngo-name"
                    type="text"
                    className={`block w-full rounded-md border ${
                      ngoErrors.name ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm`}
                    {...registerNgo("name")}
                  />
                  {ngoErrors.name && (
                    <p className="mt-1 text-sm text-red-600">{ngoErrors.name.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="organization-name" className="block text-sm font-medium text-gray-700">
                  Organization Name
                </label>
                <div className="mt-1">
                  <input
                    id="organization-name"
                    type="text"
                    className={`block w-full rounded-md border ${
                      ngoErrors.organizationName ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm`}
                    {...registerNgo("organizationName")}
                  />
                  {ngoErrors.organizationName && (
                    <p className="mt-1 text-sm text-red-600">{ngoErrors.organizationName.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="registration-number" className="block text-sm font-medium text-gray-700">
                  Registration Number
                </label>
                <div className="mt-1">
                  <input
                    id="registration-number"
                    type="text"
                    className={`block w-full rounded-md border ${
                      ngoErrors.registrationNumber ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm`}
                    {...registerNgo("registrationNumber")}
                  />
                  {ngoErrors.registrationNumber && (
                    <p className="mt-1 text-sm text-red-600">{ngoErrors.registrationNumber.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="ngo-email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="ngo-email"
                    type="email"
                    autoComplete="email"
                    className={`block w-full rounded-md border ${
                      ngoErrors.email ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm`}
                    {...registerNgo("email")}
                  />
                  {ngoErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{ngoErrors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="ngo-phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    id="ngo-phone"
                    type="tel"
                    className={`block w-full rounded-md border ${
                      ngoErrors.phoneNumber ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm`}
                    {...registerNgo("phoneNumber")}
                  />
                  {ngoErrors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-600">{ngoErrors.phoneNumber.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <div className="mt-1">
                  <textarea
                    id="address"
                    rows={3}
                    className={`block w-full rounded-md border ${
                      ngoErrors.address ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm`}
                    {...registerNgo("address")}
                  />
                  {ngoErrors.address && (
                    <p className="mt-1 text-sm text-red-600">{ngoErrors.address.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="ngo-password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="ngo-password"
                    type="password"
                    className={`block w-full rounded-md border ${
                      ngoErrors.password ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm`}
                    {...registerNgo("password")}
                  />
                  {ngoErrors.password && (
                    <p className="mt-1 text-sm text-red-600">{ngoErrors.password.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="ngo-confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="ngo-confirm-password"
                    type="password"
                    className={`block w-full rounded-md border ${
                      ngoErrors.confirmPassword ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm`}
                    {...registerNgo("confirmPassword")}
                  />
                  {ngoErrors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{ngoErrors.confirmPassword.message}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="ngo-terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  required
                />
                <label htmlFor="ngo-terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the{" "}
                  <Link href="/terms" className="font-medium text-primary hover:text-primary/90">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="font-medium text-primary hover:text-primary/90">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create NGO account"}
                </Button>
              </div>
              
              <p className="text-center text-sm text-gray-600 mt-4">
                Note: After registration, you'll need to complete the KYC process by uploading required documents.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 