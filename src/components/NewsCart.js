import React from 'react';
import './NewsCart.css'; 

const NewsCart = ({ articles }) => {
    if (!Array.isArray(articles) || articles.length === 0) {
        return <div></div>;
    }

    return (
        <div className="container">
            <div className="row">
                {articles.map((article, index) => (
                    <div key={index} className="col-md-4 mb-4"> 
                        <div className="card" style={{ width: "100%" }}> 
                            <img src={article.image} className="card-img-top" alt={article.title} style={{ objectFit: 'cover', height: '200px' }} /> {/* Custom height for image */}
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text truncated-text">
                                    {article.description}
                                </p>
                                <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsCart;

