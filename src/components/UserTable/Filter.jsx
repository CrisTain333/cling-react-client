import React from 'react'

function Filter(props) {

    // Sort by Date clickHandler
    const clickHandler=()=>{

    }
    
    if(props.isUserPage===true){
  return (
    <ul className="menu p-4 w-60 bg-base-200 text-base-content">
            <li className="bg-base-100 rounded text-lg font-medium">
                <div className="mx4">
                <button className="btn btn-outline" onClick={clickHandler}>Sort By Date</button>
                </div>
            </li>
          </ul>
  )}
  else return(
    null
  )
}

export default Filter