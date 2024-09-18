"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner, FaUser, FaPhoneAlt, FaEnvelope, FaRegCommentDots, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      desc: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(2, "Name should be at least 2 characters"),
      phone: Yup.string()
        .required("Phone is required")
        .matches(
          /^\+?[0-9]{10,15}$/,
          "Phone number must be between 10 and 15 digits and may start with +"
        ),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
      desc: Yup.string()
        .required("Description is required")
        .min(10, "Description should be at least 10 characters"),
    }),
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const result = await response.json();

        if (result.success) {
          setIsLoading(false);
          toast.success("Message has been sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          formik.resetForm();
        } else {
          setIsLoading(false);
          toast.error("Failed to send data. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      } catch (error) {
        setIsLoading(false);
        toast.error("An error occurred. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    },
  });

  return (
    <div className="min-h-screen/2 bg-gradient-to-r from-blue-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl border border-gray-200 p-8">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          Contact Us
        </h2>
        
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Form Section */}
          <div className="flex-1">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className={`w-full px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formik.touched.name && formik.errors.name ? "border-red-500" : ""
                    }`}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="John Doe"
                  />
                  <FaUser className="text-gray-500 mr-3" />
                </div>
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
                ) : null}
              </div>

              {/* Phone */}
              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    className={`w-full px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formik.touched.phone && formik.errors.phone ? "border-red-500" : ""
                    }`}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="+1234567890"
                  />
                  <FaPhoneAlt className="text-gray-500 mr-3" />
                </div>
                {formik.touched.phone && formik.errors.phone ? (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
                ) : null}
              </div>

              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className={`w-full px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formik.touched.email && formik.errors.email ? "border-red-500" : ""
                    }`}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="you@example.com"
                  />
                  <FaEnvelope className="text-gray-500 mr-3" />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                ) : null}
              </div>

              {/* Description */}
              <div className="relative">
                <label htmlFor="desc" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <div className="flex items-start border border-gray-300 rounded-md">
                  <textarea
                    id="desc"
                    name="desc"
                    className={`w-full px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formik.touched.desc && formik.errors.desc ? "border-red-500" : ""
                    }`}
                    value={formik.values.desc}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Your message here..."
                  />
                  <FaRegCommentDots className="text-gray-500 mt-3 mr-3" />
                </div>
                {formik.touched.desc && formik.errors.desc ? (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.desc}</p>
                ) : null}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2 text-lg" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="flex-1 mt-8 md:mt-0">
            <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Contact Information</h3>
              <div className="mb-4 flex items-center">
                <FaMapMarkerAlt className="text-blue-500 text-2xl mr-4" />
                <p className="text-gray-700">123 Main Street, Suite 500, City, Country</p>
              </div>
              <div className="mb-4 flex items-center">
                <FaPhoneAlt className="text-blue-500 text-2xl mr-4" />
                <p className="text-gray-700">+1 (234) 567-8901</p>
              </div>
              <div className="mb-4 flex items-center">
                <FaEnvelope className="text-blue-500 text-2xl mr-4" />
                <p className="text-gray-700">contact@yourcompany.com</p>
              </div>
              <div className="flex items-center">
                <FaClock className="text-blue-500 text-2xl mr-4" />
                <p className="text-gray-700">Mon-Fri: 9 AM - 5 PM</p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="mt-8 bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
              <h3 className="text-2xl font-semibold p-6 text-gray-800">Find Us on the Map</h3>
              <iframe
                className="w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.287450671284!2d-122.41941548468168!3d37.77492927975986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c621e41ff%3A0x427e51e8824d0b42!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1637011123554!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
