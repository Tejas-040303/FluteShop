import React from 'react';

function ShopCardComponent({image, title, description}) {
    return (
            <div className="card" style={{ width: '18rem', margin: '20px auto' }}>
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Shop Now</a>
                </div>
            </div>
    );
}

export default ShopCardComponent;