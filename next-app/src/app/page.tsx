import Timeline from "@/app/_components/timeline/timeline";
import {Event} from "@/interfaces/Event";

export default function Index() {
    const sampleEvents: Event[] = [
        {
            startDate: "2021-05-01",
            endDate: "2021-08-31",
            title: "Internship at TechCorp",
            description: "Worked on developing a microservice architecture for internal tools, utilizing Docker, Kubernetes, and Spring Boot."
        },
        {
            startDate: "2022-01-15",
            endDate: "2022-12-01",
            title: "Graduate Research at University",
            description: "Led a team of 2 undergraduates in a research project focusing on machine learning applications in structural coupling analysis."
        },
        {
            startDate: "2023-03-01",
            endDate: "2023-04-01",
            title: "Published Research Paper",
            description: "Published a paper on optimizing neural network architectures for image recognition tasks in the International Journal of Computer Science."
        },
        {
            startDate: "2024-02-01",
            endDate: "Present",
            title: "Software Engineer at DataFlow",
            description: "Developing scalable cloud-based solutions for big data analytics, focusing on distributed computing and fault-tolerant systems."
        }
    ];


    return (
        <Timeline events={sampleEvents}/>
    );
}

