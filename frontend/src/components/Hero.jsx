import React from 'react';
import './Hero.css'
function Hero() {
    return (
        <div className="container">
            <div class="hero-content">
                <div className="row">
                    <div class="text-content col-5">
                        <h1>Melody in Every Breath</h1>
                        <p>
                            Explore the enchanting world of flutes, crafted to perfection for beginners and maestros alike. Our collection brings you a symphony of choices, blending tradition and innovation to elevate your musical journey. Let your melodies flow effortlessly with instruments designed to inspire harmony and creativity.
                        </p>
                        <button className="btn">Shop Now</button>
                        <button className="btn">Book Now</button>
                    </div>
                    <div className="col-7">
                        <img src="/images/hero-bg.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Hero;