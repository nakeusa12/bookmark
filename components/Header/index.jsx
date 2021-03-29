import Link from "next/link"
import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return ( 
        <nav className="absolute inset-0 z-50 flex items-center w-full h-20">
            <div className="flex items-center justify-between w-full h-auto py-4 mx-auto border-b border-gray-200 md:border-transparent md:max-w-6xl">
                    <div className="flex items-center justify-between w-full px-4 md:px-0">
                        <div className="flex items-center space-x-4">
                            <img src="/logo.svg" className="w-8 h-8 md:w-10 md:h-10" alt="logo"/>
                            <h2 className="text-3xl font-bold">BookMark</h2>
                        </div>
                        <button className="block w-8 h-8 focus:outline-none md:hidden" onClick={toggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop */}
                    <ul className="items-center justify-end hidden w-full space-x-12 md:flex">
                        <Link href="/features">
                            <a className="py-4 font-medium transition-all duration-300">Features</a>
                        </Link>
                        <Link href="/pricing">
                            <a className="py-4 font-medium transition-all duration-300">Pricing</a>
                        </Link>
                        <Link href="/contact">
                            <a className="py-4 font-medium transition-all duration-300">Contact</a>
                        </Link>
                        <Link href="/forum">
                            <a className="px-8 py-3 font-semibold text-white transition-all duration-300 bg-red-500 rounded hover:bg-red-600">Join The Forum</a>
                        </Link>
                    </ul>
                
                    {/* Mobile */}
                    <div className={`absolute ${isOpen ? 'flex' : 'hidden'} flex-col w-full min-h-full px-4 py-10 space-y-6 text-center bg-white shadow-xl md:hidden top-20`} isOpen={isOpen} >
                        <Link href="/features">
                            <a className="py-4 font-semibold transition-all duration-300 hover:bg-gray-200">Features</a>
                        </Link>
                        <Link href="/pricing">
                            <a className="py-4 font-semibold transition-all duration-300 hover:bg-gray-200">Pricing</a>
                        </Link>
                        <Link href="/contact">
                            <a className="py-4 font-semibold transition-all duration-300 hover:bg-gray-200">Contact</a>
                        </Link>
                        <Link href="/login">
                            <a className="px-8 py-3 font-semibold text-white transition-all duration-300 bg-red-500 rounded hover:bg-red-600">Login</a>
                        </Link>
                        <div>
                            Existing customer? {" "}
                            <Link href="/signin">
                                <span className="font-medium text-red-500 cursor-pointer hover:underline">Sign In</span> 
                            </Link>
                        </div>

                    </div>
                </div>
        </nav>
     );
}
 
export default Header;