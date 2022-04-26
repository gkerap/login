import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="lg:flex">
        <div className="hidden lg:flex items-center justify-center bg-[#385DC5] flex-1 h-screen">
          <div className="w-full h-full  text-xl bg-cover bg-center bg-no-repeat bg-[url('/Splash.png')]"></div>
        </div>
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="mt-2 py-6 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-6 xl:px-24 xl:max-w-2xl">
            <h2
              className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
            >
              Sign in
            </h2>
            <p className=" mt-4 text-indigo-400">
              Please kindly sign in with your email and password
            </p>
            <div className="mt-12">
              <form>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Address
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type=""
                    placeholder="george@gmail.com"
                  />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                    <div>
                      <a
                        className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type=""
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mt-10">
                  <button
                    className="bg-indigo-500 text-gray-100 p-4 w-full rounded tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg"
                  >
                    Log In
                  </button>
                </div>
              </form>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  className="py-2.5 flex space-x-4 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-[#385DC5] hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-blue-600 dark:hover:text-blue-500 "
                >
                  <svg
                    className="
                  mr-4"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#EA4335 "
                      d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                    />
                    <path
                      fill="#34A853"
                      d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                    />
                    <path
                      fill="#4A90E2"
                      d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                    />
                  </svg>
                  Continue with Google
                </button>
                <button
                  type="button"
                  className="py-2.5 px-4 flex mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-[#385DC5] hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-blue-600 dark:hover:text-blue-500 "
                >
                  <svg
                    className="
                  mr-4"
                    width="18px"
                    height="18px"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Microsoft"
                    role="img"
                    viewBox="0 0 512 512"
                  >
                    <rect width="512" height="512" rx="15%" fill="#fff" />
                    <path d="M75 75v171h171v-171z" fill="#f25022" />
                    <path d="M266 75v171h171v-171z" fill="#7fba00" />
                    <path d="M75 266v171h171v-171z" fill="#00a4ef" />
                    <path d="M266 266v171h171v-171z" fill="#ffb900" />
                  </svg>
                  Continue with Microsoft
                </button>
              </div>
              {/* <div className="mt-8 text-sm font-display font-semibold text-gray-700 text-center">
                            Dont have an account ? <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</a>
                        </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <footer classNameName={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span classNameName={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
