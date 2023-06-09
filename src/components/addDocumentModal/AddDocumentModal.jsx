import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import { BACKEND_BASE_URL } from "../../config/const";

export default function AddDocumentModal({ setShowDocModal, res }) {
  const { user } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState();
  const [loading, setLoading] = useState(false);

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleAddDoc = async (e) => {
    e.preventDefault();
    setLoading(true);
    const file = selectedImage;

    //uploading the file to backend
    const formData = new FormData();
    formData.append("avatar", file);
    formData.append("email", user?.email);
    formData.append("filename", file.name);

    try {
      const response = await axios.post(
        `${BACKEND_BASE_URL}/api/v1/document/document_upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(response?.data?.message);
      setLoading(false);
      res();
      setShowDocModal(false);
    } catch (error) {
      console.log(error);
      toast.error(error.toString());
      setLoading(false);
    }
  };

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
                  onClick={() => setShowDocModal(false)}
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
              Add Document
            </h2>

            <form className="w-full max-w-lg" onSubmit={handleAddDoc}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Upload file
                  </label>
                  {/* <input
                    type="file"
                    name="document"

                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 file--input"
                  ></input> */}
                  <div>
                    <input
                      onChange={imageChange}
                      type="file"
                      name="avatar"
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 "
                      // onChange={handleAddDoc}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3 text-center">
                <button
                  disabled={loading}
                  type="submit"
                  className={`mx-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 
                   ${loading && "bg-green-300 cursor-not-allowed"} `}
                >
                  {loading ? "Uploading ...." : "Upload"}
                </button>
              </div>
            </form>

            <div className="modal-action"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
