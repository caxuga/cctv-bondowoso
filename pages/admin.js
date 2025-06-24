'use client';
import { useState } from 'react';
import AdminPage from '@/components/AdminPage'; // Pindahkan bagian admin ke komponen terpisah

export default function AdminWrapper() {
  const [masuk, setMasuk] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'caksoega123') {
      setMasuk(true);
    } else {
      alert('Password salah!');
    }
  };

  if (!masuk) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="bg-gray-800 p-6 rounded shadow">
          <h2 className="text-lg font-bold mb-4 text-center">🔒 Login Admin</h2>
          <input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 bg-gray-700 rounded text-white"
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

  return <AdminPage />;
}
