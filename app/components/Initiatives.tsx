import React from 'react';
import Link from 'next/link';

const initiatives = [
  {
    title: "Green Entrepreneur Program",
    description: "Supporting young entrepreneurs in developing sustainable business models that address environmental challenges while creating economic opportunities.",
    image: "bg-gradient-to-br from-primary/40 to-secondary/40",
    category: "Startup Pre-Incubation"
  },
  {
    title: "Rural Empowerment Initiative",
    description: "Equipping rural communities with skills, resources, and technology to improve livelihoods and build resilience against socioeconomic challenges.",
    image: "bg-gradient-to-br from-secondary/40 to-accent/40",
    category: "Community Upliftment"
  },
  {
    title: "Solar Village Network",
    description: "Implementing decentralized solar energy solutions in underserved communities to provide reliable, clean electricity for homes, schools, and businesses.",
    image: "bg-gradient-to-br from-accent/40 to-primary/40",
    category: "Clean Energy"
  },
  {
    title: "Waste to Resource Hub",
    description: "Converting organic waste into biogas and fertilizers, and plastic waste into construction materials, creating circular economy models in communities.",
    image: "bg-gradient-to-br from-primary/40 to-accent/40",
    category: "Waste Management"
  },
  {
    title: "Women Entrepreneur Collective",
    description: "Supporting women entrepreneurs in developing sustainable businesses focused on clean technology and environmental solutions.",
    image: "bg-gradient-to-br from-secondary/40 to-primary/40",
    category: "Startup Pre-Incubation"
  },
  {
    title: "Digital Literacy Program",
    description: "Bridging the digital divide by providing technology access and education to underserved communities, enabling them to participate in the digital economy.",
    image: "bg-gradient-to-br from-accent/40 to-secondary/40",
    category: "Community Upliftment"
  }
];

const Initiatives = () => {
  return (
    <section id="initiatives" className="py-20 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Our <span className="gradient-text">Initiatives</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our flagship programs making a real impact in communities and the environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div 
              key={index} 
              className="bg-dark-lighter rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-48 ${initiative.image} flex items-center justify-center`}>
                <span className="text-xl text-center px-4 opacity-70">
                  [Initiative Image]
                </span>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {initiative.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
                <p className="text-gray-400 mb-4">{initiative.description}</p>
                <Link href="#" className="text-primary hover:text-primary-light inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#contact" className="btn-secondary">
            Partner With Us On An Initiative
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
