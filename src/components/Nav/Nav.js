import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
    
  const [isOpen, setisOpen] = useState(false);

    function handleClick(){
        setisOpen(!isOpen);
    }

  return (
    <nav className="bg-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* -- Mobile menu button */}
                            <button onClick={handleClick} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {/*-- Icon when menu is closed.
                            /*--
                                Heroicon name: menu
    
                                Menu open: "hidden", Menu closed: "block"
                                */}
                            <svg className={`h-6 w-6 ${isOpen ? "hidden" : "block" }`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokedlinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Icon when menu open */}
                            <svg className={`h-6 w-6 ${isOpen ? "block" : "hidden" }`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokedlinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <a href="/" title="Home">
                                <img className="block lg:hidden h-12 w-auto" src="../images/jti_logo.svg" alt="Josh Illichmann" />
                                </a>
                                <a href="/">
                                <img className="hidden lg:block h-12 w-auto" src="../images/jti_logo.svg" alt="Josh Illichmann" />
                                </a>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                <Link href="/work">
                                <a className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                                    Work
                                </a>
                                </Link>
                                <Link href="/services">
                                <a className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                                    Services
                                </a>
                                </Link>
                                <Link href="/contact">
                                <a className=" inline-flex items-center px-1 pt-1 text-sm font-medium">
                                    Contact
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/*
                    Mobile menu, toggle classNamees based on menu state.

                    Menu open: "block", Menu closed: "hidden"
                */}
                <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
                    <div className="pt-2 pb-4 space-y-1">
                    <Link href="/work">
                        <a className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Work</a>
                    </Link>
                    <Link href="/services">
                        <a className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Services</a>
                    </Link>
                    <Link href="/contact">
                        <a className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Contact</a>
                    </Link>
                    </div>
                </div>
                </nav>
  )
}

export default Nav;