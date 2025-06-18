import Link from 'next/link';

const cctvList = [
  { id: 7, name: 'KOTAKULON 1', monitor: 5, connkey: 3360 },
  { id: 8, name: 'KANTOR POS', monitor: 10, connkey: 8360 },
  { id: 9, name: 'HOTEL PALM', monitor: 19, connkey: 15360 },
  { id: 10, name: 'RSUD KOESNADI', monitor: 18, connkey: 14360 },
  { id: 11, name: 'PENGAIRAN BARAT', monitor: 14, connkey: 11360 },
  { id: 12, name: 'POM TAMANSARI', monitor: 13, connkey: 10360 },
];

export default function Halaman2() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-xl font-bold mb-4 text-center">CCTV BONDOWOSO</h1>
      <h7><center>Halaman 2 - Monitor 7 s/d 12</center></h7>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cctvList.map((cctv) => {
          const streamUrl = `https://cctv.bondowosokab.go.id/cgi-bin/nph-zms?scale=100&mode=jpeg&maxfps=60&monitor=${cctv.monitor}&user=view&pass=K0minfo&rand=${Date.now()}&connkey=${cctv.connkey}`;
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
        <Link href="/">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
            ◄ Halaman Depan
          </button>
        </Link>
        <Link href="/halaman-3">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
            Halaman 3 ►
          </button>
        </Link>
      </div>

     {/* FOOTER */}
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
	   {/* END OF FOOTER */}
	   
    </div>
  );
}
