
import Image from "next/image";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function NavBar() {
    const pathname = usePathname()
    const { data: session } = useSession()
    
    const linkStyle = "hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
    const navLinks = [
        {id: 0, path:"/about-me", name:"About me"},
        {id: 1, path:"/shop", name:"Shopping"},
        {id: 2, path:"/contact", name:"Contact"}
    ]

    console.log(session?.user?.email);

  return (
    <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                {/* <Image className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" width={32} height={32}/> */}
                </div>
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path
                
                        return (
                            <Link
                                className={isActive ? `bg-gray-900 text-white ${linkStyle}`:`text-gray-300  ${linkStyle}` }
                                href={link.path}
                                key={link.id}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                    </div>
                </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type="button" className="relative rounded-full bg-gray-800 p-1 text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Settings</span>
                </button>

                <div className="relative ml-3">
                <div>
                    <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    {/* <Image className="h-8 w-8 rounded-full" width={32} src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/> */}
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </nav>
  )
}