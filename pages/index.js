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
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-xl font-bold mb-4"><center>CCTV BONDOWOSO</center></h1>
      <h7><center>Halaman 1 - Monitor 1 s/d 6</center></h7>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cctvList.map((cctv) => {
          const streamUrl = `/monitor/${cctv.id}`;
          return (
            <div key={cctv.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-md">
              <div className="relative w-full h-48 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://cctv.bondowosokab.go.id/cgi-bin/nph-zms?scale=100&mode=jpeg&maxfps=60&monitor=${cctv.monitor}&user=view&pass=K0minfo&rand=${Date.now()}&connkey=${cctv.connkey}`}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-2 text-center font-semibold text-sm">
                <Link href={streamUrl}>
                  <span className="underline hover:text-blue-400 cursor-pointer">
                    {`Monitor #${cctv.id} - ${cctv.name}`}
                  </span>
                </Link>
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

        {/* HIT COUNTER */}
        <div className="mt-4">
          <p className="mb-1">Jumlah pengunjung:</p>
          <img
            src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fcctv-bondowoso.vercel.app&count_bg=%2379C83D&title_bg=%23555555&icon=eye.svg&icon_color=%23FFFFFF&title=hits&edge_flat=false"
            alt="Hit Counter"
          />
        </div>
      </div>
      {/* END OF FOOTER */}
    </div>
  );
}