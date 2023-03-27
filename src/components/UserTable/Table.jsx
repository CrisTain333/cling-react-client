import React, { useContext } from 'react'
import TableEntry from './TableEntry'
import UserContext from './UserContext'
import UserState from './UserState'

function Table() {

    const { userData } = useContext(UserContext)
    console.log(userData)
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th></th>
                    </tr>
                </thead>
                {/* <tbody>
                    <TableEntry/>
                </tbody> */}
                {userData.map((row) => {
                    {return(
                        <tbody>
                           <TableEntry row={row} />
                        </tbody> )
            }
                })}

                {/* foot */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    )
}

export default Table