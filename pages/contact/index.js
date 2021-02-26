import React, { useState, useEffect } from "react";
import kwesforms from "kwesforms";

export default function index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <>
      <div className="relative">
        <img
          src="images/heroImage3.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Whether You're <br className="hidden md:block" />
                  Selling or Buying{" "}
                  <span className="text-teal-accent-400">I can help.</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  If you prefer to call, I'm feel free to give me a call.
                </p>

                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg font-semibold ">
                  631-553-1413
                </p>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white dark:bg-gray-800 duration-500 dark:text-gray-200 rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Let's connect
                  </h3>
                  <form
                    className="kwes-form"
                    action="https://kwes.io/api/foreign/forms/FA5HE8N98hTF3VHOP1Jy"
                  >
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="name"
                        className="inline-block mb-1 font-medium dark:text-gray-300"
                      >
                        Name
                      </label>
                      <input
                        placeholder="George Clooney"
                        rules="required"
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-gray-900"
                        id="name"
                        name="firstName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="userEmail"
                        className="inline-block mb-1 font-medium dark:text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        placeholder="gc@clooney.com"
                        rules="required"
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-gray-900"
                        id="userEmail"
                        name="lastName"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="message"
                        className="inline-block mb-1 font-medium dark:text-gray-300"
                      >
                        Let's chat
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea
                          id="message"
                          name="message"
                          rows="3"
                          className="flex-grow w-full px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-gray-900"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-yellow-300"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
