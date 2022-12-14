import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div className="space-y-4 my-8">
            <details className="group border-l-4 border-indigo-500 bg-gray-50 p-6 w-1/2 mx-auto" open>
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                        What are the different ways to manage a state in a React application?
                    </h2>
                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    The Four Kinds of React State to Manage Local state. Global state. Server state. URL state.
                    React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.
                </p>
            </details>

            <details className="group border-l-4 border-indigo-500 bg-gray-50 p-6 w-1/2 mx-auto">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                        How does prototypical inheritance work?
                    </h2>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </p>
            </details>

            <details className="group border-l-4 border-indigo-500 bg-gray-50 p-6 w-1/2 mx-auto">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                        What is a unit test? Why should we write unit tests?
                    </h2>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
            </details>

            <details className="group border-l-4 border-indigo-500 bg-gray-50 p-6 w-1/2 mx-auto">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                        React vs. Angular vs. Vue?
                    </h2>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                    One of the main reasons for the popularity of React is that it works very efficiently with the DOM. Vue also uses the virtual DOM, but compared to React, Vue has better performance and stability.
                </p>
            </details>
            <Helmet>
                <title>Blog</title>
            </Helmet>
        </div>

    );
};

export default Blog;