import { useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FirstSection from "../components/FirstSection";

async function handleBuy(formData) {
  try {
    const response = await axios.post("https://api.kingfix.name.ng/api/buy", formData);
    return response.data;
  } catch (error) {
    return error.response?.data || { error: "Something went wrong" };
  }
}

function BuyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    phoneBrand: "",
    phoneType: "", // Corrected from PhoneType
    message: ""
  });

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

    // Validation checks
    if (!formData.name.trim()) tempError.name = "Please enter your name.";
    if (!formData.email.trim()) tempError.email = "Email is required.";
    if (!formData.phone.trim()) tempError.phone = "Phone number is required.";
    if (!formData.phoneType.trim()) tempError.phoneType = "Choose your phone type.";
    if (!formData.phoneBrand.trim()) tempError.phoneBrand = "Choose your phone Brand.";
    if (!formData.message.trim()) tempError.message = "Describe the phone problem.";

    if (Object.keys(tempError).length > 0) {
      setError(tempError);
      return;
    }

    const output = await handleBuy(formData); // Uncommented the API call

    if (output?.error) {
      setError({ message: output.error });
    } else {
      setSuccess("Your request was sent. We'll reach out shortly!");
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        phoneType: "", 
        phoneBrand: "", 
        message: "" 
      });
    }
  };

  return (
    <>
      <NavBar />
      <FirstSection title="Get A Phone at A Very affordable Price - bigaStores" content = "Buy"/>
      
      <div className="flex justify-center items-center min-h-screen bg-yellow-100 px-4">
        <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full space-y-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Phone Buy  Request</h2>
          <p className="text-center text-sm text-gray-600">
            Fill this form and we might buy your phone!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
            </div>

            {/* Phone Type Input */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone Model: e.g Spark 8c</label>
              <input 
                type="text"
                name="phoneType"
                value={formData.phoneType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {error.phoneType && <p className="text-red-500 text-sm mt-1">{error.phoneType}</p>}
            </div>

            {/* Phone Number Input */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input 
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {error.phone && <p className="text-red-500 text-sm mt-1">{error.phone}</p>}
            </div>

            {/* Phone Brand Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone Brand</label>
              <select
                name="phoneBrand"
                value={formData.phoneBrand}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">-- Select Phone Brand --</option>
                <option value="iPhone">iPhone</option>
                <option value="Samsung">Samsung</option>
                <option value="Tecno">Tecno</option>
                <option value="Infinix">Infinix</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Itel">Itel</option>
                <option value="Others">Others</option>
              </select>
              {error.phoneBrand && <p className="text-red-500 text-sm mt-1">{error.phoneBrand}</p>}
            </div>

            {/* Problem Description */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone History</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-black"
              />
              {error.message && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
            </div>

            {/* Success/Error Messages */}
            {error.message && <p className="text-red-500 text-sm">{error.message}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}

            <button
              type="submit"
              className="w-full bg-yellow-900 text-white py-2 rounded-full hover:bg-blue-800 transition"
            >
              Submit Request
            </button>
          </form>
          
          <p className="text-center text-xs text-gray-400">We’ll reach out within 24 hours. if we don't reach out please text the whatsapp number</p> 
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default BuyForm;
