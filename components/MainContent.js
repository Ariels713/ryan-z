import React from "react";

export default function MainContent() {
  return (
    <div>
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl title">
            Your Dream Home Awaits{" "}
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            As a realtor, I aim to find the right home at the right price for
            you. I have lived in North Bergen for over five years and plan on
            staying for much longer. Let's find your dream home together.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root  rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center ">
                        {/* <!-- Heroicon name: outline/lock-closed --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                        >
                          <title>bank-statement</title>
                          <g>
                            <path
                              fill="#ffffff"
                              d="M10.75 1.33h46.44v61.18h-50.43v-61.18h3.99z"
                            ></path>
                            <path
                              d="M47.88 43.89h-31.92a1.33 1.33 0 0 0 0 2.66h31.92a1.33 1.33 0 0 0 0-2.66z"
                              fill="#b3b3b3"
                            ></path>
                            <path
                              d="M30.59 51.87h-14.63a1.33 1.33 0 0 0 0 2.66h14.63a1.33 1.33 0 0 0 0-2.66z"
                              fill="#b3b3b3"
                            ></path>
                            <path
                              d="M47.88 35.91h-31.92a1.33 1.33 0 0 0 0 2.66h31.92a1.33 1.33 0 0 0 0-2.66z"
                              fill="#b3b3b3"
                            ></path>
                            <path
                              d="M47.88 27.93h-1.33v-7.98h-2.66v7.98h-2.66v-7.98h-2.66v7.98h-2.66v-7.98h-2.66v7.98h-2.66v-7.98h-2.66v7.98h-1.33a1.33 1.33 0 0 0 0 2.66h21.28a1.33 1.33 0 0 0 0-2.66z"
                              fill="#82adb2"
                            ></path>
                            <path
                              d="M48.47 13.44l-10.64-5.32a1.33 1.33 0 0 0-1.18 0l-10.64 5.32a1.33 1.33 0 0 0-0.74 1.19v1.33a1.33 1.33 0 0 0 1.33 1.33h21.28a1.33 1.33 0 0 0 1.33-1.33v-1.33a1.33 1.33 0 0 0-0.74-1.19z"
                              fill="#82adb2"
                            ></path>
                          </g>
                        </svg>{" "}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900 tracking-tight">
                      Finance
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Let me help you get prequalfied for your dream home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root  rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center ">
                        {/* <!-- Heroicon name: outline/refresh --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                        >
                          <title>mortgage</title>
                          <g>
                            <path
                              d="M41.23 1.33l-13.3 11.08v19.51a1.33 1.33 0 0 0 1.33 1.33h7.98v-9.31h7.98v9.31h7.98a1.33 1.33 0 0 0 1.33-1.33v-19.51z"
                              fill="#6ca5b7"
                            ></path>
                            <path
                              d="M61.35 39.81a4.35 4.35 0 0 0-5.11-0.81l-11.34 5.67a6.95 6.95 0 0 1-6.08 4.75l-14.76 1.06h-0.1a1.33 1.33 0 0 1-0.09-2.66l0.1-0.01 14.64-0.76a4.29 4.29 0 0 0 0-8.55l-13.7-2.49a10.67 10.67 0 0 1-1.84-0.5l-7.36-2.77a10.64 10.64 0 0 0-4.91-0.61l-8.26 0.92a1.33 1.33 0 0 0-1.18 1.32v16.09a1.33 1.33 0 0 0 1.33 1.33h1.11a10.64 10.64 0 0 1 5.36 1.45l9.94 5.81a10.64 10.64 0 0 0 7.55 1.22l18.96-3.99a10.66 10.66 0 0 0 4.2-1.9l11.01-8.26a4.25 4.25 0 0 0 0.84-5.95 4.01 4.01 0 0 0-0.31-0.36z"
                              fill="#f5c09a"
                            ></path>
                            <path
                              fill="#4d8b9d"
                              d="M27.93 12.41v5.2l13.3-11.09 13.3 11.09v-5.2l-13.3-11.08-13.3 11.08z"
                            ></path>
                            <path
                              d="M57.19 15.96a1.33 1.33 0 0 1-0.85-0.31l-15.11-12.59-15.11 12.59a1.33 1.33 0 1 1-1.7-2.04l15.96-13.3a1.33 1.33 0 0 1 1.7 0l15.96 13.3a1.33 1.33 0 0 1-0.85 2.35z"
                              fill="#6ca5b7"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900 tracking-tight">
                      Dream Homes
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Buying a bigger home doesn’t mean spending more money.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root  rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center">
                        {/* <!-- Heroicon name: outline/shield-check --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                        >
                          <title>d-chart</title>
                          <g>
                            <path
                              fill="#bce2ea"
                              d="M9.31 55.86h-2.66a1.33 1.33 0 0 1-1.33-1.33v-5.32a1.33 1.33 0 0 1 1.33-1.33h2.66a1.33 1.33 0 0 1 1.33 1.33v5.32a1.33 1.33 0 0 1-1.33 1.33z"
                            ></path>
                            <path
                              fill="#78a8c9"
                              d="M25.27 55.86h-2.66a1.33 1.33 0 0 1-1.33-1.33v-18.62a1.33 1.33 0 0 1 1.33-1.33h2.66a1.33 1.33 0 0 1 1.33 1.33v18.62a1.33 1.33 0 0 1-1.33 1.33z"
                            ></path>
                            <path
                              fill="#bce2ea"
                              d="M41.23 55.86h-2.66a1.33 1.33 0 0 1-1.33-1.33v-31.92a1.33 1.33 0 0 1 1.33-1.33h2.66a1.33 1.33 0 0 1 1.33 1.33v31.92a1.33 1.33 0 0 1-1.33 1.33z"
                            ></path>
                            <path
                              fill="#78a8c9"
                              d="M57.19 55.86h-2.66a1.33 1.33 0 0 1-1.33-1.33v-45.22a1.33 1.33 0 0 1 1.33-1.33h2.66a1.33 1.33 0 0 1 1.33 1.33v45.22a1.33 1.33 0 0 1-1.33 1.33z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900 tracking-tight">
                      Comps{" "}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Up to date comparables to help you find a fair value for
                      your home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root  rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3">
                        {/* <!-- Heroicon name: outline/cog --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                        >
                          <title>cheque</title>
                          <g>
                            <path
                              fill="#BFDEE0"
                              d="M61.18 62.51h-58.52a1.33 1.33 0 0 1-1.33-1.33v-25.27a1.33 1.33 0 0 1 1.33-1.33h58.52a1.33 1.33 0 0 1 1.33 1.33v25.27a1.33 1.33 0 0 1-1.33 1.33z"
                            ></path>
                            <path
                              fill="#444444"
                              d="M51.87 45.22h-21.28a1.33 1.33 0 1 1 0-2.66h21.28a1.33 1.33 0 1 1 0 2.66z"
                            ></path>
                            <path
                              fill="#444444"
                              d="M51.87 54.53h-39.9a1.33 1.33 0 1 1 0-2.66h39.9a1.33 1.33 0 1 1 0 2.66z"
                            ></path>
                            <path
                              fill="#444444"
                              d="M36.85 27.86l-5.32-5.32a1.33 1.33 0 0 0-1.88 0l-15.96 15.96c-1.66 1.66-1.91 4.18-0.8 6.12l-1.86 1.86a1.33 1.33 0 1 0 1.88 1.88l1.86-1.86a5.09 5.09 0 0 0 2.52 0.69c1.3 0 2.61-0.5 3.6-1.49l15.96-15.96a1.33 1.33 0 0 0 0-1.88z"
                            ></path>
                            <path
                              fill="#EFD358"
                              d="M47.88 31.46a1.33 1.33 0 0 1-0.94-2.27l9.7-9.7-3.05-3.05a1.33 1.33 0 1 1 1.88-1.88l3.99 3.99a1.33 1.33 0 0 1 0 1.88l-10.64 10.64a1.33 1.33 0 0 1-0.94 0.39z"
                            ></path>
                            <path
                              fill="#636363"
                              d="M55.47 3.92a8.86 8.86 0 0 0-12.52 0l-15.96 15.96a1.33 1.33 0 0 0 0 1.88l10.64 10.64a1.33 1.33 0 0 0 1.88 0l15.96-15.96a8.86 8.86 0 0 0 0-12.52z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900 tracking-tight">
                      Sell{" "}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Past performance is a guarantee of future success.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root  rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 ">
                        {/* <!-- Heroicon name: outline/server --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                        >
                          <title>real-estate</title>
                          <g>
                            <path
                              d="M9.62 11.13a1.33 1.33 0 0 1 1.02-0.49h23.77a9.98 9.98 0 1 1 0 9.31h-4.83l-2.38 1.2a1.33 1.33 0 0 1-1.33-0.1l-3.26-2.16-3.25 2.16a1.33 1.33 0 0 1-1.33 0.08l-2.39-1.18h-3.67a1.33 1.33 0 0 1-1.3-1.06l-1.33-6.65a1.33 1.33 0 0 1 0.28-1.11z m36.27 7.49a3.33 3.33 0 1 0-3.33-3.33 3.33 3.33 0 0 0 3.32 3.33z"
                              fill="#b3b3b3"
                            ></path>
                            <path
                              d="M5.31 44.24l23.3 2.02a10.64 10.64 0 0 0 6.2-1.36l6.42-3.67h-14.99a3.63 3.63 0 0 1-3.63-3.63 3.63 3.63 0 0 1 2.97-3.58l13.46-2.53a53.19 53.19 0 0 1 9.8-0.9h11.01v19.26l-21.88 9.12a12.77 12.77 0 0 1-7.57 0.27l-29.07-11.36a3.66 3.66 0 0 1 3.98-3.64z"
                              fill="#eebc99"
                            ></path>
                            <path
                              d="M54.53 55.86h6.65a1.33 1.33 0 0 0 1.33-1.33v-25.27a1.33 1.33 0 0 0-1.33-1.33h-6.65a1.33 1.33 0 0 0-1.33 1.33v25.27a1.33 1.33 0 0 0 1.33 1.33z"
                              fill="#5a7a84"
                            ></path>
                            <path
                              fill="#e6e6e6"
                              d="M9.55 13.3h23.7v2.66h-23.17l-0.53-2.66z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900 tracking-tight">
                      Buy
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root  rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 ">
                        {/* <!-- Heroicon name: outline/cloud-upload --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                        >
                          <title>comment-add</title>
                          <g>
                            <path
                              d="M58.52 9.31h-45.22a3.99 3.99 0 0 0-3.99 3.99v46.55a1.33 1.33 0 0 0 2.18 1.02l15.59-12.99h31.44a3.99 3.99 0 0 0 3.99-3.99v-30.59a3.99 3.99 0 0 0-3.99-3.99z"
                              fill="#bfdee0"
                            ></path>
                            <path
                              d="M1.33 14.63a13.3 13.3 0 1 0 13.3-13.3 13.3 13.3 0 0 0-13.3 13.3z"
                              fill="#72c1c4"
                            ></path>
                            <path
                              d="M15.96 9.31v3.99h3.99a1.33 1.33 0 0 1 0 2.66h-3.99v3.99a1.33 1.33 0 0 1-2.66 0v-3.99h-3.99a1.33 1.33 0 0 1 0-2.66h3.99v-3.99a1.33 1.33 0 0 1 2.66 0z"
                              fill="#fff"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900 tracking-tight">
                      Advice
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
