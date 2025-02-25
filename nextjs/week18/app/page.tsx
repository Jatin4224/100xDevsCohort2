"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-lg w-screen h-screen flex items-center justify-center">
        Todo App
        <br />
        <Link className="text-md border m-2" href="/signin">
          Signin
        </Link>
        <br />
        <Link className="text-md border m-2" href="/signup">
          SignUP
        </Link>
      </div>
    </div>
  );
}
