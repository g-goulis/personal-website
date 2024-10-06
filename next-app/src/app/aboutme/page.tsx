import Strengths from "@/app/_components/aboutme/stengths";
import Learning from "@/app/_components/aboutme/learning";

export default function Index() {

  return (

      <div className="flex flex-col max-w-6xl mx-auto space-y-10 py-10 text-black">
        <div className="text-center space-y-4">
          <p className="text-5xl font-semibold">
            A passionate software engineer with a strong foundation in web applications, backend infrastructure, and
            microservice architecture.
          </p>
        </div>

        {/* Bio Section */}
        <div className="text-center space-y-4 px-4">
          <p className="text-3xl font-medium">Who I Am</p>
          <p className="text-lg  mx-auto text-gray-600">
            Hello! I’m Gabriel Goulis, a recent Computer Science graduate looking to expand my knowledge through research,
            graduate schooling, and industry experience. My passions include software engineering, game development,
            cloud architecture, and competitive programming.
          </p>
        </div>

        {/* Strengths Section */}
        <Strengths />

        {/* Learning Sections */}
        <Learning />

        <div className={"text-center space-y-4 px-4"}>
          <a download={"Gabriel_Goulis_Resume.pdf"} href={"assets/Gabriel_Goulis_Resume.pdf"} className={"btn btn-neutral"} >
            Download Resume
          </a>
        </div>
      </div>

  );
}
