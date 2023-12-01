'use client';

import { useContext } from 'react';
import ContextModal from '@/context/ContextModal';

export default function Home() {
  const { user } = useContext(ContextModal);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-200">
      {user}
    </main>
  );
}
