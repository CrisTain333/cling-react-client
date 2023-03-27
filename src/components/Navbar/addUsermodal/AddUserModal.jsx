import React from "react";
import Navbar from "../Navbar";
const UserModal = () => {
  return (
    <>
    <Navbar />
    <div className="flex justify-end right-0 mt-5 mb-4 mr-12">  
    <label htmlFor="my-modal" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add User</label>
    <input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
    
  <div className="modal-box">
  <div className="relative mb-10">
        <div className=" modal-action absolute top-0 right-0 ">
          <label htmlFor="my-modal" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Close
          </label>
        </div>
        </div>
    <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-700 font-sans text-2xl text-center mb-8 text-blue-600">Add User</h2>
    
    <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-first-name"
      >
        First Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-first-name"
        type="text"
        placeholder="First Name"
      />
      <p className="text-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-last-name"
      >
        Last Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-last-name"
        type="text"
        placeholder="Last Name"
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
        placeholder="Enter Email"
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
        type="tel"
        placeholder="Enter Phone Number"
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
        placeholder="Password"
      />
      
    </div>
  </div>
  <label for="photo-upload" class="block font-medium text-gray-700">Upload Photo</label>
  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
    <div class="space-y-1 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3.293 5.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" clip-rule="evenodd" />
        <path fill-rule="evenodd" d="M3 17a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H3zm0-2h14V5H3v10z" clip-rule="evenodd" />
      </svg>
      <div class="flex flex-col items-center text-sm text-gray-600">
        <span>Drag and drop or click to upload</span>
        <span class="mt-1">PNG, JPG up to 10MB</span>
      </div>
      <input id="photo-upload" type="file" class="sr-only"/>
      <div class="mt-3">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Upload
        </button>
      </div>
    </div>
  </div>
  
  
  <div class="mt-3 text-center">
    <button type="submit" class="mx-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
      Submit
    </button>
  </div>


      
  
</form>



<div className="modal-action">
      
    </div>

   
  </div>
</div>
          
      </div>
      </> 
)}
export default UserModal;      
