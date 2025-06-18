import { useState } from 'react';
import Link from 'next/link';

const cctvList = [
  { id: 1, name: 'MPM KOTAKULON', monitor: 11, connkey: 9360 },
  { id: 2, name: 'BANK JATIM', monitor: 4, connkey: 2360 },
  { id: 3, name: 'PENDOPO', monitor: 3, connkey: 1360 },
  { id: 4, name: 'PASAR INDUK', monitor: 22, connkey: 18360 },
  { id: 5, name: 'YIMA BARAT', monitor: 20, connkey: 16360 },
  { id: 6, name: 'BATAAN', monitor: 6, connkey: 4360 },
];

export default function Halaman1() {
  const [selectedCCTV, setSelectedCCTV] = useState(null);

  const openModal = (cctv) => {
    setSelectedCCTV(cctv);
  };

  const closeModal = () => {
    setSelectedCCTV(null);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 relative">
      <h1 className="text-xl font-bold mb-4"><center>CCTV BONDOWOSO</center></h1>
      <h6><center>Halaman 1 - Monitor 1 s/d 6</center></h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cctvList.map((cctv) => {
          const streamUrl = `https://cctv.bondowosokab.go.id/cgi-bin/nph-zms?scale=100&mode=jpeg&maxfps=30&monitor=${cctv.monitor}&user=view&pass=K0minfo&rand=${Date.now()}&connkey=${cctv.connkey}`;
          return (
            <div key={cctv.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-md">
              <div className="relative w-full h-48 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={streamUrl}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-2 text-center font-semibold text-sm">
                <button
                  onClick={() => openModal({ ...cctv, url: streamUrl })}
                  className="underline hover:text-blue-400"
                >
                  {`Monitor #${cctv.id} - ${cctv.name}`}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-6">
        <Link href="/halaman-2">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
            Halaman 2 ►
          </button>
        </Link>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        by{' '}
        <span className="text-white font-semibold">
          <a
            href="https://www.instagram.com/caksoega/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            @caksoega
          </a>
        </span>
        <p>
          sumber :{' '}
          <a
            href="https://dishub.bondowosokab.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            www.dishub.bondowosokab.go.id
          </a>
        </p>
      </div>

      {/* MODAL POPUP */}
      {selectedCCTV && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg overflow-hidden w-full max-w-4xl mx-4 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
            >
              ✕
            </button>
            <div className="p-4 text-center font-semibold">
              {`Monitor #${selectedCCTV.id} - ${selectedCCTV.name}`}
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={selectedCCTV.url}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
