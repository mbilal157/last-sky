"use client";

const Contact = () => {
  return (
    <section className="w-full min-h-screen py-16 px-20 bg-gray-950">
      {/* Header */}
      <div className="text-center mb-12 ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-400 mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-200 text-lg max-w-2xl mx-auto">
          Have a project in mind? We&apos;d love to hear from you. Let&apos;s
          turn your vision into reality!
        </p>
      </div>

      {/* Contact Form and Info */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-200">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full p-3 border-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full p-3 border-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-200">
              Message
            </label>
            <textarea
              rows={5}
              required
              className="w-full p-3 border-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-gray-200 font-semibold rounded-md transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-200">
              Skyline Production <br />
              Lahore, Pakistan
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Email</h3>
            <p className="text-blue-600">contact@skylineproduction.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Phone</h3>
            <p className="text-blue-600">+92 300 1234567</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {/* Replace with real links later */}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Facebook
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Instagram
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
