"use client";
import Link from "next/link";
import React from "react";

import { useState } from "react";
export default function Header() {
  const [username, setUsername] = useState("test user");

  return (
    <header>
      <nav className="p-5 border border-cyan-600 flex justify-between items-center">
        <Link href={"/"}>
        <h1 className="text-3xl text-cyan-100">Task Manager Demo </h1>
        </Link>
        <p className="text-cyan-100">HELLO, {username} </p>
      </nav>
    </header>
  );
}
