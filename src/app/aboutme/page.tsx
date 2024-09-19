import { RiJavascriptFill } from "react-icons/ri";
import {SiMysql} from "react-icons/si";
import { SiElasticsearch } from "react-icons/si";
import { SiRabbitmq } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

export default function Index() {

  return (

      <div className="flex flex-col max-w-6xl mx-auto space-y-10 py-10 text-black">
        <div className="text-center space-y-4">
          <p className="text-5xl font-semibold">
            A passionate software engineer with a strong foundation in web applications, backend infrastructure, and
            microservice architecture.
          </p>
          <p className="text-xl italic text-gray-600  mx-auto">
            <FaQuoteLeft className="inline  align-top text-gray-500"/>
            &nbsp;&nbsp;
            <strong>We are what we repeatedly do. Excellence, then, is not an act but a habit.</strong>
            &nbsp;
            <FaQuoteRight className="inline  align-top text-gray-500"/>
          </p>
        </div>

        {/* Bio Section */}
        <div className="text-center space-y-4 px-4">
          <p className="text-3xl font-medium">Who I Am</p>
          <p className="text-lg  mx-auto text-gray-600">
            Hello! I’m Gabriel Goulis, a recent Computer Science graduate looking to expand knowledge through research,
            graduate schooling, and industry experience. My passions include software engineering, game development,
            cloud architecture, and competitive programming.
          </p>
        </div>

        {/* Strengths Section */}
        <div className="text-center space-y-6">
          <p className="text-3xl font-medium">My Strengths</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="shadow-lg rounded-lg p-6 space-y-3">
              <p className="font-bold text-xl">Microservice Architecture</p>
              <p className="text-gray-600 text-sm">
                Deep understanding of managing microservice applications using Spring Boot. Developed multiple tools
                and engaged in academic papers over MSA.
              </p>
              <div className="flex justify-center space-x-4 pt-3">
                <SiSpringboot size="28"/>
                <SiDocker size="28"/>
                <SiApachekafka size="28"/>
              </div>
            </div>

            <div className="shadow-lg rounded-lg p-6 space-y-3">
              <p className="font-bold text-xl">Backend Development</p>
              <p className="text-gray-600 text-sm">
                Extensive experience working with REST APIs, managing the flow of data between backend systems,
                and managing server-side web logic.
              </p>
              <div className="flex justify-center space-x-4 pt-3">
                <SiNodedotjs size="28"/>
                <SiMysql size="35"/>
                <SiElasticsearch size="28"/>
                <SiRabbitmq size="28"/>
                <SiPhp size="28"/>
              </div>
            </div>

            <div className="shadow-lg rounded-lg p-6 space-y-3">
              <p className="font-bold text-xl">Frontend Development</p>
              <p className="text-gray-600 text-sm">
                Developed real-time applications using web sockets and extended functionality with JavaScript
                and PHP, specializing in customer statistics and dashboards.
              </p>
              <div className="flex justify-center space-x-4 pt-3">
                <RiJavascriptFill size="28"/>
                <SiTypescript size="28"/>
                <SiReact size="28"/>
                <SiTailwindcss size="28"/>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <p className="text-3xl font-medium text-center">What I Am Learning</p>
            <div className="shadow-lg rounded-lg p-6 space-y-3">
              <div className="text-xl font-bold">Academic Research</div>
              <p className="text-gray-600 text-sm">
                Constant exposure to academic literature in the field of Computer Science. Currently in the process of
                writing multiple publications related to Microservice Architecture.
              </p>

              <div className="text-xl font-bold">Cloud Infrastructure</div>
              <p className="text-gray-600 text-sm">
                Deployment of distributed architecture solutions is key to understanding industry standards for MSA
                systems.
              </p>

              <div className="text-xl font-bold">Scalability</div>
              <p className="text-gray-600 text-sm">
                Learning how to structure MSA systems for scalability by leveraging appropriate cloud-based solutions.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-3xl font-medium text-center">What I Plan on Learning</p>
            <div className="shadow-lg rounded-lg p-6 space-y-3">
              <div className="text-xl font-bold">Cybersecurity</div>
              <p className="text-gray-600 text-sm">
                Learning about the challenges of securing Distributed Systems and how to scale security solutions.
              </p>

              <div className="text-xl font-bold">New Languages and Technologies</div>
              <p className="text-gray-600 text-sm">
                Exploring Rust and Kotlin, while also learning more about Kubernetes, Hadoop, and Spark.
              </p>

              <div className="text-xl font-bold">AI and ML</div>
              <p className="text-gray-600 text-sm">
                Gaining a deeper understanding of the underlying concepts in AI/ML-based solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

  );
}
