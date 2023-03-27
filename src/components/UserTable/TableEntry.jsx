import React from 'react'

function TableEntry(props) {
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{props.row.name}</div>
                    </div>
                </div>
            </td>
            <td>
                {props.row.email}
            </td>
            <td>
                {props.row.phone_number}
            </td>
            {/* <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th> */}
        </tr>
    )
}

export default TableEntry