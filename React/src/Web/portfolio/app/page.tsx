
import Link from 'next/link'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Welcome',
}
export default function Page() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
       <h1>David</h1>
       <h1>
       <Link href="/auth">Login </Link>
       </h1>
      </div>
    </main>
  )
}
