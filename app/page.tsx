import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music, Play, Users, Headphones } from "lucide-react"
import Link from "next/link"
import { Appbar } from "./components/Appbar"
import { Redirect } from "./components/Redirect"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Appbar/>
      <Redirect/>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-purple-500/20 backdrop-blur-sm">
       
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Let Your Fans Drive the Beat
                  </h1>

                <p className="mx-auto max-w-[700px] text-purple-100/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  StreamTune: Where creators and fans collaborate to create the ultimate music streaming experience.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2 justify-center">
                  <Link   className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 text-sm font-medium text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 disabled:pointer-events-none disabled:opacity-50" href="/api/auth/signin">
                    Get Started 
                  </Link>
                </form>
                <p className="text-xs text-purple-200/60">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-purple-300 transition-colors" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-800 via-purple-800/20 to-slate-800 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300 p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-500/20 backdrop-blur-sm">
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Fan-Driven Playlists</h3>
                <p className="text-purple-200/70">Let your audience choose the tracks and shape your stream s soundtrack</p>
              </div>
              <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300 p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-500/20 backdrop-blur-sm">
                <div className="p-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 mb-4 group-hover:shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Interactive Streaming</h3>
                <p className="text-purple-200/70">Engage with your audience in real-time through chat and music requests</p>
              </div>
              <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300 p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-500/20 backdrop-blur-sm">
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <Headphones className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Creator Tools</h3>
                <p className="text-purple-200/70">Powerful tools to manage your streams and grow your audience.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-indigo-900/50 to-slate-900 relative">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                alt="StreamTune App Interface"
                className="mx-auto aspect-video overflow-hidden rounded-2xl object-cover object-center sm:w-full lg:order-last border border-purple-500/20 shadow-2xl shadow-purple-500/10"
                height="310"
                src="/placeholder.svg?height=310&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    Revolutionize Your Streams
                  </h2>
                  <p className="max-w-[600px] text-purple-100/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Give your audience the power to shape your music. Create unforgettable streaming experiences with StreamTune.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 text-sm font-medium text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 disabled:pointer-events-none disabled:opacity-50"
                    href="/api/auth/signin"
                  >
                    Start Streaming
                  </Link>
                  <Link
                    className="inline-flex h-12 items-center justify-center rounded-full border border-purple-500/30 bg-purple-900/20 backdrop-blur-sm px-8 text-sm font-medium text-purple-100 shadow-sm transition-all duration-300 hover:bg-purple-800/30 hover:border-purple-400/50 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-purple-500/20 bg-gradient-to-r from-slate-900 to-purple-900/20">
        <p className="text-xs text-purple-200/60">© 2023 StreamTune. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-purple-200/60 hover:text-purple-200 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-purple-200/60 hover:text-purple-200 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}