import Link from 'next/link';

const cctvList = [
  { id: 13, name: 'GANESHA', monitor: 16, connkey: 13360 },
  { id: 14, name: 'BUNDARAN NANGKAAN', monitor: 9, connkey: 7360 },
  { id: 15, name: 'KONCER', monitor: 8, connkey: 6360 },
];

export default function Halaman3() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-xl font-bold mb-4 text-center">CCTV BONDOWOSO</h1>
      <h7><center>Halaman 3 - Monitor 13 s/d 15</center></h7>

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
                <Link href={`/monitor/${cctv.id}`}>
                  <span className="underline hover:text-blue-400 cursor-pointer">
                    {`Monitor #${cctv.id} - ${cctv.name}`}
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <Link href="/halaman-2">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
            ◄ Halaman 2
          </button>
        </Link>
        <Link href="/">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
            Halaman Depan
          </button>
        </Link>
      </div>
    </div>
  );
}
