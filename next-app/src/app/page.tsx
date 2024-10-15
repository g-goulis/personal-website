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
            bullets: ["Exposed to system architecture and scaling", "Worked in PHP, JavaScript, Node.js, SQL", ""],
            imgSrc: "images/officering.jpg"
        },
        {
            startDate: "2023-05-01",
            endDate: "2023-07-01",
            title: "Corporate Technology Intern at HEB",
            description: "Led a team of 2 undergraduates in a research project focusing on machine learning applications in structural coupling analysis.",
            type: "work",
            bullets: [""],
            imgSrc: "images/heb.png"
        },
        {
            startDate: "2024-05-01",
            endDate: "2024-08-01",
            title: "Student Researcher at UofA",
            description: "Published a paper on optimizing neural network architectures for image recognition tasks in the International Journal of Computer Science.",
            type: "work",
            bullets: [""],
            imgSrc: "images/finland.png"
        },
        {
            startDate: "2021-06-01",
            endDate: "2024-05-01",
            title: "Undergraduate @ Baylor University",
            description: "Developing scalable cloud-based solutions for big data analytics, focusing on distributed computing and fault-tolerant systems.",
            type: "education",
            bullets: [""],
            imgSrc: "images/baylor.png"
        },
        {
            startDate: "2024-10-01",
            endDate: "",
            title: "First Research Publication",
            description: "Developing scalable cloud-based solutions for big data analytics, focusing on distributed computing and fault-tolerant systems.",
            type: "achievement",
            bullets: [""],
            imgSrc: "images/uofa.png"
        },
        {
            startDate: "2024-01-01",
            endDate: "Present",
            title: "Change Impact Microservice Evolution Tool (CIMET)",
            description: "Developing scalable cloud-based solutions for big data analytics, focusing on distributed computing and fault-tolerant systems.",
            type: "project",
            bullets: [""],
            imgSrc: "images/lsc.png"
        },
        {
            startDate: "2024-08-01",
            endDate: "Present",
            title: "PhD Candidate @ University of Arizona",
            description: "Developing scalable cloud-based solutions for big data analytics, focusing on distributed computing and fault-tolerant systems.",
            type: "education",
            bullets: [""],
            imgSrc: "images/uofa.png"
        }
    ];


    return (
        <Timeline events={sampleEvents}/>
    );
}

