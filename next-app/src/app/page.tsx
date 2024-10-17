import Timeline from "@/app/_components/timeline/timeline";
import {Event} from "@/interfaces/Event";

export default function Index() {
    const sampleEvents: Event[] = [
        {
            startDate: "2017-08-01",
            endDate: "2021-05-01",
            title: "Graduated from HS & LSC Montgomery",
            description: "Attended high school and community college simultaneously, graduating with my HS degree and Associate's of Science.",
            type: "education",
            bullets: [],
            imgSrc: "images/lsc.png"
        },
        {
            startDate: "2019-06-01",
            endDate: "2022-09-01",
            title: "Junior Developer at OfficeRing",
            description: "Worked on updating the customer portal, developing and maintaining new platform features and services.",
            type: "work",
            bullets: ["Exposed to system architecture and scaling", "Worked in PHP, JavaScript, Node.js, SQL", "Used technologies like Nginx and RabbitMQ"],
            imgSrc: "images/officering.jpg"
        },
        {
            startDate: "2023-05-01",
            endDate: "2023-07-01",
            title: "Corporate Technology Intern at HEB",
            description: "Worked in an agile team extending functionality of the employee training course platform.",
            type: "work",
            bullets: ["Used Javascript and React.js", "Migrated from SCORM to xAPI standard", "Leveraged React components and hooks"],
            imgSrc: "images/heb.png"
        },
        {
            startDate: "2024-05-01",
            endDate: "2024-08-01",
            title: "Student Researcher at University of Arizona",
            description: "Built temporal tool to track architecture over repository history, wrote one research paper and contributed on another.",
            type: "work",
            bullets: ["Used Java and Spring", "Learned the extended Spring framework"],
            imgSrc: "images/finland.png"
        },
        {
            startDate: "2021-06-01",
            endDate: "2024-05-01",
            title: "Undergraduate at Baylor University",
            description: "Bachelor of Science in Computer Science.",
            type: "education",
            bullets: ["Undergraduate researcher for 2 years", "Took OS, Networking, DSA, Data mining, ..."],
            imgSrc: "images/baylor.png"
        },
        {
            startDate: "2024-10-01",
            endDate: "",
            title: "First Research Publication",
            description: "A systematic literature review on Change Impact Analysis.",
            type: "achievement",
            bullets: [],
            imgSrc: "images/uofa.png"
        },
        {
            startDate: "2024-01-01",
            endDate: "Present",
            title: "Change Impact Microservice Evolution Tool (CIMET)",
            description: "Developed an industry applicable tool for tracking microservice evolution, and change impact to microservice systems.",
            type: "project",
            bullets: ["Used Java and Spring", "Learned the extended Spring framework"],
            imgSrc: "images/lsc.png"
        },
        {
            startDate: "2024-08-01",
            endDate: "Present",
            title: "PhD Candidate at University of Arizona",
            description: "Doctorate of Philosophy in Computer Science. Specializing in distributed systems, microservice architecture and static analysis of software systems.",
            type: "education",
            bullets: ["Graduate researcher leading team of 2", "1 Publication, 2 pending"],
            imgSrc: "images/uofa.png"
        }
    ];


    return (
        <div className={"w-full max-w-7xl relative mx-auto"}>
            <div className={"mx-10 text-center pt-2 pb-20"}>
                <h1 className={"text-4xl font-semibold"}>Welcome</h1>
                <p className={"text-gray-600"}>This is a brief overview of what I have been doing!</p>
            </div>
            {/*<div className="border w-4/5 mb-2 mx-auto"/>*/}
            <Timeline events={sampleEvents}/>
        </div>
    );
}

