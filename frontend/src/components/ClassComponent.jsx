import React from 'react';
import ClassCardComponent from './ClassCardComponent';

function ClassComponent() {
    return (
        <div className="container my-5">
            <h1>Classes</h1>
            <div className="row">
                <div className="col-md-6">
                    <ClassCardComponent 
                        image="/images/hero-bg-3.jpg" 
                        title="Flute Basics" 
                        description="Learn the art of playing the flute with our beginner classes!" 
                    />
                </div>
                <div className="col-md-6">
                    <ClassCardComponent 
                        image="/images/hero-bg-3.jpg" 
                        title="Advanced Techniques" 
                        description="Master advanced flute techniques to enhance your skills." 
                    />
                </div>
            </div>
        </div>
    );
}

export default ClassComponent;
