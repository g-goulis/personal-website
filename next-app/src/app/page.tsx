import Timeline from "@/app/_components/timeline/timeline";
import {Event} from "@/interfaces/Event";

export default function Index() {
    const sampleEvents: Event[] = [
        {
            startDate: "2019-06-01",
            endDate: "2022-09-01",
            title: "Junior Developer at OfficeRing",
            description: "Worked on developing a microservice architecture for internal tools, utilizing Docker, Kubernetes, and Spring Boot.",
            type: "work"
        },
        {
            startDate: "2023-05-01",
            endDate: "2023-07-01",
            title: "Corporate Technology Intern at HEB",
            description: "Led a team of 2 undergraduates in a research project focusing on machine learning applications in structural coupling analysis.",
            type: "work"
        },
        {
            startDate: "2024-05-01",
            endDate: "2024-08-01",
            title: "Student Researcher at UofA",
            description: "Published a paper on optimizing neural network architectures for image recognition tasks in the International Journal of Computer Science.",
            type: "work"
        },
        {
            startDate: "2021-06-01",
            endDate: "2024-05-01",
            title: "Graduated from Baylor University",
            description: "Developing scalable cloud-based solutions for big data analytics, focusing on distributed computing and fault-tolerant systems.",
            type: "achievement"
        },
        {
            startDate: "2021-06-01",
            endDate: "2024-05-01",
            title: "Graduated from Baylor University",
            description: "Developing scalable cloud-based solutions for big data analytics, focusing on distributed computing and fault-tolerant systems.",
            type: "achievement"
        }
    ];


    return (
        <Timeline events={sampleEvents}/>
    );
}

