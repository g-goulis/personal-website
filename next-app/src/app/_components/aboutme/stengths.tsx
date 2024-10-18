import {
    SiApachekafka,
    SiDocker,
    SiElasticsearch,
    SiMysql,
    SiNodedotjs,
    SiPhp,
    SiRabbitmq, SiReact,
    SiSpringboot, SiTailwindcss, SiTypescript
} from "react-icons/si";
import {RiJavascriptFill} from "react-icons/ri";
import Tooltip from "@/app/_components/tooltip";

export default function Strengths() {
    return (
        <div className="text-center space-y-6">
            <h2 className="text-3xl font-medium">My Strengths</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="shadow-lg p-6 space-y-3 bg-indigo-50 bg-opacity-40 rounded-lg border border-gray-250">
                    <h3 className="font-semibold text-xl">Microservice Architecture</h3>
                    <p className="text-gray-600 text-sm">
                        Deep understanding of managing microservice applications using Spring Boot. Developed multiple tools
                        and engaged in academic papers over MSA.
                    </p>
                    <div className="flex justify-center space-x-4 pt-3">
                        <Tooltip tip={"Spring Boot"}>
                            <SiSpringboot size="28"/>
                        </Tooltip>
                        <Tooltip tip={"Docker"}>
                            <SiDocker size="28"/>
                        </Tooltip>
                        <Tooltip tip={"Kafka"}>
                            <SiApachekafka size="28"/>
                        </Tooltip>
                    </div>
                </div>

                <div className="shadow-lg p-6 space-y-3 bg-indigo-50 bg-opacity-40 rounded-lg border border-gray-250">
                    <h3 className="font-semibold text-xl">Backend Development</h3>
                    <p className="text-gray-600 text-sm">
                        Extensive experience working with REST APIs, managing the flow of data between backend systems,
                        and managing server-side web logic.
                    </p>
                    <div className="flex justify-center space-x-4 pt-3">
                        <Tooltip tip={"Node.js"}>
                            <SiNodedotjs size="28"/>
                        </Tooltip>
                        <Tooltip tip={"SQL & MySQL"}>
                            <SiMysql size="35"/>
                        </Tooltip>
                        <Tooltip tip={"Elasticsearch"}>
                            <SiElasticsearch size="28"/>
                        </Tooltip>
                        <Tooltip tip={"RabbitMQ"}>
                            <SiRabbitmq size="28"/>
                        </Tooltip>
                        <Tooltip tip={"PHP"}>
                            <SiPhp size="28"/>
                        </Tooltip>
                    </div>
                </div>

                <div className="shadow-lg p-6 space-y-3 bg-indigo-50 bg-opacity-40 rounded-lg border border-gray-250">
                    <h3 className="font-semibold text-xl">Frontend Development</h3>
                    <p className="text-gray-600 text-sm">
                        Developed real-time applications using web sockets and extended functionality with JavaScript
                        and PHP, specializing in customer statistics and dashboards.
                    </p>
                    <div className="flex justify-center space-x-4 pt-3">
                        <Tooltip tip={"Javascript"}>
                            <RiJavascriptFill size="34"/>
                        </Tooltip>
                        <Tooltip tip={"Typescript"}>
                            <SiTypescript size="28"/>
                        </Tooltip>
                        <Tooltip tip={"React"}>
                            <SiReact size="28"/>
                        </Tooltip>
                        <Tooltip tip={"Tailwind"}>
                            <SiTailwindcss size="28"/>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
}