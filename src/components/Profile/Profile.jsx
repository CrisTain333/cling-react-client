import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div class=" p-16">
      <div class="p-8 bg-white shadow mt-10">
        {" "}
        <div class="">
          <div class="flex justify-around ">
            {" "}
            <div class="w-32 bg-indigo-100 mx-auto rounded-full shadow-md -mt-24  flex items-center justify-center text-indigo-500">
              <img src={user?.profilePicture} alt="" />
            </div>
          </div>
        </div>{" "}
        <div class="mt-5 text-center  pb-5">
          {" "}
          <h1 class="text-3xl font-mono font-semibold  text-gray-700">
            {user?.name}
          </h1>{" "}
          <p class="font-light text-gray-600 mt-3">{user?.position}</p>{" "}
          <div class="mt-8 text-gray-500"></div>
          <div class="mt-4 flex flex-col justify-center">
            <p class="text-gray-600 text-center font-light text-lg font-mono lg:px-16">
              {user?.bio}
            </p>
            <div className="Add_User_Button flex justify-center my-4">
              <Link to="/profile/edit">
                <button className="bg-gradient-to-r from-sky-400  to-purple-500 text-white uppercase text-sm font-semibold px-4 py-2 rounded flex items-center cursor-pointer">
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
