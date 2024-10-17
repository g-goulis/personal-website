"use client";
import React, { useRef, useEffect, useCallback } from 'react';
import { Event } from "@/interfaces/Event";
import TimelineEvent from './timeline-event';
import { FaSuitcase, FaGraduationCap, FaStar, FaProjectDiagram, FaArrowDown  } from "react-icons/fa";
import dayjs from 'dayjs';

interface Props {
    events: Array<Event>;
}

const Timeline = ({ events }: Props) => {
    // Event refs
    const eventRefs = useRef<(HTMLDivElement | null)[]>([]); // To track the refs of all events

    // This handles the observed element adding or removing the fading class
    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Add fade-in class when intersecting
            } else {
                entry.target.classList.remove('fade-in'); // Remove it when out of view (optional)
            }
        });
    }, []);

    // Add an observer to identify when we are in the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            threshold: 0.12,
        });

        eventRefs.current.forEach(eventRef => {
            if (eventRef) observer.observe(eventRef);
        });

        return () => {
            eventRefs.current.forEach(eventRef => {
                if (eventRef) observer.unobserve(eventRef);
            });
        };
    }, [handleObserver]);

    const getEventSpacing = (startDate: string, nextStartDate: string) => {
        const start = dayjs(startDate);
        const next = dayjs(nextStartDate);
        const diffInDays = next.diff(start, 'month');
        return diffInDays > 0 ? `${diffInDays * 6}px` : '20px';
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
            <div className="w-full max-w-6xl relative">
                {events
                    .sort((a, b) => dayjs(a.startDate).isBefore(dayjs(b.startDate)) ? -1 : 1)
                    .map((event, index) => {
                        const nextEvent = events[index + 1];
                        const spacing = nextEvent ? getEventSpacing(event.startDate, nextEvent.startDate) : '40px';

                        return (
                            <div
                                key={index}
                                className={`flex w-full mb-8 items-start ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                                style={{
                                    marginBottom: spacing
                                }}
                            >
                                {/* Timeline Pin */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-background rounded-full flex items-center justify-center text-black z-10 border-gray-300 border-4">
                                    {getIconByType(event.type)}
                                </div>

                                {/* Event Content */}
                                <div
                                    ref={el => { eventRefs.current[index] = el; }}
                                    className={`flex w-full opacity-0 transition-opacity duration-700 ease-in-out ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative fade-target`} // Only this section will fade in
                                >
                                    {/* Date */}
                                    <div className={`w-1/2 flex ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'} text-sm font-medium text-gray-600`}>
                                        {getDateRangeElement(event)}
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

function getDateRangeElement(event: Event): React.JSX.Element {
    if (event.startDate == null || event.endDate == null) {
        return (<></>);
    }

    const startDate: string = new Date(event.startDate + 'T00:00:00').toLocaleString('en-US', { month: 'long', year: 'numeric' });
    let endDate: string = "";
    if (event.endDate == "") {
        return (<p className="pt-2">{startDate}</p>);
    } else if (event.endDate == "Present") {
        endDate = "Present";
    } else {
        endDate = new Date(event.endDate + 'T00:00:00').toLocaleString('en-US', { month: 'long', year: 'numeric' });
    }
    return (
        <div className="pt-2 flex flex-col items-center text-center">
            <p>{startDate}</p>
            <FaArrowDown className="text-lg"/>
            <p>{endDate}</p>
        </div>
    );
}

export default Timeline;
