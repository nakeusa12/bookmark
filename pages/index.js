import Link from "next/link"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>

      {/* Hero */}
      <div className="relative min-h-screen">
        <div className="relative z-20 grid h-auto max-w-6xl grid-cols-12 px-4 pb-16 mx-auto pt-36 md:pb-0 md:pt-20 md:h-screen md:px-0 md:gap-0 gap-y-10">
          <div className="flex flex-col justify-center order-2 col-span-12 mt-4 text-center md:text-left md:order-1 md:col-span-5 md:mt-0">
            <h1 className="text-4xl font-bold md:text-5xl">A Simple Bookmark Manager</h1>
            <p className="py-5 text-lg text-gray-500 md:text-xl">A clean and simple interface to organize your favourite website. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className="flex justify-center space-x-4 md:justify-start">
              <button className="px-8 py-3 font-medium text-white transition-all duration-300 bg-blue-600 rounded shadow-md hover:bg-blue-700">Get it on Chrome</button>
              <button className="px-8 py-3 font-medium transition-all duration-300 bg-gray-200 rounded shadow-md hover:bg-gray-300">Get it on Firefox</button>
            </div>
          </div>
          <div className="flex items-center justify-center order-1 col-span-12 md:justify-end md:order-2 md:col-span-7">
            <div className="h-92">
              <img src="/images/image1.png" alt="" className="object-cover w-full h-full"/>
            </div>
          </div>
        </div>
        <img src="/images/bg1.svg" className="absolute right-0 z-0 sm:bottom-60 bottom-80 md:bottom-0" alt=""/>
      </div>
    
      {/* Section2 */}
      <div className="relative min-h-full px-4 py-16 md:py-28 sm:py-20 md:px-0">
        <div className="flex flex-col items-center max-w-6xl mx-auto space-y-5">
          <h2 className="text-4xl font-semibold">Features</h2>
          <p className="w-full text-xl text-center text-gray-500 md:w-2/4">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <div className="relative z-20 max-w-6xl mx-auto mt-10">
          <ul className="grid w-full grid-cols-3 mx-auto space-x-0 space-y-6 border-b border-gray-200 sm:space-x-6 sm:space-y-0 sm:w-3/5">
            <li className="col-span-3 pb-4 text-lg font-medium text-center border-b-4 border-red-500 cursor-pointer sm:pb-8 sm:col-span-1">Simple Bookmarking</li>
            <li className="col-span-3 pb-4 text-lg font-medium text-center border-b-2 border-gray-200 cursor-pointer sm:pb-8 sm:col-span-1 ">Speedy Searching</li>
            <li className="col-span-3 pb-4 text-lg font-medium text-center border-b-2 border-gray-200 cursor-pointer sm:pb-8 sm:col-span-1">Easy Sharing</li>
          </ul>

          <div className="grid grid-cols-12 mt-20 md:gap-x-16 gap-x-0 ">
            <div className="flex items-center justify-center col-span-12 md:col-span-6">
              <div className="md:h-80 h-60">
                <img src="/images/image2.png" alt="" className="object-cover w-full h-full"/>
              </div>
            </div>
          
            <div className="flex flex-col items-center justify-center col-span-12 text-center mt-14 md:text-left md:col-span-6 md:items-start md:mt-0">
              <h1 className="text-3xl font-bold md:text-4xl">Bookmark in one click</h1>
              <p className="py-5 text-base text-gray-500 md:text-xl">
                Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
              </p>
              <button className="w-32 py-3 font-medium text-white transition-all duration-300 bg-blue-600 rounded shadow-md hover:bg-blue-700">More Info</button>
            </div>
            </div>
        </div>
        <img src="/images/bg2.svg" className="absolute left-0 z-0 w-3/5 sm:2/4 md:w-1/3 bottom-72 sm:bottom-60 md:bottom-4 " alt=""/>
      </div>
    
      {/* Section3 */}
      <div className="relative min-h-full px-4 py-16 md:py-28 sm:py-20 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-5">
            <h2 className="text-4xl font-semibold">Download the extension</h2>
            <p className="w-full text-xl text-center text-gray-500 md:w-2/4">
              We've got nore browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
            </p>
          </div>
        
          <div className="flex flex-wrap justify-center w-full mt-20 space-x-0 md:space-x-10">
            <div className="w-full rounded-md shadow-xl md:w-1/4 h-96">
              <div className="flex flex-col items-center py-10">
                  <div className="w-32 h-32">
                    <img src="/images/chrome.svg" className="object-contain w-full h-full" alt=""/>
                  </div>
                  <h4 className="mt-4 text-xl font-bold">Add to Chrome</h4>
                  <p className="mt-2 text-sm font-medium text-gray-500">Minimum version 62</p>
              </div>
              <div className="flex items-center justify-center py-6 border-t-2 border-gray-200 border-dashed">
                <button className="py-3 text-white transition-all duration-300 bg-blue-600 rounded hover:bg-blue-800 px-7">Add & Install Extention</button>
              </div>
            </div>
            <div className="w-full mt-8 rounded-md shadow-xl md:w-1/4 h-96">
              <div className="flex flex-col items-center py-10">
                  <div className="w-32 h-32">
                    <img src="/images/firefox.svg" className="object-contain w-full h-full" alt=""/>
                  </div>
                  <h4 className="mt-4 text-xl font-bold">Add to Firefox</h4>
                  <p className="mt-2 text-sm font-medium text-gray-500">Minimum version 55</p>
              </div>
              <div className="flex items-center justify-center py-6 border-t-2 border-gray-200 border-dashed">
                <button className="py-3 text-white transition-all duration-300 bg-blue-600 rounded hover:bg-blue-800 px-7">Add & Install Extention</button>
              </div>
            </div>
            <div className="w-full mt-8 rounded-md shadow-xl md:mt-16 md:w-1/4 h-96">
              <div className="flex flex-col items-center py-10">
                  <div className="w-32 h-32">
                    <img src="/images/opera.svg" className="object-contain w-full h-full" alt=""/>
                  </div>
                  <h4 className="mt-4 text-xl font-bold">Add to Opera</h4>
                  <p className="mt-2 text-sm font-medium text-gray-500">Minimum version 46</p>
              </div>
              <div className="flex items-center justify-center py-6 border-t-2 border-gray-200 border-dashed">
                <button className="py-3 text-white transition-all duration-300 bg-blue-600 rounded hover:bg-blue-800 px-7">Add & Install Extention</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {/* Section4 */}
      <div class="max-w-6xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-5 mb-14 md:mb-0">
            <h2 className="text-4xl text-center font-semi bold">Frequently Asked Questions</h2>
            <p className="w-full text-xl text-center text-gray-500 md:w-2/4">
              Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
            </p>
          </div>
          <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <dl class="mt-6 space-y-6 divide-y divide-gray-200 border-t border-gray-200">
              <div class="pt-6">
                <dt class="text-lg">
                  <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                    <span class="font-medium text-gray-900">
                      What is Bookmark?
                    </span>
                    <span class="ml-6 h-7 flex items-center">
                      <svg class="rotate-0 h-6 w-6 transform text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd class="mt-2 pr-12" id="faq-0">
                  <p class="text-base text-gray-500">
                    I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </p>
                </dd>
              </div>
            </dl>
            <dl class="mt-6 space-y-6 divide-y divide-gray-200 border-t border-gray-200">
              <div class="pt-6">
                <dt class="text-lg">
                  <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                    <span class="font-medium text-gray-900">
                      What is Bookmark?
                    </span>
                    <span class="ml-6 h-7 flex items-center">
                      <svg class="rotate-0 h-6 w-6 transform text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd class="mt-2 pr-12" id="faq-0">
                  <p class="text-base text-gray-500">
                    I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </p>
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex justify-center w-full mt-10 mb-6">
            <button className="px-6 py-2 text-white transition-all duration-300 bg-blue-600 rounded shadow-lg hover:bg-blue-800">More Info</button>
          </div>
        </div>


      {/* Section5 */}
      <div className="w-full px-4 bg-blue-600 md:px-0">
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto h-80">
          <h5 className="text-sm font-medium tracking-widest text-white">35.000+ ALREADY JOINED</h5>
          <h2 className="w-full my-5 text-4xl font-semibold text-center text-white md:w-2/5">Stay up-to-date with what we're doing</h2>
          <form action="" className="flex mt-4 space-x-3">
            <input type="text" placeholder="Enter your email address" className="px-3 rounded focus:ring-2 focus:outline-none focus:ring-red-300" />
            <button className="px-6 py-2 text-white transition-all duration-300 bg-red-500 rounded cursor-pointer hover:bg-red-600">Contact Us</button>
          </form>
        </div>
      </div>
    

      {/* Footer */}
      <div className="w-full bg-gray-800">
        <div className="flex flex-col items-center justify-between max-w-6xl py-6 mx-auto md:flex-row">
          <div className="flex flex-col items-center md:flex-row">
              <div className="flex items-center space-x-4 ">
                <img src="/logo.svg" className="w-8 h-8" alt="logo"/>
                <h2 className="text-2xl font-bold text-white">BookMark</h2>
              </div>
              <p className="my-5 ml-6 font-medium text-center text-white md:my-0">@ 2021 Bookmark. All right reserved. Created by <a href="sfulnakeusa.space" className="text-red-500 hover:underline">Nakeusa</a></p>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="!#">
              <img src="/images/facebook.svg" className="w-6 h-6 text-white cursor-pointer" alt=""/>
            </Link>
            <Link href="!#">
              <img src="/images/twitter.svg" className="w-6 h-6 text-white cursor-pointer" alt=""/>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
