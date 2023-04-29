import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])


    console.log(catagories);
    return (
        <div>
            <h3>All Catagories</h3>
            <div className='d-flex flex-column gap-3 pt-3 fs-5'>
                {
                    catagories.map(catagory => <Link className='text-decoration-none px-2 py-2 bg-light text-black' to={`/catagory/${catagory.id}`}>{catagory.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftNav;