import { useState } from 'react'
import Link from 'next/link';

const Nav = () => {
    
    const [isOpen, setisOpen] = useState(false); 

        function handleClick() {
            setisOpen(!isOpen);
        }

    return (
        <nav className="bg-white">
            <div className="max-x-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
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
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link a href="/">
                                <a><img className="block lg:hidden h-8 w-auto" src="../images/jti_logo.svg" alt="Josh Illichmann" /></a>
                            </Link>
                            <Link href="/">
                            <a><img className="hidden lg:block h-12 w-auto" src="../images/jti_logo.svg" alt="Josh Illichmann" />
                            </a>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="ml-3 relative">
                        <Link href="/">
                            <a className="px-3 py-2 font-telegraf rounded-md text-lg font-medium">
                                Work
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="px-3 py-2 font-telegraf rounded-md text-lg font-medium">
                                Services
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="px-3 py-2 font-telegraf rounded-md text-lg font-medium">
                                Contact
                            </a>
                        </Link>
                    </div>

                </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;