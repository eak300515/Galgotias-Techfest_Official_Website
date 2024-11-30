import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Who can attend the Tech Fest?",
      answer:
        "Open to students, professionals, tech enthusiasts, and anyone eager to explore tech innovations.",
    },
    {
      question: "How do I register?",
      answer:
        "Fill out the registration form, await confirmation, complete the payment, and receive your event invite.",
    },
    {
      question: "Are there fees for workshops and competitions?",
      answer:
        "Yes, fees vary by event. Check your confirmation email for details.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-purple-800 p-6">
      <div className="relative w-full max-w-4xl p-8">
        {/* Background Glow */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-500/30 to-black/30 blur-xl rounded-3xl"></div>

        <div className="relative bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-3xl shadow-xl p-8 z-10">
          <h2
            data-aos="zoom-in"
            className="text-4xl font-extrabold text-purple-300 mb-8 text-center"
          >
            FAQs
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="relative bg-black/50 backdrop-blur-md border border-purple-500/40 rounded-lg p-6 shadow-inner"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-purple-300 text-lg font-semibold">
                    {faq.question}
                  </h3>
                  <span
                    className={`transition-transform transform ${
                      openFAQ === index ? "rotate-180" : "rotate-0"
                    } text-purple-400`}
                  >
                    ▼
                  </span>
                </div>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden mt-4"
                    >
                      <p className="text-purple-400">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
