import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <section id='about' className='bg-dark py-20'>
            <div className='sm:px-6 lg:px-8 container px-4 mx-auto'>
                <div className='mb-16 text-center'>
                    <h2 className='section-title'>
                        About <span className='gradient-text'>Himprowise</span>
                    </h2>
                    <p className='mx-auto max-w-3xl text-xl text-gray-300'>
                        Driving positive change through innovation, education,
                        and sustainable practices.
                    </p>
                </div>

                <div className='md:grid-cols-2 grid gap-12 items-center'>
                    <div className='space-y-6'>
                        <h3 className='mb-4 text-3xl font-bold'>Our Vision</h3>
                        <p className='text-gray-300'>
                            Himprowise Solution Partners Private Limited
                            envisions a future where sustainability, innovation,
                            and strategic transformation drive meaningful change
                            across industries and communities. We aspire to be a
                            leader in advisory & implementation support as far
                            as promotion of green growth, integration of rural
                            sustainability, waste management, resource
                            efficiency, and digitalization to create resilient
                            business ecosystems is concerned. Through
                            expert-driven guidance and impactful solutions, we
                            aim to shape decentralised self-sustainable
                            entrepreneurial ecosystems to assist budding
                            enterprises thrive while prioritizing environmental
                            stewardship and social responsibility.
                        </p>

                        <h3 className='mb-4 text-3xl font-bold'>Our Mission</h3>
                        <p className='text-gray-300'>
                            Our mission is to provide:
                        </p>
                        <ul className='pl-5 space-y-2 list-disc text-gray-300'>
                            <li>
                                Expert-led consulting and strategic solutions
                                that empower businesses and communities to adopt
                                low-carbon practices, efficient resource
                                management, and sustainable enterprise models.
                            </li>
                            <li>
                                We are committed to helping industries
                                transition toward renewable energy integration,
                                waste efficiency, and digital transformation,
                                ensuring long-term viability and environmental
                                resilience.
                            </li>
                            <li>
                                By fostering collaborative partnerships, policy
                                advocacy, and research-driven innovation.
                            </li>
                        </ul>
                        <p className='mt-2 text-gray-300'>
                            We intend to help foster collaborations through
                            which stakeholders can navigate sustainability
                            challenges and unlock new opportunities for growth,
                            creating a future where economic success aligns with
                            ecological responsibility.
                        </p>

                        <div className='grid grid-cols-2 gap-4 pt-4'>
                            <div className='bg-dark-lighter p-4 rounded-lg'>
                                <h4 className='text-primary mb-2 text-xl font-bold'>
                                    10+
                                </h4>
                                <p className='text-gray-300'>
                                    Years of Experience
                                </p>
                            </div>
                            <div className='bg-dark-lighter p-4 rounded-lg'>
                                <h4 className='text-primary mb-2 text-xl font-bold'>
                                    50+
                                </h4>
                                <p className='text-gray-300'>
                                    Projects Completed
                                </p>
                            </div>
                            <div className='bg-dark-lighter p-4 rounded-lg'>
                                <h4 className='text-primary mb-2 text-xl font-bold'>
                                    100+
                                </h4>
                                <p className='text-gray-300'>
                                    Startups Incubated
                                </p>
                            </div>
                            <div className='bg-dark-lighter p-4 rounded-lg'>
                                <h4 className='text-primary mb-2 text-xl font-bold'>
                                    10k+
                                </h4>
                                <p className='text-gray-300'>Lives Impacted</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative h-[400px] md:h-[500px] rounded-xl overflow-hidden'>
                        <div className='from-primary/20 to-secondary/20 flex absolute inset-0 justify-center items-center bg-gradient-to-br rounded-xl'>
                            <span className='px-8 text-xl text-center'>
                                Image placeholder: Team working on community
                                projects
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
