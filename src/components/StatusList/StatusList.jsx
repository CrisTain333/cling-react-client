import React from 'react'

const StatusList = ({ e }) => {

    const handleUpdateStatus = () => {
        console.log('updated Status')
    }

    const handleDeleteStatus = () => {
        console.log('deleted status')
    }

  return (
    <>
    <div className="card w-full bg-primary text-primary-content">
    <div className="card-body">
        <h2 className="card-title"><span className='text-sm'>Status by: </span>{e.name}</h2>
        <p>{e.description}</p>
        <div className="card-actions justify-end">
        <button 
            className="btn" 
            onClick={()=>handleUpdateStatus(e._id)}>Update</button>
        <button 
            className="btn btn-outline btn-error" 
            onClick={()=>handleDeleteStatus(e.id)}>Delete</button>
        </div>
    </div>
    </div>
    </>

  )
}

export default StatusList
