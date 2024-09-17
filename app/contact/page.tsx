"use client";

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  // Formik initialization with validation schema
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      desc: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(2, 'Name should be at least 2 characters'),
      phone: Yup.string()
        .required('Phone is required')
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email address'),
      desc: Yup.string()
        .required('Description is required')
        .min(10, 'Description should be at least 10 characters'),
    }),
    onSubmit: async (values) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      if(result.success){
        alert('Data has been sent successfully!');
        formik.resetForm();
        console.log(result); // Handle the response from the server
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            ) : null}
          </div>

          {/* Phone Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.phone && formik.errors.phone ? (
              <p className="text-red-500 text-sm">{formik.errors.phone}</p>
            ) : null}
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="desc"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={formik.values.desc}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.desc && formik.errors.desc ? (
              <p className="text-red-500 text-sm">{formik.errors.desc}</p>
            ) : null}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
