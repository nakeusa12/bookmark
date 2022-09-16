import Link from "next/link"
import { useState } from "react";

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export const Header = () => {
  return (
    <Popover className="relative bg-white z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="inline-flex gap-x-2.5 items-center hover:opacity-90 transition-all duration-300 ease-in-out">
              <span className="sr-only">BookMark</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/logo.svg"
                alt="logo-header"
              />
              <h2 className="text-2xl font-semibold">BookMark</h2>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <nav className="space-x-10 md:flex">
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Features
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
                </a>
            </nav>
            <div className="ml-8">
                <a href="#" className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-main-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-500" >
                    Join The Forum
                </a>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-100 ease-out"
        enterFrom="opacity-0 -translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-full"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-4 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex gap-x-2.5 items-center hover:opacity-90 transition-all duration-300 ease-in-out">
                    <img
                        className="h-8 w-auto"
                        src="/logo.svg"
                        alt="logo-header"
                    />
                    <h2 className="text-2xl font-semibold">BookMark</h2>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-10">
                <nav className="grid gap-y-8">
                    <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">Features</span>
                    </a>
                    <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">Pricing</span>
                    </a>
                    <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">Contact</span>
                    </a>
                </nav>
              </div>
            </div>
            <div className="py-8 px-4">
                <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2.5 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                    Join The Forum
                </a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

// const Header = () => {

//     const [isOpen, setIsOpen] = useState(false);

//     const toggle = () => setIsOpen(!isOpen);

//     return ( 
//         <nav className="absolute inset-0 z-50 flex items-center w-full h-20">
//             <div className="flex items-center justify-between w-full h-auto py-4 mx-auto border-b border-gray-200 md:border-transparent md:max-w-6xl">
//                     <div className="flex items-center justify-between w-full px-4 md:px-0">
//                         <div className="flex items-center space-x-4">
//                             <img src="/logo.svg" className="w-8 h-8 md:w-10 md:h-10" alt="logo"/>
//                             <h2 className="text-3xl font-bold">BookMark</h2>
//                         </div>
//                         <button className="block w-8 h-8 focus:outline-none md:hidden" onClick={toggle}>
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Desktop */}
//                     <ul className="items-center justify-end hidden w-full space-x-12 md:flex">
//                         <Link href="/features">
//                             <a className="py-4 font-medium transition-all duration-300">Features</a>
//                         </Link>
//                         <Link href="/pricing">
//                             <a className="py-4 font-medium transition-all duration-300">Pricing</a>
//                         </Link>
//                         <Link href="/contact">
//                             <a className="py-4 font-medium transition-all duration-300">Contact</a>
//                         </Link>
//                         <Link href="/forum">
//                             <a className="px-8 py-3 font-semibold text-white transition-all duration-300 bg-red-500 rounded hover:bg-red-600">Join The Forum</a>
//                         </Link>
//                     </ul>
                
//                     {/* Mobile */}
//                     <div className={`absolute ${isOpen ? 'flex' : 'hidden'} flex-col w-full min-h-full px-4 py-10 space-y-6 text-center bg-white shadow-xl md:hidden top-20`} isOpen={isOpen} >
//                         <Link href="/features">
//                             <a className="py-4 font-semibold transition-all duration-300 hover:bg-gray-200">Features</a>
//                         </Link>
//                         <Link href="/pricing">
//                             <a className="py-4 font-semibold transition-all duration-300 hover:bg-gray-200">Pricing</a>
//                         </Link>
//                         <Link href="/contact">
//                             <a className="py-4 font-semibold transition-all duration-300 hover:bg-gray-200">Contact</a>
//                         </Link>
//                         <Link href="/login">
//                             <a className="px-8 py-3 font-semibold text-white transition-all duration-300 bg-red-500 rounded hover:bg-red-600">Login</a>
//                         </Link>
//                         <div>
//                             Existing customer? {" "}
//                             <Link href="/signin">
//                                 <span className="font-medium text-red-500 cursor-pointer hover:underline">Sign In</span> 
//                             </Link>
//                         </div>

//                     </div>
//             </div>
//         </nav>
//      );
// }
 
// export default Header;