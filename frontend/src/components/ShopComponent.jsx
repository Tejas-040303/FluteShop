import React from 'react';
import ShopCardComponent from './ShopCardComponent';

function ShopComponent() {
    return (
            <div className="container my-5">
                <h1>Flutes</h1>
                <div className="row">
                    <div className="col-md-6">
                        <ShopCardComponent
                            image="/images/hero-bg-3.jpg"
                            title="Flute Basics"
                            description="Learn the art of playing the flute with our beginner classes!"
                        />
                    </div>
                    <div className="col-md-6">
                        <ShopCardComponent
                            image="/images/hero-bg-3.jpg"
                            title="Advanced Techniques"
                            description="Master advanced flute techniques to enhance your skills."
                        />
                    </div>
                </div>
            </div>
    );
}

export default ShopComponent;