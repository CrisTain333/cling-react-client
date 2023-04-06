import React,{useState} from "react";
import { toast } from "react-hot-toast";

const StatusList = ({ e, refetch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedStatus, setUpdatedStatus] = useState({
    
    description: e.description,
  });


  // const handleDeleteStatus = () => {
  //   console.log("Deleted status");
  // };
  const [sortState, setSortState] = useState("none");

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(
        `https://cling-task-server.onrender.com/api/v1/status/update-status/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedStatus),
        }
      );
  
      if (response.ok) {
        toast.success("Status updated successfully!");
        setIsEditing(false);
        if (refetch && typeof refetch === "function") {
          await refetch(); 
        }
      } else {
        throw new Error("Failed to update status");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
    const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://cling-task-server.onrender.com/api/v1/status/delete-status/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        toast.success("Status deleted successfully!");
        refetch();
      } else {
        throw new Error("Failed to delete status");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleChange = (e) => {
    setUpdatedStatus({
      ...updatedStatus,
      description: e.target.value,
    });
  };


  
  return (
    <>
      <div className="card w-full  text-black border shadow-md">
        <div className="card-body ">
        {isEditing ? (
            <div className="h-50 border-current">
             
            <input 
              type="text"
              name="description"
              value={updatedStatus.description}
              onChange={handleChange}
              className="w-full py-2"
            />
            <button className="m-2 btn" onClick={() => handleUpdate(e._id)}>Save</button>
            <button className="btn" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        ) 
        : (
            <div>
              <h2 className="card-title">
                <span className="text-sm">Status by: </span>
                {e.name}
              </h2>
              <span className="text-xs my-4">{e.date}</span>
              <p className="my-4">{e.description}</p>
              <div className="card-actions flex w-[80%] justify-between items-center my-3">
                <div>
                  <button
                    className="p-2 bg-[#ff006e] text-white rounded-md text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center"
                    onClick={() => setIsEditing(true)}
                  >             <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-white font-bold"
                    >   <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                <span className="ml-2 font-semibold"  onClick={() => handleUpdate(e._id)}> Update</span>
              </button>
            </div>
            </div>
            {/* <button
              className="btn btn-outline btn-error"
              onClick={() => handleDeleteStatus(e.id)}
            >
              Delete
            </button> */}

            <div>
              <button
                className=" rounded-md text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  onClick={() => handleDelete(e._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
            </div>
    
          </div>
    
    )} </div>
    
            </div>
        
       
    </>
  );
};

export default StatusList;