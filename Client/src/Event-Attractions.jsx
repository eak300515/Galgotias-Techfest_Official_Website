import React from "react";
import { motion } from "framer-motion";

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const EventAttractions = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-bold text-center text-white mb-12"
        >
          Check Out the Event Attractions
        </motion.h2>
        <motion.div
          className="grid gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {attractions.map((attraction, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 10px 20px rgba(255, 0, 128, 0.5)",
              }}
              className="bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-lg p-6 shadow-md group hover:from-purple-600 hover:to-pink-500 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-pink-300 transition-all">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventAttractions;
