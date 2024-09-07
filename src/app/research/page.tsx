import Link from "next/link";

export default function Index() {

    return (
        <body className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">🚧 Work In Progress 🚧</h1>
            <p className="text-lg text-gray-600 mb-6">Check back soon!</p>
            <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" href={"/home"}>
                Home
            </Link>
        </div>
        </body>
    );
}
