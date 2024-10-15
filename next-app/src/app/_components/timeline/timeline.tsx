"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Event } from "@/interfaces/Event";
import TimelineEvent from './timeline-event';
import { FaSuitcase, FaGraduationCap, FaStar, FaProjectDiagram } from "react-icons/fa";
import dayjs from 'dayjs';

interface Props {
    events: Array<Event>;
}

const Timeline = ({ events }: Props) => {

    // Calculate spacing between events based on date difference
    const getEventSpacing = (startDate: string, nextStartDate: string) => {
        const start = dayjs(startDate);
        const next = dayjs(nextStartDate);
        const diffInDays = next.diff(start, 'month');
        return diffInDays > 0 ? `${diffInDays * 6}px` : '20px'; // Multiply to emphasize time difference visually
    };

    const getIconByType = (type: string) => {
        switch (type) {
            case 'work':
                return <FaSuitcase className="text-brown text-lg" />;
            case 'education':
                return <FaGraduationCap className="text-lg"/>;
            case 'achievement':
                return <FaStar className="text-yellow-500 text-lg"/>;
            case 'project':
                return <FaProjectDiagram />;
            default:
                return <FaSuitcase />;
        }
    };


    return (
        <div className="relative flex flex-col items-center justify-center">
            {/* Timeline container */}
            <div className="w-full max-w-4xl relative">
                {events
                    .sort((a, b) => dayjs(a.startDate).isBefore(dayjs(b.startDate)) ? -1 : 1) // Sort by start date
                    .map((event, index) => {
                        const nextEvent = events[index + 1];
                        const spacing = nextEvent ? getEventSpacing(event.startDate, nextEvent.startDate) : '40px';

                        return (
                            <div
                                key={index}
                                className={`flex w-full mb-8 items-start ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                                data-index={index}
                                style={{
                                    marginBottom: spacing
                                }}
                            >
                                {/* Timeline Pin */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-background rounded-full flex items-center justify-center text-black z-10 border-gray-300 border-4">
                                    {getIconByType(event.type)}
                                </div>

                                {/* Event Content */}
                                <div className={`flex w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    {/* Date */}
                                    <div className={`w-1/2 flex ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'} text-sm font-medium text-gray-600`}>
                                        {getDateRange(event)}
                                    </div>

                                    {/* Event Detail */}
                                    <div className={`w-1/2 flex ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                                        <TimelineEvent event={event} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                {/* Vertical Line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
            </div>
        </div>
    );
};

function getDateRange(event : Event) : string {
    if(event.startDate == null || event.endDate == null) {
        return "";
    }

    const startDate : string = new Date(event.startDate + 'T00:00:00').toLocaleString('en-US', { month: 'long', year: 'numeric' });

    if(event.endDate == "") {
        return startDate;
    } else if(event.endDate == "Present") {
        return startDate + " - Present";
    } else {
        return startDate + " - " + new Date(event.endDate + 'T00:00:00').toLocaleString('en-US', { month: 'long', year: 'numeric' });
    }

}

export default Timeline;
