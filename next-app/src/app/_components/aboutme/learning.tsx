export default function Learning() {
    return (
        <div className="flex flex-row space-x-4">
            <div className="flex flex-col w-1/2">
                <p className="text-3xl font-medium text-center pb-2">What I Am Learning</p>
                <div className="flex-grow shadow-lg p-6 space-y-3 shadow-lg bg-indigo-50 bg-opacity-40 rounded-lg border border-gray-250">
                    <div className="text-xl font-semibold">Academic Research</div>
                    <p className="text-gray-600 text-sm">
                        Constant exposure to academic literature in the field of Computer Science. Currently in the
                        process of writing multiple publications related to Microservice Architecture.
                    </p>

                    <div className="text-xl font-semibold">Cloud Infrastructure</div>
                    <p className="text-gray-600 text-sm">
                        Deployment of distributed architecture solutions is key to understanding industry standards for
                        MSA systems.
                    </p>

                    <div className="text-xl font-semibold">Scalability</div>
                    <p className="text-gray-black text-sm">
                        Learning how to structure MSA systems for scalability by leveraging appropriate cloud-based
                        solutions.
                    </p>
                </div>
            </div>

            <div className="flex flex-col w-1/2">
                <p className="text-3xl font-medium text-center pb-2">What I Plan on Learning</p>
                <div className="flex-grow shadow-lg p-6 space-y-3 bg-indigo-50 bg-opacity-40 rounded-lg border border-gray-250">
                    <div className="text-xl font-semibold">Cybersecurity</div>
                    <p className="text-gray-600 text-sm">
                        Learning about the challenges of securing Distributed Systems and how to scale security
                        solutions.
                    </p>

                    <div className="text-xl font-semibold">New Languages and Technologies</div>
                    <p className="text-gray-600 text-sm">
                        Exploring Rust and Kotlin, while also learning more about Kubernetes, Hadoop, and Spark.
                    </p>

                    <div className="text-xl font-semibold">AI and ML</div>
                    <p className="text-gray-600 text-sm">
                        Gaining a deeper understanding of the underlying concepts in AI/ML-based solutions.
                    </p>
                </div>
            </div>
        </div>

    );
}