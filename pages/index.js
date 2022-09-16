import Card from "../components/Card"
import Faq from "../components/Faq"
import Layout from "../components/Layout"
import Button from "../components/Molucole/Button"
import Title from "../components/Title"
import { Player } from '@lottiefiles/react-lottie-player';

export default function Home() {
  return (
    <Layout>

      {/* Hero */}
      <div className="relative min-h-screen">
        <div className="relative z-20 grid h-auto max-w-7xl grid-cols-12 px-4 sm:px-6 mx-auto md:pb-0 md:px-0 md:gap-0 gap-y-10 md:h-[calc(100vh_-_6rem)]">
          <div className="flex flex-col justify-center order-2 col-span-12 mt-4 text-center md:text-left md:order-1 md:col-span-5 md:mt-0">
            <h1 className="text-4xl font-bold md:text-5xl leading-10">A Simple Bookmark Manager</h1>
            <p className="py-10 text-lg text-gray-500 md:text-xl leading-9">A clean and simple interface to organize your favourite website. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className="flex justify-center space-x-4 md:justify-start">
              <button className="px-8 py-4 font-medium text-white transition-all duration-300 bg-main-primary rounded shadow-md hover:bg-indigo-500">Get it on Chrome</button>
              <button className="px-8 py-4 font-medium transition-all duration-300 bg-gray-200 rounded shadow-md hover:bg-gray-300">Get it on Firefox</button>
            </div>
          </div>
          <div className="flex items-center justify-center order-1 col-span-12 md:justify-end md:order-2 md:col-span-7">
              <Player autoplay loop src="/lottie/hero.json" />
          </div>
        </div>
        <img src="/images/bg1.svg" className="absolute right-0 z-0 sm:bottom-60 bottom-80 md:bottom-0" alt=""/>
      </div>
    
      {/* Section2 */}
      <div className="relative min-h-full px-4 py-16 md:py-28 sm:py-20 md:px-0">
        <div className="flex flex-col items-center max-w-6xl mx-auto space-y-5">
          <Title title="Features" subtitle="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go." />
        </div>
        <div className="relative z-20 max-w-6xl mx-auto mt-10">
          <ul className="grid w-full grid-cols-3 mx-auto space-x-0 space-y-6 border-b-2 border-gray-200 sm:space-x-6 sm:space-y-0 sm:w-3/5">
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
              <button className="w-32 py-3 font-medium text-white transition-all duration-300 bg-main-primary rounded shadow-md hover:bg-indigo-500">More Info</button>
            </div>
            </div>
        </div>
        <img src="/images/bg2.svg" className="absolute left-0 z-0 w-3/5 sm:2/4 md:w-1/3 bottom-72 sm:bottom-60 md:bottom-4 " alt=""/>
      </div>
    
      {/* Section3 */}
      <div className="relative min-h-full px-4 py-16 md:py-28 sm:py-20 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-5">
            <Title title="Download the extension" subtitle="We've got nore browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize." />
          </div>
        
          <div className="flex flex-wrap justify-center w-full mt-20 space-x-0 md:space-x-10">
            <Card name="Add to Chrome" image="/images/chrome.svg" version="62" />
            <Card name="Add to Firefox" image="/images/firefox.svg" version="55" marginTop="mt-8" />
            <Card name="Add to Opera" image="/images/opera.svg" version="46" marginTop="mt-8" marginTopD="mt-16" />
          </div>
        </div>
      </div>
    
      {/* Section4 */}
        <div className="max-w-6xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-5 mb-14 md:mb-0">
            <Title title="Frequently Asked Questions" subtitle=" Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us." />
          </div>
          <Faq />

          <div className="flex justify-center w-full mt-10 mb-6">
            <Button bgColor="bg-main-primary" bgColorHover="bg-blue-800" name="More Info" />
          </div>
        </div>


      {/* Section5 */}
      <div className="w-full px-4 bg-main-primary md:px-0">
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto h-80">
          <h5 className="text-sm font-medium tracking-widest text-white">35.000+ ALREADY JOINED</h5>
          <h2 className="w-full my-5 text-4xl font-semibold text-center text-white md:w-2/5">Stay up-to-date with what we're doing</h2>
          <form action="" className="flex mt-4 space-x-3">
            <input type="text" placeholder="Enter your email address" className="px-3 rounded focus:ring-2 focus:outline-none focus:ring-red-300" />
            <Button bgColorHover="bg-red-600" bgColor="bg-red-500" name="Contact Us" />
          </form>
        </div>
      </div>  

    </Layout>
  )
}
