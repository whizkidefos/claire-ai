'use client'

import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "../firebase";

const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();
  
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'), {
        userId: session?.user?.email!,
        createdAt: serverTimestamp()
      }
    );

    router.push(`/chat/${doc.id}`);
  }

  return (
    <div onClick={createNewChat} className="border border-gray-700 chatRow">
        <PlusIcon className="w-4 h-4" />
        <p>New Chat</p>
    </div>
  )
}

export default NewChat;