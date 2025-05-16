import { useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

async function handleContact(formData) {
  try {
    const response = await axios.post("https://api.kingfix.name.ng/api/contact", formData);
    return response.data;
  } catch (error) {
    return error.response?.data || { error: "Something went wrong" };
  }
}

function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError((prev) => ({ ...prev, [e.target.name]: "" }));
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempError = {};
    if (!formData.name.trim()) tempError.name = "Please enter your name.";
    if (!formData.email.trim()) tempError.email = "Email address is required.";
    if (!formData.message.trim()) tempError.message = "Don't forget your message.";

    if (Object.keys(tempError).length > 0) {
      setError(tempError);
      return;
    }

    const output = await handleContact(formData);
    if (output?.error) {
      setError({ message: output.error });
    } else {
      setSuccess("Thanks for reaching out. We'll get back to you shortly!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
  <>
  <NavBar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Get in Touch</h2>
        <p className="text-center text-sm text-gray-600">
          Got a question or need help? We’d love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Tell us what's on your mind..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            {error.message && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
          </div>

          {success && <p className="text-green-600 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-full hover:bg-blue-800 transition duration-200"
          >
            Send Message
          </button>
        </form>

        <p className="text-center text-xs text-gray-400">We usually respond within 24 hours.</p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ContactUs;
