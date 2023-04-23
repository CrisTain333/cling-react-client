import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { BACKEND_BASE_URL } from "../../../config/const";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const tokenStoragePath = "accessToken";
  const [selectedImage, setSelectedImage] = useState();
  const { user, getUserData } = useContext(AuthContext);
  const [updateLoader, setUpdateLoader] = useState(false);

  const token = localStorage.getItem(tokenStoragePath);

  // / Handle Select Image
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // Remove selected Image
  const handleCancel = () => {
    setSelectedImage("");
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const file = selectedImage;

    const name = form.name.value;
    const email = form.email.value;
    const position = form.position.value;
    const bio = form.bio.value;
    const formData = new FormData();
    formData.append("avatar", file);
    formData.append("email", email);
    formData.append("name", name);
    formData.append("position", position);
    formData.append("bio", bio);
    formData.append("mobile", user?.mobile);

    try {
      const res = await axios.put(
        `${BACKEND_BASE_URL}/api/v1/user/update-profile`,
        formData
      );
      console.log(res.data.status);
      if (res.data.status === 200) {
        toast.success("Profile Update Successful");
        getUserData(token);
        setSelectedImage("");
      } else {
        setSelectedImage("");
        toast.error("error Updating profile");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <div className="w-[80%] mx-auto my-10">
      <Toaster />
      <div className="p-2 border rounded-md shadow-md">
        <div className="ml-5 my-5">
          <Link to="/profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <h3 className="text-2xl font-medium text-center mb-1">User</h3>
        <hr className="w-[20%] mx-auto" />

        <form onSubmit={handleProfileUpdate}>
          <div className="mt-4">
            <div className="my-2 p-2">
              <div className="flex items-center flex-col justify-start space-x-5 ">
                <div className="relative">
                  <div className="relative overflow-hidden h-24 w-24 border-2 rounded-full">
                    <img
                      src={
                        selectedImage
                          ? URL.createObjectURL(selectedImage)
                          : user?.profilePicture
                      }
                      alt=""
                    />
                  </div>
                  {selectedImage && (
                    <button
                      // disabled={}
                      className={`absolute cursor-pointer font-bold -top-5 -right-2 ${"cursor-not-allowed"}`}
                      onClick={handleCancel}
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div>
                  <div className="p-3  mt-2 space-x-5">
                    {selectedImage ? (
                      <button
                        className={` text-white  text-sm font-semibold px-4 py-2 rounded w-auto cursor-pointer flex items-center`}
                      >
                        {"" ? (
                          <>
                            <div className={`flex items-center justify-center`}>
                              <div
                                className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status"
                              >
                                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                  Loading...
                                </span>
                              </div>
                            </div>
                            <p className="ml-2">Uploading ....</p>
                          </>
                        ) : (
                          <>Upload</>
                        )}
                      </button>
                    ) : (
                      <label
                        htmlFor="profile"
                        className="bg-gradient-to-r from-sky-400  to-purple-500 text-white  text-sm font-semibold px-4 py-2 rounded w-auto cursor-pointer"
                        // onClick={handleProfileUpdate}
                      >
                        Change Profile
                      </label>
                    )}
                  </div>
                  <input
                    onChange={imageChange}
                    type="file"
                    id="profile"
                    name="avatar"
                    className=" w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 hidden"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="w-full flex ">
              <div className="w-1/2">
                <label htmlFor="name" className="text-md font-medium p-2">
                  Name
                </label>
                <div className="my-2 p-2">
                  <input
                    defaultValue={user?.name || ""}
                    //   value={userProfile?.firstName}
                    //   onChange={(e) =>
                    //     setUserProfile((prev: any) => {
                    //       return { ...prev, firstName: e.target.value };
                    //     })
                    //   }
                    type="text"
                    name="name"
                    required
                    className="border rounded-md w-full p-2"
                    placeholder="name"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label htmlFor="name" className="text-md font-medium p-2">
                  Position
                </label>
                <div className="my-2 p-2">
                  <input
                    defaultValue={user?.position || ""}
                    //   onChange={(e) =>
                    //     setUserProfile((prev: any) => {
                    //       return { ...prev, lastName: e.target.value };
                    //     })
                    //   }
                    type="text"
                    required
                    name="position"
                    className="border rounded-md w-full p-2"
                    placeholder="name"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <label htmlFor="Email" className="text-md font-medium p-2">
              Email
            </label>
            <div className="my-2 p-2">
              <input
                placeholder="email"
                defaultValue={user?.email || ""}
                readOnly
                type="Email"
                name="email"
                className="border rounded-md w-full p-2 cursor-not-allowed bg-gray-50"
              />
            </div>
          </div>

          <div className="mt-3">
            <label htmlFor="Bio" className="text-md font-medium p-2">
              Bio
            </label>
            <div className="my-2 p-2">
              <textarea
                defaultValue={user?.bio}
                //   onChange={(e) =>
                //     setUserProfile((prev: any) => {
                //       return { ...prev, bio: e.target.value };
                //     })
                //   }
                name="bio"
                id=""
                required
                cols={30}
                rows={30}
                className="w-full h-24 border rounded-md p-3"
              ></textarea>
            </div>
          </div>

          <div className="p-3  mt-2 flex justify-center">
            <button
              className={` text-white  text-sm font-semibold px-4 py-2 rounded w-auto cursor-pointer flex items-center ${
                updateLoader
                  ? "cursor-not-allowed bg-gray-300"
                  : "bg-gradient-to-r from-sky-400  to-purple-500"
              }`}
              // onClick={handleProfileUpdate}
            >
              {updateLoader ? (
                <>
                  <div className="w-5 h-5 border-4 border-white border-dashed rounded-full animate-spin mr-2"></div>
                  <p>Updating . . .</p>
                </>
              ) : (
                "Update"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
