// pages/admin.js
'use client';
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { ref, onValue, remove } from 'firebase/database';

export default function AdminChat() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [chats, setChats] = useState([]);

  const correctPassword = 'cakadmin123'; // Ganti sesuai keinginan

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Password salah!');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const chatRef = ref(db, 'guestchat');
      onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const list = Object.entries(data).map(([id, val]) => ({ id, ...val }));
          setChats(list.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)));
        } else {
          setChats([]);
        }
      });
    }
  }, [isAuthenticated]);

  const handleDelete = async (id) => {
    if (confirm('Yakin ingin menghapus pesan ini?')) {
      const msgRef = ref(db, `guestchat/${id}`);
      await remove(msgRef);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="p-6 bg-gray-900 rounded shadow-md w-full max-w-sm">
          <h1 className="text-lg font-bold mb-4 text-center">🔐 Admin Login</h1>
          <input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded mb-4 text-white"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
          >
            Masuk
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-xl font-bold mb-4 text-center">🛠️ Admin Chat Manager</h1>
      {chats.length === 0 ? (
        <p className="text-center text-gray-400">Belum ada pesan.</p>
      ) : (
        <div className="max-w-2xl mx-auto space-y-4">
          {chats.map((chat) => (
            <div key={chat.id} className="bg-gray-800 p-3 rounded shadow border border-gray-600">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-blue-400">{chat.nama}</p>
                  <p className="text-sm text-gray-200">{chat.pesan}</p>
                  <p className="text-xs text-gray-500">{new Date(chat.timestamp).toLocaleString()}</p>
                </div>
                <button
                  onClick={() => handleDelete(chat.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
