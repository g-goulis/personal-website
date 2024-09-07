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
      <div className={"flex flex-col max-w-6xl mx-auto"}>
        <div className={"text-center"}>
          <p className={"text-5xl"}>
            A passionate software engineer with a strong foundation in web applications, backend infrastructure, and
            microservice architecture.
          </p>
          <br/>
          <p className={""}>
            <FaQuoteLeft className={"inline text-wrap align-top "}/>
            &nbsp;&nbsp;
            <strong>We are what we repeatedly do. Excellence, then, is not an act but a habit.</strong> (Aristotle)
            &nbsp;
            <FaQuoteRight className={"inline text-wrap align-top"}/>
          </p>
        </div>


        {/* Bio Section */}
        <div className={"text-center p-3"}>
          <p className={"text-2xl font-medium text-nowrap"}>
            Who I Am?
          </p>
          <p className={"text-1xl"}>
            Hello! I’m Gabriel Goulis, a recent Computer Science graduate looking to expand knowledge through research,
            graduate schooling and industry experience.
            My passions include software engineering, game development, cloud architecture and competitive programming.
          </p>
        </div>

        {/* Strengths Section */}

        <p className={"p-3 text-2xl font-medium text-nowrap text-center"}>
          My Strengths
        </p>
        <div className={"flex flex-row gap-5 justify-center"}>
          <div className={"flex-1 flex-col shadow-md rounded-lg"}>
            <div className={"font-bold font-medium text-xl p-2"}>
              Microservice Architecture
            </div>
            <div className={"text-sm px-2"}>
              Deep understanding of managing microservice applications using Spring Boot, developed multiple tools
              and engaged in academic papers over MSA.
            </div>
            <div className="flex justify-center pt-3 gap-2">
              <SiSpringboot size="28"/>
              <SiDocker size="28"/>
              <SiApachekafka size="28"/>
            </div>
          </div>

          <div className={"flex-1 flex-col shadow-md rounded-lg"}>
            <div className={"font-bold font-medium text-xl p-2"}>
              Backend Development
            </div>
            <div className={"text-sm px-2"}>
              Extensive experience working with REST API's, managing the flow of data between backend applications
              or systems and managing server side web logic.
            </div>
            <div className="flex justify-center pt-3 gap-2">
              <SiNodedotjs size="28"/>
              <SiMysql size="35"/>
              <SiElasticsearch size="28"/>
              <SiRabbitmq size="28"/>
              <SiPhp size="28"/>
            </div>
          </div>

          <div className={"flex-1 flex-col shadow-md rounded-lg"}>
            <div className={"font-bold font-medium text-xl p-2"}>
              Frontend Development
            </div>
            <div className={"text-sm px-2"}>
              Developed realtime applications using web sockets and extended site functionality using Javascript
              and PHP both specializing in building out customer statistics and dashboards.
            </div>
            <div className="flex justify-center pt-3 gap-2">
              <RiJavascriptFill size="28"/>
              <SiTypescript size="28"/>
              <SiReact size="28"/>
              <SiTailwindcss size="28"/>
            </div>
          </div>
        </div>


        {/* Learning Sections */}
        <div className={"flex flex-row gap-5 justify-center pt-5"}>

          <div className={"flex-1"}>
            <p className={"p-3 text-2xl text-nowrap text-center font-medium"}>What I am Learning</p>
            <div className={"flex flex-col h-full shadow-md rounded-lg"}>
              <div className={"text-xl font-medium p-2"}>
                Academic Research
              </div>
              <div className={"text-sm px-2"}>
                I am constantly exposed to academic literature in the field of Computer Science. I am in the process of
                writing multiple publications related to Microservice Architecture.
              </div>
              <div className={"text-xl font-medium p-2"}>
                Cloud Infrastructure
              </div>
              <div className={"text-sm px-2"}>
                Deployment of distributed architecture solutions is important to understand as it has become the
                industry standard for MSA systems.
              </div>
              <div className={"text-xl font-medium p-2"}>
                Scalability
              </div>
              <div className={"text-sm px-2"}>
                Learning how to structure MSA systems for scalability and leveraging appropriate cloud based solutions
                helps create a better understanding of MSA overall.
              </div>
            </div>
          </div>

          <div className={"flex-1"}>
            <p className={"p-3 text-2xl text-nowrap text-center font-medium"}>What I plan on Learning</p>
            <div className={"flex flex-col h-full shadow-md rounded-lg"}>
              <div className={"text-xl font-medium p-2"}>
                Cybersecurity
              </div>
              <div className={"text-sm px-2"}>
                I want to learn about the challenges of approaching security for Distributed Systems and how scaling
                these solutions is done.
              </div>
              <div className={"text-xl font-medium p-2"}>
                New Languages and Technologies
              </div>
              <div className={"text-sm px-2"}>
                A few languages I intend on picking up on include Rust and Kotlin. Additionally, I would also like to
                learn more about Kubernetes and Apache products such as Hadoop and Spark.
              </div>
              <div className={"text-xl font-medium p-2"}>
                AI and ML
              </div>
              <div className={"text-sm px-2"}>
                In general I would like to gather a more general understanding of the underlying concepts in AI/ML based
                solutions.
              </div>
            </div>
          </div>
        </div>

        {/*<div className={"flex flex-row justify-center p-20"}>*/}
        {/*  <a href={"/public/assets/Gabriel_Goulis_Resume.pdf"} download={"Gabriel_Goulis_Resume.pdf"} target={"_blank"}>*/}
        {/*    <button className="bg-green-400 text-white py-2 px-4 rounded">*/}
        {/*      Download My Resume*/}
        {/*    </button>*/}
        {/*  </a>*/}
        {/*</div>*/}


      </div>
  );
}
