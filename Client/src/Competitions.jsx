import React from "react";
import "./Competitions.css";

const competitions = [
    { title: "Esports Gaming Competition", image: "./src/assets/competitions/esports.jpg" },
    { title: "Robowars- Robotics Competition", image: "./src/assets/competitions/robowars.jpg" },
    { title: "Ideates- AI & Sustainability Solutions", image: "./src/assets/competitions/ideates.webp" },
    { title: "Hackathon", image: "./src/assets/competitions/hackathon.jpg" },
    { title: "Tech Olympiads", image: "./src/assets/competitions/techolympiad.jpeg" },
    { title: "Robotics Building", image: "./src/assets/competitions/robot-building.jpg" },
    { title: "Deep Tech & Blockchain Competition", image: "./src/assets/competitions/blockchain.webp" },
    { title: "Virtual Trading Competition", image: "./src/assets/competitions/trading.jpeg" },
];

function Competitions() {
    return (
        <section className="competitions-bg py-16 text-white">
            <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Competitions</h2>
                <div className="tech-frame-alt">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {competitions.map((competition, index) => (
                            <div key={index} className="glow-card">
                                <div
                                    className="card-image"
                                    style={{
                                        backgroundImage: `url(${competition.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></div>
                                <h3 className="card-title">{competition.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Competitions;
