import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaCard from './Card/Card'

const Home = () => {

    const [usersDetails, setUsersDetails] = useState(null)

    useEffect(() => {
        axios
            .get("http://localhost:5000/usersDetails")
            .then(res => {
                setUsersDetails(res.data)
            })
            .catch(err => console.log(err.message))
    }, [])

    console.log(usersDetails);

    return (
        <div className="container">
            Hall of fame
            <ul className="flexbox">
                {usersDetails ? usersDetails.map((user, index) => <li key={index} > <MediaCard details={user} /></li>) : null}
            </ul>

        </div>
    )
}

export default Home