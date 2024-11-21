import React from 'react';
import './Workshops.css';

const workshops = [
    { 
        title: "AI & Machine Learning Workshop", 
        description: "Dive into the fundamentals of Artificial Intelligence and Machine Learning, with hands-on projects to explore their real-world applications.", 
        backgroundImage: "./src/assets/workshop_cards/ai_ml.avif" 
    },
    { 
        title: "Web Development Workshop", 
        description: "Master the essentials of web development, including HTML, CSS, and JavaScript, and build your first responsive website.", 
        backgroundImage: "./src/assets/workshop_cards/web_dev.jpg" 
    },
    { 
        title: "Mobile Development Workshop", 
        description: "Learn to develop powerful and intuitive mobile applications for Android and iOS using modern tools and frameworks.", 
        backgroundImage: "./src/assets/workshop_cards/mob_dev.jpg" 
    },
    { 
        title: "Software Development Workshop", 
        description: "Understand the principles of software engineering and explore practical techniques for building robust applications.", 
        backgroundImage: "./src/assets/workshop_cards/soft_dev.webp" 
    },
    { 
        title: "iOS Development Workshop", 
        description: "Get started with iOS development and create sleek and engaging apps for Apple devices using Swift and Xcode.", 
        backgroundImage: "./src/assets/workshop_cards/ios_dev.jpg" 
    },
    { 
        title: "Game Development Workshop", 
        description: "Enter the exciting world of game development and design your first interactive game using industry-leading tools.", 
        backgroundImage: "./src/assets/workshop_cards/game_dev.webp" 
    },
    { 
        title: "Google Developer Workshop", 
        description: "Explore the ecosystem of Google technologies, including Android, Firebase, and TensorFlow, to build impactful applications.", 
        backgroundImage: "./src/assets/workshop_cards/gogogo.webp" 
    },
    { 
        title: "Cybersecurity Workshop", 
        description: "Discover the essentials of cybersecurity, from identifying threats to implementing secure practices to protect data and systems.", 
        backgroundImage: "./src/assets/workshop_cards/cyber.webp" 
    },
    { 
        title: "Microsoft Technology Workshop", 
        description: "Dive into the Microsoft technology stack, including Azure, .NET, and Power Platform, to create cutting-edge solutions.", 
        backgroundImage: "./src/assets/workshop_cards/microsoft_tech.jpeg" 
    },
    { 
        title: "Robotics and Automation Workshop", 
        description: "Build and program robots while learning the principles of automation and their impact on various industries.", 
        backgroundImage: "./src/assets/workshop_cards/robotics.jpeg" 
    },
    { 
        title: "Computer Networking Workshop", 
        description: "Learn the fundamentals of computer networks, from protocols to practical setups, and troubleshoot network issues effectively.", 
        backgroundImage: "./src/assets/workshop_cards/comp_net.jpg" 
    },
    { 
        title: "Data Science Workshop", 
        description: "Discover the power of data science by analyzing real-world datasets and building predictive models using Python.", 
        backgroundImage: "./src/assets/workshop_cards/data_sc.jpg" 
    },
    { 
        title: "AR/VR Workshop", 
        description: "Step into the immersive world of Augmented and Virtual Reality and learn how to create engaging AR/VR experiences.", 
        backgroundImage: "./src/assets/workshop_cards/ar_vr.webp" 
    },
    { 
        title: "Cloud Computing Workshop", 
        description: "Gain hands-on experience with cloud platforms and learn to deploy scalable applications using AWS, Azure, or GCP.", 
        backgroundImage: "./src/assets/workshop_cards/cloud_comp.png" 
    },
    { 
        title: "Gene Cloning Workshop", 
        description: "Explore the fascinating world of biotechnology by learning the fundamentals of gene cloning, DNA manipulation, and genetic engineering techniques.", 
        backgroundImage: "./src/assets/workshop_cards/gene_clone.jpeg" 
    },
    { 
        title: "Digital Forensics Workshop", 
        description: "Delve into the field of digital forensics to uncover techniques for investigating cybercrimes and recovering critical evidence from digital devices.", 
        backgroundImage: "./src/assets/workshop_cards/digital_forensics.png" 
    }
];


function Workshops() {
    return (
        <section className="bg py-16 text-white">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center mb-12">Workshops</h2>
                <div className="tech-frame">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {workshops.map((workshop, index) => (
                            <div key={index} className="flip-card">
                                <div className="flip-card-inner">
                                    <div
                                        className="flip-card-front"
                                        style={{
                                            backgroundImage: `url(${workshop.backgroundImage})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                        <div className="card-title-strip">
                                            <h3 className="text-lg font-semibold">{workshop.title}</h3>
                                        </div>
                                    </div>
                                    <div
                                        className="flip-card-back"
                                        style={{
                                            backgroundImage: `url(${workshop.backgroundImage})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            
                                        }}
                                    >
                                        <p className="description-text">{workshop.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Workshops;
