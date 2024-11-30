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
      <div className="w-full max-w-3xl">
        {/* Header Section */}
        <h2 className="text-center text-4xl font-extrabold text-purple-300 mb-8">
          Frequently Asked Questions
        </h2>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className={`rounded-xl border ${
                openFAQ === index ? "border-purple-500" : "border-transparent"
              } bg-gradient-to-r from-purple-800 via-black to-purple-900 p-4 shadow-lg transition-all duration-300`}
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-semibold text-purple-300">
                  {faq.question}
                </h3>
                <motion.span
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  className="text-purple-400"
                >
                  ▼
                </motion.span>
              </div>
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4"
                  >
                    <p className="text-purple-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
