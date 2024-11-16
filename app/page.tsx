import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music, Play, Users, Headphones } from "lucide-react"
import Link from "next/link"
import { Appbar } from "./components/Appbar"
import { Redirect } from "./components/Redirect"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Appbar/>
      <Redirect/>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
       
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Let Your Fans Drive the Beat
                  </h1>

                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  StreamTune: Where creators and fans collaborate to create the ultimate music streaming experience.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2 justify-center">
                  <Button  className="bg-purple-600 text-white hover:bg-purple-700">
                    Get Started 
                  </Button>
                </form>
                <p className="text-xs text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-purple-400" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Play className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold mb-2">Fan-Driven Playlists</h3>
                <p className="text-gray-400">Let your audience choose the tracks and shape your stream s soundtrack</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold mb-2">Interactive Streaming</h3>
                <p className="text-gray-400">Engage with your audience in real-time through chat and music requests</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Headphones className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold mb-2">Creator Tools</h3>
                <p className="text-gray-400">Powerful tools to manage your streams and grow your audience.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                alt="StreamTune App Interface"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg?height=310&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Revolutionize Your Streams
                  </h2>
                  <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Give your audience the power to shape your music. Create unforgettable streaming experiences with StreamTune.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Start Streaming
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 bg-gray-800 px-8 text-sm font-medium text-gray-100 shadow-sm transition-colors hover:bg-gray-700 hover:text-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2023 StreamTune. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-100" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-100" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}