import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Catagory = () => {
    const { id } = useParams()

    const catagoryNews = useLoaderData()
    return (
        <div>
            <h2 className='text-center py-4 py-lg-0 pb-lg-3'>News in this Catagory:  {catagoryNews.length}</h2>
            {
                catagoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Catagory;