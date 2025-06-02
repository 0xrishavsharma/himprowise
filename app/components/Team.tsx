import React from 'react';
import Image from 'next/image';

const Team = () => {
  const teamMembers = [
    {
      name: "Asha Sharma",
      title: "Co-Founder",
      specialties: "Professional | Skilling - Handicrafts (Knitting) | Skilling - Food Processing (Jams and Pickles)",
      bio: "Mrs. Asha Sharma brings 25 years of working expertise in an Administrative Support role from her tenure at NHPC, where she played a key role in operational aspects of the linkage with State Government Administration. Her vast experience and network in administration provide the company with a solid foundation for strategic planning and efficient business execution.\n\nApart from her professional acumen, Mrs. Sharma is knowledgeable and passionate about promoting Chamba's local cuisine, contributing to initiatives that highlight homemade preparation and commercialization of authentic regional culinary traditions like Chamba Chukh, Pickles and Jams. Additionally, her proficiency in handloom and knitting, which are deeply embedded in Chamba's cultural fabric, allows Himprowise Solutions to actively support artisanal practices and promote traditional crafts.",
      image: "bg-gradient-to-br from-primary/30 to-secondary/30" // Placeholder for actual image
    },
    {
      name: "Shubham Sharma",
      title: "Co-Founder",
      specialties: "Entrepreneur | Hospitality Professional | Orchardist",
      bio: "Shubham has a Diploma in Civil Engineering from Thapar Polytechnic College Patiala and graduated in Civil Engineering from Chandigarh University in 2016. During the initial years of his professional journey, he started as a Government Civil Contractor and completed projects related to rural roads and related infrastructure development. He further supported an A Class Government Contractor as a Design and Site Engineer.\n\nSince 2018, Shubham has been an active ecosystem player in the hospitality sector of the Dalhousie region, running his own homestay in Banikhet, Dalhousie, which facilitated him to deeply connect with the culture, people, and landscape of Chamba district.\n\nWhile engaging with travelers and exploring the region over the years, he observed a clear gap in sustainable development—particularly in rural entrepreneurship, waste management, and community-driven solutions. This realization became a turning point, motivating him to step beyond hospitality and contribute meaningfully to the region's future.\n\nAs the Co-Founder of Himprowise Solution Partners, he is committed to building a community ecosystem that empowers people at the grassroots, promotes innovation in rural livelihoods, and addresses the environmental and social challenges of our times through awareness and required handholding & technology interventions support.",
      image: "bg-gradient-to-br from-secondary/30 to-accent/30" // Placeholder for actual image
    },
    {
      name: "Gaurav Sharma",
      title: "Advisor",
      specialties: "Consulting Professional | Decarbonization | Resource Efficiency | Energy Transition | Green Hydrogen | Sustainable MSME Development | Innovation and Startup Ecosystem | Rural Industrialization Ecosystem Development | Management Consulting",
      bio: "Gaurav Sharma is an accomplished leader with over 15 years of consulting and advisory experience across government institutions, multilateral agencies, and private sector organizations. His expertise spans MSME competitiveness enhancement, sustainable development, decarbonization, energy transition and Startup and entrepreneurship development. With a proven track record in strategic policy formulation, stakeholder engagement, and implementation of large-scale projects, he has successfully led initiatives such as the Raising and Accelerating MSME Performance (RAMP) program in Himachal Pradesh and Green hydrogen market ramp-up and Power to X (GH2) efforts in India.\n\nHis experience extends to international cooperation, government consulting, and industry partnerships, making him a strong asset in shaping enterprise development, market access strategies, and sustainability-driven business models. Having worked across India, Southeast Asia, Europe, and Japan, Gaurav possesses a global perspective on business innovation, low-carbon industrial transformation, and resource efficiency.\n\nAs a Certified Energy Auditor and an expert in energy management, policy advocacy, and enterprise sustainability, he is well-equipped to drive impactful leadership in operational excellence and business transformation.",
      image: "bg-gradient-to-br from-accent/30 to-primary/30" // Placeholder for actual image
    }
  ];

  return (
    <section id="team" className="py-20 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the passionate experts driving Himprowise's vision and mission.
          </p>
        </div>

        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-dark-lighter rounded-xl overflow-hidden shadow-lg shadow-black/20"
            >
              <div className="grid md:grid-cols-3">
                <div className={`h-full min-h-[300px] ${member.image} flex items-center justify-center p-4`}>
                  <div className="h-64 w-64 rounded-full overflow-hidden flex items-center justify-center bg-dark-lightest">
                    <span className="text-center text-gray-400">
                      [Team Member Photo]<br/>
                      {member.name}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.title}</p>
                  <p className="text-sm text-gray-400 mb-4">{member.specialties}</p>
                  
                  <div className="text-gray-300 space-y-4">
                    {member.bio.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
