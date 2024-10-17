"use client";
import React, { useState } from 'react';
import { Event } from "@/interfaces/Event";

interface Props {
    event: Event;
}

const TimelineEvent = ({ event }: Props) => {

    return (
        <div
            className={`relative border-2 bg-indigo-50 border-gray-300 p-4 rounded-lg my-4 max-w-5xl mx-auto shadow-sm hover:shadow-lg transition-shadow duration-200`}
        >
            <div className="flex items-start">

                <div className="flex-grow flex flex-col">
                    <div className="flex flex-row pb-2">
                        <img
                            src={event.imgSrc}
                            alt="event image"
                            className="w-20 h-20 rounded-lg mr-4 border"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                    </div>

                    <p className="text-gray-700 mt-1 leading-relaxed">{event.description}</p>


                    {event.bullets.length > 0 &&
                    <div className="mt-3">
                        <h4 className="text-lg font-medium text-gray-700 mb-1">Key Points:</h4>
                        <ul className="list-disc list-inside text-gray-600">
                            {event.bullets.map((bullet, index) => (<li key={index}>{bullet}</li>))}
                        </ul>
                    </div>
                    }
                </div>
            </div>
        </div>
);
};

export default TimelineEvent;
