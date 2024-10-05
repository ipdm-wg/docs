import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Github, Globe, BookOpen, Users } from "lucide-react"

export default function AdditionalLandingSections() {
  return (
    <>
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Join the IPDM Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Github className="mr-2" />
                  GitHub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Contribute to the project, report issues, or explore the codebase.</p>
                <Button variant="outline">
                  Visit Repository <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2" />
                  Forum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Discuss ideas, ask questions, and connect with other IPDM enthusiasts.</p>
                <Button variant="outline">
                  Join Discussion <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2" />
                  Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Comprehensive guides, API references, and tutorials for developers.</p>
                <Button variant="outline">
                  Read Docs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2" />
                  Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Join working ours, workshops, and conferences about IPDM.</p>
                <Button variant="outline">
                  View Calendar <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Project Roadmap
          </h2>
          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Phase 1: Research and Foundation <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Current</span></h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on September 11, 2024</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Implementation in rust, basic networking, and working group formation.</p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Phase 2: Enhanced Functionality and use cases</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Expected release: Q1 2025</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Advanced compression, and initial blockchain integrations. First release of Solana Implementation</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Phase 3: Ecosystem Growth</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Expected release: Q3 2025</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Developer tools, extensive documentation, and community-driven enhancements.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Get Started with IPDM
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl mb-8">Ready to dive in? Follow these steps to start using IPDM in your projects:</p>
            <ol className="list-decimal list-inside text-left space-y-4">
              <li>Install the IPDM client using npm or yarn</li>
              <li>Configure your network settings</li>
              <li>Initialize your IPDM node</li>
              <li>Start building your decentralized application!</li>
            </ol>
            <Button className="mt-8">
              Quick Start Guide <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section> */}
    </>
  )
}