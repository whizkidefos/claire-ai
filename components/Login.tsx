'use client'
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-[#443c2c] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src='/ClaireAI-white.png'
        alt="claire ai logo"
        width={300}
        height={300}
      />
      <button onClick={() => signIn('google')}className="text-3xl font-bold text-white animate-pulse">Sign In to use ClaireAI</button>
    </div>
  )
}

export default Login;