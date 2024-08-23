import React, { useEffect, useState } from 'react';
import NewsCart from './NewsCart';

const NewsAPI = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let apikey = '3b2c9aa850c739bd8c5ec90dd5b45916'
        let url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apikey;
        fetch(url)
            .then(response => response.json())
            .then(data => { console.log(data); setArticles(data.articles); })
            .catch(error => console.error('Fetch error:', error));
    }, [category]);

    console.log(articles);

    return (
        <div>
            <div className="text-center mt=10px">
                <h2>Latest <span className='bg-danger'>NEWS</span> related to {category}</h2>
            </div>
            <NewsCart articles={articles} />
        </div>
    );
};

export default NewsAPI;
