import React from 'react';

const attractions = [
  {
    title: "Access Experts of Keynote Sessions",
    description:
      "Gain insights from world-renowned industry speakers & leaders and tech experts through panels and discussions.",
    link: "#",
  },
  {
    title: "Interactive Hands-on Workshops",
    description:
      "Learn through interactive workshops in emerging technologies with hands-on experience, designed to enhance your skills.",
    link: "#",
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with tech enthusiasts, industry professionals, visionaries, founders, and like-minded peers.",
    link: "#",
  },
  {
    title: "Showcase & Exhibition Areas",
    description:
      "Get a first-hand look at emerging technologies and future innovations, featuring innovative projects and research.",
    link: "#",
  },
  {
    title: "Tech Challenges & Exciting Competitions",
    description:
      "Participate in multiple competitions like hackathons, RoboWars, Esports & many more.",
    link: "#",
  },
  {
    title: "Fun Activities",
    description:
      "Enjoy the techfest atmosphere with fun zones, games, and huge amazing giveaways.",
    link: "#",
  },
];

const EventAttractions = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-10">
          Check Out the Event Attractions
        </h2>
        <div className="grid gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg p-6 group hover:shadow-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-pink-300">
                {attraction.title}
              </h3>
              <p className="text-gray-400 mb-6">{attraction.description}</p>
              <a
                href={attraction.link}
                className="text-pink-500 font-medium hover:underline flex items-center group-hover:text-pink-300"
              >
                Explore more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventAttractions;
