import React from 'react'

const Profile = () => {

    const image = 'https://i.pinimg.com/550x/b4/23/ee/b423ee8161ffc5c8310f8a4b4c993734.jpg';
    const name = 'Hinata Hyuga';
    const bio = 'React Developer';

  return (
    <div className="container flex flex-row">
        {/* Profile card  */}
        <div className='card max-h-80 mt-8 flex flex-col justify-center items-center  bg-base-200 w-60 '>
            <img src={image} alt={name} className="w-40 h-40 rounded-full object-cover mb-6 mt-8" />
            <h1 className="text-2xl font-bold mb-1">{name}</h1>
            <span className='w-24 border-b-4 border-primary mb-2'></span>
            <p className="text-gray-600 text-lg mb-8">{bio}</p>
        </div>

         {/* Bio and Skills section */}
        <div className='mx-8 my-8 w-2/3 flex flex-col items-center align-center'>
            <h1 className="text-3xl font-bold">About Me</h1>
            <span className='w-20 border-b-4 border-primary mb-4'></span>

            <div className='flex mr-64 justify-center items-center'>
                <div className="form-control mt-8 w-56">
                    <label className="label">
                        <span className="label-text">Your bio</span>
                    </label>
                    <textarea className="textarea textarea-primary h-76" placeholder="Bio"></textarea>
                </div>
                <button className='btn btn-sm btn-accent w-20 mt-28 mx-8'>Save</button>
            </div>


        </div>
        
     </div>
  );
}

export default Profile
