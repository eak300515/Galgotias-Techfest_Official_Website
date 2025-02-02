import React, { useState, useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS

const RegistrationForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // State to manage form data
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

  // State to handle form errors
  const [errors, setErrors] = useState({});

  // State for success message
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm();
    setErrors(validationErrors);

    // If no errors, send data to backend
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("https://galgotias-techfest-official-website-5rm4.onrender.com/api/registrations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Set success message
          setSuccessMessage("Registration Successful!");
          
          // Clear the success message after 3 seconds
          setTimeout(() => setSuccessMessage(""), 3000);

          // Optionally, you can reset the form:
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
          4. Receive Invite: Get your invite to the TechConclave 2025
        </p>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
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
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your First Name"
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white placeholder-purple-500 focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            {/* Repeat for other fields as shown below */}
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
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your Last Name"
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white placeholder-purple-500 focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your_email@example.com"
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white placeholder-purple-500 focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Contact No."
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white placeholder-purple-500 focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
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
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter Your Address"
                className="w-full p-3 bg-black/60 border border-purple-600 rounded-lg text-white placeholder-purple-500 focus:outline-none focus:ring focus:ring-purple-700 transition-all duration-300"
                rows="3"
              ></textarea>
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
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
            data-aos="zoom-in"
            className="w-full p-3 mt-6 bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-700 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Submit Registration
          </button>

          {/* Success message */}
          {successMessage && (
            <div className="mt-4 p-2 text-center text-green-700 bg-green-100 border border-green-300 rounded-md">
              {successMessage}
            </div>
          )}

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
  );
};

export default RegistrationForm;