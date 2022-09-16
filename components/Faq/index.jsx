import { useState } from "react";

const datas = [
    {
        question: "What is Bookmark ?",
        answer: "In the context of the World Wide Web, a bookmark is a Uniform Resource Identifier that is stored for later retrieval in any of various storage formats. All modern web browsers include bookmark features."
    },
    {
        question: "Why create a bookmark ?",
        answer: "A bookmark is handy when you find a web page that you want to remember and be able to look at another day. When you bookmark a web page, you are creating a shortcut for quick access to that web page. You can access that bookmark at any time to view the web page again without having to search the Internet to find it."
    },
    {
        question: "How do I add a new browser ?",
        answer: "Open the start menu and click 'All Programs' to open the menu of programs installed on your computer. Newly installed software is usually highlighted in the Windows start menu. Select your new Internet browser to start the program. Set your new Internet browser as your default browser."
    },
    {
        question: "Is there a mobile app ?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
        question: "What about other Chromium browsers ?",
        answer: "Chrome, Firefox, Opera, Brave, etc."
    },
]

const Faq = () => {
    const [selected, setSelected] = useState(null)

    const toggle = i => {
        if(i === selected){
            setSelected(null)
        }else{
          setSelected(i)

        }
    }

    return ( 
        <>
        {datas.map((data, index) => (
            <div key={index} className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                <dl className="mt-6 space-y-6 divide-y divide-gray-200 border-t border-gray-200">
                <div className="pt-6">
                    <dt className="text-lg">
                    <button type="button" className="focus:outline-none text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false"  selected={selected === index} onClick={() => toggle(index)}>
                        <span className="font-medium text-gray-900">
                        {data.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                            {selected === index ? 
                            <svg className="h-6 w-6 transform text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                            :
                            <svg className="h-6 w-6 transform text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                            }
                        </span>
                    </button>
                    </dt>
                    <dd className={`mt-5 pr-12 ${selected === index ? "block" : "hidden"}`} id="faq-0" >
                        <p className="text-base text-gray-500">
                        {data.answer}
                        </p>
                    </dd>
                </div>
                </dl>
            </div>
        ))}
        </>
     );
}
 
export default Faq;