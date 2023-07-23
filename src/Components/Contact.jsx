import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen mx-auto">
      <div className="flex items-center justify-center h-full px-4">
        <div className="sm:grid-cols-2 sm:gap-4 sm:max-w-6xl grid grid-cols-1 gap-3 px-4 mx-auto">
          <div className="sm:block flex flex-col items-center gap-4">
            <p className="dark:border-gray-200 dark:text-gray-200 sm:my-7 w-fit py-3 text-2xl duration-100 border-b-2 border-gray-800">
              Contact us
            </p>
            <p className="dark:text-gray-200 duration-100">
              If you have any questions, encounter any problems, or need
              assistance with anything related to web design and development,
              feel free to get in touch with us. We are here to help!
            </p>
          </div>
          <div className="dark:border-gray-700 dark:bg-gray-800 sm:p-6 px-6 py-2 duration-100 bg-white border border-gray-200 rounded-lg shadow-lg">
            <form
              action="https://getform.io/f/944d2a7e-983f-4979-9680-8f6572c5c959"
              method="POST"
            >
              <div className="sm:mb-4">
                <label
                  htmlFor="name"
                  className="dark:text-gray-200 block mb-2 text-gray-700 duration-100"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="dark:bg-slate-700 dark:text-gray-200 dark:border-gray-600 w-full p-2 duration-100 border border-gray-300 rounded outline-none"
                />
              </div>
              <div className="sm:mb-4">
                <label
                  htmlFor="email"
                  className="dark:text-gray-200 block mb-2 text-gray-700 duration-100"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="dark:bg-slate-700 dark:text-gray-200 dark:border-gray-600 w-full p-2 duration-100 border border-gray-300 rounded outline-none"
                />
              </div>
              <div className="sm:mb-4">
                <label
                  htmlFor="message"
                  className="dark:text-gray-200 block mb-2 text-gray-700 duration-100"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="dark:bg-slate-700 dark:text-gray-200 dark:border-gray-600 w-full p-2 duration-100 border border-gray-300 rounded outline-none"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="hover:bg-blue-600 px-4 py-2 text-white bg-blue-500 rounded"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
