"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='bg-dark-lighter/90 fixed z-50 w-full backdrop-blur-sm'>
            <div className='sm:px-6 lg:px-8 container px-4 mx-auto'>
                <div className='flex justify-between items-center py-4'>
                    {/* Logo */}
                    <div className='flex items-center'>
                        <Link href='/' className='flex items-center'>
                            <span className='text-2xl font-bold text-white'>
                                Himprowise
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className='md:flex hidden space-x-8'>
                        <Link
                            href='#about'
                            className='hover:text-primary text-white transition-colors'
                        >
                            About
                        </Link>
                        <Link
                            href='#services'
                            className='hover:text-primary text-white transition-colors'
                        >
                            Services
                        </Link>
                        <Link
                            href='#team'
                            className='hover:text-primary text-white transition-colors'
                        >
                            Team
                        </Link>
                    </nav>

                    {/* Call to Action Button */}
                    <div className='md:block hidden'>
                        <Link href='#contact' className='btn-primary'>
                            Get Involved
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button
                            type='button'
                            className='hover:text-primary text-white'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <svg
                                    className='w-6 h-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className='w-6 h-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className='md:hidden bg-dark-lightest py-4'>
                    <div className='container px-4 mx-auto'>
                        <nav className='flex flex-col space-y-4'>
                            <Link
                                href='#about'
                                className='hover:text-primary text-white transition-colors'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href='#services'
                                className='hover:text-primary text-white transition-colors'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href='#team'
                                className='hover:text-primary text-white transition-colors'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Team
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
