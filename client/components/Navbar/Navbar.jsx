// will have to manage login state if we choose to have auth system -- meaning sign-in if no user is detected/sign-out if user is currently active (buttons)
import React, { useState } from 'react'
import Link from 'next/link'

import routes from '../../routes'
import toggleMenu from '@/constants/utils'

export default function Navbar() {
  return (
    <nav className="bg-green-600">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                onClick={() => toggleMenu('mobile-menu', 'sm:hidden', 'hidden')}
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              {/* logo - will need to change */}
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://cdn-icons-png.flaticon.com/512/135/135620.png"
                alt="Workflow"
              />
              {/* logo with name - will need to change */}
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://cdn-icons-png.flaticon.com/512/135/135620.png"
                alt="Workflow"
              />
              <p className="hidden font-bold text-white lg:block px-2">
                T-Shirts
              </p>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {routes.map((route) => {
                  return (
                    <Link key={route.id} href={route.path}>
                      <a className="text-white font-bold hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm">
                        {route.name}
                      </a>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>




          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          <div className="relative flex flex-col sm:flex-row sm:space-x-4">
              {/* TODO: Login button */}
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <Link href="/login">
                    <a className="flex items-center px-6 py-3 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 hover:text-gray-600">
                      Login
                    </a>
                </Link>
              </div>
            
              {/* TODO: Register button */}
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <Link href="/register">
                  <a className="flex items-center px-6 py-3 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 hover:text-gray-600">
                    Register
                  </a>
                </Link>
              </div>
            </div>  
                        
            <button
              type="button"
              className="bg-green-600 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">View notifications</span>
              {/* this will need to change - notification */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-green-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() =>
                    toggleMenu('dropdown-menu', 'hidden', '_dropdown_')
                  }
                >
                  <span className="sr-only">Open user menu</span>
                  {/* avatar */}
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              <div
                className="hidden"
                role="menu"
                id="dropdown-menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {routes.map((route) => {
            return (
              <Link key={route.id} href={route.path}>
                <a
                  className="text-white block px-3 py-2 hover:bg-green-700 rounded-md text-base font-medium"
                  aria-current="page"
                >
                  {route.name}
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
