import Head from 'next/head'
import { DesktopComputerIcon, HeartIcon, CameraIcon, CodeIcon, CubeTransparentIcon, PencilIcon } from '@heroicons/react/outline'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Josh Illichmann - Designer</title>
      </Head>

      <main>
        <div className="relative bg-white py-4 sm:py-8">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="relative sm:py-16 lg:py-0">
              <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                <div className="absolute inset-y-0 right-1/2 w-full bg-gradient-to-br from-pink-600 via-pink-900 to-blue-500 rounded-r-3xl lg:right-72"></div>
                <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                  <defs>
                    <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" className="text-blue-500" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                <div className="relative pt-80 pb-10 rounded-2xl shadow-xl overflow-hidden">
                  <img className="absolute inset-0 h-full w-full object-cover" src="../josh-cover.JPG" alt="" />
                  <div className="absolute inset-0"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-600 via-indigo-900 to-blue-500 opacity-60"></div>
                  <div className="relative px-8">
                    <blockquote className="mt-8">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative">
                        Something I would say that sounds awesome
                        </p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-indigo-200">Josh Illichmann</p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Hello! I'm Josh Illichmann, a designer from Melbourne, Australia. Looking to make an impact in our world.
                </h2>
                <div className="mt-6 text-gray-500 space-y-6">
                  <p className="text-lg">
                  As I'm learning and challenging myself by creating, I am always open for new opportunities. If you want to challenge me too, get in touch and we can work on  together.
                  </p>
                  <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="services">
          <div className="relative bg-white py-4 sm:py-18 lg:py-16">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Our Services</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">What we have to offer you.</p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                            <DesktopComputerIcon className="h-6 w-6 text-white" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">UX/UI</h3>
                        <p className="mt-5 text-base text-gray-500">
                        Landing Pages, User Flow, Wireframing, Prototyping, Web App
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                            <HeartIcon className="h-6 w-6 text-white" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Branding &amp; Strategy</h3>
                        <p className="mt-5 text-base text-gray-500">
                        Visual Identity, Marketing Materials, Communication Strategy
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                            <CodeIcon className="h-6 w-6 text-white" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Development</h3>
                        <p className="mt-5 text-base text-gray-500">
                        HTML/CSS, NextJS, WordPress, E-commerce, Responsive &amp; Accessible Web 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-yellow-700 rounded-md shadow-lg">
                            <PencilIcon className="h-6 w-6 text-white" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Graphic Design</h3>
                        <p className="mt-5 text-base text-gray-500">
                        Digital &amp; Print Design, Posters, Streamer Graphics, Podcasts & Social Media
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-blue-300 rounded-md shadow-lg">
                            <CameraIcon className="h-6 w-6 text-white" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Photography</h3>
                        <p className="mt-5 text-base text-gray-500">
                        Products, Corporate, Architecture &amp; Travel
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-gray-700 rounded-md shadow-lg">
                            <CubeTransparentIcon className="h-6 w-6 text-white" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Motion</h3>
                        <p className="mt-5 text-base text-gray-500">
                        2D Animation, UI Motion &amp; Video Production
                        </p>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="work">
        <div className="relative bg-white py-4 sm:py-18 lg:py-16">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Our Work</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">What we have been working on</p>
              <div className="mt-12">
                <div className="rounded-md shadow-md bg-white flex flex-row">
                  <div className="px-10 py-10 lg:h-80 text-left w-2/4 flex-shrink-0 flex-grow-0">
                    <div className="h-full box-border flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-semibold tracking-wider">Designing for Kalani Collective</h3>
                        <p className="mt-4 text-gray-500">Logo Design, Branding, Web Design &amp; Development</p>
                      </div>
                      <div>
                        <button type="button" className="w-auto inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center px-5 bg-gradient-to-tr from-indigo-900 to-fuchsia-600  relative overflow-hidden bg-cover w-2/4 rounded-r-lg">
                    <img className="h-52" src="../images/kalani-flower.png" alt="Kalani Log" />
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <div className="rounded-md shadow-md bg-white flex flex-row-reverse">
                  <div className="px-10 py-10 lg:h-80 text-left w-2/4 flex-shrink-0 flex-grow-0">
                    <div className="h-full box-border flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-semibold tracking-wider">Franklin Gothic</h3>
                        <p className="mt-4 text-gray-500">Informational Brochure design for Type Foundary on the history and use of Franklin Gothic</p>
                      </div>
                      <div>
                        <button type="button" className="w-auto inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-red-500 hover:bg-red-700 focus:outline-none">
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center px-5 bg-gradient-to-bl from-yellow-400 to-red-600 relative overflow-hidden bg-cover w-2/4 rounded-l-lg">
                  </div>
                </div>
              </div>
               <div className="mt-12">
               <div className="rounded-md shadow-md bg-white flex flex-row">
                 <div className="px-10 py-10 lg:h-80 text-left w-2/4 flex-shrink-0 flex-grow-0">
                   <div className="h-full box-border flex flex-col justify-between">
                     <div>
                       <h3 className="text-3xl font-semibold tracking-wider">Travel Iceland</h3>
                       <p className="mt-4 text-gray-500">Website Design and Development.</p>
                     </div>
                     <div>
                       <button type="button" className="w-auto inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-900 hover:bg-blue-700 focus:outline-none">
                         View Project
                       </button>
                     </div>
                   </div>
                 </div>
                 <div className="flex justify-center items-center px-5 bg-gradient-to-tr from-blue-900 to-green-600 relative overflow-hidden bg-cover w-2/4 rounded-r-lg">
                 </div>
               </div>
             </div>
          </div>
        </div>
        </section>
      </main>

    </div>
  )
}
