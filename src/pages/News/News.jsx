import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';



const News = () => {
    const news = useLoaderData()
    const { image_url, details, title, category_id } = news

    return (
        <div>
            <h2>Dragon News</h2>
            <div className='border px-4 py-4 rounded'>
                <img className='w-100' src={image_url} alt="" />
                <h2 className='py-3'>{title}</h2>
                <p className='fs-5 pb-4'>{details}</p>
                <div className=' bg-danger px-4 py-3 d-inline'>
                    <Link className='text-decoration-none text-white fs-4' to={`/catagory/${category_id}`}><small><FaArrowLeft className='mb-1' /></small> All news in this category</Link>
                </div>
            </div>
        </div>
    );
};

export default News;