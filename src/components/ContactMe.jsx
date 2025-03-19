import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Replace these with your EmailJS credentials
  const SERVICE_ID = "service_w5x5p2k";
  const TEMPLATE_ID = "template_rzf5wm9";
  const PUBLIC_KEY = "GKJZIyFb3gTmy6bFN";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        //console.log(result.text);
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
        setIsLoading(false);
        setTimeout(() => setIsSent(false), 3000);
      },
      (error) => {
        //console.log(error.text);
        setIsLoading(false);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-4">
      <div className="max-w-md w-full rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Contact Me
        </h1>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-amber-50"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-amber-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
              placeholder="your@email.com"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="text-amber-50 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
              placeholder="Your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={` custom-button w-full py-3 px-4 rounded-lg text-white font-semibold transition-all duration-300 ${
              isLoading
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg"
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          {isSent && (
            <div className="text-center text-green-600 font-medium animate-fade-in">
              Message sent successfully!
            </div>
          )}
        </form>

        {/* Optional Contact Info */}
        <div className="mt-6 text-center text-gray-600">
          <p>Or reach us at:</p>
          <p className="text-indigo-600">aadilaslam1807@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
