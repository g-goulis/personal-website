
import { redirect } from 'next/navigation';
import Link from "next/link";

export default function Index() {
  redirect('/aboutme');

  return (
      <div className="text-center p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">🚧 Work In Progress 🚧</h1>
        <p className="text-lg text-gray-600 mb-6">Check back soon!</p>
      </div>
  );

}
