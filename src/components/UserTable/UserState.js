import UserContext from "./UserContext"
import { useState } from "react";

// UseState hook for user data

const UserState = (props) => {

    // Hard coding value for user data
    let initialData = [
        {
            "name": "James Butt",
            "email": "jbutt@gmail.com",
            "phone_number": 9856412378
        },
        {
            "name": "Jesica Sheron",
            "email": "jsheron@yahoo.com",
            "phone_number": 7854126587
        },
        {
            "name": "Shweta Koshe",
            "email": "shwetak49@gmail.com",
            "phone_number": 8946218927
        },
        {
            "name": "Rahul Shah",
            "email": "Shahr23@yahoo.com",
            "phone_number": 9645218927
        },
        {
            "name": "Rajvi Ravat",
            "email": "Rajv78@gmail.com",
            "phone_number": 9746218927
        }

    ]
     const [userData, setuserData] = useState(initialData)

return (
    <UserContext.Provider value={{ userData }}>
        {props.children}
    </UserContext.Provider>
)
}

export default UserState