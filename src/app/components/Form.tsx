import React from "react";

const Form = () => {
  return (
    <div className="form-container max-w-md mx-auto bg-white border border-black rounded-2xl p-6 shadow-md">
      <form className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Phone Input */}
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={5}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
