import { useState } from 'react';

export default function CheckMonitors() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    setLoading(true);
    const monitorCount = 15; // Ganti sesuai jumlah maksimal monitor
    const checks = [];

    for (let i = 1; i <= monitorCount; i++) {
      const url = `https://cctv.bondowosokab.go.id/cgi-bin/nph-zms?scale=100&mode=jpeg&maxfps=2&monitor=${i}&user=view&pass=K0minfo`;
      try {
        const res = await fetch(url, { method: 'HEAD' });
        checks.push({ id: i, status: res.ok });
      } catch (error) {
        checks.push({ id: i, status: false });
      }
    }

    setResults(checks);
    setLoading(false);
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Cek Status Monitor CCTV</h1>
      <button
        onClick={handleCheck}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Memeriksa...' : 'Mulai Cek Monitor (1-15)'}
      </button>

      {results.length > 0 && (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {results.map((res) => (
            <div
              key={res.id}
              className={`p-3 border rounded text-center ${
                res.status ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              Monitor #{res.id} <br />
              {res.status ? '✅ Aktif' : '❌ Tidak Tampil'}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}