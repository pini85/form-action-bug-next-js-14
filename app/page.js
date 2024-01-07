"use client";
import { useState } from "react";
import { myAction } from "@/actions/actions";
export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <main>
      <form action={myAction}>
        <input type="text" name="search" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
      {show && (
        <form action={myAction}>
          <input type="text" name="search" placeholder="Search" />
          <button>search</button>
        </form>
      )}
      <button onClick={() => setShow(!show)}>Show</button>
    </main>
  );
}
