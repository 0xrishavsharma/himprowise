import React from "react";
import Link from "next/link";
import { FiPhoneOutgoing } from "react-icons/fi";

const Hero = () => {
    return (
        <section className='flex overflow-hidden relative justify-center items-center h-screen'>
            {/* Background gradient overlay */}
            <div className='from-dark-lighter to-dark absolute inset-0 z-0 bg-gradient-to-b'></div>

            {/* Animated background elements */}
            <div className='absolute inset-0 z-0 opacity-30'>
                <div className='bg-primary/20 animate-float absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl'></div>
                <div
                    className='bg-secondary/20 animate-float absolute right-1/3 bottom-1/4 w-80 h-80 rounded-full blur-3xl'
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className='bg-accent/20 animate-float absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl'
                    style={{ animationDelay: "4s" }}
                ></div>
            </div>

            <div className='sm:px-6 lg:px-8 container relative z-10 px-4 mx-auto'>
                <div className='mx-auto max-w-4xl text-center'>
                    <h1 className='md:text-6xl lg:text-7xl mb-6 text-5xl font-bold leading-tight'>
                        <span className='block'>Sustainable Innovation</span>
                        <span className='gradient-text'>
                            Strategic Transformation
                        </span>
                    </h1>

                    <p className='md:text-2xl mx-auto mb-10 max-w-3xl text-xl text-gray-300'>
                        Himprowise Solution Partners provides expert-driven
                        guidance and impactful solutions for sustainable
                        enterprise development, green growth, and resilient
                        business ecosystems.
                    </p>

                    <div className='sm:flex-row flex flex-col gap-4 justify-center'>
                        <Link href='tel:9816463487' className='btn-primary'>
                            Partner With Us <FiPhoneOutgoing className='ml-2' />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className='flex absolute bottom-10 flex-col items-center animate-bounce transform'>
                <span className='mb-2 text-sm text-gray-400'>Scroll Down</span>
                <svg
                    className='w-6 h-6 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 14l-7 7m0 0l-7-7m7 7V3'
                    />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
