import React, { useState } from 'react'

const UpdateUserModal = ({ setShowUpdateUserModel }) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleUpdateUser = (e) => {
        e.preventDefault();
        console.log('user updated')
        setIsLoading(true);
    }

  return (
    <div>
    <div className="flex justify-end right-0 mt-5 mb-4 mr-12">
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box">
            <div className="relative mb-10">
            <div className=" modal-action absolute top-0 right-0 ">
                <button
                className="btn btn-circle bg-red-500 border-none"
                onClick={() => setShowUpdateUserModel(false)}
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                </button>
            </div>
            </div>
            <h2 className="font-bold bg-clip-text font-sans text-2xl text-center mb-8 ">
            Update User
            </h2>

            <form className="w-full max-w-lg" onSubmit={handleUpdateUser}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                >
                    Name
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter Full Name"
                />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                >
                    Email
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-mobile"
                >
                    Phone
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-mobile"
                    type="number"
                    name="mobile"
                    placeholder="Enter Phone Number"
                    required
                />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    Password
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                </div>
            </div>

            <div class="mt-3 text-center">
                <button
                disabled={isLoading}
                type="submit"
                class={`mx-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                    isLoading && "cursor-not-allowed"
                }`}
                >
                {isLoading ? (
                    <>
                    <div className="flex items-center justify-center">
                        <div className="inline-block h-7 w-7 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                        </div>
                    </div>
                    </>
                ) : (
                    "Submit"
                )}
                </button>
            </div>
            </form>

            <div className="modal-action"></div>
        </div>
        </div>
    </div>
    </div>

  )
}

export default UpdateUserModal
