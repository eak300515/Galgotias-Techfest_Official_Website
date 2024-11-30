import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const RegistrationForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    fieldOfInterest: "",
    workshop: "",
    competitions: "",
    accommodation: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.fieldOfInterest) newErrors.fieldOfInterest = "Field of Interest is required.";
    if (!formData.workshop) newErrors.workshop = "Workshop selection is required.";
    if (!formData.competitions) newErrors.competitions = "Competitions selection is required.";
    if (!formData.accommodation) newErrors.accommodation = "Accommodation selection is required.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(
          "https://galgotias-techfest-official-website-5rm4.onrender.com/api/registrations",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          setSuccessMessage("Registration Successful!");
          setTimeout(() => setSuccessMessage(""), 3000);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            fieldOfInterest: "",
            workshop: "",
            competitions: "",
            accommodation: "",
          });
        } else {
          alert("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center px-6 py-8"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?technology')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        data-aos="fade-up"
        className="relative w-full max-w-4xl bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-10"
      >
        <h2
          data-aos="zoom-in"
          className="text-4xl font-extrabold text-white text-center mb-8"
        >
          Join the Tech Fest 🚀
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="firstName" className="block text-white font-semibold mb-2">
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your First Name"
                className="w-full bg-white/30 border border-white/50 rounded-xl p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
              {errors.firstName && (
                <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-white font-semibold mb-2">
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your Last Name"
                className="w-full bg-white/30 border border-white/50 rounded-xl p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
              {errors.lastName && (
                <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your_email@example.com"
                className="w-full bg-white/30 border border-white/50 rounded-xl p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="block text-white font-semibold mb-2">
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Contact No."
                className="w-full bg-white/30 border border-white/50 rounded-xl p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div>
              <label htmlFor="address" className="block text-white font-semibold mb-2">
                Address*
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your Address"
                rows="3"
                className="w-full bg-white/30 border border-white/50 rounded-xl p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              ></textarea>
              {errors.address && (
                <p className="text-red-400 text-sm mt-1">{errors.address}</p>
              )}
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
                name="fieldOfInterest"
                value={formData.fieldOfInterest}
                onChange={handleChange}
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              >
                <option value="">Select Interest</option>
                <option>Tech</option>
                <option>Robotics</option>
                <option>AI</option>
                <option>BioTech</option>
                <option>Other</option>
              </select>
              {errors.fieldOfInterest && <p className="text-red-500 text-sm">{errors.fieldOfInterest}</p>}
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
                name="workshop"
                value={formData.workshop}
                onChange={handleChange}
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              >
                <option value="">Select Workshop</option>
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
              {errors.workshop && <p className="text-red-500 text-sm">{errors.workshop}</p>}
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
                name="competitions"
                value={formData.competitions}
                onChange={handleChange}
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              >
                <option value="">Select Competition</option>
                <option>Esports Gaming Competition</option>
                <option>Robowars-Robotics Competition</option>
                <option>Ideates-AI & Sustainability Solutions</option>
                <option>Hackathon</option>
                <option>Tech Olympiads</option>
                <option>Robotics Building</option>
                <option>DeepTech & Blockchain Competition</option>
                <option>Virtual Trading Competition</option>
              </select>
              {errors.competitions && <p className="text-red-500 text-sm">{errors.competitions}</p>}
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
                name="accommodation"
                value={formData.accommodation}
                onChange={handleChange}
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              >
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              {errors.accommodation && <p className="text-red-500 text-sm">{errors.accommodation}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            Register Now
          </button>

          {successMessage && (
            <div className="mt-8 p-4 bg-green-100 border-l-4 border-green-500 text-green-800 rounded-lg">
              {successMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;