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
	<h1 className="text-xl font-bold mb-4">CCTV BONDOWOSO</h1>
	  <h1 className="text-xl font-bold mb-4">Halaman 1 - Monitor 1 s/d 6</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cctvList.map((cctv) => (
          <div key={cctv.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-md">
            <div className="relative w-full h-48 overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://cctv.bondowosokab.go.id/cgi-bin/nph-zms?scale=100&mode=jpeg&maxfps=30&monitor=${cctv.monitor}&user=view&pass=K0minfo&rand=${Date.now()}&connkey=${cctv.connkey}`}
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-2 text-center font-semibold text-sm">
              {`Monitor #${cctv.id} - ${cctv.name}`}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Link href="/halaman-2">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
            Halaman Selanjutnya
          </button>
        </Link>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        by <span className="text-white font-semibold"><a href="https://www.instagram.com/caksoega/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">@caksoega</a></span>
<<<<<<< HEAD
		<p>sumber :<a href="https://dishub.bondowosokab.go.id/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">www.dishub.bondowosokab.go.id</a></p>
		<script type='text/javascript' src='https://www.freevisitorcounters.com/auth.php?id=11ae215e16cbc60a533bb49f8f0e774125a10904'></script>
<script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/1352841/t/5"></script>
      </div>
  <div className="text-center mt-8">
=======
	<p>sumber :<a href="https://dishub.bondowosokab.go.id/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">www.dishub.bondowosokab.go.id</a></p>
	</div>
<div className="text-center mt-8">
<div className="text-center mt-8">
>>>>>>> 266762454424f932741af917c6364320dd66c986
  <a href="https://www.free-counters.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm">
    www.free-Counter.org
  </a>

  <Script
    src="https://www.freevisitorcounters.com/auth.php?id=11ae215e16cbc60a533bb49f8f0e774125a10904"
    strategy="afterInteractive"
  />
  <Script
    src="https://www.freevisitorcounters.com/en/home/counter/1352841/t/5"
    strategy="afterInteractive"
  />
</div>

<<<<<<< HEAD
=======
</div>
>>>>>>> 266762454424f932741af917c6364320dd66c986
    </div>
  );
}
