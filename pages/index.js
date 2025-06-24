import Link from 'next/link';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { ref, push, onValue } from 'firebase/database';

const cctvList = [
  { id: 1, name: 'MPM KOTAKULON', monitor: 11, connkey: 9360 },
  { id: 2, name: 'BANK JATIM', monitor: 4, connkey: 2360 },
  { id: 3, name: 'PENDOPO', monitor: 3, connkey: 1360 },
  { id: 4, name: 'PASAR INDUK', monitor: 22, connkey: 18360 },
  { id: 5, name: 'YIMA BARAT', monitor: 20, connkey: 16360 },
  { id: 6, name: 'BATAAN', monitor: 6, connkey: 4360 },
];

export default function Halaman1() {
  const [messages, setMessages] = useState([]);
  const [nama, setNama] = useState('');
  const [pesan, setPesan] = useState('');

  useEffect(() => {
    const chatRef = ref(db, 'guestchat');
    onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      const msgArray = data
        ? Object.entries(data).map(([id, val]) => ({ id, ...val }))
        : [];
      setMessages(msgArray.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)));
    });
  }, []);

  const kirimPesan = async () => {
    if (!nama.trim() || !pesan.trim()) return;
    const chatRef = ref(db, 'guestchat');
    await push(chatRef, {
      nama,
      text: pesan,
      timestamp: new Date().toISOString(),
    });
    setPesan('');
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-xl font-bold mb-2 text-center">CCTV BONDOWOSO</h1>
      <h2 className="text-md mb-4 text-center">Halaman 1 - Monitor 1 s/d 6</h2>
      <hr className="border-t border-gray-700 mb-6 w-1/2 mx-auto" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
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

      {/* Tombol ke Halaman 2 */}
      <div className="flex justify-center mt-6">
        <Link href="/halaman-2">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
            Halaman 2 ►
          </button>
        </Link>
      </div>
<hr className="border-t border-gray-700 mb-6 w-1/2 mx-auto" />

 {/* Guest Chat Box */}
      <div className="bg-gray-900 p-4 rounded-lg max-w-2xl mx-auto mb-8">
        <h2 className="text-lg font-bold mb-2 text-center">💬 Live Chat</h2>
        <div className="h-48 overflow-y-auto mb-2 border border-gray-700 rounded p-2 bg-black text-sm">
          {messages.map((msg) => (
            <div key={msg.id} className="mb-2">
              <span className="font-semibold text-blue-400">{msg.nama}</span>: {msg.text}
              <div className="text-xs text-gray-500">{new Date(msg.timestamp).toLocaleString()}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama Anda"
            className="w-full px-2 py-1 rounded bg-gray-800 border border-gray-700 text-white"
          />
          <div className="flex gap-2">
            <input
              type="text"
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Tulis pesan..."
              className="flex-1 px-2 py-1 rounded bg-gray-800 border border-gray-700 text-white"
            />
            <button
              onClick={kirimPesan}
              className="px-4 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
{/* Guest Chat Box */}
    </div>
  );
}