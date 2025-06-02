import React from 'react';

const stats = [
  { label: "Communities Served", value: "50+" },
  { label: "People Impacted", value: "25,000+" },
  { label: "Startups Incubated", value: "100+" },
  { label: "Clean Energy Projects", value: "30+" }
];

const testimonials = [
  {
    quote: "Himprowise's pre-incubation program gave me the support and guidance I needed to turn my sustainability idea into a viable business that's now serving thousands.",
    author: "Priya Sharma",
    role: "Founder, GreenTech Solutions"
  },
  {
    quote: "The solar village initiative has transformed our community. We now have reliable electricity that powers our school, clinic, and small businesses.",
    author: "Rajesh Kumar",
    role: "Village Council Head, Sundarpur"
  },
  {
    quote: "The waste management program has not only cleaned up our neighborhood but also created jobs and a new source of income for many families.",
    author: "Anita Patel",
    role: "Community Leader"
  }
];

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creating measurable change in communities and the environment.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-dark p-6 rounded-xl text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Impact Map or Visualization Placeholder */}
        <div className="mb-20 bg-dark rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Our Global Footprint</h3>
          <div className="h-[400px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
            <span className="text-xl">
              [Interactive Impact Map Placeholder]<br/>
              Visualizing our projects across regions
            </span>
          </div>
        </div>

        {/* Testimonials */}
        <h3 className="text-2xl font-bold mb-8 text-center">Stories of Change</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-dark p-6 rounded-xl">
              <svg className="h-8 w-8 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
