"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded hover:bg-blue-700">
              Home
            </Link>
          </div>
          <div className="flex space-x-2">
            {session?.user ? (
              <>
                <Link href="/dashboard" className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded hover:bg-blue-700">
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded hover:bg-red-700"
                >
                  Signout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded hover:bg-blue-700">
                  Login
                </Link>
                <Link href="/register" className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded hover:bg-blue-700">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
    );
};



export default Navbar;
