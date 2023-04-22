import React, { useContext } from "react";
import TelegramIcon from "../../assets/logos/telegram.png";
import GithubIcon from "../../assets/logos/github.png";
import InstagramIcon from "../../assets/logos/instagram.png";
import { AuthContext } from "../../Context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  // const image =
  //   "https://i.pinimg.com/736x/bf/14/ea/bf14ea2a55137bde0e7c9decd516734a.jpg";

  // const name = user.name;
  // const bio = "React Developer";
  // const email = user.email;

  return (
    // <div className="container h-screen flex">
    //   {/* Profile Section  */}
    //   <div className="profile__section h-5/6 w-1/4">
    //     {/* Profile Card  */}
    //     <div className="profile__card card bg-base-200 h-1/2 items-center shadow-2xl mt-8">
    //       <img
    //         src={image}
    //         alt={name}
    //         className="w-40 h-40 rounded-full object-cover mb-6 mt-8 "
    //       />
    //       <h1 className="text-2xl font-bold mb-1">{name}</h1>
    //       <span className="w-24 border-b-4 border-primary mb-2"></span>
    //       <p className="text-gray-600 text-lg mb-8">{bio}</p>
    //     </div>

    //     {/* Social Icons  */}
    //     <div className="social__icons h-1/2 flex flex-col justify-end items-center">
    //       <h1 className="text-xl font-bold mb-1">Let's Connect: </h1>
    //       <span className="w-24 border-b-4 border-secondary mb-2"></span>

    //       <div class="social-icons flex w-full justify-evenly m-8">
    //         <a href="https://t.me/Tapas_20" target="_blank">
    //           <img
    //             src={TelegramIcon}
    //             alt="Telegram logo"
    //             className="w-8 hover:-translate-y-1"
    //           />
    //         </a>
    //         <a href="https://github.com/tapas-code" target="_blank">
    //           <img
    //             src={GithubIcon}
    //             alt="Github logo"
    //             className="w-8 hover:-translate-y-1"
    //           />
    //         </a>
    //         <a href="https://www.instagram.com/cinechrons/" target="_blank">
    //           <img
    //             src={InstagramIcon}
    //             alt="Instagram logo"
    //             className="w-8 hover:-translate-y-1"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    //   {/* User Details Section  */}
    //   <div className="user__section h-5/6 w-3/4 mt-8 ml-4 p-4">
    //     <div className="flex flex-col items-center">
    //       <h1 className="text-4xl font-bold ">About Me!</h1>
    //       <p className="text-center mt-8 w-2/3">
    //         A skilled React developer who creates efficient, responsive, and
    //         user-friendly web applications with a strong attention to detail and
    //         problem-solving abilities.
    //       </p>
    //     </div>
    //     <div className="form-control ml-16">
    //       <label className="label mt-12">
    //         <span className="label-text">Your Email</span>
    //       </label>
    //       <label className="input-group">
    //         <span>Email</span>
    //         <input
    //           type="text"
    //           placeholder={email}
    //           className="input input-bordered cursor-not-allowed"
    //           title="Cannot be modified"
    //           readOnly
    //         />
    //       </label>

    //       <label className="label mt-8">
    //         <span className="label-text">Your Name</span>
    //       </label>
    //       <label className="input-group">
    //         <span>Name</span>
    //         <input
    //           type="text"
    //           placeholder="John Doe"
    //           className="input input-bordered"
    //         />
    //       </label>

    //       <label className="label mt-8">
    //         <span className="label-text">Your Skills</span>
    //       </label>
    //       <label className="input-group">
    //         <span>Skills</span>
    //         <input
    //           type="text"
    //           placeholder="NodeJs"
    //           className="input input-bordered"
    //         />
    //       </label>
    //     </div>
    //     <div className="flex items-center justify-center mt-20">
    //       <button className="btn btn-outline btn-success w-40">Submit</button>
    //     </div>
    //   </div>
    // </div>
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
        <div class="mt-5 text-center border-b pb-12">
          {" "}
          <h1 class="text-4xl font-medium text-gray-700">{user?.name}</h1>{" "}
          <p class="font-light text-gray-600 mt-3">{user?.position}</p>{" "}
          <div class="mt-8 text-gray-500"></div>
          <div class="mt-12 flex flex-col justify-center">
            <p class="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>
            <div className="Add_User_Button flex justify-center my-4">
              <button
                // onClick={() => setShowDocModal(true)}
                htmlFor="my-modal"
                className="bg-gradient-to-r from-sky-400  to-purple-500 text-white uppercase text-sm font-semibold px-4 py-2 rounded flex items-center cursor-pointer"
                // value="Login"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
