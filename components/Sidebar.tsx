'use client'

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <section className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div className="">
          {/* New Chat */}
          <NewChat />

          <div className="">
            {/* AI Model Selection */}
          </div>

          {/* Map through the ChatRows */}
        </div>
      </div>

      {session && (
        <div className="">
          <img
            src={session.user?.image!}
            alt="Profile pic"
            className="w-12 h-12 mx-auto mb-2 rounded-full cursor-pointer hover:opacity-50"
          />
          <button className="flex px-4 py-2 m-auto text-white border border-gray-700 rounded hover:bg-gray-700/70 hover:text-gray-300" onClick={() => signOut()}>Sign Out</button>
        </div>
      )}
    </section>
  )
}

export default Sidebar;
