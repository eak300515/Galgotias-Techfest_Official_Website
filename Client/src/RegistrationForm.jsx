import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS

const RegistrationForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-purple-800 p-6">
      <div
        data-aos="fade-up"
        className="relative w-full max-w-3xl bg-black/80 rounded-lg shadow-lg overflow-hidden p-8"
      >
        {/* Glowing Border */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-700 via-black to-purple-900 blur-lg opacity-50"></div>

        <h2
          data-aos="zoom-in"
          className="relative text-4xl font-extrabold text-purple-300 mb-6 text-center z-10"
        >
          Register Now to Secure Your Spot!
        </h2>

        <p className="relative text-center text-purple-400 mb-8 z-10 text-sm">
          1. Register: Complete the Registration Form <br />
          2. Confirmation: Wait for confirmation on your registered email <br />
          3. Payment: Follow the link in your email to confirm your spot <br />
          4. Receive Invite: Get your invite to the Tech Fest
        </p>

        <form className="relative z-10 space-y-6">
          {/* Personal Details */}
          <div className="space-y-4">
            <h3 className="text-purple-300 text-lg font-semibold">
              Personal Details
            </h3>
            <div>
              <label
                htmlFor="firstName"
                className="block text-purple-200 font-semibold mb-2"
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your First Name"
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white placeholder-purple-500 focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-purple-200 font-semibold mb-2"
              >
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your Last Name"
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white placeholder-purple-500 focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-purple-200 font-semibold mb-2"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="your_email@example.com"
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white placeholder-purple-500 focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-purple-200 font-semibold mb-2"
              >
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter Contact No."
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white placeholder-purple-500 focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-purple-200 font-semibold mb-2"
              >
                Address*
              </label>
              <textarea
                id="address"
                placeholder="Enter Your Address"
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white placeholder-purple-500 focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
                rows="3"
              ></textarea>
            </div>
          </div>

          {/* Event-Specific Information */}
          <div className="space-y-4">
            <h3 className="text-purple-300 text-lg font-semibold">
              Event-Specific Information
            </h3>
            <div>
              <label
                htmlFor="fieldOfInterest"
                className="block text-purple-200 font-semibold mb-2"
              >
                Field of Interest*
              </label>
              <select
                id="fieldOfInterest"
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              >
                <option>Select Interest</option>
                <option>Tech</option>
                <option>Robotics</option>
                <option>AI</option>
                <option>BioTech</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="workshop"
                className="block text-purple-200 font-semibold mb-2"
              >
                Choose Your Workshop*
              </label>
              <select
                id="workshop"
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              >
                <option>Select Workshop</option>
                <option>AIML Workshop</option>
                <option>Web Dev Workshop</option>
                <option>Mob Dev Workshop</option>
                <option>Soft Dev Workshop</option>
                <option>IOS Dev Workshop</option>
                <option>Game Dev Workshop</option>
                <option>Google Developer Workshop</option>
                <option>Cyber Security Workshop</option>
                <option>Microsoft Technology Workshop</option>
                <option>Robotics and automation Workshop</option>
                <option>Computer Networking Workshop</option>
                <option>Data science Workshop</option>
                <option>AR/VR Workshop</option>
                <option>Cloud Computing Workshop</option>
                <option>Gene Cloning Workshop</option>
                <option>Digital Forensics Workshop</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="competitions"
                className="block text-purple-200 font-semibold mb-2"
              >
                Choose Your Competitions*
              </label>
              <select
                id="competitions"
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              >
                <option>Select Competition</option>
                <option>Esports Gaming Competition</option>
                <option>Robowars-Robotics Competition</option>
                <option>Ideates-AI & Sustainability Solutions</option>
                <option>Hackathon</option>
                <option>Tech Olympiads</option>
                <option>Robotics Building</option>
                <option>DeepTech & Blockchain Competition</option>
                <option>Virtual Trading Competition</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="accommodation"
                className="block text-purple-200 font-semibold mb-2"
              >
                Accommodation Required?*
              </label>
              <select
                id="accommodation"
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            data-aos="zoom-in"
            className="w-full p-3 mt-6 bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-700 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Submit Registration
          </button>

          {/* Already Have Account */}
          <p
          data-aos="fade-up"
          className="text-center text-purple-400 mt-6 text-sm"
        >
          Already have an account?{" "}
          <a href="#" className="text-purple-300 underline">
            Login
          </a>
        </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
