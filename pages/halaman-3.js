// pages/halaman-3.js
import Link from 'next/link';

const cctvList = [
  {
    id: 13,
    name: 'GANESHA',
    monitor: 16,
    connkey: 13360,
  },
  {
    id: 14,
    name: 'BUNDARAN NANGKAAN',
    monitor: 9,
    connkey: 7360,
  },
  {
    id: 15,
    name: 'KONCER',
    monitor: 8,
    connkey: 6360,
  },
];

export default function Halaman3() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
	<h1 className="text-xl font-bold mb-4">CCTV BONDOWOSO</h1>
	  <h1 className="text-xl font-bold mb-4">Halaman 3 - Monitor 13 s/d 15</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cctvList.map((cctv) => (
          <div key={cctv.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src={`https://cctv.bondowosokab.go.id/cgi-bin/nph-zms?scale=100&mode=jpeg&maxfps=30&monitor=${cctv.monitor}&user=view&pass=K0minfo&rand=${Date.now()}&connkey=${cctv.connkey}`}
              allowFullScreen
            ></iframe>
            <div className="p-2 text-center font-semibold text-sm">
              {`Monitor #${cctv.id} - ${cctv.name}`}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <Link href="/halaman-2">
          <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white">
            Halaman 2
          </button>
        </Link>
        <Link href="/">
          <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white">
          Halaman Depan
          </button>
          </Link>
        </div>
		<div className="mt-10 text-center text-sm text-gray-400">
        by <span className="text-white font-semibold"><a href="https://www.instagram.com/caksoega/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">@caksoega</a></span>
		<p>sumber <a href="https://dishub.bondowosokab.go.id/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">www.dishub.bondowosokab.go.id</a></p>
      </div>
    </div>
  );
}
