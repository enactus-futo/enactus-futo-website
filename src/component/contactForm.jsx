import React from "react";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const categories = ["Inquiry", "Partnership"];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.category) newErrors.category = "Please select a category";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCategorySelect = (val) => {
    setFormData((prev) => ({ ...prev, category: val }));
    setCategoryOpen(false);
    if (errors.category) setErrors((prev) => ({ ...prev, category: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true); // add this state

    try {
      await fetch(
     
        {
          method: "POST",
          mode: "no-cors", // required for Apps Script
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-gray-700 outline-none transition-all duration-200 focus:border-[#1e1b4b] focus:ring-2 focus:ring-[#1e1b4b]/10 ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
    }`;

    useEffect(() => {
  if (!submitted) return;
  const timer = setTimeout(() => setSubmitted(false), 5000);
  return () => clearTimeout(timer);
}, [submitted]);

  return (
    <section className="py-16 px-2  md:px-8  bg-gray-50 rounded-2xl">
      <div className="max-w-xl mx-auto   p-4 sm:p-10">
        {/* Title */}
        <h2 className="text-[#1e1b4b] text-xl sm:text-3xl font-bold text-center mb-8">
          Send Us a Message
        </h2>

        {/* Success message */}
        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm text-center">
            ✅ Message sent! We'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-[#1e1b4b] mb-1.5">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={inputClass("name")}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-[#1e1b4b] mb-1.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={inputClass("email")}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-[#1e1b4b] mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 000 000 0000"
              className={inputClass("phone")}
            />
          </div>

          {/* Category dropdown */}
          <div className="relative">
            <label className="block text-sm font-semibold text-[#1e1b4b] mb-1.5">
              Category
            </label>
            <button
              type="button"
              onClick={() => setCategoryOpen((prev) => !prev)}
              className={`w-full px-4 py-3 rounded-lg border text-sm text-left flex items-center justify-between transition-all duration-200 ${
                errors.category
                  ? "border-red-400 bg-red-50"
                  : categoryOpen
                    ? "border-[#1e1b4b] ring-2 ring-[#1e1b4b]/10 bg-white"
                    : "border-gray-200 bg-white"
              } ${formData.category ? "text-gray-700" : "text-gray-400"}`}
            >
              <span>{formData.category || "Select a category"}</span>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  categoryOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown options */}
            {categoryOpen && (
              <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategorySelect(cat)}
                    className={`w-full px-4 py-3 text-sm text-left transition-colors duration-150 ${
                      formData.category === cat
                        ? "bg-[#1e1b4b] text-white font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
            {errors.category && (
              <p className="mt-1 text-xs text-red-500">{errors.category}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-[#1e1b4b] mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message here..."
              className={`${inputClass("message")} resize-none`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#F5A623] text-[#1e1b4b] font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#e09415] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 text-base"
          >
            {submitting ? (
              "Sending..."
            ) : (
              <>
                {" "}
                Send Message <Send size={18} />{" "}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
