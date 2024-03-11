'use client'
import React from "react";
import Link from "next/link";
import '.src/app/globals.css'

const Slider = () => {
    const filteredItems = [
        {
            id: 1,
            description: "The Overview",
            img: "",
        },
        {
            id: 2,
            dsescription: "The Dashboard",
            img: "",
        },
    ];
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slidedr.scrollLeft = slider.scrollLeft - 235;
    }

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
    }

    return (
        <>
            <div className="slider-container">
                <div className="btn">
                    <button title="scroll left" onClick={slideLeft}>
                        <AiOutlineArrowLeft />
                    </button>
                    <button title="scroll right" onClick={slideRight}>
                        <AiOutlineArrowRight />
                    </button>
                </div>
                <div className="row-container" id="image-slider">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="row-item">
                            <Link href={`/`}>
                                <div>
                                    <img src={item.img} alt="odin interface screenshot" />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Slider;


