import Link from "next/link"

const NotFound = () => {
    return ( 
        <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 text-center bg-gray-50 md:px-0">
           <img src="/images/soon.svg" className="w-full sm:w-1/4 md:w-2/5" alt=""/>
           <h4 className="mt-12 text-3xl font-semibold">The page is under construction</h4>
           <Link href="/">
            <button className="px-6 py-2 mt-10 text-white bg-blue-600 rounded hover:bg-blue-700">Back to Home</button>
           </Link>
        </div>
     );
}
 
export default NotFound;