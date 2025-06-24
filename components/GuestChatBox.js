'use client';
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase'; // Pastikan file firebase.js sudah diperbaiki
import { ref, push, onValue } from 'firebase/database';

export default function ChatBox() {
  const [nama, setNama] = useState('');
  const [pesan, setPesan] = useState('');
  const [chatList, setChatList] = useState([]);

  const kirimPesan = async (e) => {
    e.preventDefault();
    if (!pesan.trim() || !nama.trim()) return;

    const chatRef = ref(db, 'pesan');
    const newChat = {
      nama,
      pesan,
      timestamp: new Date().toISOString(), // ⏰ Timestamp
    };
    await push(chatRef, newChat);
    setPesan('');
  };

  useEffect(() => {
    const chatRef = ref(db, 'pesan');
    onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      const list = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
      // Urutkan berdasarkan waktu terbaru ke bawah
      setChatList(list.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)));
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white p-4 rounded mt-8 max-w-2xl mx-auto">
      <h3 className="text-lg font-bold mb-2 text-center">💬 Guest Chat</h3>
      <div className="max-h-64 overflow-y-auto border border-gray-700 p-2 mb-4 rounded bg-black">
        {chatList.map((item) => (
          <div key={item.id} className="mb-2">
            <span className="font-semibold text-blue-400">{item.nama}</span>: {item.pesan}
            <div className="text-xs text-gray-500">{new Date(item.timestamp).toLocaleString()}</div>
          </div>
        ))}
      </div>
      <form onSubmit={kirimPesan} className="space-y-2">
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
          required
        />
        <input
          type="text"
          placeholder="Tulis pesan..."
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
          required
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded">
          Kirim
        </button>
      </form>
    </div>
  );
}
