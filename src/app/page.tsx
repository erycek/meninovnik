'use client'

import {useEffect, useState} from "react";

export default function Home() {
  const [name, setName] = useState<string>('');
  useEffect(() => {
    fetch('names.json')
      .then(response => response.json())
      .then(data => {
        const month = new Date().getMonth();
        const day = new Date().getDate();
        const name = data[month][day];
        setName(name);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
         <div className="sm:max-w-lg">
          <p className="mt-4 text-xl text-gray-500">dnes má meniny</p>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">{name}</h1>
        </div>
      </div>
    </main>
  )
}
