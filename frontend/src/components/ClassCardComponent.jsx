import React from 'react';

function ClassCardComponent({ image, title, description }) {
    return (
        <div className="card" style={{ width: '18rem', margin: '20px auto' }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Book Now</a>
            </div>
        </div>
    );
}

export default ClassCardComponent;