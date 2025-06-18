// pages/monitor/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';

const cctvData = {
  1: { name: 'MPM KOTAKULON', monitor: 11, connkey: 9360 },
  2: { name: 'BANK JATIM', monitor: 4, connkey: 2360 },
  3: { name: 'PENDOPO', monitor: 3, connkey: 1360 },
  4: { name: 'PASAR INDUK', monitor: 22, connkey: 18360 },
  5: { name: 'YIMA BARAT', monitor: 20, connkey: 16360 },
  6: { name: 'BATAAN', monitor: 6, connkey: 4360 },
  7: { name: 'KOTAKULON 1', monitor: 5, connkey: 3360 },
  8: { name: 'KANTOR POS', monitor: 10, connkey: 8360 },
  9: { name: 'HOTEL PALM', monitor: 19, connkey: 15360 },
  10: { name: 'RSUD KOESNADI', monitor: 18, connkey: 14360 },
  11: { name: 'PENGAIRAN BARAT', monitor: 14, connkey: 11360 },
  12: { name: 'POM TAMANSARI', monitor: 13, connkey: 10360 },
  13: { name: 'GANESHA', monitor: 16, connkey: 13360 },
  14: { name: 'BUNDARAN NANGKAAN', monitor: 9, connkey: 7360 },
  15: { name: 'KONCER', monitor: 8, connkey: 6360 },
};

export default function MonitorPage() {
  const router = useRouter();
  const { id } = router.query;

  const cctv = cctvData[id];

  if (!cctv) {
    return (
      <div className="min-h-screen bg-black text-white p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">CCTV Tidak Ditemukan</h1>
        <Link href="/">
          <button className="mt-4 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded">
            Kembali ke Halaman Depan
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-xl font-bold mb-4 text-center">
        Monitor #{id} - {cctv.name}
      </h1>

      <div className="aspect-video w-full max-w-4xl mx-auto">
        <iframe
          className="w-full h-full"
          src={`https://cctv.bondowosokab.go.id/cgi-bin/nph-zms?scale=100&mode=jpeg&maxfps=60&monitor=${cctv.monitor}&user=view&pass=K0minfo&connkey=${cctv.connkey}&rand=${Date.now()}`}
          allowFullScreen
        ></iframe>
      </div>

      <div className="text-center mt-6">
        <Link href="/">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">
            ◄ Kembali
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
