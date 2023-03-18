import { getServerSession } from 'next-auth'
import Login from '../components/Login'
import { SessionProvider } from '../components/SessionProvider'
import Sidebar from '../components/Sidebar'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import '../styles/globals.css'

export const metadata = {
  title: 'Claire AI',
  description: 'An AI Chat Assistant',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              {/* sidebar */}
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <Sidebar />
              </div>

              {/* client provider - notification */}

              <div className="flex-1 bg-[#343541]">{children}</div>
              {/* sidebar */}
              {/* sidebar */}
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
