import React from 'react';
import { Event } from "@/interfaces/Event";
import TimelineEvent from './timeline-event';

interface Props {
    events: Array<Event>;
}

const Timeline = ({ events }: Props) => {
    return (
        <div className="relative flex flex-col items-center justify-center">
            {/* Timeline container */}
            <div className="w-full max-w-4xl relative">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`flex w-full mb-8 items-start ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                    >
                        {/* Timeline Pin */}
                        <div className="absolute left-1/2 -ml-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white z-10">
                            <span>{index + 1}</span>
                        </div>

                        {/* Event Content */}
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pl-16' : 'pr-16'} relative`}>
                            <TimelineEvent event={event} />
                        </div>
                    </div>
                ))}

                {/* Vertical Line */}
                <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-300"></div>
            </div>
        </div>
    );
};

export default Timeline;
