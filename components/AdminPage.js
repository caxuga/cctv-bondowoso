'use client';
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { ref, onValue, remove } from 'firebase/database';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [chats, setChats] = useState([]);

  const correctPassword = 'cakadmin123'; // Ganti password sesuai kebutuhan

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Password salah!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
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
      <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
        <div className="bg-gray-800 p-6 rounded shadow-lg w-full max-w-sm">
          <h2 className="text-lg font-bold mb-4 text-center">🔒 Admin Login</h2>
          <input
            type="password"
            placeholder="Masukkan Password Admin"
            className="w-full mb-4 p-2 rounded bg-gray-700 border border-gray-600 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">🛠️ Admin Chat Manager</h1>
        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm">
          Logout
        </button>
      </div>

      {chats.length === 0 ? (
        <p>Belum ada pesan.</p>
      ) : (
        <div className="space-y-4">
          {chats.map((item) => (
            <div key={item.id} className="bg-gray-800 p-3 rounded border border-gray-700">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-blue-400 font-semibold">{item.nama}</p>
                  <p>{item.pesan}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(item.timestamp).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
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
