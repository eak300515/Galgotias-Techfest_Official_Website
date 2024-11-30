import React from "react";
import "./Competitions.css";

const competitions = [
    {
        title: "Esports Gaming Competition",
        image: "./src/assets/competitions/esports.jpg",
        description: "Compete with top gamers in intense tournaments and showcase your gaming skills to win exciting prizes!"
    },
    {
        title: "Robowars- Robotics Competition",
        image: "./src/assets/competitions/robowars.jpg",
        description: "Build, program, and battle robots in the ultimate clash of engineering and innovation."
    },
    {
        title: "Ideates- AI & Sustainability Solutions",
        image: "./src/assets/competitions/ideates.webp",
        description: "Pitch groundbreaking AI solutions for a sustainable future and impress the judges with your ideas."
    },
    {
        title: "Hackathon",
        image: "./src/assets/competitions/hackathon.jpg",
        description: "Team up to solve real-world tech challenges in a fast-paced, creative coding marathon."
    },
    {
        title: "Tech Olympiads",
        image: "./src/assets/competitions/techolympiad.jpeg",
        description: "Test your knowledge in the ultimate tech quiz and prove yourself as the tech mastermind."
    },
    {
        title: "Robotics Building",
        image: "./src/assets/competitions/robot-building.jpg",
        description: "Design, assemble, and program robots to perform specific tasks and solve engineering problems."
    },
    {
        title: "Deep Tech & Blockchain Competition",
        image: "./src/assets/competitions/blockchain.webp",
        description: "Showcase your expertise in deep tech and blockchain by building innovative decentralized applications."
    },
    {
        title: "Virtual Trading Competition",
        image: "./src/assets/competitions/trading.jpeg",
        description: "Master the stock market in this virtual trading simulation and compete to achieve the highest profits."
    },
];

function Competitions() {
    return (
        <section className="competitions-section py-16">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center mb-12">Competitions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {competitions.map((competition, index) => (
                        <div
                            key={index}
                            className="competition-card"
                            style={{ backgroundImage: `url(${competition.image})` }}
                        >
                            <div className="competition-overlay">
                                <h3 className="competition-title">{competition.title}</h3>
                                <p className="competition-description">{competition.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Competitions;
