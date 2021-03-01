import React from "react";

export default function MainContent() {
  return (
    <div>
      <div className="relative bg-white dark:bg-gray-800 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-4xl title">
            Your Dream Home Awaits{" "}
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500 dark:text-gray-200">
            As a realtor, my job is to make sure you love where you life. Let’s
            find your dream home together! Live, laugh— rent, buy & sell!
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
                    <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-200 tracking-tight">
                      Finance
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-200">
                      Let me help you get prequalfied for your dream home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-10">
                <div className="flow-root  rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center ">
                        {/* <!-- Heroicon name: outline/refresh --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                        >
                          <title>home-search</title>
                          <g>
                            <path
                              d="M24,2.876,6,17.6V44a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V17.6Z"
                              fill="#e6e6e6"
                            ></path>
                            <path
                              d="M46,22a1,1,0,0,1-.632-.226L24,4.292,2.633,21.774a1,1,0,0,1-1.266-1.548l22-18a1,1,0,0,1,1.266,0l22,18A1,1,0,0,1,46,22Z"
                              fill="#2a9dcf"
                            ></path>
                            <rect
                              x="28.879"
                              y="31.05"
                              width="4.243"
                              height="9.899"
                              transform="translate(-16.376 32.464) rotate(-45)"
                              fill="#2191ce"
                            ></rect>
                            <circle
                              cx="23"
                              cy="28"
                              r="8"
                              fill="#bfdee0"
                            ></circle>
                            <path
                              d="M23,37a9,9,0,1,1,9-9A9.01,9.01,0,0,1,23,37Zm0-16a7,7,0,1,0,7,7A7.009,7.009,0,0,0,23,21Z"
                              fill="#223e49"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-200 tracking-tight">
                      Dream Homes
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-200">
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
                    <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-200 tracking-tight">
                      Comps{" "}
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-200">
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
                    <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-200 tracking-tight">
                      Sell{" "}
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-200">
                      Past performance is a guarantee of future success.
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="pt-6">
                <div className="flow-root  rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                        >
                          <title>property-agreement</title>
                          <g>
                            <rect
                              x="5"
                              y="1"
                              width="38"
                              height="46"
                              rx="2"
                              fill="#e6e6e6"
                            ></rect>
                            <path
                              d="M14,13H33.906a1,1,0,0,1,0,2H14a1,1,0,0,1,0-2Zm0,10H33.906a1,1,0,0,1,0,2H14a1,1,0,0,1,0-2Zm8,12H14a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
                              fill="#b3b3b3"
                            ></path>
                            <path
                              d="M46.6,35.2l-8-6a1,1,0,0,0-1.2,0l-8,6a1,1,0,0,0-.4.8V46a1,1,0,0,0,1,1H46a1,1,0,0,0,1-1V36A1,1,0,0,0,46.6,35.2Z"
                              fill="#47b0ea"
                            ></path>
                            <rect
                              x="36"
                              y="41"
                              width="4"
                              height="6"
                              fill="#223e49"
                            ></rect>
                          </g>
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-200 tracking-tight">
                      Buy
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-200">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
