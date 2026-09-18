import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center">Bright & Beautiful Therapy Dogs</h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-xl">
        Select your portal below to manage therapy dog visits, volunteer as a handler, or request a visit.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link href="/admin" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors">
          <h2 className="text-2xl font-bold mb-2 text-blue-600">Admin Portal &rarr;</h2>
          <p className="text-gray-600">Manage handlers, approve requests, and oversee operations.</p>
        </Link>

        <Link href="/volunteer" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors">
          <h2 className="text-2xl font-bold mb-2 text-green-600">Volunteer Board &rarr;</h2>
          <p className="text-gray-600">Find upcoming events, RSVP, and manage your visits.</p>
        </Link>

        <Link href="/requester" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors">
          <h2 className="text-2xl font-bold mb-2 text-purple-600">Requester Intake &rarr;</h2>
          <p className="text-gray-600">Request a therapy dog visit for your facility or organization.</p>
        </Link>
      </div>
    </div>
  );
}
