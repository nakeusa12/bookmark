import Link from "next/link"

const Footer = () => {
  return (
    <div className="w-full bg-gray-800">
      <div className="flex flex-col items-center justify-between max-w-6xl py-10 mx-auto md:flex-row">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex items-center space-x-4 ">
            <img src="/logo.svg" className="w-8 h-8" alt="logo" />
            <h2 className="text-xl font-semibold text-white">BookMark</h2>
          </div>
        </div>
        <div className="md:px-0 px-20">
            <p className="my-5 ml-6 font-medium text-center text-white md:my-0">
              @ 2021 Bookmark. All right reserved. Created by{" "}
              <a
                href="sfulnakeusa.space"
                className="text-red-500 hover:underline"
              >
                Nakeusa
              </a>
            </p>
          </div>
        <div className="flex items-center space-x-6">
          <Link href="https://www.facebook.com/saifulnakeusa/">
            <a target="blank">
                <img
                src="/images/facebook.svg"
                className="w-6 h-6 text-white cursor-pointer"
                alt=""
                />
            </a>
          </Link>
          <Link href="https://twitter.com/nakeusaa">
            <a target="blank">
                <img
                src="/images/twitter.svg"
                className="w-6 h-6 text-white cursor-pointer"
                alt=""
                />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
