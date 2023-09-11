"use client"
import NavBar from "@/components/modules/nav-bar"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
 
export default function ContainerLayout({
    children, session
  }: {
    children: React.ReactNode,
    session: Session
  }) {
    return <SessionProvider session={session}>
        <section><NavBar /></section>
        <section>{children}</section>
        <section className="fixed bottom-0">Copyright of David @2023</section>
    </SessionProvider>
  }