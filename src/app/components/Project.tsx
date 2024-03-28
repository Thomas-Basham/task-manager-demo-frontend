import React from "react";
import Link from "next/link";
export default function Project() {
  return (
    <div className="text-cyan-300 border border-cyan-200 p-4 rounded-sm mx-12 mb-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Title</h1>
        <p>Timestamp</p>
      </div>
      <p className="text-cyan-200 m-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        natus omnis vitae ducimus at, voluptates quo non iste placeat quos
        consequatur praesentium adipisci molestias voluptas inventore
        accusantium rerum facilis excepturi.
      </p>
      <Link href={'/project/43'} className="border border-cyan-400 text-cyan-400 px-12 py-1 hover:text-cyan-300 hover:bg-cyan-700 rounded-md">
        VIEW TASKS
      </Link>
    </div>
  );
}
