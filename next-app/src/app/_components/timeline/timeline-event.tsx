"use client";
import React, { useState } from 'react';
import { Event } from "@/interfaces/Event";

interface Props {
    event: Event;
    // imgSrc: string;  // New prop for the circle image
}

const TimelineEvent = ({ event }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white shadow-md p-6 rounded-lg my-6 max-w-lg mx-auto">
            <div className="flex items-center mb-2">
                {/* Circle Image */}
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMb_B_ZnF1BbygzcEuv5qW_ErX8fgZfNXRg&s"}
                    alt="event image"
                    className="w-12 h-12 rounded-full mr-4"
                />

                {/* Date and Title */}
                <div className="flex-grow">
                    <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{event.startDate}</span>
                        <span>→</span>
                        <span>{event.endDate}</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h3>
                </div>

                {/* Toggle Button */}
                <button
                    onClick={toggleDropdown}
                    className="text-blue-600 underline focus:outline-none"
                >
                    {isOpen ? 'Hide' : 'Show More'}
                </button>
            </div>

            {/* Conditionally render the description */}
            {isOpen && (
                <p className="text-gray-700 mt-2 leading-relaxed">{event.description}</p>
            )}
        </div>
    );
};

export default TimelineEvent;
